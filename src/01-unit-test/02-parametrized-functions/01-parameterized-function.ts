// export function counterParameter(num): number {
//   if (num < 0) {
//     return 0;
//   }
//   else{
//       return num+1;
//   }
// }


export function getUniqueWords(str:String){
  let splitStr=str.toLowerCase().split(' ').sort();
  let uniqueArray=([...new Set(splitStr)]);
  return uniqueArray;
}