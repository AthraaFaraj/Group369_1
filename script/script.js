// start of index
const stars=document.querySelectorAll(".star1");
const rating=document.querySelector(".rating");

for (let i = 0; i < stars.length; i++) {
    stars[i].star1V=i+1;
    // console.log("star1V");
    ["click"].forEach(function (e) {
        
  
   stars[i].addEventListener(e,rate)
    // console.log(e);
  })
function rate (e) {
// let type=e.type;
let star1V=this.star1V;

// if (type ==="click"){
if(star1V>=1){
    rating.innerHTML=star1V+"/5"
}
// }
stars.forEach(function (elem,vv) {
    // console.log(vv);
    // console.log(elem);
    // if(type ==="click"){
        if(vv<star1V){
            elem.classList.add("fix")
        }
        else{
            elem.classList.remove("fix")

        }
    // }
    // if(type === "mouseover") {
    //            if(vv < star1V){
    //                elem.classList.add("oo")
    //            }
    //            else{
    //                ele.classList.remove("oo");
    //            }
    //        }
          
})

}
}
const stars2=document.querySelectorAll(".star2");
const rating2=document.querySelector(".rating2");

for (let i = 0; i < stars2.length; i++) {
    stars2[i].star2V=i+1;
    // console.log("star1V");
    ["click"].forEach(function (e2) {
        
  
   stars2[i].addEventListener(e2,rate2)
    // console.log(e);
  })
function rate2 (e2) {
// let type=e.type;
let star2V=this.star2V;

// if (type ==="click"){
if(star2V>=1){
    rating2.innerHTML=star2V+"/5"
}
// }
stars2.forEach(function (elem2,vv2) {
    // console.log(vv);
    // console.log(elem);
    // if(type ==="click"){
        if(vv2<star2V){
            elem2.classList.add("fix2")
        }
        else{
            elem2.classList.remove("fix2")

        }
    // }
    // if(type === "mouseover") {
    //            if(vv < star1V){
    //                elem.classList.add("oo")
    //            }
    //            else{
    //                ele.classList.remove("oo");
    //            }
    //        }
          
})

}
}
const stars3=document.querySelectorAll(".star3");
const rating3=document.querySelector(".rating3");

for (let i = 0; i < stars3.length; i++) {
    stars3[i].star3V=i+1;
    // console.log("star1V");
    ["click"].forEach(function (e3) {
        
  
   stars3[i].addEventListener(e3,rate3)
    // console.log(e);
  })
function rate3 (e3) {
// let type=e.type;
let star3V=this.star3V;

// if (type ==="click"){
if(star3V>=1){
    rating3.innerHTML=star3V+"/5"
}
// }
stars3.forEach(function (elem3,vv3) {
    // console.log(vv);
    // console.log(elem);
    // if(type ==="click"){
        if(vv3<star3V){
            elem3.classList.add("ff")
        }
        else{
            elem3.classList.remove("ff")

        }
    // }
    // if(type === "mouseover") {
    //            if(vv < star1V){
    //                elem.classList.add("oo")
    //            }
    //            else{
    //                ele.classList.remove("oo");
    //            }
    //        }
          
})

}
}


// start of course page script
const readMore= document.querySelector(".btn_description");
const text  = document.querySelector(".text");
const readMore2=document.querySelector(".btn_Learn");
const ulMore=document.querySelector(".ul_learn")

readMore.addEventListener("click", (e)=> {
    text.classList.toggle("show_more");
    if(readMore.innerText === "Read More"){
        readMore.innerText = "Read Less";
    }
    else{
        readMore.innerText ="Read More";
    }
})
readMore2.addEventListener("click",(v)=>{
    ulMore.classList.toggle("show_li_more");
    if(readMore2.innerText === "Read More"){
        readMore2.innerText="Read Less";
    }
    else{
        readMore2.innerText="Read More";
    }

})

const enrollBtn=document.querySelector("#enrol_course");
const divCounter=document.querySelector(".div_counter");
let integer=0;
enrollBtn.addEventListener("click", (g)=>{
    integer+=1;
    // divCounter.classList.toggle("addCounter");
    divCounter.innerText=integer;
    // window.open('index.html');
    window.open('contentOFCourse.html');
    // document.getElementById("ff").appendChild(divCounter)
   
})
