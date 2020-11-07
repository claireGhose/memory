
/*----- constants -----*/
/*----- app's state (variables) -----*/

let ResetBtn= document.getElementById("reset")

let dernierClick= ""

let gagnepoint= 0




/*----- references des elements DOM -----*/
let array = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10",
            "c11","c12","c13","c14","c15","c16","c17","c18","c19","c20",
            "c21","c22","c23","c24","c25","c26","c27","c28","c29","c30",
            "c31","c32","c33","c34","c35","c36","c37","c38","c39","c40"]
let arrayShuffle = []
while (array.length > 0) {
    let numéro = Math.floor(Math.random() * array.length);
    let élémentAuHasard = array[numéro]
    arrayShuffle.push(élémentAuHasard) // mettre l'element dans le nouveau tableau
    array.splice(numéro, 1);
}
console.log (array)
console.log (arrayShuffle)

const c1 = document.getElementById(arrayShuffle[0])
const c2 = document.getElementById(arrayShuffle[1])
const c3 = document.getElementById(arrayShuffle[2])
const c4 = document.getElementById(arrayShuffle[3])
const c5 = document.getElementById(arrayShuffle[4])
const c6 = document.getElementById(arrayShuffle[5])
const c7 = document.getElementById(arrayShuffle[6])
const c8 = document.getElementById(arrayShuffle[7])
const c9 = document.getElementById(arrayShuffle[8])
const c10 = document.getElementById(arrayShuffle[9])
const c11 = document.getElementById(arrayShuffle[10])
const c12 = document.getElementById(arrayShuffle[11])
const c13 = document.getElementById(arrayShuffle[12])
const c14 = document.getElementById(arrayShuffle[13])
const c15 = document.getElementById(arrayShuffle[14])
const c16 = document.getElementById(arrayShuffle[15])
const c17 = document.getElementById(arrayShuffle[16])
const c18 = document.getElementById(arrayShuffle[17])
const c19 = document.getElementById(arrayShuffle[18])
const c20 = document.getElementById(arrayShuffle[19])
const c21 = document.getElementById(arrayShuffle[20])
const c22 = document.getElementById(arrayShuffle[21])
const c23 = document.getElementById(arrayShuffle[22])
const c24 = document.getElementById(arrayShuffle[23])
const c25 = document.getElementById(arrayShuffle[24])
const c26 = document.getElementById(arrayShuffle[25])
const c27 = document.getElementById(arrayShuffle[26])
const c28 = document.getElementById(arrayShuffle[27])
const c29 = document.getElementById(arrayShuffle[28])
const c30 = document.getElementById(arrayShuffle[29])
const c31 = document.getElementById(arrayShuffle[30])
const c32 = document.getElementById(arrayShuffle[31])
const c33 = document.getElementById(arrayShuffle[32])
const c34 = document.getElementById(arrayShuffle[33])
const c35 = document.getElementById(arrayShuffle[34])
const c36 = document.getElementById(arrayShuffle[35])
const c37 = document.getElementById(arrayShuffle[36])
const c38 = document.getElementById(arrayShuffle[37])
const c39 = document.getElementById(arrayShuffle[38])
const c40 = document.getElementById(arrayShuffle[39])

// const c1 = document.getElementById("c1")
// const c2 = document.getElementById("c2")
// const c3 = document.getElementById("c3")
// const c4 = document.getElementById("c4")
// const c5 = document.getElementById("c5")
// const c6 = document.getElementById("c6")
// const c7 = document.getElementById("c7")
// const c8 = document.getElementById("c8")
// const c9 = document.getElementById("c9")
// const c10 = document.getElementById("c10")
// const c11 = document.getElementById("c11")
// const c12 = document.getElementById("c12")
// const c13 = document.getElementById("c13")
// const c14 = document.getElementById("c14")
// const c15 = document.getElementById("c15")
// const c16 = document.getElementById("c16")
// const c17 = document.getElementById("c17")
// const c18 = document.getElementById("c18")
// const c19 = document.getElementById("c19")
// const c20 = document.getElementById("c20")



/*----- event listeners -----*/
//image1
c1.addEventListener("click",function (event){
    c1.src="carte/1m.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()

    if (dernierClick == "carte15"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte1"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c1.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c1)
        retounerCarte(c2, "carte2", c1)
        retounerCarte(c3, "carte3", c1)
        retounerCarte(c4, "carte4", c1)
        retounerCarte(c5, "carte5", c1)
        retounerCarte(c6, "carte6", c1)
        retounerCarte(c7, "carte7", c1)
        retounerCarte(c8, "carte8", c1)
        retounerCarte(c9, "carte9", c1)
        retounerCarte(c10, "carte10", c1)
        retounerCarte(c11, "carte11", c1)
        retounerCarte(c12, "carte12", c1)
        retounerCarte(c13, "carte13", c1)
        retounerCarte(c14, "carte14", c1)
        retounerCarte(c15, "carte15", c1)
        retounerCarte(c16, "carte16", c1)
        retounerCarte(c17, "carte17", c1)
        retounerCarte(c18, "carte18", c1)
        retounerCarte(c19, "carte19", c1)
        retounerCarte(c20, "carte20", c1)  
        retounerCarte(c21, "carte21", c1)
        retounerCarte(c22, "carte22", c1)
        retounerCarte(c23, "carte23", c1)
        retounerCarte(c24, "carte24", c1)
        retounerCarte(c25, "carte25", c1)
        retounerCarte(c26, "carte26", c1)
        retounerCarte(c27, "carte27", c1)
        retounerCarte(c28, "carte28", c1)
        retounerCarte(c29, "carte29", c1)
        retounerCarte(c30, "carte30", c1)
        retounerCarte(c31, "carte31", c1)
        retounerCarte(c32, "carte32", c1)
        retounerCarte(c33, "carte33", c1)
        retounerCarte(c34, "carte34", c1)
        retounerCarte(c35, "carte35", c1)
        retounerCarte(c36, "carte36", c1)
        retounerCarte(c37, "carte37", c1)
        retounerCarte(c38, "carte38", c1)
        retounerCarte(c39, "carte39", c1)
        retounerCarte(c40, "carte40", c1)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte1"
    }
})
c15.addEventListener("click",function (event){
    c15.src="carte/1m.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte1"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte15"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c15.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c15)
        retounerCarte(c2, "carte2", c15)
        retounerCarte(c3, "carte3", c15)
        retounerCarte(c4, "carte4", c15)
        retounerCarte(c5, "carte5", c15)
        retounerCarte(c6, "carte6", c15)
        retounerCarte(c7, "carte7", c15)
        retounerCarte(c8, "carte8", c15)
        retounerCarte(c9, "carte9", c15)
        retounerCarte(c10, "carte10", c15)
        retounerCarte(c11, "carte11", c15)
        retounerCarte(c12, "carte12", c15)
        retounerCarte(c13, "carte13", c15)
        retounerCarte(c14, "carte14", c15)
        retounerCarte(c15, "carte15", c15)
        retounerCarte(c16, "carte16", c15)
        retounerCarte(c17, "carte17", c15)
        retounerCarte(c18, "carte18", c15)
        retounerCarte(c19, "carte19", c15)
        retounerCarte(c20, "carte20", c15) 
        retounerCarte(c21, "carte21", c15)
        retounerCarte(c22, "carte22", c15)
        retounerCarte(c23, "carte23", c15)
        retounerCarte(c24, "carte24", c15)
        retounerCarte(c25, "carte25", c15)
        retounerCarte(c26, "carte26", c15)
        retounerCarte(c27, "carte27", c15)
        retounerCarte(c28, "carte28", c15)
        retounerCarte(c29, "carte29", c15)
        retounerCarte(c30, "carte30", c15)
        retounerCarte(c31, "carte31", c15)
        retounerCarte(c32, "carte32", c15)
        retounerCarte(c33, "carte33", c15)
        retounerCarte(c34, "carte34", c15)
        retounerCarte(c35, "carte35", c15)
        retounerCarte(c36, "carte36", c15)
        retounerCarte(c37, "carte37", c15)
        retounerCarte(c38, "carte38", c15)
        retounerCarte(c39, "carte39", c15)
        retounerCarte(c40, "carte40", c15)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte15"
    }
})
//image2
c2.addEventListener("click",function (event){
    c2.src=("carte/2m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte9"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte2"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c2.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c2)
        retounerCarte(c2, "carte2", c2)
        retounerCarte(c3, "carte3", c2)
        retounerCarte(c4, "carte4", c2)
        retounerCarte(c5, "carte5", c2)
        retounerCarte(c6, "carte6", c2)
        retounerCarte(c7, "carte7", c2)
        retounerCarte(c8, "carte8", c2)
        retounerCarte(c9, "carte9", c2)
        retounerCarte(c10, "carte10", c2)
        retounerCarte(c11, "carte11", c2)
        retounerCarte(c12, "carte12", c2)
        retounerCarte(c13, "carte13", c2)
        retounerCarte(c14, "carte14", c2)
        retounerCarte(c15, "carte15", c2)
        retounerCarte(c16, "carte16", c2)
        retounerCarte(c17, "carte17", c2)
        retounerCarte(c18, "carte18", c2)
        retounerCarte(c19, "carte19", c2)
        retounerCarte(c20, "carte20", c2) 
        retounerCarte(c21, "carte21", c2)
        retounerCarte(c22, "carte22", c2)
        retounerCarte(c23, "carte23", c2)
        retounerCarte(c24, "carte24", c2)
        retounerCarte(c25, "carte25", c2)
        retounerCarte(c26, "carte26", c2)
        retounerCarte(c27, "carte27", c2)
        retounerCarte(c28, "carte28", c2)
        retounerCarte(c29, "carte29", c2)
        retounerCarte(c30, "carte30", c2)
        retounerCarte(c31, "carte31", c2)
        retounerCarte(c32, "carte32", c2)
        retounerCarte(c33, "carte33", c2)
        retounerCarte(c34, "carte34", c2)
        retounerCarte(c35, "carte35", c2)
        retounerCarte(c36, "carte36", c2)
        retounerCarte(c37, "carte37", c2)
        retounerCarte(c38, "carte38", c2)
        retounerCarte(c39, "carte39", c2)
        retounerCarte(c40, "carte40", c2)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte2"
    }
})
c9.addEventListener("click",function (event){
    c9.src=("carte/2m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte2"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte9"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c9.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c9)
        retounerCarte(c2, "carte2", c9)
        retounerCarte(c3, "carte3", c9)
        retounerCarte(c4, "carte4", c9)
        retounerCarte(c5, "carte5", c9)
        retounerCarte(c6, "carte6", c9)
        retounerCarte(c7, "carte7", c9)
        retounerCarte(c8, "carte8", c9)
        retounerCarte(c9, "carte9", c9)
        retounerCarte(c10, "carte10", c9)
        retounerCarte(c11, "carte11", c9)
        retounerCarte(c12, "carte12", c9)
        retounerCarte(c13, "carte13", c9)
        retounerCarte(c14, "carte14", c9)
        retounerCarte(c15, "carte15", c9)
        retounerCarte(c16, "carte16", c9)
        retounerCarte(c17, "carte17", c9)
        retounerCarte(c18, "carte18", c9)
        retounerCarte(c19, "carte19", c9)
        retounerCarte(c20, "carte20", c9)
        retounerCarte(c21, "carte21", c9)
        retounerCarte(c22, "carte22", c9)
        retounerCarte(c23, "carte23", c9)
        retounerCarte(c24, "carte24", c9)
        retounerCarte(c25, "carte25", c9)
        retounerCarte(c26, "carte26", c9)
        retounerCarte(c27, "carte27", c9)
        retounerCarte(c28, "carte28", c9)
        retounerCarte(c29, "carte29", c9)
        retounerCarte(c30, "carte30", c9)
        retounerCarte(c31, "carte31", c9)
        retounerCarte(c32, "carte32", c9)
        retounerCarte(c33, "carte33", c9)
        retounerCarte(c34, "carte34", c9)
        retounerCarte(c35, "carte35", c9)
        retounerCarte(c36, "carte36", c9)
        retounerCarte(c37, "carte37", c9)
        retounerCarte(c38, "carte38", c9)
        retounerCarte(c39, "carte39", c9)
        retounerCarte(c40, "carte40", c9)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte9"
    }
})

