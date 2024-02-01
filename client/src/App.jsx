import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo-with-title.svg";
import { CheckIcon, XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [value, updateValue] = useState("");
  const [name, updateName] = useState(null);
  const [nameEntered, updateNameEntered] = useState(false);
  const [list, updateList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getList();
    const checkname = localStorage.getItem("name");
    if (checkname) {
      updateName(checkname);
      updateNameEntered(true);
    }
  }, []);

  useEffect(() => {
    const newFiltered = list
      .sort((a, b) => a.zone - b.zone)
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFiltered(newFiltered);
  }, [list, value]);

  const getList = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/list`, {})
      .then((response) => {
        const sortedList = response.data.sort((a, b) => a.zone - b.zone);
        updateList(sortedList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCheckboxChange = (id) => {
    const updatedStudents = [...list];
    fetchit(id);

    updateList(updatedStudents);
  };

  const fetchit = (id) => {
    const waitList = [...list];
    for (var i = 0; i < waitList.length; i++) {
      if (waitList[i].id == id) {
        waitList[i].waiting = true;
        break;
      }
    }

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/update/${id}?name=${name}`, { by: name })
      .then((response) => {
        const newList = response.data;

        for (var i = 0; i < newList.length; i++) {
          newList[i].waiting = false;
        }

        updateList(newList);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleName = () => {
    if (name) {
      localStorage.setItem("name", name);
      updateNameEntered(true);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full max-w-lg font-mono relative text-white">
        <nav className="h-16 w-full bg-purple-500 px-5 flex">
          <div className="h-full w-1/4 flex items-center justify-start">
            <img className="" src={logo} alt="" />
          </div>
          <div className="w-3/4 h-full flex font-bold uppercase text-3xl justify-end items-center">
            Check In
          </div>
        </nav>
        {nameEntered ? (
          <div className="absolute top-16 bottom-0 overflow-scroll w-full bg-slate-700">
            <div className="flex justify-start items-center text-2xl font-bold h-24 p-5">
              welcome {name}
            </div>
            <div className="flex justify-start items-center h-24 p-5">
              <label
                className="w-1/4 h-12 flex justify-start items-center font-3xl font-bold uppercase"
                htmlFor="name"
              >
                search:
              </label>
              <input
                className="px-5 w-3/4 h-10 bg-transparent focus:outline-0 border-2 border-white rounded-full"
                type="text"
                id="name"
                placeholder="type here..."
                onChange={(e) => {
                  updateValue(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full flex gap-2 font-xl rounded-md text-white text-sm font-bold">
                <div className={`w-1/6 h-12 flex items-center justify-center`}>
                  Checked
                </div>
                <div className="w-2/3 h-12 flex justify-center items-center ">
                  name
                </div>
                <div className={`w-1/6 h-12 flex justify-center items-center`}>
                  Zone
                </div>
              </div>

              {filtered.map((student, index) => (
                <div className="w-full flex gap-2 font-xl rounded-md text-black">
                  <div
                    onClick={() => handleCheckboxChange(student.id)}
                    className={`w-1/6 flex items-center justify-center px-5 ${
                      student.checked ? "bg-green-400" : "bg-red-400"
                    } rounded-md`}
                  >
                    {student.waiting ? (
                      <ArrowPathIcon className="animate-spin" />
                    ) : student.checked ? (
                      <CheckIcon />
                    ) : (
                      <XMarkIcon />
                    )}
                  </div>
                  <div className="w-2/3 h-16 bg-orange-200 rounded-md flex flex-col justify-start items-start overflow-hidden p-2 text-lg">
                    {student.name}
                    <span className="text-sm text-slate-900">
                      {student.type} - {student.faculty}
                    </span>
                  </div>
                  <div
                    className={`w-1/6 h-16 ${
                      student.zone == 1
                        ? "bg-white"
                        : student.zone == 2
                        ? "bg-blue-400"
                        : "bg-yellow-400"
                    } rounded-md flex justify-center items-center text-2xl`}
                  >
                    {student.zone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="absolute top-16 bottom-0 flex flex-col gap-5 justify-center items-center w-full bg-slate-700">
            <label
              className="flex justify-start items-center text-2xl font-bold uppercase"
              htmlFor="name"
            >
              enter your name:
            </label>
            <input
              className="px-5 w-3/4 h-14 bg-transparent focus:outline-0 border-2 border-white rounded-md"
              type="text"
              id="name"
              placeholder="type here..."
              onChange={(e) => {
                updateName(e.target.value);
              }}
            />
            <button
              onClick={() => handleName()}
              className="h-12 w-1/2 flex items-center justify-center bg-green-500 rounded-lg text-xl font-bold"
            >
              submit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
