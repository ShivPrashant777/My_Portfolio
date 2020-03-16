var github = document.getElementById("github-icon");
var face = document.querySelector(".face img");

face.addEventListener("mouseover", function(){
    this.style.opacity = '0.5';
});

face.addEventListener("mouseout", function(){
    this.style.opacity = '1';
});

github.addEventListener("mouseover", function(){
    this.src = "images/github-icon-purple.svg";
});

github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});