//image3
c3.addEventListener("click",function (event){
    c3.src=("carte/3m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte14"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte3"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c3.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c3)
        retounerCarte(c2, "carte2", c3)
        retounerCarte(c3, "carte3", c3)
        retounerCarte(c4, "carte4", c3)
        retounerCarte(c5, "carte5", c3)
        retounerCarte(c6, "carte6", c3)
        retounerCarte(c7, "carte7", c3)
        retounerCarte(c8, "carte8", c3)
        retounerCarte(c9, "carte9", c3)
        retounerCarte(c10, "carte10", c3)
        retounerCarte(c11, "carte11", c3)
        retounerCarte(c12, "carte12", c3)
        retounerCarte(c13, "carte13", c3)
        retounerCarte(c14, "carte14", c3)
        retounerCarte(c15, "carte15", c3)
        retounerCarte(c16, "carte16", c3)
        retounerCarte(c17, "carte17", c3)
        retounerCarte(c18, "carte18", c3)
        retounerCarte(c19, "carte19", c3)
        retounerCarte(c20, "carte20", c3) 
        retounerCarte(c21, "carte21", c3)
        retounerCarte(c22, "carte22", c3)
        retounerCarte(c23, "carte23", c3)
        retounerCarte(c24, "carte24", c3)
        retounerCarte(c25, "carte25", c3)
        retounerCarte(c26, "carte26", c3)
        retounerCarte(c27, "carte27", c3)
        retounerCarte(c28, "carte28", c3)
        retounerCarte(c29, "carte29", c3)
        retounerCarte(c30, "carte30", c3)
        retounerCarte(c31, "carte31", c3)
        retounerCarte(c32, "carte32", c3)
        retounerCarte(c33, "carte33", c3)
        retounerCarte(c34, "carte34", c3)
        retounerCarte(c35, "carte35", c3)
        retounerCarte(c36, "carte36", c3)
        retounerCarte(c37, "carte37", c3)
        retounerCarte(c38, "carte38", c3)
        retounerCarte(c39, "carte39", c3)
        retounerCarte(c40, "carte40", c3)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte3"
    }
})
c14.addEventListener("click",function (event){
    c14.src=("carte/3m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte3"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte14"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c14.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c14)
        retounerCarte(c2, "carte2", c14)
        retounerCarte(c3, "carte3", c14)
        retounerCarte(c4, "carte4", c14)
        retounerCarte(c5, "carte5", c14)
        retounerCarte(c6, "carte6", c14)
        retounerCarte(c7, "carte7", c14)
        retounerCarte(c8, "carte8", c14)
        retounerCarte(c9, "carte9", c14)
        retounerCarte(c10, "carte10", c14)
        retounerCarte(c11, "carte11", c14)
        retounerCarte(c12, "carte12", c14)
        retounerCarte(c13, "carte13", c14)
        retounerCarte(c14, "carte14", c14)
        retounerCarte(c15, "carte15", c14)
        retounerCarte(c16, "carte16", c14)
        retounerCarte(c17, "carte17", c14)
        retounerCarte(c18, "carte18", c14)
        retounerCarte(c19, "carte19", c14)
        retounerCarte(c20, "carte20", c14)  
        retounerCarte(c21, "carte21", c14)
        retounerCarte(c22, "carte22", c14)
        retounerCarte(c23, "carte23", c14)
        retounerCarte(c24, "carte24", c14)
        retounerCarte(c25, "carte25", c14)
        retounerCarte(c26, "carte26", c14)
        retounerCarte(c27, "carte27", c14)
        retounerCarte(c28, "carte28", c14)
        retounerCarte(c29, "carte29", c14)
        retounerCarte(c30, "carte30", c14)
        retounerCarte(c31, "carte31", c14)
        retounerCarte(c32, "carte32", c14)
        retounerCarte(c33, "carte33", c14)
        retounerCarte(c34, "carte34", c14)
        retounerCarte(c35, "carte35", c14)
        retounerCarte(c36, "carte36", c14)
        retounerCarte(c37, "carte37", c14)
        retounerCarte(c38, "carte38", c14)
        retounerCarte(c39, "carte39", c14)
        retounerCarte(c40, "carte40", c14)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte14"
    }
})

//image4
c4.addEventListener("click",function (event){
    c4.src=("carte/4m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte19"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte4"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c4.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c4)
        retounerCarte(c2, "carte2", c4)
        retounerCarte(c3, "carte3", c4)
        retounerCarte(c4, "carte4", c4)
        retounerCarte(c5, "carte5", c4)
        retounerCarte(c6, "carte6", c4)
        retounerCarte(c7, "carte7", c4)
        retounerCarte(c8, "carte8", c4)
        retounerCarte(c9, "carte9", c4)
        retounerCarte(c10, "carte10", c4)
        retounerCarte(c11, "carte11", c4)
        retounerCarte(c12, "carte12", c4)
        retounerCarte(c13, "carte13", c4)
        retounerCarte(c14, "carte14", c4)
        retounerCarte(c15, "carte15", c4)
        retounerCarte(c16, "carte16", c4)
        retounerCarte(c17, "carte17", c4)
        retounerCarte(c18, "carte18", c4)
        retounerCarte(c19, "carte19", c4)
        retounerCarte(c20, "carte20", c4)  
        retounerCarte(c21, "carte21", c4)
        retounerCarte(c22, "carte22", c4)
        retounerCarte(c23, "carte23", c4)
        retounerCarte(c24, "carte24", c4)
        retounerCarte(c25, "carte25", c4)
        retounerCarte(c26, "carte26", c4)
        retounerCarte(c27, "carte27", c4)
        retounerCarte(c28, "carte28", c4)
        retounerCarte(c29, "carte29", c4)
        retounerCarte(c30, "carte30", c4)
        retounerCarte(c31, "carte31", c4)
        retounerCarte(c32, "carte32", c4)
        retounerCarte(c33, "carte33", c4)
        retounerCarte(c34, "carte34", c4)
        retounerCarte(c35, "carte35", c4)
        retounerCarte(c36, "carte36", c4)
        retounerCarte(c37, "carte37", c4)
        retounerCarte(c38, "carte38", c4)
        retounerCarte(c39, "carte39", c4)
        retounerCarte(c40, "carte40", c4)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte4"
    }
})
c19.addEventListener("click",function (event){
    c19.src=("carte/4m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte4"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte19"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c19.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c19)
        retounerCarte(c2, "carte2", c19)
        retounerCarte(c3, "carte3", c19)
        retounerCarte(c4, "carte4", c19)
        retounerCarte(c5, "carte5", c19)
        retounerCarte(c6, "carte6", c19)
        retounerCarte(c7, "carte7", c19)
        retounerCarte(c8, "carte8", c19)
        retounerCarte(c9, "carte9", c19)
        retounerCarte(c10, "carte10", c19)
        retounerCarte(c11, "carte11", c19)
        retounerCarte(c12, "carte12", c19)
        retounerCarte(c13, "carte13", c19)
        retounerCarte(c14, "carte14", c19)
        retounerCarte(c15, "carte15", c19)
        retounerCarte(c16, "carte16", c19)
        retounerCarte(c17, "carte17", c19)
        retounerCarte(c18, "carte18", c19)
        retounerCarte(c19, "carte19", c19)
        retounerCarte(c20, "carte20", c19) 
        retounerCarte(c21, "carte21", c19)
        retounerCarte(c22, "carte22", c19)
        retounerCarte(c23, "carte23", c19)
        retounerCarte(c24, "carte24", c19)
        retounerCarte(c25, "carte25", c19)
        retounerCarte(c26, "carte26", c19)
        retounerCarte(c27, "carte27", c19)
        retounerCarte(c28, "carte28", c19)
        retounerCarte(c29, "carte29", c19)
        retounerCarte(c30, "carte30", c19)
        retounerCarte(c31, "carte31", c19)
        retounerCarte(c32, "carte32", c19)
        retounerCarte(c33, "carte33", c19)
        retounerCarte(c34, "carte34", c19)
        retounerCarte(c35, "carte35", c19)
        retounerCarte(c36, "carte36", c19)
        retounerCarte(c37, "carte37", c19)
        retounerCarte(c38, "carte38", c19)
        retounerCarte(c39, "carte39", c19)
        retounerCarte(c40, "carte40", c19)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte19"
    }
})

