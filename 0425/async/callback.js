// hoisting : var, function declaration 

console.log('1');                                       // 1. (동기) 
setTimeout(() => {
    console.log('2');                                   // 2. (동기)
}, 1000);
console.log('3');                                       // 4. (비동기)

// Synchronous callback                             
function printImmediately(print) {              // 함수 선언은 다 위로
    print();
}
printImmediately(() => console.log('hello'));           //3. (동기)


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);

}
printWithDelay(() => console.log('async callback'), 2000)     //5. (비동기)


// ----------------------------
// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }

        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000)

    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
             (userWithRole) => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        }, 
        error =>{
            console.log(error)
        })

}, (error) => {
    console.log(error)
}
)

