// write code here
let str = '31 45 12 67 34 86 23 37 19 41';
let str2 = str.split(' ').map(Number);;
console.log(str2);
let str3 = str2.filter(x => x<40);
console.log(str3);
let result = 0;
for (let num of str3){
    result += num;
}
console.log(result);