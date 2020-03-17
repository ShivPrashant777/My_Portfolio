var github = document.getElementById("github-icon");
var face_img = document.querySelector(".face img");
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
        dark = true;      
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        github.addEventListener("mouseover", function(){
            this.src = "images/github-icon-purple.svg";
        }); 
        github.addEventListener("mouseout", function(){
            this.src = "images/github-icon-white.svg";
        });
        dark = false;
    }
});


github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});