const ratings = document.querySelectorAll(".ratings");

ratings.forEach((rating_card) => {
	rating_card.addEventListener("click", (e) => {
		const active = document.querySelector(".checked");
		if (active) {
			active.classList.remove("checked");
		}
		const card = e.target;
		card.classList.add("checked");
	});
});
