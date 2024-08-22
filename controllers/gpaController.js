const calculateGpa = require('../services/gpaService');

// A controller for handling requests coming from the routes
exports.gpaController = function (req, res) {
    try {
        // extracting the request body - the actual data
        const { courses } = req.body;

        // Error checking if the courses are in the form of array
        // If NOT returns a response 500 to the routes (Internal Server Error)
        // NOTE: I will remove this and put it into a middleware
        if (!courses || !Array.isArray(courses)) {
            res.status(500).send({
                message: "Error: Invalid data format..."
            });
        }

        // calculating GPA from the gpaService
        const gpa = calculateGpa(courses);

        // return a response 201 (Good) to the routes
        res.status(201).send({
            gpa
        });

    } catch (e) {
        // Catching any errors
        res.send({
            status: e.status,
            message: `${e}`
        });
    }
}
