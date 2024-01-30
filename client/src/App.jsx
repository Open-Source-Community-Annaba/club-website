import { useState } from "react";
import axios from 'axios'
import logo from "../assets/logo-with-title.svg";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
export default function App() {
  const listStudents = [
    { id: 1, name: "khalil cheddadi", zone: 1, checked: false },
    { id: 2, name: "achref benammrane", zone: 1, checked: false },
    { id: 3, name: "bougerra takoua", zone: 2, checked: false },
    { id: 4, name: "anis slougha", zone: 3, checked: false },
    { id: 5, name: "berouk abderahmane", zone: 1, checked: false },
    { id: 6, name: "chiheb menkoucha", zone: 1, checked: false },
  ];
  const [value, updateValue] = useState("");
  const [list, updateList] = useState(listStudents);

  const handleCheckboxChange = (id) => {
    const updatedStudents = [...list];
    fetchit(id)
    for (var i = 0; i < updatedStudents.length; i++) {
      if (updatedStudents[i].id == id) {
        updatedStudents[i].checked = !updatedStudents[i].checked;
        break;
      }
    }

    updateList(updatedStudents);
  };


  const fetchit = (id) => {
    console.log('here')
    axios.get(`http://localhost:8000/update/${id}`, {})
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }



  return (
    <>
      <div className="h-[100vh] w-full bg-red-100  font-mono relative text-white">
        <nav className="h-16 w-full bg-black px-5 flex">
          <div className="h-full w-1/4 flex items-center justify-start">
            <img className="" src={logo} alt="" />
          </div>
          <div className="w-3/4 h-full flex font-bold uppercase text-3xl justify-end items-center">
            Check In
          </div>
        </nav>
        <div className="absolute top-16 bottom-0 w-full bg-slate-700">
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
            {list.map((student, index) => (
              <div className="bg-blue-200 w-full flex font-xl rounded-md text-black">
                <div
                  onClick={() => handleCheckboxChange(student.id)}
                  className="w-1/6 flex items-center justify-center px-5"
                >
                  {student.checked ? <CheckIcon /> : <XMarkIcon />}
                </div>
                <div className="w-2/3 h-16 bg-red-200 rounded-md flex justify-center items-center text-xl">
                  {student.name}
                </div>
                <div className="w-1/6 h-16 bg-red-500 rounded-md flex justify-center items-center text-2xl">
                  {student.zone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
