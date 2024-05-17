let inputElement = document.getElementById('input');
let button = document.getElementById('btn');
let output = document.getElementById('output');
let revBtn = document.getElementById('reverse');
let WordBtn = document.getElementById('reWord');

button.addEventListener('click', () => {
    let inputVal = inputElement.value;
    let res = capitalize(inputVal);
    output.innerHTML = `<h2>${res}</h2>`;
});

revBtn.addEventListener('click', () => {
    let inputVal = inputElement.value;
    let res = reverse(inputVal);
    output.innerHTML = `<h2>${res}</h2>`;
});

WordBtn.addEventListener('click', () => {
    let inputVal = inputElement.value;
    let res = reverseWords(inputVal);
    output.innerHTML = `<h2>${res}</h2>`;
});

function capitalize(str) {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            s += str[i].toUpperCase();
        } else {
            s += str[i];
        }
    }
    return s;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseWords(str) {
    return str.split(' ').reverse().join(" ");
}


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/bom-object.git
// git push -u origin main