flag = 1;

function myfunc(){
    let b1 = document.getElementById('b1').value;
    let b2 = document.getElementById('b2').value;
    let b3 = document.getElementById('b3').value;
    let b4 = document.getElementById('b4').value;
    let b5 = document.getElementById('b5').value;
    let b6 = document.getElementById('b6').value;
    let b7 = document.getElementById('b7').value;
    let b8 = document.getElementById('b8').value;
    let b9 = document.getElementById('b9').value;

    let b1btn= document.getElementById('b1');
    let b2btn= document.getElementById('b2');
    let b3btn= document.getElementById('b3');
    let b4btn= document.getElementById('b4');
    let b5btn= document.getElementById('b5');
    let b6btn= document.getElementById('b6');
    let b7btn= document.getElementById('b7');
    let b8btn= document.getElementById('b8');
    let b9btn= document.getElementById('b9');

    if((b1 == 'x' || b1 =='X') && (b2 == 'x' || b2 =='X') )
    //&& (b3 == 'x' || b3 =='X')
{
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b1btn.style.color = 'red';
        b2btn.style.color = 'red';
        b3btn.style.color = 'red';


    }

    else if((b1 == 'x' || b1 =='X') && (b4 == 'x' || b4 =='X') && (b7 == 'x' || b7 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b1btn.style.color = 'red';
        b4btn.style.color = 'red';
        b7btn.style.color = 'red';

    }

    else if((b1 == 'x' || b1 =='X') && (b5 == 'x' || b5 =='X') && (b9 == 'x' || b9 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b4btn.disabled = 'true';
        b6btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';

        b1btn.style.color = 'red';
        b5btn.style.color = 'red';
        b9btn.style.color = 'red';

    }

    else if((b3 == 'x' || b3 =='X') && (b6 == 'x' || b6 =='X') && (b9 == 'x' || b9 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';

        b3btn.style.color = 'red';
        b6btn.style.color = 'red';
        b9btn.style.color = 'red';

    }

    else if((b7 == 'x' || b7 =='X') && (b8 == 'x' || b8 =='X') && (b9 == 'x' || b9 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';

        b7btn.style.color = 'red';
        b8btn.style.color = 'red';
        b9btn.style.color = 'red';

    }

    else if((b4== 'x' || b4 =='X') && (b5== 'x' || b5 =='X') && (b6 == 'x' || b6 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b4btn.style.color = 'red';
        b5btn.style.color = 'red';
        b6btn.style.color = 'red';

    }

    else if((b2 == 'x' || b2 =='X') && (b5 == 'x' || b5 =='X') && (b8 == 'x' || b8 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b1btn.disabled = 'true';
        b3btn.disabled = 'true';
        b4btn.disabled = 'true';
        b6btn.disabled = 'true';
        b7btn.disabled = 'true';
        b9btn.disabled = 'true';

        b2btn.style.color = 'red';
        b5btn.style.color = 'red';
        b8btn.style.color = 'red';

    }

    else if((b3 == 'x' || b3 =='X') && (b5 == 'x' || b5 =='X') && (b7 == 'x' || b7 =='X')){
        document.getElementById('won').innerHTML = "PLayer X Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b4btn.disabled = 'true';
        b6btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b3btn.style.color = 'red';
        b5btn.style.color = 'red';
        b7btn.style.color = 'red';

    }

   else if((b1 == '0' || b1 =='0') && (b2 == '0' || b2 =='0') && (b3 == '0' || b3 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b1btn.style.color = 'blue';
        b2btn.style.color = 'blue';
        b3btn.style.color = 'blue';


    }

    else if((b1 == '0' || b1 =='0') && (b4 == '0' || b4 =='0') && (b7 == '0' || b7 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b1btn.style.color = 'blue';
        b4btn.style.color = 'blue';
        b7btn.style.color = 'blue';

    }

    else if((b1 == '0' || b1 =='0') && (b5 == '0' || b5 =='0') && (b9 == '0' || b9 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b4btn.disabled = 'true';
        b6btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';
  
        b1btn.style.color = 'blue';
        b5btn.style.color = 'blue';
        b9btn.style.color = 'blue';

    }

    else if((b3 == '0' || b3 =='0') && (b6 == '0' || b6 =='0') && (b9 == '0' || b9 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';

        b3btn.style.color = 'blue';
        b6btn.style.color = 'blue';
        b9btn.style.color = 'blue';

    }

    else if((b7 == '0' || b7 =='0') && (b8 == '0' || b8 =='X') && (b9 == '0' || b9 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b6btn.disabled = 'true';

        b7btn.style.color = 'blue';
        b8btn.style.color = 'blue';
        b9btn.style.color = 'blue';

    }

    else if((b3 == '0' || b3 =='0') && (b6 == '0' || b6 =='0') && (b9 == '0' || b9 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b4btn.disabled = 'true';
        b5btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';

        b3btn.style.color = 'blue';
        b6btn.style.color = 'blue';
        b9btn.style.color = 'blue';

    }

    else if(( b4 == '0' || b4 =='0') && (b5 == '0' || b5 =='0' ) && (b6 == '0' || b6 =='0' )){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b3btn.disabled = 'true';
        b7btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b4btn.style.color = 'blue';
        b5btn.style.color = 'blue';
        b6btn.style.color = 'blue';
    }

    else if((b3 == '0' || b3 =='0') && (b5== '0' || b5 =='0') && (b7 == '0' || b7 =='0')){
        document.getElementById('won').innerHTML = "PLayer 0 Won !!!";

        b1btn.disabled = 'true';
        b2btn.disabled = 'true';
        b4btn.disabled = 'true';
        b6btn.disabled = 'true';
        b8btn.disabled = 'true';
        b9btn.disabled = 'true';

        b3btn.style.color = 'blue';
        b5btn.style.color = 'blue';
        b7btn.style.color = 'blue';

    }

    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'|| b2 == '0') && (b3 == 'X' || b3 == '0') && (b4 == 'X' || b4 == '0') && 
    (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') ) { 
        document.getElementById('won').innerHTML = "....Game Tie...."; 
    } 

    else { 
  
        if (flag == 1) { 
           document.getElementById('won').innerHTML = "Player 0 Turn"; 
        } 
        else { 
            document.getElementById('won').innerHTML = "Player X Turn"; 
        } 
    } 

}
//used to reset the whole game

btn.addEventListener('click' ,reset );
function reset(e) { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
}



b1.addEventListener('click' ,myfunc1 );
function myfunc1(e){
    if(flag==1){
        document.getElementById('b1').value= 'X';
        document.getElementById('b1').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b1').value= '0';
        document.getElementById('b1').disabled= true;
        flag=1;
    }
}

b2.addEventListener('click' ,myfunc2 );
function myfunc2(e){
    if(flag==1){
        document.getElementById('b2').value= 'X';
        document.getElementById('b2').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b2').value= '0';
        document.getElementById('b2').disabled= true;
        flag=1;
    }
}

b3.addEventListener('click' ,myfunc3 );
function myfunc3(e){
    if(flag==1){
        document.getElementById('b3').value= 'X';
        document.getElementById('b3').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b3').value= '0';
        document.getElementById('b3').disabled= true;
        flag=1;
    }
}

b4.addEventListener('click' ,myfunc4 );
function myfunc4(e){
    if(flag==1){
        document.getElementById('b4').value= 'X';
        document.getElementById('b4').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b4').value= '0';
        document.getElementById('b4').disabled= true;
        flag=1;
    }
}

b5.addEventListener('click' ,myfunc5 );
function myfunc5(e){
    if(flag==1){
        document.getElementById('b5').value= 'X';
        document.getElementById('b5').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b5').value= '0';
        document.getElementById('b5').disabled= true;
        flag=1;
    }
}

b6.addEventListener('click' ,myfunc6 );
function myfunc6(e){
    if(flag==1){
        document.getElementById('b6').value= 'X';
        document.getElementById('b6').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b6').value= '0';
        document.getElementById('b6').disabled= true;
        flag=1;
    }
}

b7.addEventListener('click' ,myfunc7 );
function myfunc7(e){
    if(flag==1){
        document.getElementById('b7').value= 'X';
        document.getElementById('b7').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b7').value= '0';
        document.getElementById('b7').disabled= true;
        flag=1;
    }
}

b8.addEventListener('click' ,myfunc8 );
function myfunc8(e){
    if(flag==1){
        document.getElementById('b8').value= 'X';
        document.getElementById('b8').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b8').value= '0';
        document.getElementById('b8').disabled= true;
        flag=1;
    }
}

b9.addEventListener('click' ,myfunc9 );
function myfunc9(e){
    if(flag==1){
        document.getElementById('b9').value= 'X';
        document.getElementById('b9').disabled= true;
        flag=0;
    }
    else{
        document.getElementById('b9').value= '0';
        document.getElementById('b9').disabled= true;
        flag=1;
    }
}
