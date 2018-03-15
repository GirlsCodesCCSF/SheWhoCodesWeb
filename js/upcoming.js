const countdown = document.querySelector('.countdown');

//Set launch date
const launchDate = new Date('April 6, 2018 14:00:00').getTime();
//update every second

const interval = setInterval(()=>{
  // get today date and time (mili seconds)
  const now = new Date().getTime();

  // from now to event
   const distance = launchDate - now;

   // get day and time
   const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
   //get hour
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
   //get minutes
   const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  //get secondes
      const secondes = Math.floor((distance % (1000 * 60)) / 1000);

  // calculate result
  countdown.innerHTML =`
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${minutes}<span>Minutes</span></div>
  <div>${secondes}<span>Secondes</span></div>
    `;

    if(distance < 0){
      // stop countdown
      clearInterval(interval);
      //style and output text
      countdown.style.color ='#17a2b8';
      countdown.innerHTML = 'Launched';
    }
},1000);