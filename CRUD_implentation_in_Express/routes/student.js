const express = require('express');
const student_router = express.Router();

const  students = [ {id:1, name: "Alice"},
                    {id:2, name: "Bob"},
                    {id:3, name: "Charlie"} 
]

student_router.get('/', (req, res) =>{
    res.send(`Student List: ${students.map(s => s.name).join(", ")}`);
});

student_router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }
    res.send(`Student: ${student.name}`);
});

module.exports = student_router;