//image5
c5.addEventListener("click",function (event){
    c5.src=("carte/5m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte18"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte5"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c5.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c5)
        retounerCarte(c2, "carte2", c5)
        retounerCarte(c3, "carte3", c5)
        retounerCarte(c4, "carte4", c5)
        retounerCarte(c5, "carte5", c5)
        retounerCarte(c6, "carte6", c5)
        retounerCarte(c7, "carte7", c5)
        retounerCarte(c8, "carte8", c5)
        retounerCarte(c9, "carte9", c5)
        retounerCarte(c10, "carte10", c5)
        retounerCarte(c11, "carte11", c5)
        retounerCarte(c12, "carte12", c5)
        retounerCarte(c13, "carte13", c5)
        retounerCarte(c14, "carte14", c5)
        retounerCarte(c15, "carte15", c5)
        retounerCarte(c16, "carte16", c5)
        retounerCarte(c17, "carte17", c5)
        retounerCarte(c18, "carte18", c5)
        retounerCarte(c19, "carte19", c5)
        retounerCarte(c20, "carte20", c5)  
        retounerCarte(c21, "carte21", c5)
        retounerCarte(c22, "carte22", c5)
        retounerCarte(c23, "carte23", c5)
        retounerCarte(c24, "carte24", c5)
        retounerCarte(c25, "carte25", c5)
        retounerCarte(c26, "carte26", c5)
        retounerCarte(c27, "carte27", c5)
        retounerCarte(c28, "carte28", c5)
        retounerCarte(c29, "carte29", c5)
        retounerCarte(c30, "carte30", c5)
        retounerCarte(c31, "carte31", c5)
        retounerCarte(c32, "carte32", c5)
        retounerCarte(c33, "carte33", c5)
        retounerCarte(c34, "carte34", c5)
        retounerCarte(c35, "carte35", c5)
        retounerCarte(c36, "carte36", c5)
        retounerCarte(c37, "carte37", c5)
        retounerCarte(c38, "carte38", c5)
        retounerCarte(c39, "carte39", c5)
        retounerCarte(c40, "carte40", c5)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte5"
    }
})
c18.addEventListener("click",function (event){
    c18.src=("carte/5m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte5"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte18"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c18.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c18)
        retounerCarte(c2, "carte2", c18)
        retounerCarte(c3, "carte3", c18)
        retounerCarte(c4, "carte4", c18)
        retounerCarte(c5, "carte5", c18)
        retounerCarte(c6, "carte6", c18)
        retounerCarte(c7, "carte7", c18)
        retounerCarte(c8, "carte8", c18)
        retounerCarte(c9, "carte9", c18)
        retounerCarte(c10, "carte10", c18)
        retounerCarte(c11, "carte11", c18)
        retounerCarte(c12, "carte12", c18)
        retounerCarte(c13, "carte13", c18)
        retounerCarte(c14, "carte14", c18)
        retounerCarte(c15, "carte15", c18)
        retounerCarte(c16, "carte16", c18)
        retounerCarte(c17, "carte17", c18)
        retounerCarte(c18, "carte18", c18)
        retounerCarte(c19, "carte19", c18)
        retounerCarte(c20, "carte20", c18) 
        retounerCarte(c21, "carte21", c18)
        retounerCarte(c22, "carte22", c18)
        retounerCarte(c23, "carte23", c18)
        retounerCarte(c24, "carte24", c18)
        retounerCarte(c25, "carte25", c18)
        retounerCarte(c26, "carte26", c18)
        retounerCarte(c27, "carte27", c18)
        retounerCarte(c28, "carte28", c18)
        retounerCarte(c29, "carte29", c18)
        retounerCarte(c30, "carte30", c18)
        retounerCarte(c31, "carte31", c18)
        retounerCarte(c32, "carte32", c18)
        retounerCarte(c33, "carte33", c18)
        retounerCarte(c34, "carte34", c18)
        retounerCarte(c35, "carte35", c18)
        retounerCarte(c36, "carte36", c18)
        retounerCarte(c37, "carte37", c18)
        retounerCarte(c38, "carte38", c18)
        retounerCarte(c39, "carte39", c18)
        retounerCarte(c40, "carte40", c18)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte18"
    }
})

//image6
c6.addEventListener("click",function (event){
    c6.src=("carte/6m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte8"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte6"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c6.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c6)
        retounerCarte(c2, "carte2", c6)
        retounerCarte(c3, "carte3", c6)
        retounerCarte(c4, "carte4", c6)
        retounerCarte(c5, "carte5", c6)
        retounerCarte(c6, "carte6", c6)
        retounerCarte(c7, "carte7", c6)
        retounerCarte(c8, "carte8", c6)
        retounerCarte(c9, "carte9", c6)
        retounerCarte(c10, "carte10", c6)
        retounerCarte(c11, "carte11", c6)
        retounerCarte(c12, "carte12", c6)
        retounerCarte(c13, "carte13", c6)
        retounerCarte(c14, "carte14", c6)
        retounerCarte(c15, "carte15", c6)
        retounerCarte(c16, "carte16", c6)
        retounerCarte(c17, "carte17", c6)
        retounerCarte(c18, "carte18", c6)
        retounerCarte(c19, "carte19", c6)
        retounerCarte(c20, "carte20", c6) 
        retounerCarte(c21, "carte21", c6)
        retounerCarte(c22, "carte22", c6)
        retounerCarte(c23, "carte23", c6)
        retounerCarte(c24, "carte24", c6)
        retounerCarte(c25, "carte25", c6)
        retounerCarte(c26, "carte26", c6)
        retounerCarte(c27, "carte27", c6)
        retounerCarte(c28, "carte28", c6)
        retounerCarte(c29, "carte29", c6)
        retounerCarte(c30, "carte30", c6)
        retounerCarte(c31, "carte31", c6)
        retounerCarte(c32, "carte32", c6)
        retounerCarte(c33, "carte33", c6)
        retounerCarte(c34, "carte34", c6)
        retounerCarte(c35, "carte35", c6)
        retounerCarte(c36, "carte36", c6)
        retounerCarte(c37, "carte37", c6)
        retounerCarte(c38, "carte38", c6)
        retounerCarte(c39, "carte39", c6)
        retounerCarte(c40, "carte40", c6)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte6"
    }
})
c8.addEventListener("click",function (event){
    c8.src=("carte/6m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte6"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte8"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c8.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c8)
        retounerCarte(c2, "carte2", c8)
        retounerCarte(c3, "carte3", c8)
        retounerCarte(c4, "carte4", c8)
        retounerCarte(c5, "carte5", c8)
        retounerCarte(c6, "carte6", c8)
        retounerCarte(c7, "carte7", c8)
        retounerCarte(c8, "carte8", c8)
        retounerCarte(c9, "carte9", c8)
        retounerCarte(c10, "carte10", c8)
        retounerCarte(c11, "carte11", c8)
        retounerCarte(c12, "carte12", c8)
        retounerCarte(c13, "carte13", c8)
        retounerCarte(c14, "carte14", c8)
        retounerCarte(c15, "carte15", c8)
        retounerCarte(c16, "carte16", c8)
        retounerCarte(c17, "carte17", c8)
        retounerCarte(c18, "carte18", c8)
        retounerCarte(c19, "carte19", c8)
        retounerCarte(c20, "carte20", c8)
        retounerCarte(c21, "carte21", c8)
        retounerCarte(c22, "carte22", c8)
        retounerCarte(c23, "carte23", c8)
        retounerCarte(c24, "carte24", c8)
        retounerCarte(c25, "carte25", c8)
        retounerCarte(c26, "carte26", c8)
        retounerCarte(c27, "carte27", c8)
        retounerCarte(c28, "carte28", c8)
        retounerCarte(c29, "carte29", c8)
        retounerCarte(c30, "carte30", c8)
        retounerCarte(c31, "carte31", c8)
        retounerCarte(c32, "carte32", c8)
        retounerCarte(c33, "carte33", c8)
        retounerCarte(c34, "carte34", c8)
        retounerCarte(c35, "carte35", c8)
        retounerCarte(c36, "carte36", c8)
        retounerCarte(c37, "carte37", c8)
        retounerCarte(c38, "carte38", c8)
        retounerCarte(c39, "carte39", c8)
        retounerCarte(c40, "carte40", c8)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte8"
    }
})

//image7
c7.addEventListener("click",function (event){
    c7.src=("carte/7m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte13"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte7"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c7.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c7)
        retounerCarte(c2, "carte2", c7)
        retounerCarte(c3, "carte3", c7)
        retounerCarte(c4, "carte4", c7)
        retounerCarte(c5, "carte5", c7)
        retounerCarte(c6, "carte6", c7)
        retounerCarte(c7, "carte7", c7)
        retounerCarte(c8, "carte8", c7)
        retounerCarte(c9, "carte9", c7)
        retounerCarte(c10, "carte10", c7)
        retounerCarte(c11, "carte11", c7)
        retounerCarte(c12, "carte12", c7)
        retounerCarte(c13, "carte13", c7)
        retounerCarte(c14, "carte14", c7)
        retounerCarte(c15, "carte15", c7)
        retounerCarte(c16, "carte16", c7)
        retounerCarte(c17, "carte17", c7)
        retounerCarte(c18, "carte18", c7)
        retounerCarte(c19, "carte19", c7)
        retounerCarte(c20, "carte20", c7) 
        retounerCarte(c21, "carte21", c7)
        retounerCarte(c22, "carte22", c7)
        retounerCarte(c23, "carte23", c7)
        retounerCarte(c24, "carte24", c7)
        retounerCarte(c25, "carte25", c7)
        retounerCarte(c26, "carte26", c7)
        retounerCarte(c27, "carte27", c7)
        retounerCarte(c28, "carte28", c7)
        retounerCarte(c29, "carte29", c7)
        retounerCarte(c30, "carte30", c7)
        retounerCarte(c31, "carte31", c7)
        retounerCarte(c32, "carte32", c7)
        retounerCarte(c33, "carte33", c7)
        retounerCarte(c34, "carte34", c7)
        retounerCarte(c35, "carte35", c7)
        retounerCarte(c36, "carte36", c7)
        retounerCarte(c37, "carte37", c7)
        retounerCarte(c38, "carte38", c7)
        retounerCarte(c39, "carte39", c7)
        retounerCarte(c40, "carte40", c7)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte7"
    }
})
c13.addEventListener("click",function (event){
    c13.src=("carte/7m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte7"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte13"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c13.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c13)
        retounerCarte(c2, "carte2", c13)
        retounerCarte(c3, "carte3", c13)
        retounerCarte(c4, "carte4", c13)
        retounerCarte(c5, "carte5", c13)
        retounerCarte(c6, "carte6", c13)
        retounerCarte(c7, "carte7", c13)
        retounerCarte(c8, "carte8", c13)
        retounerCarte(c9, "carte9", c13)
        retounerCarte(c10, "carte10", c13)
        retounerCarte(c11, "carte11", c13)
        retounerCarte(c12, "carte12", c13)
        retounerCarte(c13, "carte13", c13)
        retounerCarte(c14, "carte14", c13)
        retounerCarte(c15, "carte15", c13)
        retounerCarte(c16, "carte16", c13)
        retounerCarte(c17, "carte17", c13)
        retounerCarte(c18, "carte18", c13)
        retounerCarte(c19, "carte19", c13)
        retounerCarte(c20, "carte20", c13) 
        retounerCarte(c21, "carte21", c13)
        retounerCarte(c22, "carte22", c13)
        retounerCarte(c23, "carte23", c13)
        retounerCarte(c24, "carte24", c13)
        retounerCarte(c25, "carte25", c13)
        retounerCarte(c26, "carte26", c13)
        retounerCarte(c27, "carte27", c13)
        retounerCarte(c28, "carte28", c13)
        retounerCarte(c29, "carte29", c13)
        retounerCarte(c30, "carte30", c13)
        retounerCarte(c31, "carte31", c13)
        retounerCarte(c32, "carte32", c13)
        retounerCarte(c33, "carte33", c13)
        retounerCarte(c34, "carte34", c13)
        retounerCarte(c35, "carte35", c13)
        retounerCarte(c36, "carte36", c13)
        retounerCarte(c37, "carte37", c13)
        retounerCarte(c38, "carte38", c13)
        retounerCarte(c39, "carte39", c13)
        retounerCarte(c40, "carte40", c13)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte13"
    }
})

