// Гамбургер-меню

window.addEventListener("DOMContentLoaded", () => {
	let menu = document.querySelector(".nav__menu"),
		menuItem = document.querySelectorAll(".nav__link"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("nav__menu_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("nav__menu_active");
		});
	});
});

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
