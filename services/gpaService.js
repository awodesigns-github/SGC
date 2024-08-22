const express = require('express');

// Business logic for calculating GPA - takes courses from the gpaController as argument
const calculateGpa = (courses) => {
    let points = 0;
    let totalCredits = 0;

    // An object that maps grades (Keys) to their respective points (Values)
    const gradesWithPoints = {
        'A': 5,
        'B+': 4,
        'B': 3,
        'C': 2,
        'F': 0,
    };

    // Looping through each course,
    // Converts each grade into uppercase and finds its corresponding value
    // Calculates points from gradePoints and received credits of each grade
    // computes the total credits
    // gpa = points / totalCredits
    courses.forEach((course) => {
        const gradePoints = gradesWithPoints[course.grade.toUpperCase()];
        points += gradePoints * course.credits;
        totalCredits += course.credits;
    });

    return points / totalCredits;
}

module.exports = calculateGpa;
