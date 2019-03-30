function loadJson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }
}
xhr.send();

}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var left=document.querySelector(".left");
function profile(p) {
var image=document.createElement("img");
image.src=p.image;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);

var h1=document.createElement("h1");
h1.textContent=p.college;
left.append(h1);

var h3=document.createElement("h3");
h3.textContent=p.phno;
left.append(h3);

}

var right=document.querySelector(".right");
function career(c) {
  var h1=document.createElement("h1");
  h1.textContent="career Objective";
  right.append(h1);

var hr=document.createElement("hr");
right.append(hr);

var h2=document.createElement("h2");
h2.textContent=c.info;
right.append(h2);

var hr=document.createElement("hr");
right.append(hr);
}

function education(e) {
  var h1=document.createElement("h1");
  h1.textContent="educationdetails";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
table.border="2";
  right.append(table);
var tr1="<tr><th>qualification</th><th>institution</th><th>percentage</th><th>yop</th>";
var tr2="";
for(var i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].qualification+"</td><td>"+e[i].institution+"</td><td>"+e[i].percentage+"</td><td>"+e[i].yop+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}
function skills(sk) {
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var h3=document.createElement("h3");
  h3.textContent=sk.name;
  right.append(h3);

  var ul=document.createElement("ul");
  for(var i in sk){
    var li=document.createElement("li");
    li.innerHTML=sk[i].name+":"+sk[i].info;
    ul.append(li);

  }
  right.append(ul);
}
