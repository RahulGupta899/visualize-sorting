async function selectionSort(){
  for(let i=0; i<=array.length-2;i++){
    let min = i;
    for(let j=i+1;j<=array.length-1;j++){
      if(array[j]<array[min]){
        min = j;
      }
    }
    await delay();
    swap(i,min);
    swapCssHeight(document.querySelectorAll("#bars div")[i],document.querySelectorAll("#bars div")[min]);
    }
}
