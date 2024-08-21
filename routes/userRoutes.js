const express = require('express');
const router = express.Router();

router.post('/gpaCalculator', function (req, res) {
    const gradesWithPoints = {
        'A': 5,
        'B+': 4,
        'B': 3,
        'C': 2,
        'F': 0,
    };

    try {
        const { courses } = req.body;

        if (!courses || !Array.isArray(courses)) {
            res.status(500).send({
                message: "Error: Invalid data format..."
            });
        }

        let points = 0;
        let totalCredits = 0;

        courses.forEach((course) => {
            const gradePoints = gradesWithPoints[course.grade.toUpperCase()];
            points += gradePoints * course.credits;
            totalCredits += course.credits;
        });

        const gpa = points / totalCredits;

        return res.status(201).send({
            gpa
        });
    } catch (e) {
        res.status(500).send({
            message: `Error: ${e}`
        });
    }
});

module.exports = router;
