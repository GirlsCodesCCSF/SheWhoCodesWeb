const btnOpen = document.getElementById('burger');
const btnClose = document.getElementById('close');

btnOpen.addEventListener('click', (e)=>{
  var e = event.target;  
  document.getElementById("navoverlay").style.width = "100%";
     
});

btnClose.addEventListener('click', (e)=>{ 
 
    document.getElementById("navoverlay").style.width = "0%";     
});