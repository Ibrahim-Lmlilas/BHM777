let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let BHM777 = document.querySelector('.BHM777');
window.onscroll = function() {
    let value = scrollY ;
    stars.style.left=value + 'px';
    moon.style.top=value *3 + 'px';
    mountains3.style.top=value *2 + 'px';
    river.style.top=value  + 'px';
    mountains4.style.top=value *1.5   + 'px';
    boat6.style.top=value  + 'px';
    boat6.style.left=value *3 + 'px';
    BHM777.style.fontSize = value  + 'px';

    
}
