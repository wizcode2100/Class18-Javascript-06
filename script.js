

// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');

// for(let i=1; i<=5; i++){  // 1 2 3 4 5 6
    // console.log(i);
    // console.log('Hello World');

// }

let marks =  [80, 83, 91, 57, 90, 70, 98, 54, 10, 100];


    // console.log(Marks[0]);
    // console.log(Marks[1]);
    // console.log(Marks[2]);
    // console.log(Marks[3]);
    // console.log(Marks[4]);
    // console.log(Marks[5]);
    // console.log(Marks[6]);
    // console.log(Marks[7]);
    // console.log(Marks[8]);
    // console.log(Marks[9]);

    for(let i=0; i<=10; i++){ // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        // console.log(marks[i]);

        if(marks[i]<0 || [i]>100){
        console.log('Invalid Marks');
        }

        else if(marks[i]>=80){
        console.log(marks[i]+'=The grade is A+');

        }

         else if(marks[i]>=70){
        console.log(marks[i]+'=The grade is A');
    }

    else if(marks[i]>=60){
        console.log(marks[i]+'=The grade is A-');
    }

    else if(marks[i]>=50){
        console.log(marks[i]+'=The grade is B');
    }

    else if(marks[i]>=40){
        console.log(marks[i]+'=The grade is C');
    }

    else if(marks[i]>=33){
        console.log(marks[i]+'=The grade is D');
    }

    else{
        console.log(marks[i]+'=The grade is F');
    }
}


    
