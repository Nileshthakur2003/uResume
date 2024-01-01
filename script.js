var edfield = 1;
var pffield = 1;
var skfield = 0;



function addEducationField()
{
    edfield++;

    var target = document.getElementById("education");

    var parentDiv = document.createElement("div");
    parentDiv.setAttribute("class","ed_field");
    parentDiv.setAttribute("serial",edfield);
    parentDiv.setAttribute("style","border: 5px ridge black;margin:10px;padding:10px;");

    var institute = document.createElement("input");
    institute.setAttribute("type","text");
    institute.setAttribute("placeholder","Institute Name");
    var session = document.createElement("input");
    session.setAttribute("type","text");
    session.setAttribute("placeholder","Session{20XX-XX}");
    var course = document.createElement("input");
    course.setAttribute("type","text");
    course.setAttribute("placeholder","Course Name");
    var gpa = document.createElement("input");
    gpa.setAttribute("type","number");
    gpa.setAttribute("placeholder","GPA");
    var descript = document.createElement("textarea");
    descript.setAttribute("name","gpa");
    descript.setAttribute("placeholder","Describe your course in points...");
    var br = document.createElement("br");
    var removebtn = document.createElement("button");
    removebtn.setAttribute("onclick","removeEdField("+edfield+")");
    removebtn.innerText = "x remove";

    parentDiv.appendChild(institute);
    parentDiv.appendChild(session);
    parentDiv.appendChild(br);
    parentDiv.appendChild(course);
    parentDiv.appendChild(gpa);
    parentDiv.appendChild(descript);
    parentDiv.appendChild(removebtn);

    target.appendChild(parentDiv);


}

function removeEdField(serial){
    // delete the element 
    // re-order the elements
    var edfields = document.getElementsByClassName("ed_field");
    for(var i = 0;i<edfields.length;i++){
        if(edfields[i].getAttribute("serial")==serial.toString()){
            document.getElementById("education").removeChild(edfields[i]);
        }
    }
}

function addProffField()
{

    pffield++;

    var target = document.getElementById("professional");

    var parentDiv = document.createElement("div");
    parentDiv.setAttribute("class","pf_field");
    parentDiv.setAttribute("serial",pffield);
    parentDiv.setAttribute("style","border: 5px ridge black;margin:10px;padding:10px;");

    var org = document.createElement("input");
    org.setAttribute("type","text");
    org.setAttribute("placeholder","Organisation Name");
    var duration = document.createElement("input");
    duration.setAttribute("type","text");
    duration.setAttribute("placeholder","MM-YY,MM-YY");
    var position = document.createElement("input");
    position.setAttribute("type","text");
    position.setAttribute("placeholder","Position Name");
    var location = document.createElement("input");
    location.setAttribute("type","text");
    location.setAttribute("placeholder","Location e.g. LA");
    var descript = document.createElement("textarea");
    descript.setAttribute("name","gpa");
    descript.setAttribute("placeholder","Describe your accomplishments in points...");
    var br = document.createElement("br");
    var removebtn = document.createElement("button");
    removebtn.setAttribute("onclick","removeProffField("+pffield+")");
    removebtn.innerText = "x";

    parentDiv.appendChild(org);
    parentDiv.appendChild(duration);
    parentDiv.appendChild(br);
    parentDiv.appendChild(position);
    parentDiv.appendChild(location);
    parentDiv.appendChild(descript);
    parentDiv.appendChild(removebtn);

    target.appendChild(parentDiv);

}

function removeProffField(serial){
    // delete the element 
    // re-order the elements
    var pffields = document.getElementsByClassName("pf_field");
    for(var i = 0;i<pffields.length;i++){
        if(pffields[i].getAttribute("serial")==serial.toString()){
            document.getElementById("professional").removeChild(pffields[i]);
        }
    }
}

function addSkill()
{
    

    var target = document.getElementById("sk_field");

    var parentDiv = document.createElement("span");
    parentDiv.setAttribute("class","notice");
    parentDiv.setAttribute("serial",skfield);
    parentDiv.setAttribute("style","border: 5px ridge black;margin:10px;padding:10px;");
    
    parentDiv.innerText = document.getElementById("skill").value;
    document.getElementById("skill").value = "";

    var removebtn = document.createElement("button");
    removebtn.setAttribute("onclick","removeSkillField("+skfield+")");
    removebtn.innerText = "x";

    parentDiv.appendChild(removebtn);

    target.appendChild(parentDiv);
    console.log("Creating New SKill - ",skfield);
    skfield++;
}

function removeSkillField(serial)
{
    console.log("To delete skill - ",serial);

    var skfields = document.getElementById("sk_field").getElementsByClassName("notice");

    for(var i = 0;i<=skfields.length-1;i++)
    {console.log("Checking SKill - ",i);
        if(skfields[i].getAttribute("serial")===serial.toString()){
            document.getElementById("sk_field").removeChild(skfields[i]);
            console.log("Deleting SKill - ",i);
            skfield--;
            break;
           }
    }
}

function makeResume(){

    var i=0;
    // collecting data
    var data = {
        "fname":document.getElementById("first_name").value,
        "lname":document.getElementById("last_name").value,
        "email":document.getElementById("email").value,
        "phone":document.getElementById("phone").value,
        "education":[],
        "proffesion":[],
        "skills":[],
    }
    // filling education
    var ed_data = document.getElementById("professional").getElementsByClassName("ed_field");
    var ed_data_obj ={};
    
    for(i=0;i<ed_data.length;i++)
    {
        ed_data_obj = {
            "institute":ed_data[i].getElementById("institute").value,
            "course":ed_data[i].getElementById("course").value,
            "gpa":ed_data[i].getElementById("gpa").value,
            "year":ed_data[i].getElementById("year").value,
            "descript":ed_data[i].getElementById("descript").value
        };
        data["education"].push(pf_data_obj);
    }



    // filling proffesional exp.
    var pf_data = document.getElementById("professional").getElementsByClassName("pf_field");
    var pf_data_obj ={};
    
    for(i=0;i<pf_data.length;i++)
    {
        pf_data_obj = {
            "org":pf_data[i].getElementById("orgp").value,
            "duration":pf_data[i].getElementById("durationp").value,
            "position":pf_data[i].getElementById("positionp").value,
            "location":pf_data[i].getElementById("locationp").value,
            "descript":pf_data[i].getElementById("descriptp").value
        };
        data["proffesion"].push(pf_data_obj);
    }


    // filling skills
    var skfields = document.getElementById("sk_field").getElementsByClassName("notice");
    for(i=0;i<skfields.length;i++){
        data["skills"].push(skfields[i].innerText);
    }



    console.log(data);






}