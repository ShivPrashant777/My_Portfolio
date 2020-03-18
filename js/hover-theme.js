var github = document.getElementById("github-icon");
var face_img = document.querySelector(".face img");
var rock_paper_scissors = document.getElementById("rock-paper-scissors");
var fylo = document.getElementById("fylo");
var profolio = document.getElementById("profolio");

var container1 = "#232323";
var container2 = "#181818";
var dark = false;

face_img.addEventListener("mouseover", function(){
    this.style.opacity = '0.5';
});

face_img.addEventListener("mouseout", function(){
    this.style.opacity = '1';
});

github.addEventListener("mouseover", function(){
    this.src = "images/github-icon-purple.svg";
}); 
github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});

face_img.addEventListener("click", function(){
    if (dark == false) {
        document.documentElement.setAttribute('data-theme', 'dark'); 
        github.addEventListener("mouseover", function(){
            this.src = "images/github-icon-green.svg";
        }); 
        github.addEventListener("mouseout", function(){
            this.src = "images/github-icon-white.svg";
        });

        rock_paper_scissors.style.background = container1;  
        fylo.style.background = container2;      
        profolio.style.background = container1;      

        dark = true;      
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        github.addEventListener("mouseover", function(){
            this.src = "images/github-icon-purple.svg";
        }); 
        github.addEventListener("mouseout", function(){
            this.src = "images/github-icon-white.svg";
        });

        rock_paper_scissors.style.background = "rgb(218, 218, 255)";
        fylo.style.background = "rgb(255, 204, 146)";
        profolio.style.background = "rgb(218, 218, 255)";

        dark = false;
    }
});


github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});