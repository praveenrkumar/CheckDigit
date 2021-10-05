// Array Creation

var num = [6,2,9,1,0,4,1,5,0,0,2,1];

var value = [];

// Array Looping and Multiplication

for(i=0;i<num.length;i++){
    if(i%2===0){
        var val = num[i]*1;
        value.push(val);
    }
    else{
        val=num[i]*3;
        value.push(val);
    }
}
console.log(value);

// To find Nearest value (Formula:N/10*10)

var sum = 0;

// Adding of entire Array

for(k=0;k<value.length;k++){
    sum += value[k];
}
console.log(sum);

// X value

x=sum/10;
console.log(x);

// Y value (Rounding off)

y=Math.round(x);
console.log(y)

// Z value 

z=y*10;
console.log(z);

// Final Result of N13

var result = z-sum;
console.log(result);

