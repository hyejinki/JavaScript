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