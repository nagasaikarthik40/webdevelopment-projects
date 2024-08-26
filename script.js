let screen=document.getElementById("screen");
let buttons=document.querySelectorAll('button');
let screenValue='';

for(let item of buttons)
{
    item.addEventListener('click', clickedButton)
}

function clickedButton(e)
{
    buttonText=e.target.innerText;

    if(buttonText=='C')
    {
        screenValue='';
        screen.value=screenValue;
    }
    else if(buttonText=='=')
    {
        screen.value=eval(screenValue)
    }

    else{
        screenValue+=buttonText;
        screen.value=screenValue;
    }
}