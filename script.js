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
    var ed_data = document.getElementById("education").getElementsByClassName("ed_field");
    var ed_data_obj ={};
    console.log(ed_data.length);
    for(i=0;i<ed_data.length;i++)
    {
        ed_data_obj = {
            "institute":ed_data[i].children[0].value,
            "course":ed_data[i].children[1].value,
            "year":ed_data[i].children[3].value,
            "gpa":ed_data[i].children[4].value,
            "descript":ed_data[i].children[5].value
        };

        data["education"].push(pf_data_obj);
    }



    // filling proffesional exp.
    var pf_data = document.getElementById("professional").getElementsByClassName("pf_field");
    var pf_data_obj ={};
    
    for(i=0;i<pf_data.length;i++)
    {
        pf_data_obj = {
            "org":pf_data[i].children[0].value,
            "duration":pf_data[i].children[1].value,
            "position":pf_data[i].children[3].value,
            "location":pf_data[i].children[4].value,
            "descript":pf_data[i].children[5].value
        };
        data["proffesion"].push(pf_data_obj);
    }


    // filling skills
    var skfields = document.getElementById("sk_field").getElementsByClassName("notice");
    for(i=0;i<skfields.length;i++){
        data["skills"].push(skfields[i].innerText);
    }

    set_resume_page(data);
    document.getElementById("main").style.display="none";
    document.getElementById("wrapper").style.display="inline-block";
}
function pprint_hmain(){
    window.print();
}
function hprint_smain(){
    document.getElementById("wrapper").style.display="none";
    document.getElementById("main").style.display="inline-block";
}
function set_resume_page(pdata){
    // 
    document.getElementById("__name").innerText = pdata["fname"]+" "+pdata["lname"];
    document.getElementById("__email").innerText = pdata["email"];
    document.getElementById("__phone").innerText = pdata["phone"];
    console.log(pdata["education"][0]["institute"]);
    var i = 0;

    while(i<=pdata["education"].length){
        //
    var institute = document.createElement("strong");
    institute.innerText = pdata["education"][i]["institute"];
    var course = document.createElement("strong");
    course.innerText = pdata["education"][i]["course"];
    var duration = document.createElement("i");
    duration.innerText = pdata["education"][i]["year"];
    
    document.getElementById("__education_field").innerHTML="";
    var target_ed = document.getElementById("__education_field");

    target_ed.appendChild(institute);
    target_ed.appendChild(course);
    target_ed.appendChild(duration);

    i++;
    }

    i=0;

    while(i<=pdata["proffesion"].length){
    //
    var org = document.createElement("strong");
    org.innerText = pdata["proffesion"][i]["org"];
    var position = document.createElement("strong");
    position.innerText = pdata["proffesion"][i]["position"];
    var duration = document.createElement("i");
    duration.innerText = pdata["proffesion"][i]["duration"];
    
    document.getElementById("__professional_field").innerHTML="";
    var target_ed = document.getElementById("__professional_field");
    
    target_ed.appendChild(org);
    target_ed.appendChild(position);
    target_ed.appendChild(duration);

    i++;
    }
}