//image8
c10.addEventListener("click",function (event){
    c10.src=("carte/8m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte16"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte10"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c10.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c10)
        retounerCarte(c2, "carte2", c10)
        retounerCarte(c3, "carte3", c10)
        retounerCarte(c4, "carte4", c10)
        retounerCarte(c5, "carte5", c10)
        retounerCarte(c6, "carte6", c10)
        retounerCarte(c7, "carte7", c10)
        retounerCarte(c8, "carte8", c10)
        retounerCarte(c9, "carte9", c10)
        retounerCarte(c10, "carte10", c10)
        retounerCarte(c11, "carte11", c10)
        retounerCarte(c12, "carte12", c10)
        retounerCarte(c13, "carte13", c10)
        retounerCarte(c14, "carte14", c10)
        retounerCarte(c15, "carte15", c10)
        retounerCarte(c16, "carte16", c10)
        retounerCarte(c17, "carte17", c10)
        retounerCarte(c18, "carte18", c10)
        retounerCarte(c19, "carte19", c10)
        retounerCarte(c20, "carte20", c10) 
        retounerCarte(c21, "carte21", c10)
        retounerCarte(c22, "carte22", c10)
        retounerCarte(c23, "carte23", c10)
        retounerCarte(c24, "carte24", c10)
        retounerCarte(c25, "carte25", c10)
        retounerCarte(c26, "carte26", c10)
        retounerCarte(c27, "carte27", c10)
        retounerCarte(c28, "carte28", c10)
        retounerCarte(c29, "carte29", c10)
        retounerCarte(c30, "carte30", c10)
        retounerCarte(c31, "carte31", c10)
        retounerCarte(c32, "carte32", c10)
        retounerCarte(c33, "carte33", c10)
        retounerCarte(c34, "carte34", c10)
        retounerCarte(c35, "carte35", c10)
        retounerCarte(c36, "carte36", c10)
        retounerCarte(c37, "carte37", c10)
        retounerCarte(c38, "carte38", c10)
        retounerCarte(c39, "carte39", c10)
        retounerCarte(c40, "carte40", c10)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte10"
    }
})
c16.addEventListener("click",function (event){
    c16.src=("carte/8m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte10"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte16"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c16.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c16)
        retounerCarte(c2, "carte2", c16)
        retounerCarte(c3, "carte3", c16)
        retounerCarte(c4, "carte4", c16)
        retounerCarte(c5, "carte5", c16)
        retounerCarte(c6, "carte6", c16)
        retounerCarte(c7, "carte7", c16)
        retounerCarte(c8, "carte8", c16)
        retounerCarte(c9, "carte9", c16)
        retounerCarte(c10, "carte10", c16)
        retounerCarte(c11, "carte11", c16)
        retounerCarte(c12, "carte12", c16)
        retounerCarte(c13, "carte13", c16)
        retounerCarte(c14, "carte14", c16)
        retounerCarte(c15, "carte15", c16)
        retounerCarte(c16, "carte16", c16)
        retounerCarte(c17, "carte17", c16)
        retounerCarte(c18, "carte18", c16)
        retounerCarte(c19, "carte19", c16)
        retounerCarte(c20, "carte20", c16) 
        retounerCarte(c21, "carte21", c16)
        retounerCarte(c22, "carte22", c16)
        retounerCarte(c23, "carte23", c16)
        retounerCarte(c24, "carte24", c16)
        retounerCarte(c25, "carte25", c16)
        retounerCarte(c26, "carte26", c16)
        retounerCarte(c27, "carte27", c16)
        retounerCarte(c28, "carte28", c16)
        retounerCarte(c29, "carte29", c16)
        retounerCarte(c30, "carte30", c16)
        retounerCarte(c31, "carte31", c16)
        retounerCarte(c32, "carte32", c16)
        retounerCarte(c33, "carte33", c16)
        retounerCarte(c34, "carte34", c16)
        retounerCarte(c35, "carte35", c16)
        retounerCarte(c36, "carte36", c16)
        retounerCarte(c37, "carte37", c16)
        retounerCarte(c38, "carte38", c16)
        retounerCarte(c39, "carte39", c16)
        retounerCarte(c40, "carte40", c16)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte16"
    }
})

//image9
c11.addEventListener("click",function (event){
    c11.src=("carte/9m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte20"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte11"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c11.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c11)
        retounerCarte(c2, "carte2", c11)
        retounerCarte(c3, "carte3", c11)
        retounerCarte(c4, "carte4", c11)
        retounerCarte(c5, "carte5", c11)
        retounerCarte(c6, "carte6", c11)
        retounerCarte(c7, "carte7", c11)
        retounerCarte(c8, "carte8", c11)
        retounerCarte(c9, "carte9", c11)
        retounerCarte(c10, "carte10", c11)
        retounerCarte(c11, "carte11", c11)
        retounerCarte(c12, "carte12", c11)
        retounerCarte(c13, "carte13", c11)
        retounerCarte(c14, "carte14", c11)
        retounerCarte(c15, "carte15", c11)
        retounerCarte(c16, "carte16", c11)
        retounerCarte(c17, "carte17", c11)
        retounerCarte(c18, "carte18", c11)
        retounerCarte(c19, "carte19", c11)
        retounerCarte(c20, "carte20", c11) 
        retounerCarte(c21, "carte21", c11)
        retounerCarte(c22, "carte22", c11)
        retounerCarte(c23, "carte23", c11)
        retounerCarte(c24, "carte24", c11)
        retounerCarte(c25, "carte25", c11)
        retounerCarte(c26, "carte26", c11)
        retounerCarte(c27, "carte27", c11)
        retounerCarte(c28, "carte28", c11)
        retounerCarte(c29, "carte29", c11)
        retounerCarte(c30, "carte30", c11)
        retounerCarte(c31, "carte31", c11)
        retounerCarte(c32, "carte32", c11)
        retounerCarte(c33, "carte33", c11)
        retounerCarte(c34, "carte34", c11)
        retounerCarte(c35, "carte35", c11)
        retounerCarte(c36, "carte36", c11)
        retounerCarte(c37, "carte37", c11)
        retounerCarte(c38, "carte38", c11)
        retounerCarte(c39, "carte39", c11)
        retounerCarte(c40, "carte40", c11)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte11"
    }
})
c20.addEventListener("click",function (event){
    c20.src=("carte/9m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte11"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte20"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c20.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c20)
        retounerCarte(c2, "carte2", c20)
        retounerCarte(c3, "carte3", c20)
        retounerCarte(c4, "carte4", c20)
        retounerCarte(c5, "carte5", c20)
        retounerCarte(c6, "carte6", c20)
        retounerCarte(c7, "carte7", c20)
        retounerCarte(c8, "carte8", c20)
        retounerCarte(c9, "carte9", c20)
        retounerCarte(c10, "carte10", c20)
        retounerCarte(c11, "carte11", c20)
        retounerCarte(c12, "carte12", c20)
        retounerCarte(c13, "carte13", c20)
        retounerCarte(c14, "carte14", c20)
        retounerCarte(c15, "carte15", c20)
        retounerCarte(c16, "carte16", c20)
        retounerCarte(c17, "carte17", c20)
        retounerCarte(c18, "carte18", c20)
        retounerCarte(c19, "carte19", c20)
        retounerCarte(c20, "carte20", c20)  
        retounerCarte(c21, "carte21", c20)
        retounerCarte(c22, "carte22", c20)
        retounerCarte(c23, "carte23", c20)
        retounerCarte(c24, "carte24", c20)
        retounerCarte(c25, "carte25", c20)
        retounerCarte(c26, "carte26", c20)
        retounerCarte(c27, "carte27", c20)
        retounerCarte(c28, "carte28", c20)
        retounerCarte(c29, "carte29", c20)
        retounerCarte(c30, "carte30", c20)
        retounerCarte(c31, "carte31", c20)
        retounerCarte(c32, "carte32", c20)
        retounerCarte(c33, "carte33", c20)
        retounerCarte(c34, "carte34", c20)
        retounerCarte(c35, "carte35", c20)
        retounerCarte(c36, "carte36", c20)
        retounerCarte(c37, "carte37", c20)
        retounerCarte(c38, "carte38", c20)
        retounerCarte(c39, "carte39", c20)
        retounerCarte(c40, "carte40", c20)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte20"
    }
})

