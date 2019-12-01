
function MakeBold(){

    var result = document.getElementById("demo")

    if (result.style.fontWeight=="bold"){

        result.style.fontWeight="normal";    

    }

    else{

        result.style.fontWeight="bold";    


    }
}



function MakeItalic(){
   
    var result = document.getElementById("demo");
    result.style.fontStyle="italic";

}


function MakeUnderlline(){


    var result= document.getElementById("demo");
    result.style.textDecoration="underline";


}



function ChangeSize(){
    var result= document.getElementById("demo");
    result.style.fontSize=document.getElementById("size").value;

}



function ChangeFont(){
    var result= document.getElementById("demo");
    result.style.fontFamily=document.getElementById("police").value;
}