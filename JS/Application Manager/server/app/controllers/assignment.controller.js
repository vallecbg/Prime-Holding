const db = require("../models");
const Assignment = db.assignments;

// Create and Save a new Assignment
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }

    // Create an Assignment
    const assignment = new Assignment({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        preferredCommunication: req.body.preferred,
        englishLevel: req.body.level,
        availableToStart: req.body.startDate,
        skills: req.body.skills,
        presentation: req.body.presentation,
        studyFromHome: req.body.studyHome
    });

    // Save Assignment in the database
    assignment
        .save(assignment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Assignment."
            });
        });
};

// Retrieve all Assignments from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            $regex: new RegExp(title),
            $options: "i"
        }
    } : {};

    Assignment.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving assignments."
            });
        });
};

// Find a single Assignment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Assignment.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Assignment with id " + id
                });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: "Error retrieving Assignment with id=" + id
                });
        });

};

// Update a Assignment by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Assignment.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Assignment with id=${id}. Maybe Assignment was not found!`
                });
            } else res.send({
                message: "Assignment was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Assignment with id=" + id
            });
        });
};

// Delete a Assignment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Assignment.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Assignment with id=${id}. Maybe Assignment was not found!`
                });
            } else {
                res.send({
                    message: "Assignment was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Assignment with id=" + id
            });
        });
};

// Delete all Assignments from the database.
exports.deleteAll = (req, res) => {
    Assignment.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Assignments were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all assignments."
            });
        });
};

// Find all published Assignments
exports.findAllPublished = (req, res) => {
    Assignment.find({
            published: true
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving assignments."
            });
        });
};