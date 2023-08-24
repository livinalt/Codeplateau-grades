let b = Math.random() * 100;
console.log(b);
if (b < 50){
    console.log("You scored an F");
}
else if (b >= 50 && b < 60){
    console.log("You Scored a C");
}
else if (b >= 60 && b < 70){
    console.log("You Scored a B");
}
else {
    console.log("You scored A");
}