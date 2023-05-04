const inputValue = document.querySelector("#inputColor")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
    const inputText = inputValue.value;
    document.body.style.backgroundColor = inputText

    inputValue.value = "#"

})