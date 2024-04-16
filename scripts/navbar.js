window.onscroll = function() {
        myFunction();
        updateActiveLink();
};
    
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;
    
function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
}
    
function updateActiveLink() {
        var currentPosition = window.pageYOffset;
        var projectsSection = document.getElementById("projects").offsetTop;
        var aboutSection = document.getElementById("about").offsetTop;
        var contactSection = document.getElementById("contact").offsetTop;

        console.log("currentPosition:", currentPosition);
        console.log("projectsSection:", projectsSection);
        console.log("aboutSection:", aboutSection);
        console.log("contactSection:", contactSection);    
    
        var homeLink = document.querySelector("nav a[href='#home']");
        var projectsLink = document.querySelector("nav a[href='#projects']");
        var aboutLink = document.querySelector("nav a[href='#about']");
        var contactLink = document.querySelector("nav a[href='#contact']");
    
        var offset = 150; // Adjust the offset value as needed
    
        if (currentPosition < projectsSection - offset) {
            setActiveLink(homeLink);
            removeActiveLink([projectsLink, aboutLink, contactLink]);
        } else if (currentPosition >= projectsSection - offset && currentPosition < aboutSection - offset) {
            setActiveLink(projectsLink);
            removeActiveLink([homeLink, aboutLink, contactLink]);
        } else if (currentPosition >= aboutSection - offset && currentPosition < contactSection - offset) {
            setActiveLink(aboutLink);
            removeActiveLink([homeLink, projectsLink, contactLink]);
        } else if (currentPosition >= contactSection - offset) {
            setActiveLink(contactLink);
            removeActiveLink([homeLink, projectsLink, aboutLink]);
        } 
}
    
function setActiveLink(link) {
        link.classList.add("active");
}
    
function removeActiveLink(links) {
        links.forEach(function(link) {
            link.classList.remove("active");
        });
}   