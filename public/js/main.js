
const navSections = document.getElementsByClassName('nav-sections');

const home = document.getElementById('home');
const resume = document.getElementById('resume');

const arrayOfSections =[home,resume, projects,contact];
let currentSectionIndex = 0;



for (let i=0; i<navSections.length; i++) {
    navSections[i].addEventListener('click',()=>{
        arrayOfSections[currentSectionIndex].style.display = 'none';
        arrayOfSections[i].style.display = 'block';
        currentSectionIndex = i;
    })
}



// google map
function myMap() {
var mapProp= {
center:new google.maps.LatLng(-27.469770,153.025131),
zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
