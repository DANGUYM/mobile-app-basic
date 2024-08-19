// 1
counter = [1,2,3,4,5,6,7,8,9,10];
function printNumbers1_10() {
    for(var i = 0; i <+ 10; i++){
        console.log(i);
    }
}
// printNumbers1_10();

function printNumbers0_9(counter) {
    for(var i in counter){
        console.log(i);
    }
}
// printNumbers0_9(counter);

// 2
function printNumbers1_100_ood() {
    for(var i = 0; i <+ 100; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}

// printNumbers1_100_ood();

//3
function multiplication_table_with_7(){
    for(var i = 1;i<=10; i++){
        console.log(`7 x ${i} = ${7*i}`);
    }
}
// multiplication_table_with_7();


