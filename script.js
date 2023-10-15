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
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display="block";
    
}
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    console.log("hello")
  if (event.target == modal) {
    modal.style.display = "none";
  }
}