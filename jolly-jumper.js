/*
 A sequence of n > 0 integers is called a jolly jumper if the absolute values of the difference between successive elements take on all the values 1 through n-1. For instance,

1 4 2 3

is a jolly jumper, because the absolutes differences are 3, 2, and 1 respectively. The definition implies that any sequence of a single integer is a jolly jumper. You are to write a program to determine whether or not each of a number of sequences is a jolly jumper.
 */

 const isJollyJumber = (numbers) =>{
     const set = [];
     for(let i=1;i<=numbers.length -1;i++) {
         set.push(i);
     }
     set;
     for(let i=0;i<=numbers.length -1;i++) {
        let index = set.indexOf(Math.abs(numbers[i]-numbers[i+1]));
        if(index!==-1){
            set.splice(index,1);
        }

     }
     return set.length === 0;
 }

 console.log(isJollyJumber([1,4,2,3]))
 console.log(isJollyJumber([5,1,4,2,3]))
 console.log(isJollyJumber([4,1,4,2,3]))
 
 