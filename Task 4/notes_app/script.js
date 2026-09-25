const title=document.getElementById("title"),content=document.getElementById("content"),notesBox=document.getElementById("notes");
let notes=JSON.parse(localStorage.getItem("task4Notes")||"[]");
function render(){notesBox.innerHTML=notes.length?"":"<p>No notes saved yet.</p>";notes.forEach((n,i)=>{const el=document.createElement("article");el.className="note";el.innerHTML=`<div><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.content)}</p></div><button class="delete">Delete</button>`;el.querySelector(".delete").onclick=()=>{notes.splice(i,1);save()};notesBox.appendChild(el)})}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function save(){localStorage.setItem("task4Notes",JSON.stringify(notes));render()}
document.getElementById("save").onclick=()=>{if(!title.value.trim()&&!content.value.trim()){alert("Write something first.");return}notes.unshift({title:title.value.trim()||"Untitled Note",content:content.value.trim()});title.value="";content.value="";save()};
document.getElementById("clearAll").onclick=()=>{if(notes.length&&confirm("Delete all notes?")){notes=[];save()}};
render();