function snapCrackle (maxValue){
    function primo (maxValue){
        let divisores = 0
        for(let num = 1; num <= maxValue; num++){
            if(maxValue % num === 0){
               divisores++ 
            }
        }
        if (divisores === 2){
            return true
        }
        else{
            return false
        }

    }          
    let arr = []
    for (let numero=1; numero <= maxValue; numero++){
    
        if ((numero % 2 ==0) && (numero % 5 !==0) && !(primo(numero))){
        arr.push (numero) 
    }    
    
    if ((numero % 2 !== 0) && (numero % 5 ==0) && (primo(numero))){
        arr.push ('SnapCracklePrime')
    }
    else if (primo(numero) && (numero % 2 !== 0)){
        arr.push ('SnapPrime')
    }
    else if ((numero % 2 !== 0) && (numero % 5 ==0)){
        arr.push ('SnapCrackle')
    }
    else if (numero % 2 !==0){
        arr.push ('Snap')
    }
    
    else if (numero % 5 ==0){
        arr.push ('Crackle')
    }
    else if (primo(numero)){
        arr.push ('Prime')
    }    
}
console.log(`${arr}`)
}
snapCrackle(15)


    
