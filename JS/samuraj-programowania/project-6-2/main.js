const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codeGenerator = () => { 
    for (i = 0; i < 1000; i++) {
        let codeArray = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            codeArray.push(chars[randomNumber]);
        }
        const generatedNumber = document.createElement('div');
        generatedNumber.textContent = codeArray.join('');
        section.appendChild(generatedNumber);
    }
}   

btn.addEventListener('click', codeGenerator);