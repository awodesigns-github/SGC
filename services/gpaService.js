const express = require('express');

const calculateGpa = (courses) => {
    let points = 0;
    let totalCredits = 0;

    const gradesWithPoints = {
        'A': 5,
        'B+': 4,
        'B': 3,
        'C': 2,
        'F': 0,
    };

    courses.forEach((course) => {
        const gradePoints = gradesWithPoints[course.grade.toUpperCase()];
        points += gradePoints * course.credits;
        totalCredits += course.credits;
    });

    return points / totalCredits;
}

module.exports = calculateGpa;
