const like= document.querySelectorAll(".like")



like.forEach(i => {
    i.addEventListener('click',(e)=>{
       const padre= e.target.parentNode;
       padre.classList.toggle("active")
    });
})