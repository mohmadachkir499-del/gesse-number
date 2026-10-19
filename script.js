let secruteNumber= Math.trunc(Math.random() * 20 + 1);
let boxSicuretNumbr = document.getElementById("ereas-securite");
boxSicuretNumbr.value = secruteNumber;
let formeNumber = document.querySelector(".the-forme");
let score= document.querySelector(".score");
let saveScore = window.localStorage.getItem("scoore");
score.textContent = saveScore || 0 ;
let currentScor = Number(score.textContent) ;
let messageGame = document.getElementById("message");
let checkBtn = document.getElementById("check");
let playAgain = document.getElementById("again-btn");
let sumbole = document.getElementById("hd-sum")
let videoWin = document.getElementById("video")
let songWin = document.getElementById("correct-song")
let wrongCount = document.getElementById("try")
let wrong = Number(wrongCount.textContent);
wrongCount.textContent = wrong;
let info = document.getElementsByClassName("info-game")[0]; 
let infoText = document.getElementsByClassName("info-value")[0]; 
let bxLose = document.getElementsByClassName("box-lose")[0]; 
let bergerToggell = document.getElementsByClassName("toggel")[0]; 
let navMenu = document.getElementsByClassName("nav-menu")[0]; 
let headNav = document.getElementById("return-the-nav-bar")
let hr = document.getElementById("h")
let trysParent = document.getElementsByClassName("trys")[0]; 
let scoorParent = document.getElementsByClassName("scoor")[0]; 
let Prametre = document.getElementById("Prametre-btn")
let xForHeadInfoCard = document.getElementById("headInfoText")
let application = document.getElementById("apllicate-color")
let color = document.getElementById("color-ereas")
let parameterPage = document.getElementsByClassName("the-parent-for-settings")[0]; 
let headPage = document.getElementById("head-parameter-page")

document.body.style.cssText = `background-color: ${window.localStorage.getItem("color-body-custumise")};`
color.value = window.localStorage.getItem("color-body-custumise");
//the fonction of the button check
checkBtn.onclick = function() {
    score.textContent = window.localStorage.getItem("scoore");
    setTimeout(() => {
        formeNumber.focus()
    }, 700);
    let userNumber= Number(formeNumber.value);
    let secrtNumber= Number(boxSicuretNumbr.value);
    
    if(formeNumber.value == "") {
        messageGame.textContent = "❌write a correct number please";
        formeNumber.classList.add('empty')
        setTimeout(() => {
            formeNumber.classList.remove('empty')
        }, 600);
        score.textContent = window.localStorage.getItem("scoore");
    }else if(userNumber == secrtNumber) {
        playAgain.classList.add("head-video")
        //add 5 to score if you win 
        currentScor += 10;
        score.textContent = currentScor 
        window.localStorage.setItem("scoore", currentScor);
        // message if you win
        messageGame.textContent = "🎉✨ you win the number is true🏅🎯";
        // chenge color to body if the number true
        videoWin.classList.add("head-video")
        videoWin.play()
        // show the securite number
        sumbole.classList.add("head-sumbole")
        //you dont cant typing after win
        formeNumber.setAttribute("readonly","")
        // animation win
        messageGame.classList.add("effect-win")
        // animation for play again button
        playAgain.classList.add("again-animation")
        // add correct song
        songWin.play()
        //stop the chek button of running
        checkBtn.setAttribute("disabled","")
    }else if(userNumber !== secrtNumber) {
        // this condition for counter logique
        wrongCount.textContent++;
        if (wrongCount.textContent == 4) {
            let  myScor = window.localStorage.getItem("scoore");
            myScor -= 20;
            window.localStorage.setItem("scoore", myScor);
            bxLose.classList.add("box-lose-show")
            playAgain.classList.add("head-video")
            playAgain.classList.add("again-animation")
            sumbole.classList.add("head-sumbole")
            //stop the chek button of running
            checkBtn.setAttribute("disabled","")
        }
        score.textContent = window.localStorage.getItem("scoore");

        //animation for wrong
        formeNumber.classList.add('wrong')
        // clean the forme after wrong
        setTimeout(() => {
            formeNumber.value = "";
        }, 400);
        
        //remove the animation class after clean the forme  by 0.5s 
        setTimeout(() => {
            formeNumber.classList.remove('wrong')
        }, 1000);
        
        if(userNumber > secrtNumber){
            messageGame.textContent = "the number is big 📈 you should increase ";
        }else if(userNumber < secrtNumber) {
            messageGame.textContent = "the number is low 📉 you should decrease";
        }
    }
}


