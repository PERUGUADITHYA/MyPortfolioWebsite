function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "SOFTWARE DEVELOPER",
    "JAVA DEVELOPER",
    "BACKEND DEVELOPER",
    "FRONTEND DEVELOPER",
    "FULL STACK DEVELOPER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

function hireMe() {
    // Redirects to email with pre-filled subject & body
    window.location.href = "mailto:hr@example.com?subject=Excited%20to%20Join%20Your%20Team&body=Dear%20Hiring%20Manager,%0A%0AI%20am%20Adithya,%20a%20passionate%20Full%20Stack%20Developer%20with%20strong%20backend%20skills%20in%20Java,%20Spring%20Boot,%20MySQL,%20and%20intermediate%20frontend%20skills%20in%20HTML,%20CSS,%20and%20JavaScript.%0A%0AI'm%20eager%20to%20bring%20my%20problem-solving%20abilities,%20quick%20learning%20skills,%20and%20team%20collaboration%20to%20your%20organization.%20I%20would%20love%20to%20discuss%20how%20I%20can%20contribute%20to%20your%20team.%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20Regards,%0AAdithya";
}


window.onload = typeWriter;