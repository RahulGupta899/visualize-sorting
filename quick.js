
function quickSort(){
  quickSortHelper(0,array.length-1);
}

function quickSortHelper(l,h){
  if(l>=h){
    return;
  }
  var partIndex = partition(array[h],l,h);
  quickSortHelper(l,partIndex-1);
  quickSortHelper(partIndex+1,h);
}

function partition(pivot,l,h){
  var i=l;
  var j=l;
  while(i<=h){
    if(array[i]>pivot){
      i++;
    }else{
      swap(i,j);
      swapCssHeight(document.querySelectorAll("#bars div")[i],document.querySelectorAll("#bars div")[j])
      i++;
      j++;
    }
  }
  return j-1;
}
