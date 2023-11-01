const ratings = document.querySelectorAll(".ratings");
const button = document.querySelector("button");
const container = document.querySelector(".second");

ratings.forEach((rating_card) => {
	rating_card.addEventListener("click", (e) => {
		const selected = document.querySelector(".selected > span");
		const active = document.querySelector(".checked");
		if (active) {
			active.classList.remove("checked");
		}
		const card = e.target;
		card.classList.add("checked");

		selected.textContent = card.textContent;
	});
});

button.addEventListener("click", (e) => {
	const active = document.querySelector(".checked");
	if (active) {
		container.classList.remove("hidden");
	}
});
