let a = "<br>Hello Iam from external file<br>";
document.write(a);
let b=0;
setInterval(()=>{
    const current = new Date();
    document.getElementById("me").innerHTML = "Current Time "+current.toLocaleTimeString("en-US");
},1000)