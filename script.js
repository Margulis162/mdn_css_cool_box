// var
const box = document.getElementById("cool_box");
let shadow ="";
// f(x)
function long_shadow(){
    
    for(i = 0; i < 1000; i++){
        
        shadow += `${i}px ${i}px 4px rgb(66, 5, 86),` ;
       
    }
    shadow = shadow.slice(0, -1);
    console.log(shadow);
    box.style.boxShadow = shadow;
}


// flow
long_shadow();