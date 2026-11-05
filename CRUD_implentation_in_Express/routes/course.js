const express = require('express');
const course_router = express.Router();

const courses = [ {id:1, name: "Frontend", description: "HTML, CSS, JS , React"},
                  {id:2, name: "Backend", description: "NodeJS, ExpressJS, MongoDB"}
                ];
course_router.get('/', (req, res) => {
    res.send(`Course List: ${courses.map(c => c.name).join(", ")}`);
});

course_router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course not found');
    }
   res.send(
        `Course: ${course.name}, Description: ${course.description}`
    );
});

module.exports = course_router;
