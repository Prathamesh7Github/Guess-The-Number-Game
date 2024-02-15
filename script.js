(function (){


let input=document.querySelector('.myInput');
let text=document.querySelector('.addEle');
let submitButton=document.querySelector('.submit');
let guessResult=document.querySelector('.guessRes');
let restart=document.querySelector('.restart');
let form=document.querySelector('form');

//console.log(Math.floor(Math.random()*100));
let machineNO=Math.floor(Math.random()*100);
console.log(machineNO);

//text.innerText=Math.floor(Math.random()*100);

/*
input.addEventListener('change',(e)=>{
    console.log(e.target.value);
    text.innerText=e.target.value;
})
*/

let myVal;
let arr=[];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   // text.innerText=parseInt(input.value);
    myVal=input.value;
    console.log(myVal);
    console.log(machineNO);

    if(myVal < machineNO){
        guessResult.innerText='TO Low!';
        console.log('TO Low!');
    }
    else if(myVal>machineNO){
        guessResult.innerText='To High!';
        console.log('To High!');
    }
    else{
        guessResult.innerText='You got it! Congrats';
        console.log('Congrates');
        submitButton.disabled=true;
        restart.disabled=false;
        input.disabled=true;
    }
    
    arr.push(myVal);
    text.innerText='Your Guesses : '+arr.join(', ');
})



restart.addEventListener('click',()=>{
  //arr=null;
    arr=[];
  text.innerText='';
  guessResult.innerText='';
  machineNO=Math.floor(Math.random()*100);
  input.value=0;
  submitButton.disabled=false;
  restart.disabled=true;
  input.disabled=false;
})

})();