//image10
c12.addEventListener("click",function (event){
    c12.src=("carte/10m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte17"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte12"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c12.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c12)
        retounerCarte(c2, "carte2", c12)
        retounerCarte(c3, "carte3", c12)
        retounerCarte(c4, "carte4", c12)
        retounerCarte(c5, "carte5", c12)
        retounerCarte(c6, "carte6", c12)
        retounerCarte(c7, "carte7", c12)
        retounerCarte(c8, "carte8", c12)
        retounerCarte(c9, "carte9", c12)
        retounerCarte(c10, "carte10", c12)
        retounerCarte(c11, "carte11", c12)
        retounerCarte(c12, "carte12", c12)
        retounerCarte(c13, "carte13", c12)
        retounerCarte(c14, "carte14", c12)
        retounerCarte(c15, "carte15", c12)
        retounerCarte(c16, "carte16", c12)
        retounerCarte(c17, "carte17", c12)
        retounerCarte(c18, "carte18", c12)
        retounerCarte(c19, "carte19", c12)
        retounerCarte(c20, "carte20", c12)    
        retounerCarte(c21, "carte21", c12)
        retounerCarte(c22, "carte22", c12)
        retounerCarte(c23, "carte23", c12)
        retounerCarte(c24, "carte24", c12)
        retounerCarte(c25, "carte25", c12)
        retounerCarte(c26, "carte26", c12)
        retounerCarte(c27, "carte27", c12)
        retounerCarte(c28, "carte28", c12)
        retounerCarte(c29, "carte29", c12)
        retounerCarte(c30, "carte30", c12)
        retounerCarte(c31, "carte31", c12)
        retounerCarte(c32, "carte32", c12)
        retounerCarte(c33, "carte33", c12)
        retounerCarte(c34, "carte34", c12)
        retounerCarte(c35, "carte35", c12)
        retounerCarte(c36, "carte36", c12)
        retounerCarte(c37, "carte37", c12)
        retounerCarte(c38, "carte38", c12)
        retounerCarte(c39, "carte39", c12)
        retounerCarte(c40, "carte40", c12)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte12"
    }
})
c17.addEventListener("click",function (event){
    c17.src=("carte/10m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte12"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte17"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c17.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c17)
        retounerCarte(c2, "carte2", c17)
        retounerCarte(c3, "carte3", c17)
        retounerCarte(c4, "carte4", c17)
        retounerCarte(c5, "carte5", c17)
        retounerCarte(c6, "carte6", c17)
        retounerCarte(c7, "carte7", c17)
        retounerCarte(c8, "carte8", c17)
        retounerCarte(c9, "carte9", c17)
        retounerCarte(c10, "carte10", c17)
        retounerCarte(c11, "carte11", c17)
        retounerCarte(c12, "carte12", c17)
        retounerCarte(c13, "carte13", c17)
        retounerCarte(c14, "carte14", c17)
        retounerCarte(c15, "carte15", c17)
        retounerCarte(c16, "carte16", c17)
        retounerCarte(c17, "carte17", c17)
        retounerCarte(c18, "carte18", c17)
        retounerCarte(c19, "carte19", c17)
        retounerCarte(c20, "carte20", c17)  
        retounerCarte(c21, "carte21", c17)
        retounerCarte(c22, "carte22", c17)
        retounerCarte(c23, "carte23", c17)
        retounerCarte(c24, "carte24", c17)
        retounerCarte(c25, "carte25", c17)
        retounerCarte(c26, "carte26", c17)
        retounerCarte(c27, "carte27", c17)
        retounerCarte(c28, "carte28", c17)
        retounerCarte(c29, "carte29", c17)
        retounerCarte(c30, "carte30", c17)
        retounerCarte(c31, "carte31", c17)
        retounerCarte(c32, "carte32", c17)
        retounerCarte(c33, "carte33", c17)
        retounerCarte(c34, "carte34", c17)
        retounerCarte(c35, "carte35", c17)
        retounerCarte(c36, "carte36", c17)
        retounerCarte(c37, "carte37", c17)
        retounerCarte(c38, "carte38", c17)
        retounerCarte(c39, "carte39", c17)
        retounerCarte(c40, "carte40", c17)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte17"
    }
})
//image11
c21.addEventListener("click",function (event){
    c21.src="carte/11.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()

    if (dernierClick == "carte35"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
        }
    } else if (dernierClick== "carte21"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c21.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c21)
        retounerCarte(c2, "carte2", c21)
        retounerCarte(c3, "carte3", c21)
        retounerCarte(c4, "carte4", c21)
        retounerCarte(c5, "carte5", c21)
        retounerCarte(c6, "carte6", c21)
        retounerCarte(c7, "carte7", c21)
        retounerCarte(c8, "carte8", c21)
        retounerCarte(c9, "carte9", c21)
        retounerCarte(c10, "carte10", c21)
        retounerCarte(c11, "carte11", c21)
        retounerCarte(c12, "carte12", c21)
        retounerCarte(c13, "carte13", c21)
        retounerCarte(c14, "carte14", c21)
        retounerCarte(c15, "carte15", c21)
        retounerCarte(c16, "carte16", c21)
        retounerCarte(c17, "carte17", c21)
        retounerCarte(c18, "carte18", c21)
        retounerCarte(c19, "carte19", c21)
        retounerCarte(c20, "carte20", c21)  
        retounerCarte(c21, "carte21", c21)
        retounerCarte(c22, "carte22", c21)
        retounerCarte(c23, "carte23", c21)
        retounerCarte(c24, "carte24", c21)
        retounerCarte(c25, "carte25", c21)
        retounerCarte(c26, "carte26", c21)
        retounerCarte(c27, "carte27", c21)
        retounerCarte(c28, "carte28", c21)
        retounerCarte(c29, "carte29", c21)
        retounerCarte(c30, "carte30", c21)
        retounerCarte(c31, "carte31", c21)
        retounerCarte(c32, "carte32", c21)
        retounerCarte(c33, "carte33", c21)
        retounerCarte(c34, "carte34", c21)
        retounerCarte(c35, "carte35", c21)
        retounerCarte(c36, "carte36", c21)
        retounerCarte(c37, "carte37", c21)
        retounerCarte(c38, "carte38", c21)
        retounerCarte(c39, "carte39", c21)
        retounerCarte(c40, "carte40", c21)       
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte21"
    }
})
c35.addEventListener("click",function (event){
    c35.src="carte/11.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte21"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
        }
    } else if (dernierClick== "carte35"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c35.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c35)
        retounerCarte(c2, "carte2", c35)
        retounerCarte(c3, "carte3", c35)
        retounerCarte(c4, "carte4", c35)
        retounerCarte(c5, "carte5", c35)
        retounerCarte(c6, "carte6", c35)
        retounerCarte(c7, "carte7", c35)
        retounerCarte(c8, "carte8", c35)
        retounerCarte(c9, "carte9", c35)
        retounerCarte(c10, "carte10", c35)
        retounerCarte(c11, "carte11", c35)
        retounerCarte(c12, "carte12", c35)
        retounerCarte(c13, "carte13", c35)
        retounerCarte(c14, "carte14", c35)
        retounerCarte(c15, "carte15", c35)
        retounerCarte(c16, "carte16", c35)
        retounerCarte(c17, "carte17", c35)
        retounerCarte(c18, "carte18", c35)
        retounerCarte(c19, "carte19", c35)
        retounerCarte(c20, "carte20", c35)  
        retounerCarte(c21, "carte21", c35)
        retounerCarte(c22, "carte22", c35)
        retounerCarte(c23, "carte23", c35)
        retounerCarte(c24, "carte24", c35)
        retounerCarte(c25, "carte25", c35)
        retounerCarte(c26, "carte26", c35)
        retounerCarte(c27, "carte27", c35)
        retounerCarte(c28, "carte28", c35)
        retounerCarte(c29, "carte29", c35)
        retounerCarte(c30, "carte30", c35)
        retounerCarte(c31, "carte31", c35)
        retounerCarte(c32, "carte32", c35)
        retounerCarte(c33, "carte33", c35)
        retounerCarte(c34, "carte34", c35)
        retounerCarte(c35, "carte35", c35)
        retounerCarte(c36, "carte36", c35)
        retounerCarte(c37, "carte37", c35)
        retounerCarte(c38, "carte38", c35)
        retounerCarte(c39, "carte39", c35)
        retounerCarte(c40, "carte40", c35)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte35"
    }
})
//image12
c22.addEventListener("click",function (event){
    c22.src=("carte/12.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte29"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
        }
    } else if (dernierClick== "carte22"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c22.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c22)
        retounerCarte(c2, "carte2", c22)
        retounerCarte(c3, "carte3", c22)
        retounerCarte(c4, "carte4", c22)
        retounerCarte(c5, "carte5", c22)
        retounerCarte(c6, "carte6", c22)
        retounerCarte(c7, "carte7", c22)
        retounerCarte(c8, "carte8", c22)
        retounerCarte(c9, "carte9", c22)
        retounerCarte(c10, "carte10", c22)
        retounerCarte(c11, "carte11", c22)
        retounerCarte(c12, "carte12", c22)
        retounerCarte(c13, "carte13", c22)
        retounerCarte(c14, "carte14", c22)
        retounerCarte(c15, "carte15", c22)
        retounerCarte(c16, "carte16", c22)
        retounerCarte(c17, "carte17", c22)
        retounerCarte(c18, "carte18", c22)
        retounerCarte(c19, "carte19", c22)
        retounerCarte(c20, "carte20", c22) 
        retounerCarte(c21, "carte21", c22)
        retounerCarte(c22, "carte22", c22)
        retounerCarte(c23, "carte23", c22)
        retounerCarte(c24, "carte24", c22)
        retounerCarte(c25, "carte25", c22)
        retounerCarte(c26, "carte26", c22)
        retounerCarte(c27, "carte27", c22)
        retounerCarte(c28, "carte28", c22)
        retounerCarte(c29, "carte29", c22)
        retounerCarte(c30, "carte30", c22)
        retounerCarte(c31, "carte31", c22)
        retounerCarte(c32, "carte32", c22)
        retounerCarte(c33, "carte33", c22)
        retounerCarte(c34, "carte34", c22)
        retounerCarte(c35, "carte35", c22)
        retounerCarte(c36, "carte36", c22)
        retounerCarte(c37, "carte37", c22)
        retounerCarte(c38, "carte38", c22)
        retounerCarte(c39, "carte39", c22)
        retounerCarte(c40, "carte40", c22)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte22"
    }
})
c29.addEventListener("click",function (event){
    c29.src=("carte/12.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte22"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
        }
    } else if (dernierClick== "carte29"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c29.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c29)
        retounerCarte(c2, "carte2", c29)
        retounerCarte(c3, "carte3", c29)
        retounerCarte(c4, "carte4", c29)
        retounerCarte(c5, "carte5", c29)
        retounerCarte(c6, "carte6", c29)
        retounerCarte(c7, "carte7", c29)
        retounerCarte(c8, "carte8", c29)
        retounerCarte(c9, "carte9", c29)
        retounerCarte(c10, "carte10", c29)
        retounerCarte(c11, "carte11", c29)
        retounerCarte(c12, "carte12", c29)
        retounerCarte(c13, "carte13", c29)
        retounerCarte(c14, "carte14", c29)
        retounerCarte(c15, "carte15", c29)
        retounerCarte(c16, "carte16", c29)
        retounerCarte(c17, "carte17", c29)
        retounerCarte(c18, "carte18", c29)
        retounerCarte(c19, "carte19", c29)
        retounerCarte(c20, "carte20", c29) 
        retounerCarte(c21, "carte21", c29)
        retounerCarte(c22, "carte22", c29)
        retounerCarte(c23, "carte23", c29)
        retounerCarte(c24, "carte24", c29)
        retounerCarte(c25, "carte25", c29)
        retounerCarte(c26, "carte26", c29)
        retounerCarte(c27, "carte27", c29)
        retounerCarte(c28, "carte28", c29)
        retounerCarte(c29, "carte29", c29)
        retounerCarte(c30, "carte30", c29)
        retounerCarte(c31, "carte31", c29)
        retounerCarte(c32, "carte32", c29)
        retounerCarte(c33, "carte33", c29)
        retounerCarte(c34, "carte34", c29)
        retounerCarte(c35, "carte35", c29)
        retounerCarte(c36, "carte36", c29)
        retounerCarte(c37, "carte37", c29)
        retounerCarte(c38, "carte38", c29)
        retounerCarte(c39, "carte39", c29)
        retounerCarte(c40, "carte40", c29)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte29"
    }
})

//image13
c23.addEventListener("click",function (event){
    c23.src=("carte/13.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte34"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
        }
    } else if (dernierClick== "carte23"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c23.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c23)
        retounerCarte(c2, "carte2", c23)
        retounerCarte(c3, "carte3", c23)
        retounerCarte(c4, "carte4", c23)
        retounerCarte(c5, "carte5", c23)
        retounerCarte(c6, "carte6", c23)
        retounerCarte(c7, "carte7", c23)
        retounerCarte(c8, "carte8", c23)
        retounerCarte(c9, "carte9", c23)
        retounerCarte(c10, "carte10", c23)
        retounerCarte(c11, "carte11", c23)
        retounerCarte(c12, "carte12", c23)
        retounerCarte(c13, "carte13", c23)
        retounerCarte(c14, "carte14", c23)
        retounerCarte(c15, "carte15", c23)
        retounerCarte(c16, "carte16", c23)
        retounerCarte(c17, "carte17", c23)
        retounerCarte(c18, "carte18", c23)
        retounerCarte(c19, "carte19", c23)
        retounerCarte(c20, "carte20", c23)
        retounerCarte(c21, "carte21", c23)
        retounerCarte(c22, "carte22", c23)
        retounerCarte(c23, "carte23", c23)
        retounerCarte(c24, "carte24", c23)
        retounerCarte(c25, "carte25", c23)
        retounerCarte(c26, "carte26", c23)
        retounerCarte(c27, "carte27", c23)
        retounerCarte(c28, "carte28", c23)
        retounerCarte(c29, "carte29", c23)
        retounerCarte(c30, "carte30", c23)
        retounerCarte(c31, "carte31", c23)
        retounerCarte(c32, "carte32", c23)
        retounerCarte(c33, "carte33", c23)
        retounerCarte(c34, "carte34", c23)
        retounerCarte(c35, "carte35", c23)
        retounerCarte(c36, "carte36", c23)
        retounerCarte(c37, "carte37", c23)
        retounerCarte(c38, "carte38", c23)
        retounerCarte(c39, "carte39", c23)
        retounerCarte(c40, "carte40", c23)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte23"
    }
})
c34.addEventListener("click",function (event){
    c34.src=("carte/13.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte23"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte34"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c34.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c34)
        retounerCarte(c2, "carte2", c34)
        retounerCarte(c3, "carte3", c34)
        retounerCarte(c4, "carte4", c34)
        retounerCarte(c5, "carte5", c34)
        retounerCarte(c6, "carte6", c34)
        retounerCarte(c7, "carte7", c34)
        retounerCarte(c8, "carte8", c34)
        retounerCarte(c9, "carte9", c34)
        retounerCarte(c10, "carte10", c34)
        retounerCarte(c11, "carte11", c34)
        retounerCarte(c12, "carte12", c34)
        retounerCarte(c13, "carte13", c34)
        retounerCarte(c14, "carte14", c34)
        retounerCarte(c15, "carte15", c34)
        retounerCarte(c16, "carte16", c34)
        retounerCarte(c17, "carte17", c34)
        retounerCarte(c18, "carte18", c34)
        retounerCarte(c19, "carte19", c34)
        retounerCarte(c20, "carte20", c34) 
        retounerCarte(c21, "carte21", c34)
        retounerCarte(c22, "carte22", c34)
        retounerCarte(c23, "carte23", c34)
        retounerCarte(c24, "carte24", c34)
        retounerCarte(c25, "carte25", c34)
        retounerCarte(c26, "carte26", c34)
        retounerCarte(c27, "carte27", c34)
        retounerCarte(c28, "carte28", c34)
        retounerCarte(c29, "carte29", c34)
        retounerCarte(c30, "carte30", c34)
        retounerCarte(c31, "carte31", c34)
        retounerCarte(c32, "carte32", c34)
        retounerCarte(c33, "carte33", c34)
        retounerCarte(c34, "carte34", c34)
        retounerCarte(c35, "carte35", c34)
        retounerCarte(c36, "carte36", c34)
        retounerCarte(c37, "carte37", c34)
        retounerCarte(c38, "carte38", c34)
        retounerCarte(c39, "carte39", c34)
        retounerCarte(c40, "carte40", c34)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte34"
    }
})

