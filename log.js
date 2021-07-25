var login=document.getElementById('login');
var model=document.getElementById('model');
var close=document.getElementById('close');

login.onclick=function(){
    model.style.display="block";
}
close.onclick=function(){
    model.style.display="none";
}

window.onclick=function(e){
    if(e.target==model)
    {
        model.style.display="none";
    }
}
function mylogin(){
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');
    if (email.value=="any@gmail.com")
    {
    
        if (pass.value=="xyz123")
    
    {
        alert ("welcome to my page");

    }
    else{
        alert ("password is incorrect");
    }
}
else{
    
        alert ("email is not registered ");
     }
}