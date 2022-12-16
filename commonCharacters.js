/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



<<<<<<< HEAD
var commonCharacters = function(string1, string2) {
   var result='';
   if (string1.length === 0 || string2.length === 0) {
      result = "";
   } else {
   for (var i = 0; i< string1.length; i++) {
   for(var j=0;j<string2.length;j++){
      if (string1[i] === string2[j] && !result.includes(string2[j])) {
         result=result+string2[j];
   }
   }
   }
=======
 var commonCharacters = function(string1, string2) {
   var result=""
   for(var i=0;i<string1.length;i++){
 
       if(string2.includes(string1[i])&&result.indexOf(string1[i])===-1){
         result=result+string1[i]
       }
     
   }
 return result
   }
   
>>>>>>> c473d68be23264a5bd154c399864a7147f10880b
    
   }
   return result; 
   }