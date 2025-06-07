let number = Math.floor(Math.random() * 5) + 1;
let clickcount=3;
function guessNumber(){
do{


    clickcount--;
let userNumber=document.getElementById("txtInput").value;

if(clickcount>0){
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
}else{

    document.getElementById('messageDisplay').innerText = "You have use 3 chances...!";

}
}while(clickcount==0)
}

