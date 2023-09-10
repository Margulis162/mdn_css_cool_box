// var
const box = document.getElementsByClassName("cool_box");

let shadow ="";
// f(x)
function long_shadow(){
    
    for(i = 0; i < 1000; i++){
        
        shadow += `${i}px ${i}px 4px rgb(66, 5, 86),` ;
       
    }
    shadow = shadow.slice(0, -1);
   
    box[0].style.boxShadow = shadow;
    box[1].style.boxShadow = shadow;
    box[2].style.boxShadow = shadow;
}


function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  for (let i = 0; i < box.length; i++){
    box[i].addEventListener('click', (e)=>{
        box[i].style.backgroundColor =`rgb(${random(0,255)},${random(0,255)}, ${random(0,255)})`;
    })
  }


// flow
long_shadow();


