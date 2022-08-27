
/**
 // -----------Tree type of scope----------//
 // ======= just let and const variable er khetre =====//

 1. global scope
 2. local scope (fanctional scope)
 3. block scope
 */


/*  // ==========global scope ==========//
  const x = 10;
  const y = 12;

  if (true){
    console.log(x);
  }
  console.log(y);
  // global scope hocche amon akti system, jar variable, document (duniar) er jekhanei declar kora hok na kno , se tar value print korbei.
  // var variable er khetre hobe.
  // */

  

 /* // ========= local scope (fanctional scope) ========//
 function add (){
    const total = 4 + 6;
    console.log(total);
 }
 add();
//  console.log(total)
// functional scope er variable jodi o var diye declar kori na kno , tarporeo functional scope er baire kothaw sei var er value output e pabo na. functional scope e let and const and var same kaj kore;
// */




 /*  // ============ Block Scope (const  er khetre) ========//
  const x = 12;
  {
    const x = 10;
    console.log('inside block', x)
  }
  console.log('outside block', x)

  // block scope hocche amon ak system, jar variable er man jekhanei declar kori na kno se ta output hisebe block scope er moddhe dibe. but block scope er vitore variable declar korle tar output block scope er baire pawa jabe na.
  // var variable er khetre hobe.
  // */