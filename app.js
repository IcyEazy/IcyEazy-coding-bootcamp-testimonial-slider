let prevBtn = document.querySelectorAll(".prev"),
    nextBtn = document.querySelectorAll(".next"),
    firstProf = document.querySelector(".fp-a"),
    secondProf = document.querySelector(".fp-b");


nextBtn.forEach((n, i) => {
    n.addEventListener("click", function(){
        console.log("next")
        firstProf.classList.toggle("hide");
        secondProf.classList.toggle("fp-b");
    });
})
    

prevBtn.forEach((p, i) => {
    p.addEventListener("click", function(){
        console.log("prev")
        firstProf.classList.toggle("hide");
        secondProf.classList.toggle("fp-b");
    });
})