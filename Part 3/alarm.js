
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const myName = document.querySelector("#name-input")
const delay = document.querySelector("#delay-input")

// console.log(myName.textContent)
// console.log(delay)

// function setAlarm() {
// setTimeout(() => {
//     output.textContent = "Wake up!";
//     // console.log("Wake Up!")
// }, 1000);
// }

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay cannot be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay); 
    }); 
}

// function alarmPromise() {
//     alarm(myName.value, delay.value)
//         .then((message) => (output.textContent = message))
//         .catch((error) => (output.textContent = `${error}`));
// }

button.addEventListener("click", async () => {
    try {
        const message = await alarm(myName.value, delay.value); 
        output.textContent = message; 
    } catch (error) {
        output.textContent = error; 
    }
}
);




