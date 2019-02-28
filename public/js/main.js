
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





// (function ($) {
//     'use strict';



// //contact form
//     var form = $('.contact__form'),
//         message = $('.contact__msg'),
//         form_data;

//     // Success function
//     function done_func(response) {
//         message.fadeIn()
//         message.html(response);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 5000);
        
//         form.find('input:not([type="submit"]), textarea').val('');
//     }

//     // fail function
//     function fail_func(data) {
//         message.fadeIn()
//         message.html(data.responseText);
//         setTimeout(function () {
//             message.fadeOut(5000);
//         }, 5000);
//     }
    
//     form.submit(function (e) {
//         e.preventDefault();
//         form_data = $(this).serialize();
//         $.ajax({
//             type: 'POST',
//             url: form.attr('action'),
//             data: form_data
//         })
//         .done(done_func)
//         .fail(fail_func);
//     });


// })(jQuery);

