 var modal = document.getElementById('singleModal');
 var modalBtn = document.getElementById('modal-btn');
 var closeBtn= document.getElementsByClassName('close-btn');

 // listen

 modalBtn.addEventListener('click', openModal);
 closeBtn.addEventListener('click', closeModal);

 window.addEventListener('click', clickOutside);


 function openModal(e){
  modal.style.display="block";
  e.preventdefault;
 }

 function closeModal(e){
  modal.style.display="none";
  e.preventdefault;
 }

//  if outside click close modal
 function  clickOutside(e){
   if(e.target === modal){
    modal.style.display="none";


   }
 }