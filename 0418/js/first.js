// function add(n1, n2){
//     return n1 + n2
// }

// console.log(add(1, 3))


// const mySub = function (n1, n2){
//     return n1 * n2
// }

// console.log(mySub(3, 4))



// 1. null과 undefined

//undefined : a라는 변수가 없는 게 아니라, 서버로부터 데이터를 못 받아 온 것
//null : 서버가 데이터 없다고 명시한 것

// let a
// console.log(a)                  // undefined
// console.log(a == null)          // true(값이 없다)
// console.log(a == undefined)     // true
// console.log(a === null)         // false
// console.log(a === undefined)    // true



// 2. 문자열 형변환

// let str = 'test'
// let str2 = new String('test')
// new : 새로운 객체 할당 

// console.log(typeof(str))        // string
// console.log(typeof(str2))       // object

// 객체처럼 쓴다 -> 내장 메서드들 활용 가능
// JS는 내부적으로 원시 타입에 대해 내장 객체를 가지고 있다
        // -> 원시 타입 사용 시 내장 객체로 해석
// console.log('test'.toUpperCase())

// console.log(`1 = ${str == str2}`)                   //true
// console.log(`2 = ${str === str2}`)                  //false
// 객체끼리 비교  : 주소값이 다르므로 false

// console.log(`3 = ${str2 == new String('test')}`)    //false
// console.log(`4 = ${str2 === new String('test')}`)   //false
// console.log(`4 = ${str2 === 'test'}`)   //false

// 헷갈리는 자동 형변환
// console.log("10" * 3 + "10" - 2)        // 3008
// console.log("10" * 3 + "10" / 2)        //35


//전역 스코프
// let a = 10

// function func(){
//     console.log(a)
// }
// func()

// 블록 스코프

// {
//     let a = 20
//     console.log(a)  //20
// }

// and

// if(true){
//     let a = 20
//     console.log(a)  //30
// }

//----------------------------

// const fruits = {
//     a : 'apple',
//     b : 'banana'
// }

// for(const key in fruits){
//     const tmp_key = key
//     console.log(key)
// }

//---------------------------

// const tmp = 'test1'
// {
//     console.log(tmp)
//     {
//         const tmp = 'test2'
//         console.log(tmp)
//     }
// }

// 아래 코드가 버그나는 이유 찾기

// const a = 10

// if(true){
//     const b = 20
//     console.log(a)
// }
//위에서 선언했다고 아래에서 쓸 수 없어
// if(true){
//     console.log(b)
// }


//함수 스코프



// function myFunction(){
//     let num = 10
//     console.log(num)

//     function innerFunction(){
//         console.log(num)
//     }
//     innerFunction()
// }
// myFunction()
// console.log(num)


// function myFunction(x){
//     function add(y){
//         console.log(x - y)
//     }
//     return add
// }

// let func = myFunction(10) //func type : function
// func(20)

// 배역, 객체
// 얕은 복사와 깊은 복사

// 원시 타입 빼고는 다 얕은 복사
// 1. 함수에서 사용 시
// function func(arr) {
//     arr[0] = 10
// }

// let arr = [1, 2, 3]
// func(arr)
// console.log(arr)  // [10, 2, 3]

// 2. 변수로 복사할 때
// let numbers = [1, 2, 3]
// let newnumbers = numbers
// newnumbers[0] = 10
// console.log(numbers)
// console.log(newnumbers)

// 간단한 깊은 복사
// {
//     let numbers = [1, 2, 3]
//     let newnumbers = [...numbers] 
//     // ...: 스프레드 연산자 : 객체를 전개하여 각 요소를 개별적인 값으로 분리
       // depth 1까지만 깊은 복사
// }
// 2차원 이상의 배열(객체)일 경우 얕은 복사가 발생하므로
// 깊은 복사를 하여 사용하면 돼 

// 자바스크립트는 함수 파라미터 개수를 따로 체크하지 않는다
// 개발자가 주의해서 사용
// const nums = [1, 2, 3,4, 5, 6, 7, 8]

// for (num in nums) {
//     console.log(num, typeof num)
// }

// 1 3 5 7 9

for (let i=1; i<6; i++) {
    let s = ''
    for (let j=5-i; j>=0; j--){
        s += ' '
    }
    for (let k=1; k <= i*2 - 1;k++){
        s += '*' 
    }
    
    for (let j=5-i; j>=0; j--){
        s += ' '
    }
    console.log(s)
}
