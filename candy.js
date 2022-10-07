/*
Buy some milk chocolate
Add some mint flavoring
    *how to add key to object?
Combine the chocolate and mint
Bake the mixture
Break the hardened sheet into 6 pieces
*/



const buyChocolate = () => {
    let chocolate = {
        type: "Milk Chocolate"
    }
    return chocolate
}

const addFlavoring = (chocolateMixture) => {
    chocolateMixture.flavoring = "Mint"

    return chocolateMixture
}
const newChocolate = buyChocolate()
const mixture = addFlavoring(newChocolate)

//creating the mixture instructions
//include a new parameter for thep revious chocolateMixture

const makeBarkMixture = (chocolateMixture) => {
    if (chocolateMixture.flavoring === "Mint") {
        chocolateMixture.mixed = true
    } else {
        chocolateMixture.mixed = false
    }
    return chocolateMixture
}

const newMixture = makeBarkMixture(mixture)

const bakeCandy = (chocolateMixture) => {
    if (chocolateMixture.mixed === true) {
        chocolateMixture.baked = true
    } else {
        chocolateMixture.baked = false
    }
    return chocolateMixture
}
const bakedCandy = bakeCandy(newMixture)

const breakBark = (bakedCandy) => {
    if (bakedCandy.baked === true) {
        return ["Mint Chocolate Bark Piece"] * 6
    }

}
const brokenCandy = breakBark(bakedCandy)
