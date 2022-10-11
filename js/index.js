var valueLeft =[ parseInt(document.querySelectorAll(".value-left-section")[0].innerText),
parseInt(document.querySelectorAll(".value-left-section")[1].innerText),
parseInt(document.querySelectorAll(".value-left-section")[2].innerText)];
var backed = parseInt(document.querySelector(".backed-value").innerText);
var totalBacker = parseInt(document.querySelector(".total-backer-value").innerText);
for(let i=0; i<3;i++){
    if(document.querySelectorAll(".value-left")[i].innerText=='0'){
        document.querySelectorAll(".type")[i].classList.add("out-of-stock");
    }
}


for(let i=0; i<3;i++){
    
    if(document.querySelectorAll(".value-left-section")[i].innerText == 0){
        document.querySelectorAll(".selection-div-section")[i+1].classList.add("out-of-stock");
        document.querySelectorAll(".selection-div-section")[i+1].classList.add("selection-div-section-no-value-left");
        document.querySelectorAll(".type-heading")[i+1].classList.add("type-heading-no-value-left");
    }
}

for(let i=0; i<3;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", () =>{
        document.querySelector(".selection").classList.remove("selection-hide");
        document.querySelector(".selection").classList.add("selection-show");
        document.querySelectorAll(".type-heading")[i+1].classList.toggle("type-heading-selected");
        document.querySelectorAll(".selection-div-section")[i+1].classList.toggle("selection-div-section-selected");
        document.querySelectorAll(".checkbox-round")[i+1].classList.toggle("checkbox-round-selected");
        document.querySelectorAll(".selection-div-section-bottom")[i].classList.toggle("selection-div-section-bottom-hide");
    })
}

for(let i=0; i<4;i++){
    document.querySelectorAll(".selection-div-section")[i].addEventListener("click", () =>{
        if(document.querySelectorAll(".type-heading")[i].innerText =="Pledge with no reward"){
            document.querySelector(".selection").classList.add("selection-hide");
            document.querySelector(".selection").classList.remove("selection-show");
            document.querySelector(".success").classList.remove("success-hide");
            document.querySelector(".success").classList.add("success-show");
            totalBacker +=1;
            document.querySelector(".total-backer-value").innerText = totalBacker;
            document.querySelectorAll(".type-heading")[i].classList.remove("type-heading-selected");
            document.querySelectorAll(".selection-div-section")[i].classList.remove("selection-div-section-selected");
            document.querySelectorAll(".checkbox-round")[i].classList.remove("checkbox-round-selected");
        }else{
            document.querySelectorAll(".type-heading")[i].classList.toggle("type-heading-selected");
            document.querySelectorAll(".selection-div-section")[i].classList.toggle("selection-div-section-selected");
            document.querySelectorAll(".checkbox-round")[i].classList.toggle("checkbox-round-selected");
            document.querySelectorAll(".selection-div-section-bottom")[i-1].classList.toggle("selection-div-section-bottom-hide");

        }
        
    })
}

for(let i=0; i<3;i++){
    document.querySelectorAll(".continue-btn")[i].addEventListener("click", () =>{
        document.querySelector(".selection").classList.add("selection-hide");
        document.querySelector(".selection").classList.remove("selection-show");
        document.querySelector(".success").classList.remove("success-hide");
        document.querySelector(".success").classList.add("success-show");
        valueLeft[i] -=1;
        totalBacker +=1;
        backed += parseInt(document.querySelectorAll(".input")[i].value);
        document.querySelector(".total-backer-value").innerText = totalBacker;
        document.querySelector(".backed-value").innerText = backed;
        document.querySelectorAll(".value-left-section")[i].innerText = valueLeft[i];
        document.querySelectorAll(".value-left")[i].innerText = valueLeft[i];
    })
}



document.querySelector(".btn-back-project").addEventListener("click", () =>{
    document.querySelector(".selection").classList.remove("selection-hide");
    document.querySelector(".selection").classList.add("selection-show");
});
document.querySelector(".close-modal").addEventListener("click", () =>{
    document.querySelector(".selection").classList.add("selection-hide");
    document.querySelector(".selection").classList.remove("selection-show");
    for(let i=0; i<4;i++){
        
            document.querySelectorAll(".type-heading")[i].classList.remove("type-heading-selected");
            document.querySelectorAll(".selection-div-section")[i].classList.remove("selection-div-section-selected");
            document.querySelectorAll(".checkbox-round")[i].classList.remove("checkbox-round-selected");
            if(i!=0){
            document.querySelectorAll(".selection-div-section-bottom")[i].classList.add("selection-div-section-bottom-hide");
        }
        
    }
});

document.querySelector(".success-btn").addEventListener("click", () =>{
    document.querySelector(".success").classList.add("success-hide");
    document.querySelector(".success").classList.remove("success-show");
});

document.querySelector(".bookmark-div").addEventListener("click", () =>{
    document.querySelector(".btn-bookmark").classList.toggle("btn-bookmark-selected");
})

document.querySelector(".hamburger-img").addEventListener("click", () => {
    document.querySelector(".hamburger-img").classList.toggle("hamburger-img-hide");
    document.querySelector(".close-img").classList.toggle("close-img-show");
    document.querySelector("ul").classList.toggle("ul-show");
})
document.querySelector(".close-img").addEventListener("click", () => {
    document.querySelector(".hamburger-img").classList.toggle("hamburger-img-hide");
    document.querySelector(".close-img").classList.toggle("close-img-show");
    document.querySelector("ul").classList.toggle("ul-show");
})
