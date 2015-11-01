/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // Add Info to the Objects Bio, Work, Projects, Education

/******************************************************************
                                BIO
******************************************************************/
 var bio = {
 	"name" 				: "Cassia CarvalhodeMelo",
 	"role" 				: "DW Analyst",
 	"contacts": {
 		"mobile" 			: "219-204-3082",
 		"email"				: "cassiac@yahoo.com",
 		"github"			: "https://github.com/CassMelo",
 		"location"			: "Orland Park, IL"
 	},
 	"picture_URL"		: "images/me.jpg", // http://s20.postimg.org/5bsahyg55/cassia_7.jpg",
 	"welcome_msg" 		: "Data Warehouse Analyst with 7+ of experience in Data Modeling, processing data to generate reports. \
 						   I’m looking for a position I can apply my experience to empower the decision making process.",
 	"skills"			: ["Data Quality Assurance, ETL, Dimensional Modeling",
						   "Project Management - Planning and managing a team, quality control, timelines/milestones",
						   "Microsoft Visual Basic, PL/SQL, SQL",
					       "MS Project, MS Word, MS Excel Pivot Table, MS PowerPoint, Erwin, MicroStrategy",
					       "Oracle 8.0, DB2 5.0, MS-SQL Server 7.0, MS-SQL Server 2.000",
					       "Fluency	English and Portuguese"
 	]
 };

 bio.display = function (){
	// Formatting BIO
	var formattedName = HTMLheaderName.replace ("%data%", inName(bio.name));
	var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace ("%data%", bio.contacts.github);
	var formattedlocation = HTMLlocation.replace ("%data%", bio.contacts.location);
	var formattedpicture_URL = HTMLbioPic.replace ("%data%", bio.picture_URL);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcome_msg);


	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedlocation);
	$("#header").append(formattedpicture_URL);
	$("#header").append(formattedwelcomeMsg);

	//add contacts on the footer

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedlocation);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i=0; i < bio.skills.length; i++ ){
			var formattedskills = HTMLskills.replace ("%data%", bio.skills[i]);
			$("#header").append(formattedskills);
		}
	}
 }

/******************************************************************
                              WORK
******************************************************************/

var work = {
	"jobs": [
	{
 		"employer" 		: "Cielo",
 		"title"			: "DW Analyst",
 		"dates"			: "Sept,2001 - Jan,2005",
 		"location"		: "Sao Paulo, SP, Brazil",

 		"description"	: " At Cielo  I had 3 positions. I was the Data Administrator for Data Warehouse and Security and Fraud Prevention \
 		Data Mart, after that I was responsible for the Authorization and Marketing Data Marts and I was the team lead for the Merchant's Automaton's Data Mart"
 	},
	{
 		"employer" 		: "Banco Mercantil do Brasil",
 		"title"			: "Data Administrator",
 		"dates"			: "Mar,1997 - Jul,2001",
 		"location"		: "Belo Horizonte, MG, Brazil",

 		"description"	: "Data modeling SME for the transactional systems and developed the first Data Mart."
 	},
	{
 		"employer" 		: "Hoister Comp. e Sistemas",
 		"title"			: "System Analyst",
 		"dates"			: "Jun,1995 - Dec,1996",
 		"location"		: "Belo Horizonte, MG, Brazil",

 		"description"	: "Developed Waiste Management System for 2 steel companies and supported development team using private object library."
 	}
	]
 }

work.display = function(){
// Formatting WORK

	for (i=0; i < work.jobs.length; i++) {

		$("#workExperience").append(HTMLworkStart);


		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);

	}

}



/******************************************************************
                             PROJECTS
******************************************************************/

