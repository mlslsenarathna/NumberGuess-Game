let number = Math.floor(Math.random() * 5) + 1;

function guessNumber(){

let userNumber=document.getElementById("txtInput").value;


if(userNumber>5 || userNumber<1){
    document.getElementById('messageDisplay').innerText = "You  have Entered Wrong Number please Check .!";
        
}else{
if(number==userNumber){
    

        document.getElementById('messageDisplay').innerText = "You  have Win....!";
        


}else{
    document.getElementById('messageDisplay').innerText = "Try again....!";
        
    
}
console.log();
}
}