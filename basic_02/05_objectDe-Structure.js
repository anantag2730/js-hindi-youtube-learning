// node basic_02/05_objectDe-Structure.js

const course={
    courseName:"js in hindi",
    coursePrice:999,
    courseInstructor:"hitest(chai aur code)"
}

// course.courseInstructor very lengthy to write again and again
console.log(course.courseInstructor);

const {courseInstructor : instructor}=course;// now we can use directly aur yehi de structure kahlata hai 
//console.log(courseInstructor);
console.log(instructor);

