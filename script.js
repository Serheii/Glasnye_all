"use strict";

function f1(vhod){
  let glasn = {'а':true, 'у':true, 'о':true, 'ы':true, 'э':true, 'я':true, 'ю':true, 'ё':true, 'и':true, 'е':true};
  let a = vhod.toLowerCase().split('');
  let sum = 0;
  a.forEach(function(c){
    
  if  (c in glasn){
    sum++;
  }
  }
  );
  return sum;
  };

function f2(vhod){
  let glasn = {'а':true, 'у':true, 'о':true, 'ы':true, 'э':true, 'я':true, 'ю':true, 'ё':true, 'и':true, 'е':true};
  let a = vhod.toLowerCase().split('');
  let sum = 0;
  let a2 = a.filter(function(c){
    
  if  (c in glasn)
    return true;
  }
  );
  return a2.length;
  };

function f3(vhod) {
  let glasn = { 'а': true, 'у': true, 'о': true, 'ы': true, 'э': true, 'я': true, 'ю': true, 'ё': true, 'и': true, 'е': true };
  let a = vhod.toLowerCase().split('');
  let sum = 0;
      sum = a.reduce(function(sum, c) {

    if (c in glasn) {
      sum++;
    }
    return sum;
  }, 0
  );
  return sum;
};
(function (word){
  console.log('forEach = '+f1(word) +'\n'+
              'filter = '+f2(word) +'\n'+
              'reduce = '+f3(word))
})('Молоко из коровы')