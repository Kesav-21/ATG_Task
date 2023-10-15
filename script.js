function moreBtn() {
    document.getElementById("btn1").classList.toggle("btn-dark-subtle");
    document.getElementById("myDropdown").classList.toggle("show");
  }
function locationEdit(){
    document.getElementById('locationInput').value="";
}

function followBtn(){
    if(document.getElementById('follow1').innerHTML=="Followed"){
        document.getElementById('follow1').innerHTML="Follow"
    }
    else
    document.getElementById('follow1').innerHTML="Followed"
    document.getElementById('follow1').classList.toggle('bg-dark')
    document.getElementById('follow1').classList.toggle('text-white')
}

function userBtn(){
    
}