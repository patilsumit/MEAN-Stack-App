/* Unit test code for courses model */

const { 
    createCourse, getAllCourses,
     getCourseById, updateCourse
    } = require('../models/courses');

function testCreateCourse() {
    // Create a course document
    createCourse({
        name: "C++ Programming Language",
        author: "Mubeen Jukaku",  
        price: 15,
        isPublished: true
    }).then((res) => console.log(res))
        .catch((err) => console.log(err.message));
}

function testGetAllCourses() {
    getAllCourses()
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
}

function testGetCourseById() {
    var id = '5b64022e5737e73d65cf6a57';

    getCourseById(id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
}

function testUpdateCourse() {
    const course = {
        _id: '5b64022e5737e73d65cf6a57', 
        name: 'Javascript Programming',  
        author: 'Mubeen',
    };

    updateCourse(course)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));

}
//testCreateCourse();
//testGetAllCourses();
//testGetCourseById();
testUpdateCourse();

