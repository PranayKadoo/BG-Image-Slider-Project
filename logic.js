const pics=[
    "img1", "img2", "img3", "img4", "img5", "img6"
];
let count=0;
container.style.background = `url('${pics[3]}.jpg') no-repeat center center`;
container.style.backgroundSize= "100vw, 100vw";
function left(){
    if(count>0){
count--;
container.style.background = `url('${pics[count]}.jpg') no-repeat center center`;
container.style.backgroundSize= "100vw, 100vw";
console.log(count);
    }
    else{
        count = pics.length;
    }
}
function right(){
    if(count<pics.length-1){
    count++;
    container.style.background = `url('${pics[count]}.jpg') no-repeat center center`;
    container.style.backgroundSize= "100vw, 100vw";
    console.log(count);
    }
    else{
        count = -1;
    }
    }