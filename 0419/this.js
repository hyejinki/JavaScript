// 전역 객체가 아니라 Node.js 에서는 모듈 스코프를 나타냄
// console.log(this)

// 일반적인 함수 내부에서의 this

const normalFunc = function() {
    console.log(this)           // this : 전역 객ㅊㅔ
}
normalFunc()


// 객체의 메서드 내부에서의 this

const obj = {
    name: 'test',
    myFunc: function() {
        console.log(this)   // this : 메서드가 정의된 객체
    }
}
obj.myFunc()


// 생성자 함수 내부에서의 this

function Person(name) {
    this.name = name
    this.greeting = function() {
        console.log(this)    // this : 생성된 인스턴스
    }
}

const me = new Person('dd')
me.greeting()



// 화살표 함수 내부에서의 this

const person_obj = {
    name:'dd',
    greeting: () => {
        // 자신만의 this를 가지지 않고
        // 한 단계 상위가 가지는 스코프 (외부 스코프의 this를 그대로 참조)
        console.log(this)      
    }
}
person_obj.greeting()