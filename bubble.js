async function bubbleSort(){
  for(var i=1 ; i<=array.length-1; i++){
    for(var j=0; j<=array.length-i-1; j++){
      if(array[j+1]<array[j]){
          swap(j+1,j);
          swapCssHeight(document.querySelectorAll("#bars div")[j+1], document.querySelectorAll("#bars div")[j]);
        }else{
          // just print the animation
          animation(document.querySelectorAll("#bars div")[j+1], document.querySelectorAll("#bars div")[j]);
        }
        await delay();
        await delay();
    }
  }
}
