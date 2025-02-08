const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'user.json');

//read write find data logic
//all user
const readData = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]', 'utf-8'); // Create empty JSON file if not exists
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

exports.getAllUsers = () => readData();

//get user by id
exports.getUserById = (id) => {
    const users = readData();
    return users.find(user => user.id === id); 
};

