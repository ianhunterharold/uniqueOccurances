/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let hashed = {};
  
      for (let i= 0; i< arr.length; i++){
         if (!hashed[arr[i]]){
           hashed[arr[i]] = 1;
         } else {
           hashed[arr[i]] += 1;
         }
      }
     
     let arrayOfValues = Object.values(hashed);
     let sortedSmallToLarge = arrayOfValues.sort(function(a,b){return a-b});
  
     for (let j=0; j < sortedSmallToLarge.length; j++){
       if ( sortedSmallToLarge[j] === sortedSmallToLarge[j + 1]){
         return false;
       }
     }
    return true;
  };