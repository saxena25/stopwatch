let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let timeDisplay = document.querySelector('#stopwatch');

let timer ;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener('click', function(){
    timer = setInterval(()=>{
        seconds++;
        // start.textContent = pause.textContent;
        if(seconds >=60){
            minutes++
            seconds=0
            }
        if(minutes >= 60){
            hours++;
            minutes=0;
        }
            timeDisplay.textContent=`${minutes}:${seconds}`
    },1000);
});

pause.addEventListener('click', function(){
    // pause.textContent = start.textContent;
    clearInterval(timer);
})

reset.addEventListener('click', function(){
    clearInterval(timer);
    timeDisplay.textContent='StopWatch';
    minutes=0;
    seconds=0;
    
})

