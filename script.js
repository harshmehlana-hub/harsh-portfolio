document.addEventListener("DOMContentLoaded",()=>{const nav=document.getElementById("mainNav"),back=document.getElementById("backTop");document.getElementById("year").textContent=new Date().getFullYear();
const onScroll=()=>{nav.classList.toggle("scrolled",window.scrollY>20);back.classList.toggle("show",window.scrollY>500)};window.addEventListener("scroll",onScroll,{passive:true});onScroll();
back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll("#navMenu .nav-link").forEach(link=>link.addEventListener("click",()=>{const menu=document.getElementById("navMenu");if(menu.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(menu).hide()}));
});