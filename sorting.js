

var array = [];

generateBars();

// ***js required to change the value of range type input for no of bars
document.querySelector("#noBarsInput").addEventListener('change',function() {
  this.setAttribute('value',this.value);   // to change
  generateBars();
});

// ***js required to change the value of range type input for speed of animation
document.querySelector("#speedInput").addEventListener('change',function() {
  this.setAttribute('value',this.value);   // to change
});


const newArrayBtn = document.querySelector(".newArray");
newArrayBtn.addEventListener("click",generateBars);

const bubbleBtn = document.querySelector(".bubble");
bubbleBtn.addEventListener("click",bubbleSort);

const selectionBtn = document.querySelector(".selection");
selectionBtn.addEventListener("click",selectionSort);

const insertionBtn = document.querySelector(".insertion");
insertionBtn.addEventListener("click",insertionSort);

const mergeBtn = document.querySelector(".merge");
mergeBtn.addEventListener("click",mergeSort);

const quickBtn = document.querySelector(".quick");
quickBtn.addEventListener("click",quickSort);


// Functions
function findRandom(){
  var n = Math.random();
  n = n * 30; // height will range from 1 to 30
  n = Math.floor(n) + 1;
  return n;
}

function generateBars(){
  array = [];

  // To remove all existing divs made for bars from html file
   var existbars = document.querySelectorAll("#bars div");
   existbars.forEach(function(eachdiv){
     eachdiv.remove();
   })

  var noBars = Number(document.querySelector("#noBarsInput").getAttribute("value"));
  console.log(noBars);

  for(var i=0;i<noBars;i++){
    array.push(findRandom());
    // creating sub divs in div having id as bars
    var newdiv = document.createElement("DIV");
    document.querySelector("#bars").appendChild(newdiv);

    document.querySelectorAll("#bars div")[i].classList.add("bar");
    document.querySelectorAll("#bars div")[i].style.height=array[i]+"em";
  }
}

function swap(f,l){
  var temp = array[f];
  array[f] = array[l];
  array[l] = temp;
}

async function swapCssHeight(el1,el2){
      el1.style.background="#F55C47";   // animation for elements to swap
      el2.style.background="#F55C47";

      await delay();

      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);

      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");

      el1.style.height = transform2;
      el2.style.height = transform1;

      el1.style.background="#4AA96C";
      el2.style.background="#4AA96C";
    }

async function animation(el1,el2){
  el1.style.background="#9FE6A0";   // animation for elements to swap
  el2.style.background="#9FE6A0";
  await delay();
  el1.style.background="#4AA96C";
  el2.style.background="#4AA96C";
}

function delay() {
    var speed = document.querySelector("#speedInput").getAttribute("value");
    return new Promise(resolve => {
      setTimeout(function(){
        resolve();
      }, speed);
    });
    }
