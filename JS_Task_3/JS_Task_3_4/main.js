// Task_3_4
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині і індексом всередині.

console.log('----------Task_3_4----------');
console.log('За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом всередині і індексом всередині.');

document.write(`<h1>Task_3_4. Циклом while 20 блоків h1 з довільним текстом всередині і індексом всередині.</h1>`);
document.write(`<h4>Ментор Діана на курсі HTML навчала, щоб ми уникали від використання кількох елементів h1, тому узгоджено з замовником: h1 змінюємо на h2.</h4>`);

let i = 0;
while (i < 20){
    console.log(`елемент ${i + 1}, index - ${i}`);

    document.write(`<div class="block">
                        <h2> Мій номер ${i + 1}</h2>
                        <p>"${i}" це мій index</p>
                    </div>`);
    i++;
}
