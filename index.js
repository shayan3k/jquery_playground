
// A $( document ).ready() block.

let flag = 1;
setInterval(()=>{
    // check if flag is true or not and excute accordingly
        $('#selected').animate({
            opacity: flag,
            backgrounColor : "red"
          }, 1000, function() {
            // Animation complete.
            console.log('comnpleted');
          })
    
    // toggle the flag value
    flag = !flag;
    console.log('test');
} , 2000)



flag1 = true;
document.querySelector('#button').addEventListener('click' , ()=>{

    if(flag1)
    document.querySelector('.target-card').style.cssText = 'opacity:0';
    else
    document.querySelector('.target-card').style.cssText = 'opacity:1';

    flag1 = !flag1;
})






counter = 1;
flag2 = true;

document.querySelector('#button1').addEventListener('click' , ()=>{

    // if(flag2)
    document.querySelector('.target-rotating-class').classList.add('animation-class');
    // else
    // document.querySelector('.target-rotating-class').classList.remove('animation-class');


    document.querySelector('.target-rotating-class').style.cssText = `animation-duration : ${counter}`;

    // flag2 = !flag2;
    counter++;
})

