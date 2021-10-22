function snapCrackle(maxValue){
    let texto= ""
    for (let numero=1; numero <= maxValue; numero++){
    
        if ((numero % 2 ==0) && (numero % 5 !==0)){
        texto += numero +","
    }    
    
    if ((numero % 2 !==0) && (numero % 5 ==0)){
        texto += " SnapCrackle, "
    }
    
    else if (numero % 2 !==0){
        texto += " Snap, "
    }
    
    else if (numero % 5 ==0){
        texto += " Crackle, "
    }
    
    
    
    
}
console.log(texto)
}
snapCrackle(15)
    
