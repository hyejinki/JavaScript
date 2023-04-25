const myBtnClicked = function(){
    const btn = document.querySelector('#myBtn')
    // 이벤트 핸들러 등록
    btn.addEventListener('click', (event) => {
        console.log('버튼 클릭됨')
    })
}

const clicked = function() {
    console.log('클릭됨')
}