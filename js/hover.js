var github = document.getElementById("github-icon");
var profile_pic = document.getElementById("profile-pic");


github.addEventListener("mouseover", function(){
    this.src = "images/github-icon-purple.svg";
});

github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});