//image14
c24.addEventListener("click",function (event){
    c24.src=("carte/14.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte39"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte24"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c24.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c24)
        retounerCarte(c2, "carte2", c24)
        retounerCarte(c3, "carte3", c24)
        retounerCarte(c4, "carte4", c24)
        retounerCarte(c5, "carte5", c24)
        retounerCarte(c6, "carte6", c24)
        retounerCarte(c7, "carte7", c24)
        retounerCarte(c8, "carte8", c24)
        retounerCarte(c9, "carte9", c24)
        retounerCarte(c10, "carte10", c24)
        retounerCarte(c11, "carte11", c24)
        retounerCarte(c12, "carte12", c24)
        retounerCarte(c13, "carte13", c24)
        retounerCarte(c14, "carte14", c24)
        retounerCarte(c15, "carte15", c24)
        retounerCarte(c16, "carte16", c24)
        retounerCarte(c17, "carte17", c24)
        retounerCarte(c18, "carte18", c24)
        retounerCarte(c19, "carte19", c24)
        retounerCarte(c20, "carte20", c24) 
        retounerCarte(c21, "carte21", c24)
        retounerCarte(c22, "carte22", c24)
        retounerCarte(c23, "carte23", c24)
        retounerCarte(c24, "carte24", c24)
        retounerCarte(c25, "carte25", c24)
        retounerCarte(c26, "carte26", c24)
        retounerCarte(c27, "carte27", c24)
        retounerCarte(c28, "carte28", c24)
        retounerCarte(c29, "carte29", c24)
        retounerCarte(c30, "carte30", c24)
        retounerCarte(c31, "carte31", c24)
        retounerCarte(c32, "carte32", c24)
        retounerCarte(c33, "carte33", c24)
        retounerCarte(c34, "carte34", c24)
        retounerCarte(c35, "carte35", c24)
        retounerCarte(c36, "carte36", c24)
        retounerCarte(c37, "carte37", c24)
        retounerCarte(c38, "carte38", c24)
        retounerCarte(c39, "carte39", c24)
        retounerCarte(c40, "carte40", c24)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte24"
    }
})
c39.addEventListener("click",function (event){
    c39.src=("carte/14.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte24"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte39"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c39.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c39)
        retounerCarte(c2, "carte2", c39)
        retounerCarte(c3, "carte3", c39)
        retounerCarte(c4, "carte4", c39)
        retounerCarte(c5, "carte5", c39)
        retounerCarte(c6, "carte6", c39)
        retounerCarte(c7, "carte7", c39)
        retounerCarte(c8, "carte8", c39)
        retounerCarte(c9, "carte9", c39)
        retounerCarte(c10, "carte10", c39)
        retounerCarte(c11, "carte11", c39)
        retounerCarte(c12, "carte12", c39)
        retounerCarte(c13, "carte13", c39)
        retounerCarte(c14, "carte14", c39)
        retounerCarte(c15, "carte15", c39)
        retounerCarte(c16, "carte16", c39)
        retounerCarte(c17, "carte17", c39)
        retounerCarte(c18, "carte18", c39)
        retounerCarte(c19, "carte19", c39)
        retounerCarte(c20, "carte20", c39)
        retounerCarte(c21, "carte21", c39)
        retounerCarte(c22, "carte22", c39)
        retounerCarte(c23, "carte23", c39)
        retounerCarte(c24, "carte24", c39)
        retounerCarte(c25, "carte25", c39)
        retounerCarte(c26, "carte26", c39)
        retounerCarte(c27, "carte27", c39)
        retounerCarte(c28, "carte28", c39)
        retounerCarte(c29, "carte29", c39)
        retounerCarte(c30, "carte30", c39)
        retounerCarte(c31, "carte31", c39)
        retounerCarte(c32, "carte32", c39)
        retounerCarte(c33, "carte33", c39)
        retounerCarte(c34, "carte34", c39)
        retounerCarte(c35, "carte35", c39)
        retounerCarte(c36, "carte36", c39)
        retounerCarte(c37, "carte37", c39)
        retounerCarte(c38, "carte38", c39)
        retounerCarte(c39, "carte39", c39)
        retounerCarte(c40, "carte40", c39)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte39"
    }
})

//image15
c25.addEventListener("click",function (event){
    c25.src=("carte/15.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte38"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte25"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c25.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c25)
        retounerCarte(c2, "carte2", c25)
        retounerCarte(c3, "carte3", c25)
        retounerCarte(c4, "carte4", c25)
        retounerCarte(c5, "carte5", c25)
        retounerCarte(c6, "carte6", c25)
        retounerCarte(c7, "carte7", c25)
        retounerCarte(c8, "carte8", c25)
        retounerCarte(c9, "carte9", c25)
        retounerCarte(c10, "carte10", c25)
        retounerCarte(c11, "carte11", c25)
        retounerCarte(c12, "carte12", c25)
        retounerCarte(c13, "carte13", c25)
        retounerCarte(c14, "carte14", c25)
        retounerCarte(c15, "carte15", c25)
        retounerCarte(c16, "carte16", c25)
        retounerCarte(c17, "carte17", c25)
        retounerCarte(c18, "carte18", c25)
        retounerCarte(c19, "carte19", c25)
        retounerCarte(c20, "carte20", c25) 
        retounerCarte(c21, "carte21", c25)
        retounerCarte(c22, "carte22", c25)
        retounerCarte(c23, "carte23", c25)
        retounerCarte(c24, "carte24", c25)
        retounerCarte(c25, "carte25", c25)
        retounerCarte(c26, "carte26", c25)
        retounerCarte(c27, "carte27", c25)
        retounerCarte(c28, "carte28", c25)
        retounerCarte(c29, "carte29", c25)
        retounerCarte(c30, "carte30", c25)
        retounerCarte(c31, "carte31", c25)
        retounerCarte(c32, "carte32", c25)
        retounerCarte(c33, "carte33", c25)
        retounerCarte(c34, "carte34", c25)
        retounerCarte(c35, "carte35", c25)
        retounerCarte(c36, "carte36", c25)
        retounerCarte(c37, "carte37", c25)
        retounerCarte(c38, "carte38", c25)
        retounerCarte(c39, "carte39", c25)
        retounerCarte(c40, "carte40", c25)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte25"
    }
})
c38.addEventListener("click",function (event){
    c38.src=("carte/15.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte25"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte38"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c38.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c38)
        retounerCarte(c2, "carte2", c38)
        retounerCarte(c3, "carte3", c38)
        retounerCarte(c4, "carte4", c38)
        retounerCarte(c5, "carte5", c38)
        retounerCarte(c6, "carte6", c38)
        retounerCarte(c7, "carte7", c38)
        retounerCarte(c8, "carte8", c38)
        retounerCarte(c9, "carte9", c38)
        retounerCarte(c10, "carte10", c38)
        retounerCarte(c11, "carte11", c38)
        retounerCarte(c12, "carte12", c38)
        retounerCarte(c13, "carte13", c38)
        retounerCarte(c14, "carte14", c38)
        retounerCarte(c15, "carte15", c38)
        retounerCarte(c16, "carte16", c38)
        retounerCarte(c17, "carte17", c38)
        retounerCarte(c18, "carte18", c38)
        retounerCarte(c19, "carte19", c38)
        retounerCarte(c20, "carte20", c38) 
        retounerCarte(c21, "carte21", c38)
        retounerCarte(c22, "carte22", c38)
        retounerCarte(c23, "carte23", c38)
        retounerCarte(c24, "carte24", c38)
        retounerCarte(c25, "carte25", c38)
        retounerCarte(c26, "carte26", c38)
        retounerCarte(c27, "carte27", c38)
        retounerCarte(c28, "carte28", c38)
        retounerCarte(c29, "carte29", c38)
        retounerCarte(c30, "carte30", c38)
        retounerCarte(c31, "carte31", c38)
        retounerCarte(c32, "carte32", c38)
        retounerCarte(c33, "carte33", c38)
        retounerCarte(c34, "carte34", c38)
        retounerCarte(c35, "carte35", c38)
        retounerCarte(c36, "carte36", c38)
        retounerCarte(c37, "carte37", c38)
        retounerCarte(c38, "carte38", c38)
        retounerCarte(c39, "carte39", c38)
        retounerCarte(c40, "carte40", c38)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte38"
    }
})

