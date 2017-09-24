
/*
Bio about me:
    Includes basic contact info, skills, photo, and a welcome message
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
    "biopic": "images/2017ID.jpg",
    "welcomeMessage": "Hello",
    "skills": ["FEND", "Running"],
    "display": function() {
        $("#header").prepend(internationalizeButton);
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            bio.skills.forEach(function(element) {
                var formattedSkill = HTMLskills.replace("%data%", element);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

bio.display();

/*
My education
*/
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
    ],
    "display" : function() {
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
    }
};

education.display();

/*
Past and current jobs
*/
var work = {
    "jobs" : [
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
        },
        {
            "employer" : "Monta Vista Robotics Team",
            "title" : "Software Engineer",
            "location" : "Cupertino, CA",
            "dates" : "2015-2016",
            "description" : "Designed and programmed robot for FRC Team 115 in the 2016 FRC Competition"
        }
    ],
    "display" : function() {
        work.jobs.forEach( function(job) {
            $("#workExperience").append(HTMLworkStart);
            
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer+formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            
            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedDate);
            
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);
        
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

work.display();

/*
Projects
*/
var projects = {
    "projects" : [
        
        {
            "title" : "Senior Garden Beds Eagle Project",
            "dates" : "2017",
            "description" : "Designed and built a Raised Garden Bed at Sunny View Retirement Community in Cupertino. Led over 10 volunteers to construct the garden bed with minimal disruptions to the seniors.",
            "images" : ["url2"]
        },
        {
            "title" : "Rover Server",
            "dates" : "2014-Present",
            "description" : "Remotely controlled robot capable of navigating the cross base to check for leaks.",
            "images" :["url1"]
        }
    ],
    "display" : function() {
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
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

projects.display();

/*Internationalization of my name*/
var inName = function(name) {
    var names = name.split(" ");
    return names[0].charAt(0).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
};

/*Adds google map functionality*/
$("#mapDiv").append(googleMap);
