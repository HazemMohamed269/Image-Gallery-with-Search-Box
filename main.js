const search = document.querySelector(".box-search input"),
    images = document.querySelectorAll(".box-image");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searchValue = search.value,
            value = searchValue.toLowerCase()
        images.forEach(image => {
            if (value === image.dataset.name) {
                return image.style.display = "block";
            }
                image.style.display = "none";
        })
        console.log(value)
        }
    })