//image16
c26.addEventListener("click",function (event){
    c26.src=("carte/16.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte28"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte26"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c26.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c26)
        retounerCarte(c2, "carte2", c26)
        retounerCarte(c3, "carte3", c26)
        retounerCarte(c4, "carte4", c26)
        retounerCarte(c5, "carte5", c26)
        retounerCarte(c6, "carte6", c26)
        retounerCarte(c7, "carte7", c26)
        retounerCarte(c8, "carte8", c26)
        retounerCarte(c9, "carte9", c26)
        retounerCarte(c10, "carte10", c26)
        retounerCarte(c11, "carte11", c26)
        retounerCarte(c12, "carte12", c26)
        retounerCarte(c13, "carte13", c26)
        retounerCarte(c14, "carte14", c26)
        retounerCarte(c15, "carte15", c26)
        retounerCarte(c16, "carte16", c26)
        retounerCarte(c17, "carte17", c26)
        retounerCarte(c18, "carte18", c26)
        retounerCarte(c19, "carte19", c26)
        retounerCarte(c20, "carte20", c26) 
        retounerCarte(c21, "carte21", c26)
        retounerCarte(c22, "carte22", c26)
        retounerCarte(c23, "carte23", c26)
        retounerCarte(c24, "carte24", c26)
        retounerCarte(c25, "carte25", c26)
        retounerCarte(c26, "carte26", c26)
        retounerCarte(c27, "carte27", c26)
        retounerCarte(c28, "carte28", c26)
        retounerCarte(c29, "carte29", c26)
        retounerCarte(c30, "carte30", c26)
        retounerCarte(c31, "carte31", c26)
        retounerCarte(c32, "carte32", c26)
        retounerCarte(c33, "carte33", c26)
        retounerCarte(c34, "carte34", c26)
        retounerCarte(c35, "carte35", c26)
        retounerCarte(c36, "carte36", c26)
        retounerCarte(c37, "carte37", c26)
        retounerCarte(c38, "carte38", c26)
        retounerCarte(c39, "carte39", c26)
        retounerCarte(c40, "carte40", c26)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte26"
    }
})
c28.addEventListener("click",function (event){
    c28.src=("carte/16.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte26"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte28"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c28.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c28)
        retounerCarte(c2, "carte2", c28)
        retounerCarte(c3, "carte3", c28)
        retounerCarte(c4, "carte4", c28)
        retounerCarte(c5, "carte5", c28)
        retounerCarte(c6, "carte6", c28)
        retounerCarte(c7, "carte7", c28)
        retounerCarte(c8, "carte8", c28)
        retounerCarte(c9, "carte9", c28)
        retounerCarte(c10, "carte10", c28)
        retounerCarte(c11, "carte11", c28)
        retounerCarte(c12, "carte12", c28)
        retounerCarte(c13, "carte13", c28)
        retounerCarte(c14, "carte14", c28)
        retounerCarte(c15, "carte15", c28)
        retounerCarte(c16, "carte16", c28)
        retounerCarte(c17, "carte17", c28)
        retounerCarte(c18, "carte18", c28)
        retounerCarte(c19, "carte19", c28)
        retounerCarte(c20, "carte20", c28) 
        retounerCarte(c21, "carte21", c28)
        retounerCarte(c22, "carte22", c28)
        retounerCarte(c23, "carte23", c28)
        retounerCarte(c24, "carte24", c28)
        retounerCarte(c25, "carte25", c28)
        retounerCarte(c26, "carte26", c28)
        retounerCarte(c27, "carte27", c28)
        retounerCarte(c28, "carte28", c28)
        retounerCarte(c29, "carte29", c28)
        retounerCarte(c30, "carte30", c28)
        retounerCarte(c31, "carte31", c28)
        retounerCarte(c32, "carte32", c28)
        retounerCarte(c33, "carte33", c28)
        retounerCarte(c34, "carte34", c28)
        retounerCarte(c35, "carte35", c28)
        retounerCarte(c36, "carte36", c28)
        retounerCarte(c37, "carte37", c28)
        retounerCarte(c38, "carte38", c28)
        retounerCarte(c39, "carte39", c28)
        retounerCarte(c40, "carte40", c28)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte28"
    }
})

//image17
c27.addEventListener("click",function (event){
    c27.src=("carte/17.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte33"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte27"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c27.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c27)
        retounerCarte(c2, "carte2", c27)
        retounerCarte(c3, "carte3", c27)
        retounerCarte(c4, "carte4", c27)
        retounerCarte(c5, "carte5", c27)
        retounerCarte(c6, "carte6", c27)
        retounerCarte(c7, "carte7", c27)
        retounerCarte(c8, "carte8", c27)
        retounerCarte(c9, "carte9", c27)
        retounerCarte(c10, "carte10", c27)
        retounerCarte(c11, "carte11", c27)
        retounerCarte(c12, "carte12", c27)
        retounerCarte(c13, "carte13", c27)
        retounerCarte(c14, "carte14", c27)
        retounerCarte(c15, "carte15", c27)
        retounerCarte(c16, "carte16", c27)
        retounerCarte(c17, "carte17", c27)
        retounerCarte(c18, "carte18", c27)
        retounerCarte(c19, "carte19", c27)
        retounerCarte(c20, "carte20", c27)  
        retounerCarte(c21, "carte21", c27)
        retounerCarte(c22, "carte22", c27)
        retounerCarte(c23, "carte23", c27)
        retounerCarte(c24, "carte24", c27)
        retounerCarte(c25, "carte25", c27)
        retounerCarte(c26, "carte26", c27)
        retounerCarte(c27, "carte27", c27)
        retounerCarte(c28, "carte28", c27)
        retounerCarte(c29, "carte29", c27)
        retounerCarte(c30, "carte30", c27)
        retounerCarte(c31, "carte31", c27)
        retounerCarte(c32, "carte32", c27)
        retounerCarte(c33, "carte33", c27)
        retounerCarte(c34, "carte34", c27)
        retounerCarte(c35, "carte35", c27)
        retounerCarte(c36, "carte36", c27)
        retounerCarte(c37, "carte37", c27)
        retounerCarte(c38, "carte38", c27)
        retounerCarte(c39, "carte39", c27)
        retounerCarte(c40, "carte40", c27)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte27"
    }
})
c33.addEventListener("click",function (event){
    c33.src=("carte/17.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte27"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte33"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c33.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c33)
        retounerCarte(c2, "carte2", c33)
        retounerCarte(c3, "carte3", c33)
        retounerCarte(c4, "carte4", c33)
        retounerCarte(c5, "carte5", c33)
        retounerCarte(c6, "carte6", c33)
        retounerCarte(c7, "carte7", c33)
        retounerCarte(c8, "carte8", c33)
        retounerCarte(c9, "carte9", c33)
        retounerCarte(c10, "carte10", c33)
        retounerCarte(c11, "carte11", c33)
        retounerCarte(c12, "carte12", c33)
        retounerCarte(c13, "carte13", c33)
        retounerCarte(c14, "carte14", c33)
        retounerCarte(c15, "carte15", c33)
        retounerCarte(c16, "carte16", c33)
        retounerCarte(c17, "carte17", c33)
        retounerCarte(c18, "carte18", c33)
        retounerCarte(c19, "carte19", c33)
        retounerCarte(c20, "carte20", c33) 
        retounerCarte(c21, "carte21", c33)
        retounerCarte(c22, "carte22", c33)
        retounerCarte(c23, "carte23", c33)
        retounerCarte(c24, "carte24", c33)
        retounerCarte(c25, "carte25", c33)
        retounerCarte(c26, "carte26", c33)
        retounerCarte(c27, "carte27", c33)
        retounerCarte(c28, "carte28", c33)
        retounerCarte(c29, "carte29", c33)
        retounerCarte(c30, "carte30", c33)
        retounerCarte(c31, "carte31", c33)
        retounerCarte(c32, "carte32", c33)
        retounerCarte(c33, "carte33", c33)
        retounerCarte(c34, "carte34", c33)
        retounerCarte(c35, "carte35", c33)
        retounerCarte(c36, "carte36", c33)
        retounerCarte(c37, "carte37", c33)
        retounerCarte(c38, "carte38", c33)
        retounerCarte(c39, "carte39", c33)
        retounerCarte(c40, "carte40", c33)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte33"
    }
})

//image18
c30.addEventListener("click",function (event){
    c30.src=("carte/18.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte36"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte30"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c30.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c30)
        retounerCarte(c2, "carte2", c30)
        retounerCarte(c3, "carte3", c30)
        retounerCarte(c4, "carte4", c30)
        retounerCarte(c5, "carte5", c30)
        retounerCarte(c6, "carte6", c30)
        retounerCarte(c7, "carte7", c30)
        retounerCarte(c8, "carte8", c30)
        retounerCarte(c9, "carte9", c30)
        retounerCarte(c10, "carte10", c30)
        retounerCarte(c11, "carte11", c30)
        retounerCarte(c12, "carte12", c30)
        retounerCarte(c13, "carte13", c30)
        retounerCarte(c14, "carte14", c30)
        retounerCarte(c15, "carte15", c30)
        retounerCarte(c16, "carte16", c30)
        retounerCarte(c17, "carte17", c30)
        retounerCarte(c18, "carte18", c30)
        retounerCarte(c19, "carte19", c30)
        retounerCarte(c20, "carte20", c30)  
        retounerCarte(c21, "carte21", c30)
        retounerCarte(c22, "carte22", c30)
        retounerCarte(c23, "carte23", c30)
        retounerCarte(c24, "carte24", c30)
        retounerCarte(c25, "carte25", c30)
        retounerCarte(c26, "carte26", c30)
        retounerCarte(c27, "carte27", c30)
        retounerCarte(c28, "carte28", c30)
        retounerCarte(c29, "carte29", c30)
        retounerCarte(c30, "carte30", c30)
        retounerCarte(c31, "carte31", c30)
        retounerCarte(c32, "carte32", c30)
        retounerCarte(c33, "carte33", c30)
        retounerCarte(c34, "carte34", c30)
        retounerCarte(c35, "carte35", c30)
        retounerCarte(c36, "carte36", c30)
        retounerCarte(c37, "carte37", c30)
        retounerCarte(c38, "carte38", c30)
        retounerCarte(c39, "carte39", c30)
        retounerCarte(c40, "carte40", c30)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte30"
    }
})
c36.addEventListener("click",function (event){
    c36.src=("carte/18.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte30"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte36"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c36.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c36)
        retounerCarte(c2, "carte2", c36)
        retounerCarte(c3, "carte3", c36)
        retounerCarte(c4, "carte4", c36)
        retounerCarte(c5, "carte5", c36)
        retounerCarte(c6, "carte6", c36)
        retounerCarte(c7, "carte7", c36)
        retounerCarte(c8, "carte8", c36)
        retounerCarte(c9, "carte9", c36)
        retounerCarte(c10, "carte10", c36)
        retounerCarte(c11, "carte11", c36)
        retounerCarte(c12, "carte12", c36)
        retounerCarte(c13, "carte13", c36)
        retounerCarte(c14, "carte14", c36)
        retounerCarte(c15, "carte15", c36)
        retounerCarte(c16, "carte16", c36)
        retounerCarte(c17, "carte17", c36)
        retounerCarte(c18, "carte18", c36)
        retounerCarte(c19, "carte19", c36)
        retounerCarte(c20, "carte20", c36)
        retounerCarte(c21, "carte21", c36)
        retounerCarte(c22, "carte22", c36)
        retounerCarte(c23, "carte23", c36)
        retounerCarte(c24, "carte24", c36)
        retounerCarte(c25, "carte25", c36)
        retounerCarte(c26, "carte26", c36)
        retounerCarte(c27, "carte27", c36)
        retounerCarte(c28, "carte28", c36)
        retounerCarte(c29, "carte29", c36)
        retounerCarte(c30, "carte30", c36)
        retounerCarte(c31, "carte31", c36)
        retounerCarte(c32, "carte32", c36)
        retounerCarte(c33, "carte33", c36)
        retounerCarte(c34, "carte34", c36)
        retounerCarte(c35, "carte35", c36)
        retounerCarte(c36, "carte36", c36)
        retounerCarte(c37, "carte37", c36)
        retounerCarte(c38, "carte38", c36)
        retounerCarte(c39, "carte39", c36)
        retounerCarte(c40, "carte40", c36)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte36"
    }
})

