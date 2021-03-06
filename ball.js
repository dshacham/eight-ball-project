// grab the relevant elements
const getAnswer = document.getElementById('answer');
const animation = document.getElementsByClassName('ball');
const btn = document.getElementById('res');

// define functions

const ballAnimation = () => {
    const ballShake = () => {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });
    }
    ballShake();

    const fadeWhite = () => {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        const opa = 0;
        if (opa === 0) {
            fade.style.opacity = 0;
            fadeIn[0].style.opacity = 1;
            // btn.removeEventListener("click", ballAnimation);
        }
    }
    getAnswer.innerHTML = generateAnswer();
    fadeWhite();
}

const generateAnswer = () => {
    const answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

    const randomAnswer = answers[Math.floor(answers.length * Math.random())];

    return randomAnswer;
}

const ballReset = () => {
    const ballShakes = () => {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });

    }
    ballShakes();

    const fadeBack = () => {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        let opa = 1;
        if (opa === 1) {
            fadeIn[0].style.opacity = 0;
            fade.style.opacity = 1;
            clearInterval(id);
        }
    }
    fadeBack();
}

const resetField = () => {
    const resFunc = () => {
        document.getElementById('askSomething').value = '';
    }
    resFunc();
}


// add event listener
btn.addEventListener("click", resetField);

