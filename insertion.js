async function insertionSort(){
  for(let i=1; i<=array.length-1; i++){
    for(let j=i; j>=1; j--){
      if(array[j]<array[j-1]){
        swap(j,j-1);
        swapCssHeight(document.querySelectorAll("#bars div")[j],document.querySelectorAll("#bars div")[j-1]);
      }
      else{
        break;
      }
      await delay();
    }

  }
}
