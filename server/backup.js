const fs = require('fs');

function backupData(data, filePath) {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error('Error writing backup file:', err);
    }
  });
}

module.exports = { backupData };