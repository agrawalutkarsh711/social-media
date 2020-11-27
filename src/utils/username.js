

const ADJECTIVES=[
    'greedy',
    'tight',
    'crooked',
    'onerous',
    'accessible',
    'phobic',
    'pleasant'
]

const OBJECTS=[
    'paper',
    'house',
    'book',
    'sharpie',
    'spoon',
    'radio',
    'sandal'
]


function createrandomuser(){
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)]

    return `${adj}-${obj}`
}


module.exports={
    createrandomuser
}