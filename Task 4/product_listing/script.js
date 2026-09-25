const data=[
{name:"Wireless Keyboard",cat:"Tech",price:1499,rating:4.6,icon:"⌨"},
{name:"Desk Lamp",cat:"Office",price:899,rating:4.3,icon:"◉"},
{name:"Smart Headphones",cat:"Tech",price:2499,rating:4.8,icon:"◖◗"},
{name:"Notebook Set",cat:"Office",price:399,rating:4.5,icon:"▤"},
{name:"Travel Bottle",cat:"Lifestyle",price:699,rating:4.2,icon:"♧"},
{name:"Fitness Band",cat:"Lifestyle",price:1899,rating:4.7,icon:"⌁"}
];
const box=document.getElementById("products"),category=document.getElementById("category"),sort=document.getElementById("sort");
function render(){let list=[...data];if(category.value!=="all")list=list.filter(p=>p.cat===category.value);if(sort.value==="priceLow")list.sort((a,b)=>a.price-b.price);if(sort.value==="priceHigh")list.sort((a,b)=>b.price-a.price);if(sort.value==="rating")list.sort((a,b)=>b.rating-a.rating);box.innerHTML=list.length?list.map(p=>`<article class="card"><div class="image">${p.icon}</div><h3>${p.name}</h3><small>${p.cat}</small><div class="meta"><span>₹${p.price}</span><span class="rating">★ ${p.rating}</span></div></article>`).join(""):'<div class="empty">No products match your filter.</div>'}
category.onchange=render;sort.onchange=render;render();