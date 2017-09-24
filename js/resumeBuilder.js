/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(internationalizeButton);

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
    "skills": ["FEND", "Running"]
};

bio.display = function() {
    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    
    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        
        bio.skills.forEach(function(element) {
            var formattedSkill = HTMLskills.replace("%data%", element);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

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

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        
        $(".work-entry:last").append(formattedEmployerTitle);
        
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        
        $(".work-entry:last").append(formattedDate);
        
        /*
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        
        $(".work-entry:last").append(formattedLocation);
        */
    
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var education = {
    "schools": [
        {
            "name" : "Monta Vista High",
            "location" : "Cupertino, CA",
            "degree" : "High School Diploma",
            "majors" : ["General"],
            "dates" : "2015-2019",
            "url" : "https://mvhs.fuhsd.org"
        }
    ],
    "onlineCourses": [
        {
            "school" : "Udacity",
            "title" : "Front-End Web Developer Nanodegree",
            "dates" : "2017",
            "url" : "https://udacity.com"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedName+formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    });
    
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLschoolDates.replace("%data%", course.dates);
        var formattedLocation = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedName+formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
    });
};

education.display();

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
};

projects.display = function() {
    projects.projects.forEach(function(element) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%" , element.title);
        var formattedDates = HTMLprojectDates.replace("%data%" , element.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
        
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        element.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", element.image);
           // $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
    
});

var inName = function(name) {
    var names = name.split(" ");
    return names[0].charAt(0).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
};

$("#mapDiv").append(googleMap);
