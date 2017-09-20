/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Eric Wang",
    "role": "Student",
    "contacts": {
       "email":"erwang01@gmail.com",
       "mobile":"408-680-8867",
       "github":"https://github.com/erwang01",
       "location":"Cupertino, CA"
    },
    "bioPic": "images/2017ID.jpg",
    "welcomeMessage": "Hello",
    "skills": ["FEND"]
};
$("#main").append(bio);

var work = {
    "jobs" : [
        {
            "employer" : "Monta Vista High",
            "title" : "Student",
            "location" : "Cupertino, CA",
            "dates" : "2015-Present",
            "description" : "High School student at Monta Vista High School"
        },
        {
            "employer" : "Monta Vista Robotics Team",
            "title" : "Software Engineer",
            "location" : "Cupertino, CA",
            "dates" : "2015-2016",
            "description" : "Designed and programmed robot for FRC Team 115 in the 2016 FRC Competition"
        },
        {
            "employer" : "Valkyrie Robotics, LLC",
            "title" : "Technical Lead",
            "location" : "Cupertino, CA",
            "dates" : "2016-Present",
            "description" : "Designed and programmed robot for FRC Team 299 in the 2017 FRC Competition. Led research into real time trajectory generation through spline fitting."
        },
        {
            "employer" : "Eric Wang (Myself)",
            "title" : "Tutor",
            "location" : "Cupertino, CA",
            "dates" : "2016",
            "description" : "Ran a tutoring business, tailoring material to each student and privately tutored them for one hour sessions in math contests."
        }
    ]
};

var education = {
    "schools": [
        {
            "name" : "Monta Vista High",
            "location" : "Cupertino, CA",
            "degree" : "High School Diploma",
            "majors" : ["General"],
            "dates" : "2019";
            "url" : "https://mvhs.fuhsd.org"
        }
    ]
    "onlineCourses" [
        {
            "school" : "Udacity",
            "title" : "Front-End Web Developer Nanodegree",
            "dates" : "2017";
            "url" : "https://udacity.com"
        }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "Rover Server",
            "dates" : "2014-Present",
            "description" : "Remotely controlled robot capable of navegating the cross base to check for leaks.",
            "images" :["url1"]
        },
        {
            "title" : "Senior Garden Beds Eagle Project",
            "dates" : "2017",
            "description" : "Designed and built a Raised Garden Bed at Sunny View Retirement Community in Cupertino. Led over 10 volunteers to construct the garden bed with minimal disruptions to the seniors.",
            "images" : ["url2"]
        }
    ]
}
