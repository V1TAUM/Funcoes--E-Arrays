function positions(firstPlace, secondPlace, lastPlace) {
    let posicao = []

    if (lastPlace === "Daniel"){
        posicao.push(firstPlace, lastPlace, secondPlace)
        return "1ª - Colocado foi " + posicao[0] + "\n" + "2ª - Colocado foi " + posicao[1] + "\n" + "3ª - Colocado " + posicao[2] 

    } else if (secondPlace === "Daniel"){
        posicao.push(secondPlace, firstPlace, lastPlace)
        return "1ª - Colocado " + posicao[0] + "\n" + "2ª - Colocado " +  posicao[1] + "\n" + "3ª - Colocado " +  posicao[2]

    } else {
        posicao.push(firstPlace, secondPlace, lastPlace)
        return "1ª - Colocado " + posicao[0] + "\n" + "2ª - Colocado " + posicao[1] + "\n" + "3ª - Colocado " + posicao[2]
    } 

}

console.log(positions("Daniel", "Rafael", "Manoel"))