//image19
c31.addEventListener("click",function (event){
    c31.src=("carte/19.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte40"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte31"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c31.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c31)
        retounerCarte(c2, "carte2", c31)
        retounerCarte(c3, "carte3", c31)
        retounerCarte(c4, "carte4", c31)
        retounerCarte(c5, "carte5", c31)
        retounerCarte(c6, "carte6", c31)
        retounerCarte(c7, "carte7", c31)
        retounerCarte(c8, "carte8", c31)
        retounerCarte(c9, "carte9", c31)
        retounerCarte(c10, "carte10", c31)
        retounerCarte(c11, "carte11", c31)
        retounerCarte(c12, "carte12", c31)
        retounerCarte(c13, "carte13", c31)
        retounerCarte(c14, "carte14", c31)
        retounerCarte(c15, "carte15", c31)
        retounerCarte(c16, "carte16", c31)
        retounerCarte(c17, "carte17", c31)
        retounerCarte(c18, "carte18", c31)
        retounerCarte(c19, "carte19", c31)
        retounerCarte(c20, "carte20", c31)    
        retounerCarte(c21, "carte21", c31)
        retounerCarte(c22, "carte22", c31)
        retounerCarte(c23, "carte23", c31)
        retounerCarte(c24, "carte24", c31)
        retounerCarte(c25, "carte25", c31)
        retounerCarte(c26, "carte26", c31)
        retounerCarte(c27, "carte27", c31)
        retounerCarte(c28, "carte28", c31)
        retounerCarte(c29, "carte29", c31)
        retounerCarte(c30, "carte30", c31)
        retounerCarte(c31, "carte31", c31)
        retounerCarte(c32, "carte32", c31)
        retounerCarte(c33, "carte33", c31)
        retounerCarte(c34, "carte34", c31)
        retounerCarte(c35, "carte35", c31)
        retounerCarte(c36, "carte36", c31)
        retounerCarte(c37, "carte37", c31)
        retounerCarte(c38, "carte38", c31)
        retounerCarte(c39, "carte39", c31)
        retounerCarte(c40, "carte40", c31)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte31"
    }
})
c40.addEventListener("click",function (event){
    c40.src=("carte/19.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte31"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte40"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c40.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c40)
        retounerCarte(c2, "carte2", c40)
        retounerCarte(c3, "carte3", c40)
        retounerCarte(c4, "carte4", c40)
        retounerCarte(c5, "carte5", c40)
        retounerCarte(c6, "carte6", c40)
        retounerCarte(c7, "carte7", c40)
        retounerCarte(c8, "carte8", c40)
        retounerCarte(c9, "carte9", c40)
        retounerCarte(c10, "carte10", c40)
        retounerCarte(c11, "carte11", c40)
        retounerCarte(c12, "carte12", c40)
        retounerCarte(c13, "carte13", c40)
        retounerCarte(c14, "carte14", c40)
        retounerCarte(c15, "carte15", c40)
        retounerCarte(c16, "carte16", c40)
        retounerCarte(c17, "carte17", c40)
        retounerCarte(c18, "carte18", c40)
        retounerCarte(c19, "carte19", c40)
        retounerCarte(c20, "carte20", c40)   
        retounerCarte(c21, "carte21", c40)
        retounerCarte(c22, "carte22", c40)
        retounerCarte(c23, "carte23", c40)
        retounerCarte(c24, "carte24", c40)
        retounerCarte(c25, "carte25", c40)
        retounerCarte(c26, "carte26", c40)
        retounerCarte(c27, "carte27", c40)
        retounerCarte(c28, "carte28", c40)
        retounerCarte(c29, "carte29", c40)
        retounerCarte(c30, "carte30", c40)
        retounerCarte(c31, "carte31", c40)
        retounerCarte(c32, "carte32", c40)
        retounerCarte(c33, "carte33", c40)
        retounerCarte(c34, "carte34", c40)
        retounerCarte(c35, "carte35", c40)
        retounerCarte(c36, "carte36", c40)
        retounerCarte(c37, "carte37", c40)
        retounerCarte(c38, "carte38", c40)
        retounerCarte(c39, "carte39", c40)
        retounerCarte(c40, "carte40", c40)            
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte40"
    }
})

//image20
c32.addEventListener("click",function (event){
    c32.src=("carte/20.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte37"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte32"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c32.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c32)
        retounerCarte(c2, "carte2", c32)
        retounerCarte(c3, "carte3", c32)
        retounerCarte(c4, "carte4", c32)
        retounerCarte(c5, "carte5", c32)
        retounerCarte(c6, "carte6", c32)
        retounerCarte(c7, "carte7", c32)
        retounerCarte(c8, "carte8", c32)
        retounerCarte(c9, "carte9", c32)
        retounerCarte(c10, "carte10", c32)
        retounerCarte(c11, "carte11", c32)
        retounerCarte(c12, "carte12", c32)
        retounerCarte(c13, "carte13", c32)
        retounerCarte(c14, "carte14", c32)
        retounerCarte(c15, "carte15", c32)
        retounerCarte(c16, "carte16", c32)
        retounerCarte(c17, "carte17", c32)
        retounerCarte(c18, "carte18", c32)
        retounerCarte(c19, "carte19", c32)
        retounerCarte(c20, "carte20", c32)  
        retounerCarte(c21, "carte21", c32)
        retounerCarte(c22, "carte22", c32)
        retounerCarte(c23, "carte23", c32)
        retounerCarte(c24, "carte24", c32)
        retounerCarte(c25, "carte25", c32)
        retounerCarte(c26, "carte26", c32)
        retounerCarte(c27, "carte27", c32)
        retounerCarte(c28, "carte28", c32)
        retounerCarte(c29, "carte29", c32)
        retounerCarte(c30, "carte30", c32)
        retounerCarte(c31, "carte31", c32)
        retounerCarte(c32, "carte32", c32)
        retounerCarte(c33, "carte33", c32)
        retounerCarte(c34, "carte34", c32)
        retounerCarte(c35, "carte35", c32)
        retounerCarte(c36, "carte36", c32)
        retounerCarte(c37, "carte37", c32)
        retounerCarte(c38, "carte38", c32)
        retounerCarte(c39, "carte39", c32)
        retounerCarte(c40, "carte40", c32)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte32"
    }
})
c37.addEventListener("click",function (event){
    c37.src=("carte/20.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte32"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 20){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte37"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c37.src = "imageDosCarte/DosCarte.jpg"
        }, 500);
    } else {
        retounerCarte(c1, "carte1", c37)
        retounerCarte(c2, "carte2", c37)
        retounerCarte(c3, "carte3", c37)
        retounerCarte(c4, "carte4", c37)
        retounerCarte(c5, "carte5", c37)
        retounerCarte(c6, "carte6", c37)
        retounerCarte(c7, "carte7", c37)
        retounerCarte(c8, "carte8", c37)
        retounerCarte(c9, "carte9", c37)
        retounerCarte(c10, "carte10", c37)
        retounerCarte(c11, "carte11", c37)
        retounerCarte(c12, "carte12", c37)
        retounerCarte(c13, "carte13", c37)
        retounerCarte(c14, "carte14", c37)
        retounerCarte(c15, "carte15", c37)
        retounerCarte(c16, "carte16", c37)
        retounerCarte(c17, "carte17", c37)
        retounerCarte(c18, "carte18", c37)
        retounerCarte(c19, "carte19", c37)
        retounerCarte(c20, "carte20", c37)  
        retounerCarte(c21, "carte21", c37)
        retounerCarte(c22, "carte22", c37)
        retounerCarte(c23, "carte23", c37)
        retounerCarte(c24, "carte24", c37)
        retounerCarte(c25, "carte25", c37)
        retounerCarte(c26, "carte26", c37)
        retounerCarte(c27, "carte27", c37)
        retounerCarte(c28, "carte28", c37)
        retounerCarte(c29, "carte29", c37)
        retounerCarte(c30, "carte30", c37)
        retounerCarte(c31, "carte31", c37)
        retounerCarte(c32, "carte32", c37)
        retounerCarte(c33, "carte33", c37)
        retounerCarte(c34, "carte34", c37)
        retounerCarte(c35, "carte35", c37)
        retounerCarte(c36, "carte36", c37)
        retounerCarte(c37, "carte37", c37)
        retounerCarte(c38, "carte38", c37)
        retounerCarte(c39, "carte39", c37)
        retounerCarte(c40, "carte40", c37)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte37"
    }
})




/*----- functions -----*/

// retourner les cartes qd ce ne sont pas les mêmes
function retounerCarte(carteDOM, carteNuméro, carteDOM2){
    if (carteDOM2 == carteDOM){
        //fait rien car on a juste cliqué 1 fois
    } else if (dernierClick == carteNuméro){
        // on a echoué:
        console.log("on va retouner les 2 cartes", carteDOM, carteDOM2)
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            carteDOM.src = "imageDosCarte/DosCarte.jpg"
            carteDOM2.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
    }  
}




// bouton reset
ResetBtn.addEventListener("click",function (even) {
    c1.src = "imageDosCarte/DosCarte.jpg"
    c2.src = "imageDosCarte/DosCarte.jpg"
    c3.src = "imageDosCarte/DosCarte.jpg"
    c4.src = "imageDosCarte/DosCarte.jpg"
    c5.src = "imageDosCarte/DosCarte.jpg"
    c6.src = "imageDosCarte/DosCarte.jpg"
    c7.src = "imageDosCarte/DosCarte.jpg"
    c8.src = "imageDosCarte/DosCarte.jpg"
    c9.src = "imageDosCarte/DosCarte.jpg"
    c10.src = "imageDosCarte/DosCarte.jpg"
    c11.src = "imageDosCarte/DosCarte.jpg"
    c12.src = "imageDosCarte/DosCarte.jpg"
    c13.src = "imageDosCarte/DosCarte.jpg"
    c14.src = "imageDosCarte/DosCarte.jpg"
    c15.src = "imageDosCarte/DosCarte.jpg"
    c16.src = "imageDosCarte/DosCarte.jpg"
    c17.src = "imageDosCarte/DosCarte.jpg"
    c18.src = "imageDosCarte/DosCarte.jpg"
    c19.src = "imageDosCarte/DosCarte.jpg"
    c20.src = "imageDosCarte/DosCarte.jpg"
    c21.src = "imageDosCarte/DosCarte.jpg"
    c22.src = "imageDosCarte/DosCarte.jpg"
    c23.src = "imageDosCarte/DosCarte.jpg"
    c24.src = "imageDosCarte/DosCarte.jpg"
    c25.src = "imageDosCarte/DosCarte.jpg"
    c26.src = "imageDosCarte/DosCarte.jpg"
    c27.src = "imageDosCarte/DosCarte.jpg"
    c28.src = "imageDosCarte/DosCarte.jpg"
    c29.src = "imageDosCarte/DosCarte.jpg"
    c30.src = "imageDosCarte/DosCarte.jpg"
    c31.src = "imageDosCarte/DosCarte.jpg"
    c32.src = "imageDosCarte/DosCarte.jpg"
    c33.src = "imageDosCarte/DosCarte.jpg"
    c34.src = "imageDosCarte/DosCarte.jpg"
    c35.src = "imageDosCarte/DosCarte.jpg"
    c36.src = "imageDosCarte/DosCarte.jpg"
    c37.src = "imageDosCarte/DosCarte.jpg"
    c38.src = "imageDosCarte/DosCarte.jpg"
    c39.src = "imageDosCarte/DosCarte.jpg"
    c40.src = "imageDosCarte/DosCarte.jpg"
})