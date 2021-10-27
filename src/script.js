//1
function calculateSalary (vendas, salario){

    if(vendas<=1200){
        bonus = (vendas * 3)/100
        console.log("valor do seu bonus esse mês: "+bonus)
        return bonus + salario
    }else{
        bonus = (vendas * 3)/100 
        console.log("valor do seu bonus esse mês: "+bonus)
        vendaExtra = vendas - 1200
        bonusextra = (vendaExtra * 5)/100
        console.log("valor do seu bonus extra esse mês: "+bonusextra)
        return bonus+vendaExtra+salario
    }
}
console.log( calculateSalary(1300,1000))

// 2 
function calculateStock(qMaximo, qMinimo, qAtual){

    let quantidademedia = (qMaximo + qMinimo)/2
    console.log("media: "+quantidademedia)
    console.log("estoque atual: "+qAtual)
    if(qAtual >= quantidademedia){
        return "Não efetuar compra"
    }else{
        return "Efetuar compra"
    }
}
console.log(calculateStock(30,10,10))

//3
function calculateAge(nascimento) {

    let data = new Date() // buscando data atual
    let dataAno = data.getFullYear()
    let dataMes = (data.getMonth() + 1)
    
    if (dataAno > nascimento) {
        let anos = dataAno - nascimento
        let meses = anos * 12
        let semanas = meses * 4
        let dias = meses * 30
        return " nascido em " + nascimento + " você tem em anos, meses, semanas e dias respectivamente: " + anos + " ," + meses + " ," + semanas + " ," + dias
    }
    if (dataAno === nascimento){
        let anos = 1
        let meses = dataMes
        let semanas = meses * 4
        let dias = meses * 30
        return " nascido em " + nascimento + " você tem em anos, meses, semanas e dias respectivamente: " + anos + " ," + meses + " ," + semanas + " ," + dias
   }
}
console.log("considerando valores redondos para meses de 30 dias, 4 semanas de 7 dias exatos!")
console.log(calculateAge(2021))
console.log(calculateAge(1992))