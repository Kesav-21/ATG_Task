var regModal=document.getElementById("registerModal");
var logModal=document.getElementById("signInModal");

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

function userRegister(){
  if(logModal.classList.contains('d-block')){
    regModal.classList.toggle('d-block')
    logModal.classList.toggle('d-block')
  }
  else
  regModal.classList.toggle('d-block')
}

function userSignIn(){
  if(regModal.classList.contains('d-block')){
    regModal.classList.toggle('d-block')
    logModal.classList.toggle('d-block')
  }
  else
  logModal.classList.toggle('d-block')
}

function closeBtn(){
  var regModal = document.getElementById("registerModal");
  var logModal=document.getElementById("signInModal");
  if(regModal.classList.contains('d-block'))
  regModal.classList.toggle('d-block')
  else
  logModal.classList.toggle('d-block')
}

window.onclick = function(event) {
  if (event.target == regModal) {
    regModal.classList.toggle('d-block')
  }
  else if(event.target==logModal){
    varModal.classList.toggle('d-block')
  }
}

function joinGrp(){
  var image=document.getElementById('joingrp')
  var text=document.getElementById('grp-text')
  var grpBtn=document.getElementById('grpBtn')
  if(text.innerText=="Join Group"){
    text.innerText="Leave Group"
    image.src="/assets/images/leave.svg"
    grpBtn.classList.toggle('btn-primary')
    grpBtn.classList.toggle('btn-outline-secondary')
}
else{
    text.innerText="Join Group"
    image.src="/assets/images/join.svg"
    grpBtn.classList.toggle('btn-outline-secondary')
    grpBtn.classList.toggle('btn-primary')
}
}