
let a = document.querySelector(".box1");
let b = document.querySelector(".box3");
let c = document.getElementById("inputvl");
let sign = document.querySelector(".box2");
let lev = document.querySelector(".level");
let time = document.querySelector(".time");
let submit = document.querySelector(".submit");
let stop = document.querySelector(".stop");

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");

let score = 0; 
let timer;



stop.addEventListener("click",()=>{
    alert("Until the correct answer is given, it will remain stopped.")
    clearInterval(timer);
});


let cc = () => {
    c.value = ""; 
    c.style.fontSize = "1.5rem";
    c.style.backgroundColor = "red";
    c.style.color = "white";
    c.style.height = "65px";
    score--;
    lev.innerText = `Level = ${score}`;
};


// Addition
let delay1 = () => {
    let countdown = 16;
    timer = setInterval(() => {
        countdown--;
        if (countdown >= 0) {
            time.innerText = `${countdown}`;
        }
        if (countdown === 0) {
            clearInterval(timer);
            cc(); 
            answer1();
        }
    }, 1000);
};


let answer1 = () => {
    clearInterval(timer); 
    delay1(); 

    let rnd1 = Math.floor(Math.random() * 101);
    let rnd2 = Math.floor(Math.random() * 101);
    a.innerText = rnd1;
    b.innerText = rnd2;

    let sum = rnd1 + rnd2; 
    sign.innerText = "+";

    submit.onclick = () => {
        let x = parseInt(c.value);
        if (sum === x) {
            c.value = ""; 
            c.style.fontSize = "1.5rem";
            c.style.backgroundColor = "limegreen";
            c.style.color = "white";
            score++;
            lev.innerText = `Level = ${score}`;
            answer1();
        } else {
            cc();
        }
    };
};

add.addEventListener("click", () => {
    score = 0; 
    lev.innerText = `Level = ${score}`;
    answer1();
});


//Subtraction
let delay2 = () => {
    let countdown = 16;
    timer = setInterval(() => {
        countdown--;
        if (countdown >= 0) {
            time.innerText = `${countdown}`;
        }
        if (countdown === 0) {
            clearInterval(timer);
            cc(); 
            answer2();
        }
    }, 1000);
};


// let answer2 = () => {
//     clearInterval(timer); 
//     delay2(); 

//     let rnd1 = Math.floor(Math.random() * 101);
//     let rnd2 = Math.floor(Math.random() * 101);
//     a.innerText = rnd1;
//     b.innerText = rnd2;

//     let sum = rnd1 - rnd2; 
//     sign.innerText = "-";

//     submit.onclick = () => {
//         let x = parseInt(c.value);
//         if (sum === x) {
//             c.value = ""; 
//             c.style.fontSize = "1.5rem";
//             c.style.backgroundColor = "limegreen";
//             c.style.color = "white";
//             score++;
//             lev.innerText = `Level = ${score}`;
//             answer2();
//         } else {
//             cc();
//         }
//     };
// };




let answer2 = () => {
    clearInterval(timer);
    delay2();

    let rnd1 = Math.floor(Math.random() * 101);
    let rnd2 = Math.floor(Math.random() * 101);

    
    if (rnd1 < rnd2) {
        [rnd1, rnd2] = [rnd2, rnd1];
    }

    a.innerText = rnd1;
    b.innerText = rnd2;

    let sum = rnd1 - rnd2;
    sign.innerText = "-";

    submit.onclick = () => {
        let x = parseInt(c.value);
        if (sum === x) {
            c.value = "";
            c.style.fontSize = "1.5rem";
            c.style.backgroundColor = "limegreen";
            c.style.color = "white";
            score++;
            lev.innerText = `Level = ${score}`;
            answer2();
        } else {
            cc();
        }
    };
};


sub.addEventListener("click", () => {
    score = 0; 
    lev.innerText = `Level = ${score}`;
    answer2();
});


//Multiplication
let delay3 = () => {
    let countdown = 16;
    timer = setInterval(() => {
        countdown--;
        if (countdown >= 0) {
            time.innerText = `${countdown}`;
        }
        if (countdown === 0) {
            clearInterval(timer);
            cc(); 
            answer3();
        }
    }, 1000);
};


let answer3 = () => {
    clearInterval(timer); 
    delay3(); 

    let rnd1 = Math.floor(Math.random() * 10);
    let rnd2 = Math.floor(Math.random() * 20);
    a.innerText = rnd1;
    b.innerText = rnd2;

    let sum = rnd1 * rnd2; 
    sign.innerText = "*";

    submit.onclick = () => {
        let x = parseInt(c.value);
        if (sum === x) {
            c.value = ""; 
            c.style.fontSize = "1.5rem";
            c.style.backgroundColor = "limegreen";
            c.style.color = "white";
            score++;
            lev.innerText = `Level = ${score}`;
            answer3();
        } else {
            cc();
        }
    };
};

multi.addEventListener("click", () => {
    score = 0; 
    lev.innerText = `Level = ${score}`;
    answer3();
});


//Division
let delay4 = () => {
    let countdown = 16;
    timer = setInterval(() => {
        countdown--;
        if (countdown >= 0) {
            time.innerText = `${countdown}`;
        }
        if (countdown === 0) {
            clearInterval(timer);
            cc(); 
            answer4();
        }
    }, 1000);
};


// let answer4 = () => {
//     clearInterval(timer); 
//     delay4(); 

//     let rnd1 = Math.floor(Math.random() * 20);
//     let rnd2 = Math.floor(Math.random() * 10);
//     a.innerText = rnd1;
//     b.innerText = rnd2;

//     let sum = parseInt(rnd1 / rnd2); 
//     sign.innerText = "/";

//     submit.onclick = () => {
//         let x = parseInt(c.value);
//         if (sum === x) {
//             c.value = ""; 
//             c.style.fontSize = "1.5rem";
//             c.style.backgroundColor = "limegreen";
//             c.style.color = "white";
//             score++;
//             lev.innerText = `Level = ${score}`;
//             answer4();
//         } else {
//             cc();
//         }
//     };
// };


let answer4 = () => {
    clearInterval(timer);
    delay4();

    let rnd1, rnd2;

    do {
        rnd1 = Math.floor(Math.random() * 20);
        rnd2 = Math.floor(Math.random() * 10);
    } while (rnd1 === 0 || rnd2 === 0); 

    a.innerText = rnd1;
    b.innerText = rnd2;

    let sum = parseInt(rnd1 / rnd2);
    sign.innerText = "/";

    submit.onclick = () => {
        let x = parseInt(c.value);
        if (sum === x) {
            c.value = "";
            c.style.fontSize = "1.5rem";
            c.style.backgroundColor = "limegreen";
            c.style.color = "white";
            score++;
            lev.innerText = `Level = ${score}`;
            answer4();
        } else {
            cc();
        }
    };
};


divi.addEventListener("click", () => {
    alert("Division Take Only Integer Part \n Example: 5/2 = 2\n 6/3 = 2");
    score = 0; 
    lev.innerText = `Level = ${score}`;
    answer4();
});




