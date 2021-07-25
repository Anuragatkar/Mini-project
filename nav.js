var sindex=1;
var s=document.getElementsByClassName('slide');

function goslide(n){
    slideshow (sindex=sindex+n);
}
function load(){
    s[sindex-1].style.display="block";
}
function slideshow(n){
    var i;
    var count=s.length;
    if(n>count)
    {
        sindex=1;

    }
    if (n<1){
        sindex=count;
    }
    for(i=0;i<count;i++)
    {
        s[i].style.display="none";

    }
    s[sindex-1].style.display="block";
}