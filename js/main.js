menu = document.getElementById('tog');
ham = document.getElementById('ham');
hama = document.getElementById('togout');
hamb = document.getElementById('togin');
shadow = document.getElementById('shadow');
sidecontent = document.getElementsByClassName('side-content')[0];

function toggle(){
    menu.classList.toggle('active');
    ham.classList.toggle('ham');
    hama.classList.toggle('none');
    hamb.classList.toggle('none');
    shadow.classList.toggle('active');
    sidecontent.classList.toggle('none');
}