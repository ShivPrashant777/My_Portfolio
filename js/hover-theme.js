var github = document.getElementById("github-icon");
var face_img = document.querySelector(".face img");
var odd = document.getElementsByClassName("odd");
var even = document.getElementsByClassName("even");


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
        var i;
        for (i = 0; i < odd.length; i++) {
            odd[i].style.background = container1;
        }
        for (i = 0; i < even.length; i++) {
            even[i].style.background = container2;
        }      

        dark = true;      
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        for (i = 0; i < odd.length; i++) {
            odd[i].style.background = "rgb(253, 200, 255)";
        }
        for (i = 0; i < even.length; i++) {
            even[i].style.background = "rgb(251, 245, 255)";
        }    

        dark = false;
    }
});

github.addEventListener("mouseover", function(){
    this.src = "images/github-icon-green.svg";
}); 
github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});

github.addEventListener("mouseout", function(){
    this.src = "images/github-icon-white.svg";
});