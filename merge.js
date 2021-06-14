
async function mergeSort(){
  array = mergeSortHelper(array,0,array.length-1);
  for(var i=0;i<array.length;i++){
    document.querySelectorAll("#bars div")[i].style.height=array[i]+"em";
  }
}



function mergeSortHelper(arr,l,h){

  if(l>=h){
    var barr = [];
    barr.push(arr[l]);
    return barr;
  }

  var mid = Math.floor((l+h)/2);
  var fsa = mergeSortHelper(arr,l,mid);
  var ssa = mergeSortHelper(arr,mid+1,h);
  var msa = mergeSortedArrays(fsa,ssa);

  return msa;
}



function mergeSortedArrays(arr1,arr2){
  var nas = arr1.length + arr2.length;
  var narr = [];
  var p=i=j=0;
                     // animation should be here
  while(i<=arr1.length-1 && j<=arr2.length-1){
    if(arr1[i]<=arr2[j]){
      narr[p]=arr1[i];
      i++;
      p++;
    }else{
      narr[p]=arr2[j];
      j++;
      p++;
    }
  }

  while(i<=arr1.length-1){
    narr[p]=arr1[i];
    i++;
    p++;
  }

  while(j<=arr2.length-1){
    narr[p]=arr2[j];
    j++;
    p++;
  }

  return narr;
}
