import "./scss/app.scss";

// Раскрывающийся блок в секции "Вопрос-ответ"
let plus = document.querySelectorAll(".services-faq-section__plus");
let cross = document.querySelectorAll(".services-faq-section__cross");
let answer = document.querySelectorAll(".services-faq-section__answer");
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        answer[i].classList.add("services-faq-section__answer_visible");
        plus[i].style.display = "none";
        cross[i].style.display = "block";
    });
}


for (let i = 0; i < plus.length; i++) {
    cross[i].addEventListener("click", function () {
        answer[i].classList.remove("services-faq-section__answer_visible");
        plus[i].style.display = "block";
        cross[i].style.display = "none";
    });
}