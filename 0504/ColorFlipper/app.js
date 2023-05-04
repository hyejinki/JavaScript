const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")




// 클릭 이벤트 -> 랜덤 번호(인덱스) 받아서 백그라운드 컬러 바꾸고 텍스트 넣기
btn.addEventListener("click", function () {
    // console.log(document.body)
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]


})

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length)
}

