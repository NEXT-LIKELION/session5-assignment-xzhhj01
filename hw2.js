let count =4;
for (let i=0; i<5; i+=1){
    console.log(`${' '.repeat(count)}`+'*'.repeat(i*2+1)+`${' '.repeat(count)}`);
    count -= 1;
}