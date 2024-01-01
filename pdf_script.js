var doc = new jsPDF(); 
var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};
$('#submit').click(function () { 
    doc.fromHTML($('#content').html(), 15, 15, { 
        'width': 190, 
            'elementHandlers': specialElementHandlers 
    }); 
    doc.save('sample-page.pdf'); 
});

/*
var data = {
        "fname":,
        "lname":,
        "email":,
        "phone":,
        "education":[],
        "proffesion":[],
        "skills":[],
    }
*/
function set_resume_page(pdata){
    // 
    document.getElementById("__name").innerText = pdata["fname"]+" "+pdata["lname"];
    document.getElementById("__email").innerText = pdata["email"];
    document.getElementById("__phone").innerText = pdata["phone"];

    var i = 0;

    while(i<=data["education"].length){
        //
    var institute = document.createElement("strong");
    institute.innerText = data["education"]["institute"];
    var course = document.createElement("input");
    course.innerText = data["education"]["course"];
    var duration = document.createElement("input");
    duration.innerText = data["education"]["gpa"];
    var location = document.createElement("input");
    location.setAttribute("type","text");
    location.setAttribute("placeholder","Location e.g. LA");
    }
}