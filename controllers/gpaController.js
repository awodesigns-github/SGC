const calculateGpa = require('../services/gpaService');

exports.gpaController = function (req, res) {
    try {
        const { courses } = req.body;

        if (!courses || !Array.isArray(courses)) {
            res.status(500).send({
                message: "Error: Invalid data format..."
            });
        }

        const gpa = calculateGpa(courses);

        res.status(201).send({
            gpa
        });

    } catch (e) {
        res.send({
            status: e.status,
            message: `${e}`
        });
    }
}
