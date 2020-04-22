//AJAX request to list GitHub repos

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = myObj[0].name;
        document.getElementById("dob").innerHTML = myObj[1].name;
    };
};
newRequest.open("Get", "https://api.github.com/users/iblash/repos", true);
newRequest.send();

//jQuery to expand social media links

$(document).ready(function(){
    $("a").hover(function(){
        $(this).toggleClass("expand");
    });
});