var projects = {
	"projects": [
	{
 		"title" 		: "Merchant's Automaton Data Mart",
 		"dates"			: "2003 - 2005",
 		"description"	: "•	Managed team of 5 staff members (2 MicroStrategy Analytics, 1 Data Modeler and 2 PL/SQL Developers) \
						   •	Led merchant’s automation Data Mart project involving 20 SMEs, 3 Senior Managers, and 1 Executive Director \
						   to deliver merchant’s automation process information to all business areas, including operations using Oracle, \
						   PL_SQL and MicroStrategy  \
						   •	Defined and documented functional, technical requirements and key performance indicators   \
						   •	Consolidated automation process information into one source and reduced maintenance costs",
 		"images"		: []
 	},
	{
 		"title" 		: "Security and Fraud Prevention Data Mart",
 		"dates"			: "2001 - 2001",
 		"description"	: "•	Developed data conversion map to provide necessary information for the ETL team \
						   •	Managed data warehouse and data mart’s metadata using Erwin \
						   •	Contacted with technical application teams to research data issues\
	         			   •	Identified data gaps in business requirements x data availability ",
 		"images"		: []
 	},
	{
 		"title" 		: "Loan Data Mart",
 		"dates"			: "2000 - 2001",
 		"description"	: "Led first successful data warehousing implementation, through management of 14 business areas, 30 SMEs, \
 						   and 5 Executive Directors on time and on budget. Delivered historical loan information with robust reporting \
 						   capability using SQL-Server & MS Visual Basic. ",
  		"images"		: []
  	},
	{
 		"title" 		: "Data Administration",
 		"dates"			: "2003 - 2005",
 		"description"	: "Subject matter expert (Data Administration) for system development projects to guarantee execution of architecture, \
						   policies, practices and procedures for the full data lifecycle on DB2. Improved client, product & branch data accuracy, \
						   enhancing business processes and decision making capabilities.",
 		"images"		: ["images/da.jpg"]
 	},
	{
 		"title" 		: "Waste Management System",
 		"dates"			: "1995 - 1996",
 		"description"	: "Developed departmental systems using SQL for 2 large steel companies, gathered requirement and developed the code in SQL Windows. \
 						   Supported development team using object library at Votorantim Cimentos.",
 		"images"		: []
 	}
	]
 }



projects.display = function () {

	for ( i=0; i < projects.projects.length; i++) {


		$("#projects").append(HTMLprojectStart);


		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);


		if (projects.projects[i].images.length > 0) {

			for (j=0; j < projects.projects[i].images.length; j++) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	}
}


/******************************************************************
                              EDUCATION
******************************************************************/
var education = {
	"schools": [
		{
			"name" : "PUC - Pontificia Universidade Catolica - MG",
			"degree" : "Bachelor",
			"dates" : 1995,
			"location" : "Belo Horizonte - Brazil",
			"major" : "Computer Science"
		},
		{
			"name" : "Kimball University",
			"degree" : "",
			"dates" : 2015,
			"location" : "Oak Brook, IL",
			"major" : "Data Warehouse/BI Lifecycle in Depth Course"
		}

	],
	"onlinecourses" : [
		{
			"title" : "Front-End Web Developer",
			"school" : "udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/courses/web-development"
		}
	]
}

education.display = function (){
	// Formatting EDUCATION

for (i=0; i < education.schools.length; i++) {

	$("#education").append(HTMLschoolStart);


	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

	$(".education-entry:last").append(formattedschoolName);
	$(".education-entry:last").append(formattedschoolDegree);
	$(".education-entry:last").append(formattedschoolDates);
	$(".education-entry:last").append(formattedschoolLocation);
	$(".education-entry:last").append(formattedschoolMajor);

}

for (i=0; i < education.onlinecourses.length; i++) {

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);


	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[i].title);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[i].school);
	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[i].dates);
	var formattedsonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[i].url);


	$(".education-entry:last").append(formattedonlineTitle);
	$(".education-entry:last").append(formattedonlineSchool);
	$(".education-entry:last").append(formattedonlineDates);
	$(".education-entry:last").append(formattedsonlineURL);

}

}


/**************************************************************
	                   display all Objects
**************************************************************/


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);




/*

// Show on the console where on the screen was clicked.
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);

});
*/

// returns all locations from Object Work
/*
function locationizer(work_obj) {

	var locationArray = [];

    for (job in work_obj.jobs){
    	var newLocation = work_obj.jobs[job].location;
    	locationArray.push(newLocation);
    }
    return locationArray;

}
*/

//$("#main").append(internationalizeButton);


/**************************************************************
	                   other functions
**************************************************************/
function inName (name) {

	var nameArray = name.trim().split(" ");

	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() +
					nameArray[0].slice(1).toLowerCase();

	nameArray[1] = nameArray[1].toUpperCase();

	var intName = nameArray.join(" ");

	return intName;
}


