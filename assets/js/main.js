/* Template Name: MKBIO || Onepage fashion designer template
   Author: MK Themes
   Email: support@mkthemes.in
   Website: https://mkthemes.in
   Version: 1.0.0
   Created: February 2022
   File Description: Main JS file of the template
*/

/* ======= Index =========*/
/**===============
1. Header Mobile menu 
2. Contact form validation 
 ======================*/

// Main Menu js

const menu = document.querySelectorAll(".menu ul li a");
const contents = document.querySelectorAll(".content");

menu.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.forEach((btn) => {
            btn.classList.remove("active");
        });
        let content = document.querySelector(this.getAttribute("href"));
        contents.forEach((btn) => {
            btn.classList.remove("active");
        });
        content.classList.add("active");
    });
});





// Typing Animation 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



// // portfolio filter 
// const btn = document.querySelectorAll('.button-group li');
// console.log(btn);


// btn.forEach ( data => {
//     data.addEventListener(' click ', function(){
//         btn.forEach( btn => {
//             btn.classList.remove('active');
//         });
//         data.classList.add('active');
//         console.log('ac');
//     });
// });







// /* Contact form validation  */
// const contact_form = document.getElementById('contact-form');

// contact_form.addEventListener('submit',function(e){
//    e.preventDefault();
//    let name = this.querySelector('.name');
//    let phone = this.querySelector('.phone');
//    let subject = this.querySelector('.subject');
//    let message = this.querySelector('.message');
//    let error_check = this.querySelector('.form_error');
//    let border = this.querySelector('input');

//    if( name.value == '' || phone.value == '' || subject.value == '' || message.value == ''){
//       error_check.innerHTML = `<span style="color: var(--red);">All Fields are required</span>` ;

//    }else{
//     error_check.innerHTML = `<span style="color:green;">Message send successfully</span>` ;

//     name.value = '';
//     email.value = '';
//     phone.value ='' ;
//     subject.value = '';
//     message.value = '';
//    }

// });
