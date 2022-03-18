function BinarioParaDecimal(numConverter){
    const inputBin = document.querySelector(`.converter-area .conv${numConverter} input`)
    const inputDec = document.querySelector(`.converter-area .resu${numConverter} input`)
    const erro = document.querySelector(`.erro${numConverter}`)
    const button = document.querySelector(`#butao${numConverter}`)
    let result = 0
    let decimal = 0
    let check = true
    
    function error(boolean){
        if(boolean){
            if(decimal)inputDec.value = decimal
        }else{
                if(decimal)inputDec.value = ''
                erro.innerHTML = 'Insíra somente números entre 0 e 1'
                setTimeout(()=>{
                    erro.innerHTML = ''
                },2000)
            }
    }

    button.addEventListener('click',e=>{
        let array = inputBin.value.split('')
        let binario = inputBin.value

        for(let i = binario.length - 1; i >= 0; i--){
            result += parseInt(binario[i]) * Math.pow(2, binario.length - 1 - i)
            decimal = result
        }
        result = 0
        array.forEach(el => {
            if(el != '0' && el != '1'){
                check = false
                setTimeout(()=>{
                    check = true
                },200)
            } else{
            
            }
        });

        error(check)
    
})

    
}


const conv1 = new BinarioParaDecimal(1)
const conv2 = new BinarioParaDecimal(2)
const conv3 = new BinarioParaDecimal(3)
const conv4 = new BinarioParaDecimal(4)