playAgain.onclick = function() {
    score.textContent = window.localStorage.getItem("scoore");
    formeNumber.focus()

    playAgain.classList.remove("head-video")
    //new message
    messageGame.textContent = "go again 👏";

    // change number securite 
    boxSicuretNumbr.value = Math.trunc(Math.random() * 20 + 1);
    boxSicuretNumbr.textContent = boxSicuretNumbr.value;
    
    // remove the color to body if the number true
    videoWin.classList.remove("head-video")
    
    // hide the securite number
    sumbole.classList.remove("head-sumbole")
    
    //you dont cant typing after win
    formeNumber.removeAttribute("readonly")
    
    //remove animation win for message
    messageGame.classList.remove("effect-win")
    
    //remove animation for play again button
    playAgain.classList.remove("again-animation")
    // clear the forme 
    formeNumber.value = "";
    //return the chek button of running
    checkBtn.removeAttribute("disabled","")
    
    wrongCount.textContent = 0;
    bxLose.classList.remove("box-lose-show")
};

// add keyboard controle
document.onkeyup = function (e) {
    if (e.key === "Enter") {
        checkBtn.click();
    }
    if (e.key === "Escape") {
        playAgain.click();
    }
}

// burger icone function events
bergerToggell.onclick = function() {
    document.body.style.cssText = `background-color: ${window.localStorage.getItem("color-body-custumise")} ; margin-top: 120px;`
    // translate the body for make a space for nav menu
    navMenu.classList.add("inf-txt-show")
    hr.style = 'top: 230px;'
    playAgain.style = 'margin-top: 80px;'
    trysParent.style = 'margin-top: 80px;'
    scoorParent.style = 'margin-top: 80px;'
    bergerToggell.style = "display: none;"
    checkBtn.style = "top: 400px;"
}

//info click events 
info.onclick = function() {
    infoText.classList.add("inf-txt-show")
}
// info remove the text
xForHeadInfoCard.onclick = function() {
    infoText.classList.remove("inf-txt-show")
}

// reset the space of the nav menu remove
headNav.onclick = function() {
    navMenu.classList.remove("inf-txt-show");
    document.body.style = 'margin-top: 0px;';
    hr.style = 'top: 165px;';
    playAgain.style = 'margin-top: 0px;';
    trysParent.style = 'margin-top: 0px;';
    scoorParent.style = 'margin-top: 0px;';
    bergerToggell.style = "display: flex;";
    checkBtn.style = "top: 350px;"
    document.body.style.cssText = `background-color: ${window.localStorage.getItem("color-body-custumise")}; `
}
Prametre.onclick = function() {
    parameterPage.style = "transform: translateX(100%);"
} 
headPage.onclick = function() {
    parameterPage.style = "transform: translateX(200%);"
} 
application.onclick = function() {
    document.body.style.cssText = `background-color: ${color.value}; margin-top: 120px;`
    window.localStorage.setItem("color-body-custumise", color.value)
}

























setInterval(() => {
    console.log(formeNumber.value)
    console.log(boxSicuretNumbr.value)
    console.log(color.value)
    
}, 3000)
// // window.localStorage.clear()
// console.log(window.localStorage.getItem("color-body-custumise"))

// let level = document.getElementById("lvl");
// let levelTN = Number(level.value);
// level.value = levelTN;
// console.log(btnPrametre)

// if (score.textContent >= 20) {
//     level.value = 2;
// }else {
//     level.value = 1;
// }
