const form=document.getElementById("contactForm");
form.addEventListener("submit",e=>{e.preventDefault();let ok=true;
["name","email","message"].forEach(x=>document.getElementById(x+"Error").textContent="");
const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),message=document.getElementById("message").value.trim();
if(!name){nameError.textContent="Name is required.";ok=false}
if(!email){emailError.textContent="Email is required.";ok=false}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){emailError.textContent="Enter a valid email.";ok=false}
if(!message){messageError.textContent="Message is required.";ok=false}
success.textContent=ok?"Form submitted successfully!":"";if(ok)form.reset()});
const input=document.getElementById("taskInput"),list=document.getElementById("taskList");
function addTask(){const text=input.value.trim();if(!text){alert("Please enter a task.");return}const li=document.createElement("li");li.className="task";li.innerHTML=`<span>${text}</span><button class="remove">Remove</button>`;li.querySelector("button").onclick=()=>li.remove();list.appendChild(li);input.value=""}
document.getElementById("addTask").onclick=addTask;input.onkeydown=e=>{if(e.key==="Enter")addTask()}