



function myModal(foodImg){
	var modal = document.getElementById(foodImg);

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

	const spans = document.querySelectorAll(".open")
	spans.forEach(span => span.addEventListener("click", () => modal.style.display = "block"))
}

