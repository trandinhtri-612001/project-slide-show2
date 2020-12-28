



    let a=document.getElementById("bos");
let index=0;
function add(){
    if(index < 450){
        index+=5;
        a.style.right= "px" - index;
        a.style.left= index + "px";
        console.log(a.style.left)
    }
}
function sub(){
    if(index < 450){
        index+=5;
        a.style.right= index + "px";
        a.style.left= "px" - index;
        console.log(a.style.left)
    }
}

