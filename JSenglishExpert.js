/*----- constants -----*/
/*----- app's state (variables) -----*/

let ResetBtn= document.getElementById("reset")

let dernierClick= ""

let gagnepoint= 0




/*----- references des elements DOM -----*/
let array = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10",
            "c11","c12","c13","c14","c15","c16","c17","c18","c19","c20",
            "c21","c22","c23","c24","c25","c26","c27","c28","c29","c30",
            "c31","c32","c33","c34","c35","c36","c37","c38","c39","c40",
            "c41","c42","c43","c44","c45","c46","c47","c48","c49","c50",
            "c51","c52","c53","c54","c55","c56","c57","c58","c59","c60",
            "c61","c62","c63","c64"]
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
const c41 = document.getElementById(arrayShuffle[40])
const c42 = document.getElementById(arrayShuffle[41])
const c43 = document.getElementById(arrayShuffle[42])
const c44 = document.getElementById(arrayShuffle[43])
const c45 = document.getElementById(arrayShuffle[44])
const c46 = document.getElementById(arrayShuffle[45])
const c47 = document.getElementById(arrayShuffle[46])
const c48 = document.getElementById(arrayShuffle[47])
const c49 = document.getElementById(arrayShuffle[48])
const c50 = document.getElementById(arrayShuffle[49])
const c51 = document.getElementById(arrayShuffle[50])
const c52 = document.getElementById(arrayShuffle[51])
const c53 = document.getElementById(arrayShuffle[52])
const c54 = document.getElementById(arrayShuffle[53])
const c55 = document.getElementById(arrayShuffle[54])
const c56 = document.getElementById(arrayShuffle[55])
const c57 = document.getElementById(arrayShuffle[56])
const c58 = document.getElementById(arrayShuffle[57])
const c59 = document.getElementById(arrayShuffle[58])
const c60 = document.getElementById(arrayShuffle[59])
const c61 = document.getElementById(arrayShuffle[60])
const c62 = document.getElementById(arrayShuffle[61])
const c63 = document.getElementById(arrayShuffle[62])
const c64 = document.getElementById(arrayShuffle[63])


/*----- event listeners -----*/
//image1
c1.addEventListener("click",function (event){
    c1.src="mot en anglais/me1.png"
    const player = new Audio('musique/flipcard.wav');
    player.play()

    if (dernierClick == "carte15"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte1"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c1.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c1)
        retounerCarte(c42, "carte42", c1)
        retounerCarte(c43, "carte43", c1)
        retounerCarte(c44, "carte44", c1)
        retounerCarte(c45, "carte45", c1)
        retounerCarte(c46, "carte46", c1)
        retounerCarte(c47, "carte47", c1)
        retounerCarte(c48, "carte48", c1)
        retounerCarte(c49, "carte49", c1)
        retounerCarte(c50, "carte50", c1)
        retounerCarte(c51, "carte51", c1)
        retounerCarte(c52, "carte52", c1)
        retounerCarte(c53, "carte53", c1)
        retounerCarte(c54, "carte54", c1)
        retounerCarte(c55, "carte55", c1)
        retounerCarte(c56, "carte56", c1)
        retounerCarte(c57, "carte57", c1)
        retounerCarte(c58, "carte58", c1)
        retounerCarte(c59, "carte59", c1)
        retounerCarte(c60, "carte60", c1)  
        retounerCarte(c61, "carte61", c1)
        retounerCarte(c62, "carte62", c1)
        retounerCarte(c63, "carte63", c1)
        retounerCarte(c64, "carte64", c1)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte1"
    }
})
c15.addEventListener("click",function (event){
    c15.src="carte/7.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte1"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte15"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c15.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c15)
        retounerCarte(c42, "carte42", c15)
        retounerCarte(c43, "carte43", c15)
        retounerCarte(c44, "carte44", c15)
        retounerCarte(c45, "carte45", c15)
        retounerCarte(c46, "carte46", c15)
        retounerCarte(c47, "carte47", c15)
        retounerCarte(c48, "carte48", c15)
        retounerCarte(c49, "carte49", c15)
        retounerCarte(c50, "carte50", c15)
        retounerCarte(c51, "carte51", c15)
        retounerCarte(c52, "carte52", c15)
        retounerCarte(c53, "carte53", c15)
        retounerCarte(c54, "carte54", c15)
        retounerCarte(c55, "carte55", c15)
        retounerCarte(c56, "carte56", c15)
        retounerCarte(c57, "carte57", c15)
        retounerCarte(c58, "carte58", c15)
        retounerCarte(c59, "carte59", c15)
        retounerCarte(c60, "carte60", c15)  
        retounerCarte(c61, "carte61", c15)
        retounerCarte(c62, "carte62", c15)
        retounerCarte(c63, "carte63", c15)
        retounerCarte(c64, "carte64", c15)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte15"
    }
})
//image2
c2.addEventListener("click",function (event){
    c2.src=("mot en anglais/me2.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte9"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte2"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c2.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c2)
        retounerCarte(c42, "carte42", c2)
        retounerCarte(c43, "carte43", c2)
        retounerCarte(c44, "carte44", c2)
        retounerCarte(c45, "carte45", c2)
        retounerCarte(c46, "carte46", c2)
        retounerCarte(c47, "carte47", c2)
        retounerCarte(c48, "carte48", c2)
        retounerCarte(c49, "carte49", c2)
        retounerCarte(c50, "carte50", c2)
        retounerCarte(c51, "carte51", c2)
        retounerCarte(c52, "carte52", c2)
        retounerCarte(c53, "carte53", c2)
        retounerCarte(c54, "carte54", c2)
        retounerCarte(c55, "carte55", c2)
        retounerCarte(c56, "carte56", c2)
        retounerCarte(c57, "carte57", c2)
        retounerCarte(c58, "carte58", c2)
        retounerCarte(c59, "carte59", c2)
        retounerCarte(c60, "carte60", c2)  
        retounerCarte(c61, "carte61", c2)
        retounerCarte(c62, "carte62", c2)
        retounerCarte(c63, "carte63", c2)
        retounerCarte(c64, "carte64", c2)                 
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte2"
    }
})
c9.addEventListener("click",function (event){
    c9.src=("carte/14.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte2"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte9"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c9.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c9)
        retounerCarte(c42, "carte42", c9)
        retounerCarte(c43, "carte43", c9)
        retounerCarte(c44, "carte44", c9)
        retounerCarte(c45, "carte45", c9)
        retounerCarte(c46, "carte46", c9)
        retounerCarte(c47, "carte47", c9)
        retounerCarte(c48, "carte48", c9)
        retounerCarte(c49, "carte49", c9)
        retounerCarte(c50, "carte50", c9)
        retounerCarte(c51, "carte51", c9)
        retounerCarte(c52, "carte52", c9)
        retounerCarte(c53, "carte53", c9)
        retounerCarte(c54, "carte54", c9)
        retounerCarte(c55, "carte55", c9)
        retounerCarte(c56, "carte56", c9)
        retounerCarte(c57, "carte57", c9)
        retounerCarte(c58, "carte58", c9)
        retounerCarte(c59, "carte59", c9)
        retounerCarte(c60, "carte60", c9)  
        retounerCarte(c61, "carte61", c9)
        retounerCarte(c62, "carte62", c9)
        retounerCarte(c63, "carte63", c9)
        retounerCarte(c64, "carte64", c9)                  
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte9"
    }
})

//image3
c3.addEventListener("click",function (event){
    c3.src=("mot en anglais/me3.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte14"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte3"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c3.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c3)
        retounerCarte(c42, "carte42", c3)
        retounerCarte(c43, "carte43", c3)
        retounerCarte(c44, "carte44", c3)
        retounerCarte(c45, "carte45", c3)
        retounerCarte(c46, "carte46", c3)
        retounerCarte(c47, "carte47", c3)
        retounerCarte(c48, "carte48", c3)
        retounerCarte(c49, "carte49", c3)
        retounerCarte(c50, "carte50", c3)
        retounerCarte(c51, "carte51", c3)
        retounerCarte(c52, "carte52", c3)
        retounerCarte(c53, "carte53", c3)
        retounerCarte(c54, "carte54", c3)
        retounerCarte(c55, "carte55", c3)
        retounerCarte(c56, "carte56", c3)
        retounerCarte(c57, "carte57", c3)
        retounerCarte(c58, "carte58", c3)
        retounerCarte(c59, "carte59", c3)
        retounerCarte(c60, "carte60", c3)  
        retounerCarte(c61, "carte61", c3)
        retounerCarte(c62, "carte62", c3)
        retounerCarte(c63, "carte63", c3)
        retounerCarte(c64, "carte64", c3)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte3"
    }
})
c14.addEventListener("click",function (event){
    c14.src=("carte/26.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte3"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte14"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c14.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c14)
        retounerCarte(c42, "carte42", c14)
        retounerCarte(c43, "carte43", c14)
        retounerCarte(c44, "carte44", c14)
        retounerCarte(c45, "carte45", c14)
        retounerCarte(c46, "carte46", c14)
        retounerCarte(c47, "carte47", c14)
        retounerCarte(c48, "carte48", c14)
        retounerCarte(c49, "carte49", c14)
        retounerCarte(c50, "carte50", c14)
        retounerCarte(c51, "carte51", c14)
        retounerCarte(c52, "carte52", c14)
        retounerCarte(c53, "carte53", c14)
        retounerCarte(c54, "carte54", c14)
        retounerCarte(c55, "carte55", c14)
        retounerCarte(c56, "carte56", c14)
        retounerCarte(c57, "carte57", c14)
        retounerCarte(c58, "carte58", c14)
        retounerCarte(c59, "carte59", c14)
        retounerCarte(c60, "carte60", c14)  
        retounerCarte(c61, "carte61", c14)
        retounerCarte(c62, "carte62", c14)
        retounerCarte(c63, "carte63", c14)
        retounerCarte(c64, "carte64", c14)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte14"
    }
})

//image4
c4.addEventListener("click",function (event){
    c4.src=("mot en anglais/me4.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte19"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte4"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c4.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c4)
        retounerCarte(c42, "carte42", c4)
        retounerCarte(c43, "carte43", c4)
        retounerCarte(c44, "carte44", c4)
        retounerCarte(c45, "carte45", c4)
        retounerCarte(c46, "carte46", c4)
        retounerCarte(c47, "carte47", c4)
        retounerCarte(c48, "carte48", c4)
        retounerCarte(c49, "carte49", c4)
        retounerCarte(c50, "carte50", c4)
        retounerCarte(c51, "carte51", c4)
        retounerCarte(c52, "carte52", c4)
        retounerCarte(c53, "carte53", c4)
        retounerCarte(c54, "carte54", c4)
        retounerCarte(c55, "carte55", c4)
        retounerCarte(c56, "carte56", c4)
        retounerCarte(c57, "carte57", c4)
        retounerCarte(c58, "carte58", c4)
        retounerCarte(c59, "carte59", c4)
        retounerCarte(c60, "carte60", c4)  
        retounerCarte(c61, "carte61", c4)
        retounerCarte(c62, "carte62", c4)
        retounerCarte(c63, "carte63", c4)
        retounerCarte(c64, "carte64", c4)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte4"
    }
})
c19.addEventListener("click",function (event){
    c19.src=("carte/38.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte4"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte19"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c19.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c19)
        retounerCarte(c42, "carte42", c19)
        retounerCarte(c43, "carte43", c19)
        retounerCarte(c44, "carte44", c19)
        retounerCarte(c45, "carte45", c19)
        retounerCarte(c46, "carte46", c19)
        retounerCarte(c47, "carte47", c19)
        retounerCarte(c48, "carte48", c19)
        retounerCarte(c49, "carte49", c19)
        retounerCarte(c50, "carte50", c19)
        retounerCarte(c51, "carte51", c19)
        retounerCarte(c52, "carte52", c19)
        retounerCarte(c53, "carte53", c19)
        retounerCarte(c54, "carte54", c19)
        retounerCarte(c55, "carte55", c19)
        retounerCarte(c56, "carte56", c19)
        retounerCarte(c57, "carte57", c19)
        retounerCarte(c58, "carte58", c19)
        retounerCarte(c59, "carte59", c19)
        retounerCarte(c60, "carte60", c19)  
        retounerCarte(c61, "carte61", c19)
        retounerCarte(c62, "carte62", c19)
        retounerCarte(c63, "carte63", c19)
        retounerCarte(c64, "carte64", c19)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte19"
    }
})

//image5
c5.addEventListener("click",function (event){
    c5.src=("mot en anglais/me5.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte18"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte5"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c5.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c5)
        retounerCarte(c42, "carte42", c5)
        retounerCarte(c43, "carte43", c5)
        retounerCarte(c44, "carte44", c5)
        retounerCarte(c45, "carte45", c5)
        retounerCarte(c46, "carte46", c5)
        retounerCarte(c47, "carte47", c5)
        retounerCarte(c48, "carte48", c5)
        retounerCarte(c49, "carte49", c5)
        retounerCarte(c50, "carte50", c5)
        retounerCarte(c51, "carte51", c5)
        retounerCarte(c52, "carte52", c5)
        retounerCarte(c53, "carte53", c5)
        retounerCarte(c54, "carte54", c5)
        retounerCarte(c55, "carte55", c5)
        retounerCarte(c56, "carte56", c5)
        retounerCarte(c57, "carte57", c5)
        retounerCarte(c58, "carte58", c5)
        retounerCarte(c59, "carte59", c5)
        retounerCarte(c60, "carte60", c5)  
        retounerCarte(c61, "carte61", c5)
        retounerCarte(c62, "carte62", c5)
        retounerCarte(c63, "carte63", c5)
        retounerCarte(c64, "carte64", c5)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte5"
    }
})
c18.addEventListener("click",function (event){
    c18.src=("carte/6.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte5"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte18"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c18.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c18)
        retounerCarte(c42, "carte42", c18)
        retounerCarte(c43, "carte43", c18)
        retounerCarte(c44, "carte44", c18)
        retounerCarte(c45, "carte45", c18)
        retounerCarte(c46, "carte46", c18)
        retounerCarte(c47, "carte47", c18)
        retounerCarte(c48, "carte48", c18)
        retounerCarte(c49, "carte49", c18)
        retounerCarte(c50, "carte50", c18)
        retounerCarte(c51, "carte51", c18)
        retounerCarte(c52, "carte52", c18)
        retounerCarte(c53, "carte53", c18)
        retounerCarte(c54, "carte54", c18)
        retounerCarte(c55, "carte55", c18)
        retounerCarte(c56, "carte56", c18)
        retounerCarte(c57, "carte57", c18)
        retounerCarte(c58, "carte58", c18)
        retounerCarte(c59, "carte59", c18)
        retounerCarte(c60, "carte60", c18)  
        retounerCarte(c61, "carte61", c18)
        retounerCarte(c62, "carte62", c18)
        retounerCarte(c63, "carte63", c18)
        retounerCarte(c64, "carte64", c18)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte18"
    }
})

//image6
c6.addEventListener("click",function (event){
    c6.src=("mot en anglais/me6.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte8"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte6"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c6.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c6)
        retounerCarte(c42, "carte42", c6)
        retounerCarte(c43, "carte43", c6)
        retounerCarte(c44, "carte44", c6)
        retounerCarte(c45, "carte45", c6)
        retounerCarte(c46, "carte46", c6)
        retounerCarte(c47, "carte47", c6)
        retounerCarte(c48, "carte48", c6)
        retounerCarte(c49, "carte49", c6)
        retounerCarte(c50, "carte50", c6)
        retounerCarte(c51, "carte51", c6)
        retounerCarte(c52, "carte52", c6)
        retounerCarte(c53, "carte53", c6)
        retounerCarte(c54, "carte54", c6)
        retounerCarte(c55, "carte55", c6)
        retounerCarte(c56, "carte56", c6)
        retounerCarte(c57, "carte57", c6)
        retounerCarte(c58, "carte58", c6)
        retounerCarte(c59, "carte59", c6)
        retounerCarte(c60, "carte60", c6)  
        retounerCarte(c61, "carte61", c6)
        retounerCarte(c62, "carte62", c6)
        retounerCarte(c63, "carte63", c6)
        retounerCarte(c64, "carte64", c6)                 
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte6"
    }
})
c8.addEventListener("click",function (event){
    c8.src=("carte/13.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte6"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte8"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c8.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c8)
        retounerCarte(c42, "carte42", c8)
        retounerCarte(c43, "carte43", c8)
        retounerCarte(c44, "carte44", c8)
        retounerCarte(c45, "carte45", c8)
        retounerCarte(c46, "carte46", c8)
        retounerCarte(c47, "carte47", c8)
        retounerCarte(c48, "carte48", c8)
        retounerCarte(c49, "carte49", c8)
        retounerCarte(c50, "carte50", c8)
        retounerCarte(c51, "carte51", c8)
        retounerCarte(c52, "carte52", c8)
        retounerCarte(c53, "carte53", c8)
        retounerCarte(c54, "carte54", c8)
        retounerCarte(c55, "carte55", c8)
        retounerCarte(c56, "carte56", c8)
        retounerCarte(c57, "carte57", c8)
        retounerCarte(c58, "carte58", c8)
        retounerCarte(c59, "carte59", c8)
        retounerCarte(c60, "carte60", c8)  
        retounerCarte(c61, "carte61", c8)
        retounerCarte(c62, "carte62", c8)
        retounerCarte(c63, "carte63", c8)
        retounerCarte(c64, "carte64", c8)                  
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte8"
    }
})

//image7
c7.addEventListener("click",function (event){
    c7.src=("mot en anglais/me7.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte13"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte7"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c7.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c7)
        retounerCarte(c42, "carte42", c7)
        retounerCarte(c43, "carte43", c7)
        retounerCarte(c44, "carte44", c7)
        retounerCarte(c45, "carte45", c7)
        retounerCarte(c46, "carte46", c7)
        retounerCarte(c47, "carte47", c7)
        retounerCarte(c48, "carte48", c7)
        retounerCarte(c49, "carte49", c7)
        retounerCarte(c50, "carte50", c7)
        retounerCarte(c51, "carte51", c7)
        retounerCarte(c52, "carte52", c7)
        retounerCarte(c53, "carte53", c7)
        retounerCarte(c54, "carte54", c7)
        retounerCarte(c55, "carte55", c7)
        retounerCarte(c56, "carte56", c7)
        retounerCarte(c57, "carte57", c7)
        retounerCarte(c58, "carte58", c7)
        retounerCarte(c59, "carte59", c7)
        retounerCarte(c60, "carte60", c7)  
        retounerCarte(c61, "carte61", c7)
        retounerCarte(c62, "carte62", c7)
        retounerCarte(c63, "carte63", c7)
        retounerCarte(c64, "carte64", c7)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte7"
    }
})
c13.addEventListener("click",function (event){
    c13.src=("carte/25.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte7"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte13"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c13.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c13)
        retounerCarte(c42, "carte42", c13)
        retounerCarte(c43, "carte43", c13)
        retounerCarte(c44, "carte44", c13)
        retounerCarte(c45, "carte45", c13)
        retounerCarte(c46, "carte46", c13)
        retounerCarte(c47, "carte47", c13)
        retounerCarte(c48, "carte48", c13)
        retounerCarte(c49, "carte49", c13)
        retounerCarte(c50, "carte50", c13)
        retounerCarte(c51, "carte51", c13)
        retounerCarte(c52, "carte52", c13)
        retounerCarte(c53, "carte53", c13)
        retounerCarte(c54, "carte54", c13)
        retounerCarte(c55, "carte55", c13)
        retounerCarte(c56, "carte56", c13)
        retounerCarte(c57, "carte57", c13)
        retounerCarte(c58, "carte58", c13)
        retounerCarte(c59, "carte59", c13)
        retounerCarte(c60, "carte60", c13)  
        retounerCarte(c61, "carte61", c13)
        retounerCarte(c62, "carte62", c13)
        retounerCarte(c63, "carte63", c13)
        retounerCarte(c64, "carte64", c13)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte13"
    }
})

//image8
c10.addEventListener("click",function (event){
    c10.src=("mot en anglais/me8.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte16"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte10"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c10.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c10)
        retounerCarte(c42, "carte42", c10)
        retounerCarte(c43, "carte43", c10)
        retounerCarte(c44, "carte44", c10)
        retounerCarte(c45, "carte45", c10)
        retounerCarte(c46, "carte46", c10)
        retounerCarte(c47, "carte47", c10)
        retounerCarte(c48, "carte48", c10)
        retounerCarte(c49, "carte49", c10)
        retounerCarte(c50, "carte50", c10)
        retounerCarte(c51, "carte51", c10)
        retounerCarte(c52, "carte52", c10)
        retounerCarte(c53, "carte53", c10)
        retounerCarte(c54, "carte54", c10)
        retounerCarte(c55, "carte55", c10)
        retounerCarte(c56, "carte56", c10)
        retounerCarte(c57, "carte57", c10)
        retounerCarte(c58, "carte58", c10)
        retounerCarte(c59, "carte59", c10)
        retounerCarte(c60, "carte60", c10)  
        retounerCarte(c61, "carte61", c10)
        retounerCarte(c62, "carte62", c10)
        retounerCarte(c63, "carte63", c10)
        retounerCarte(c64, "carte64", c10)                 
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte10"
    }
})
c16.addEventListener("click",function (event){
    c16.src=("carte/31.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte10"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte16"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c16.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c16)
        retounerCarte(c42, "carte42", c16)
        retounerCarte(c43, "carte43", c16)
        retounerCarte(c44, "carte44", c16)
        retounerCarte(c45, "carte45", c16)
        retounerCarte(c46, "carte46", c16)
        retounerCarte(c47, "carte47", c16)
        retounerCarte(c48, "carte48", c16)
        retounerCarte(c49, "carte49", c16)
        retounerCarte(c50, "carte50", c16)
        retounerCarte(c51, "carte51", c16)
        retounerCarte(c52, "carte52", c16)
        retounerCarte(c53, "carte53", c16)
        retounerCarte(c54, "carte54", c16)
        retounerCarte(c55, "carte55", c16)
        retounerCarte(c56, "carte56", c16)
        retounerCarte(c57, "carte57", c16)
        retounerCarte(c58, "carte58", c16)
        retounerCarte(c59, "carte59", c16)
        retounerCarte(c60, "carte60", c16)  
        retounerCarte(c61, "carte61", c16)
        retounerCarte(c62, "carte62", c16)
        retounerCarte(c63, "carte63", c16)
        retounerCarte(c64, "carte64", c16)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte16"
    }
})

//image9
c11.addEventListener("click",function (event){
    c11.src=("mot en anglais/me9.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte20"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte11"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c11.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c11)
        retounerCarte(c42, "carte42", c11)
        retounerCarte(c43, "carte43", c11)
        retounerCarte(c44, "carte44", c11)
        retounerCarte(c45, "carte45", c11)
        retounerCarte(c46, "carte46", c11)
        retounerCarte(c47, "carte47", c11)
        retounerCarte(c48, "carte48", c11)
        retounerCarte(c49, "carte49", c11)
        retounerCarte(c50, "carte50", c11)
        retounerCarte(c51, "carte51", c11)
        retounerCarte(c52, "carte52", c11)
        retounerCarte(c53, "carte53", c11)
        retounerCarte(c54, "carte54", c11)
        retounerCarte(c55, "carte55", c11)
        retounerCarte(c56, "carte56", c11)
        retounerCarte(c57, "carte57", c11)
        retounerCarte(c58, "carte58", c11)
        retounerCarte(c59, "carte59", c11)
        retounerCarte(c60, "carte60", c11)  
        retounerCarte(c61, "carte61", c11)
        retounerCarte(c62, "carte62", c11)
        retounerCarte(c63, "carte63", c11)
        retounerCarte(c64, "carte64", c11)                 
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte11"
    }
})
c20.addEventListener("click",function (event){
    c20.src=("carte/37.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte11"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte20"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c20.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c20)
        retounerCarte(c42, "carte42", c20)
        retounerCarte(c43, "carte43", c20)
        retounerCarte(c44, "carte44", c20)
        retounerCarte(c45, "carte45", c20)
        retounerCarte(c46, "carte46", c20)
        retounerCarte(c47, "carte47", c20)
        retounerCarte(c48, "carte48", c20)
        retounerCarte(c49, "carte49", c20)
        retounerCarte(c50, "carte50", c20)
        retounerCarte(c51, "carte51", c20)
        retounerCarte(c52, "carte52", c20)
        retounerCarte(c53, "carte53", c20)
        retounerCarte(c54, "carte54", c20)
        retounerCarte(c55, "carte55", c20)
        retounerCarte(c56, "carte56", c20)
        retounerCarte(c57, "carte57", c20)
        retounerCarte(c58, "carte58", c20)
        retounerCarte(c59, "carte59", c20)
        retounerCarte(c60, "carte60", c20)  
        retounerCarte(c61, "carte61", c20)
        retounerCarte(c62, "carte62", c20)
        retounerCarte(c63, "carte63", c20)
        retounerCarte(c64, "carte64", c20)                
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte20"
    }
})

//image10
c12.addEventListener("click",function (event){
    c12.src=("mot en anglais/me10.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte17"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte12"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c12.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c12)
        retounerCarte(c42, "carte42", c12)
        retounerCarte(c43, "carte43", c12)
        retounerCarte(c44, "carte44", c12)
        retounerCarte(c45, "carte45", c12)
        retounerCarte(c46, "carte46", c12)
        retounerCarte(c47, "carte47", c12)
        retounerCarte(c48, "carte48", c12)
        retounerCarte(c49, "carte49", c12)
        retounerCarte(c50, "carte50", c12)
        retounerCarte(c51, "carte51", c12)
        retounerCarte(c52, "carte52", c12)
        retounerCarte(c53, "carte53", c12)
        retounerCarte(c54, "carte54", c12)
        retounerCarte(c55, "carte55", c12)
        retounerCarte(c56, "carte56", c12)
        retounerCarte(c57, "carte57", c12)
        retounerCarte(c58, "carte58", c12)
        retounerCarte(c59, "carte59", c12)
        retounerCarte(c60, "carte60", c12)  
        retounerCarte(c61, "carte61", c12)
        retounerCarte(c62, "carte62", c12)
        retounerCarte(c63, "carte63", c12)
        retounerCarte(c64, "carte64", c12)
                   
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte12"
    }
})
c17.addEventListener("click",function (event){
    c17.src=("carte/24.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte12"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte17"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c17.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c17)
        retounerCarte(c42, "carte42", c17)
        retounerCarte(c43, "carte43", c17)
        retounerCarte(c44, "carte44", c17)
        retounerCarte(c45, "carte45", c17)
        retounerCarte(c46, "carte46", c17)
        retounerCarte(c47, "carte47", c17)
        retounerCarte(c48, "carte48", c17)
        retounerCarte(c49, "carte49", c17)
        retounerCarte(c50, "carte50", c17)
        retounerCarte(c51, "carte51", c17)
        retounerCarte(c52, "carte52", c17)
        retounerCarte(c53, "carte53", c17)
        retounerCarte(c54, "carte54", c17)
        retounerCarte(c55, "carte55", c17)
        retounerCarte(c56, "carte56", c17)
        retounerCarte(c57, "carte57", c17)
        retounerCarte(c58, "carte58", c17)
        retounerCarte(c59, "carte59", c17)
        retounerCarte(c60, "carte60", c17)  
        retounerCarte(c61, "carte61", c17)
        retounerCarte(c62, "carte62", c17)
        retounerCarte(c63, "carte63", c17)
        retounerCarte(c64, "carte64", c17)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte17"
    }
})
//image11
c21.addEventListener("click",function (event){
    c21.src="mot en anglais/me11.png"
    const player = new Audio('musique/flipcard.wav');
    player.play()

    if (dernierClick == "carte35"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
        }
    } else if (dernierClick== "carte21"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c21.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c21)
        retounerCarte(c42, "carte42", c21)
        retounerCarte(c43, "carte43", c21)
        retounerCarte(c44, "carte44", c21)
        retounerCarte(c45, "carte45", c21)
        retounerCarte(c46, "carte46", c21)
        retounerCarte(c47, "carte47", c21)
        retounerCarte(c48, "carte48", c21)
        retounerCarte(c49, "carte49", c21)
        retounerCarte(c50, "carte50", c21)
        retounerCarte(c51, "carte51", c21)
        retounerCarte(c52, "carte52", c21)
        retounerCarte(c53, "carte53", c21)
        retounerCarte(c54, "carte54", c21)
        retounerCarte(c55, "carte55", c21)
        retounerCarte(c56, "carte56", c21)
        retounerCarte(c57, "carte57", c21)
        retounerCarte(c58, "carte58", c21)
        retounerCarte(c59, "carte59", c21)
        retounerCarte(c60, "carte60", c21)  
        retounerCarte(c61, "carte61", c21)
        retounerCarte(c62, "carte62", c21)
        retounerCarte(c63, "carte63", c21)
        retounerCarte(c64, "carte64", c21)       
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte21"
    }
})
c35.addEventListener("click",function (event){
    c35.src="carte/1.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte21"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
        }
    } else if (dernierClick== "carte35"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c35.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c35)
        retounerCarte(c42, "carte42", c35)
        retounerCarte(c43, "carte43", c35)
        retounerCarte(c44, "carte44", c35)
        retounerCarte(c45, "carte45", c35)
        retounerCarte(c46, "carte46", c35)
        retounerCarte(c47, "carte47", c35)
        retounerCarte(c48, "carte48", c35)
        retounerCarte(c49, "carte49", c35)
        retounerCarte(c50, "carte50", c35)
        retounerCarte(c51, "carte51", c35)
        retounerCarte(c52, "carte52", c35)
        retounerCarte(c53, "carte53", c35)
        retounerCarte(c54, "carte54", c35)
        retounerCarte(c55, "carte55", c35)
        retounerCarte(c56, "carte56", c35)
        retounerCarte(c57, "carte57", c35)
        retounerCarte(c58, "carte58", c35)
        retounerCarte(c59, "carte59", c35)
        retounerCarte(c60, "carte60", c35)  
        retounerCarte(c61, "carte61", c35)
        retounerCarte(c62, "carte62", c35)
        retounerCarte(c63, "carte63", c35)
        retounerCarte(c64, "carte64", c35)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte35"
    }
})
//image12
c22.addEventListener("click",function (event){
    c22.src=("mot en anglais/me12.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte29"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
        }
    } else if (dernierClick== "carte22"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c22.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c22)
        retounerCarte(c42, "carte42", c22)
        retounerCarte(c43, "carte43", c22)
        retounerCarte(c44, "carte44", c22)
        retounerCarte(c45, "carte45", c22)
        retounerCarte(c46, "carte46", c22)
        retounerCarte(c47, "carte47", c22)
        retounerCarte(c48, "carte48", c22)
        retounerCarte(c49, "carte49", c22)
        retounerCarte(c50, "carte50", c22)
        retounerCarte(c51, "carte51", c22)
        retounerCarte(c52, "carte52", c22)
        retounerCarte(c53, "carte53", c22)
        retounerCarte(c54, "carte54", c22)
        retounerCarte(c55, "carte55", c22)
        retounerCarte(c56, "carte56", c22)
        retounerCarte(c57, "carte57", c22)
        retounerCarte(c58, "carte58", c22)
        retounerCarte(c59, "carte59", c22)
        retounerCarte(c60, "carte60", c22)  
        retounerCarte(c61, "carte61", c22)
        retounerCarte(c62, "carte62", c22)
        retounerCarte(c63, "carte63", c22)
        retounerCarte(c64, "carte64", c22)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte22"
    }
})
c29.addEventListener("click",function (event){
    c29.src=("carte/30.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte22"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
        }
    } else if (dernierClick== "carte29"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c29.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c29)
        retounerCarte(c42, "carte42", c29)
        retounerCarte(c43, "carte43", c29)
        retounerCarte(c44, "carte44", c29)
        retounerCarte(c45, "carte45", c29)
        retounerCarte(c46, "carte46", c29)
        retounerCarte(c47, "carte47", c29)
        retounerCarte(c48, "carte48", c29)
        retounerCarte(c49, "carte49", c29)
        retounerCarte(c50, "carte50", c29)
        retounerCarte(c51, "carte51", c29)
        retounerCarte(c52, "carte52", c29)
        retounerCarte(c53, "carte53", c29)
        retounerCarte(c54, "carte54", c29)
        retounerCarte(c55, "carte55", c29)
        retounerCarte(c56, "carte56", c29)
        retounerCarte(c57, "carte57", c29)
        retounerCarte(c58, "carte58", c29)
        retounerCarte(c59, "carte59", c29)
        retounerCarte(c60, "carte60", c29)  
        retounerCarte(c61, "carte61", c29)
        retounerCarte(c62, "carte62", c29)
        retounerCarte(c63, "carte63", c29)
        retounerCarte(c64, "carte64", c29)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte29"
    }
})

//image13
c23.addEventListener("click",function (event){
    c23.src=("mot en anglais/me13.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte34"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
        }
    } else if (dernierClick== "carte23"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c23.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c23)
        retounerCarte(c42, "carte42", c23)
        retounerCarte(c43, "carte43", c23)
        retounerCarte(c44, "carte44", c23)
        retounerCarte(c45, "carte45", c23)
        retounerCarte(c46, "carte46", c23)
        retounerCarte(c47, "carte47", c23)
        retounerCarte(c48, "carte48", c23)
        retounerCarte(c49, "carte49", c23)
        retounerCarte(c50, "carte50", c23)
        retounerCarte(c51, "carte51", c23)
        retounerCarte(c52, "carte52", c23)
        retounerCarte(c53, "carte53", c23)
        retounerCarte(c54, "carte54", c23)
        retounerCarte(c55, "carte55", c23)
        retounerCarte(c56, "carte56", c23)
        retounerCarte(c57, "carte57", c23)
        retounerCarte(c58, "carte58", c23)
        retounerCarte(c59, "carte59", c23)
        retounerCarte(c60, "carte60", c23)  
        retounerCarte(c61, "carte61", c23)
        retounerCarte(c62, "carte62", c23)
        retounerCarte(c63, "carte63", c23)
        retounerCarte(c64, "carte64", c23)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte23"
    }
})
c34.addEventListener("click",function (event){
    c34.src=("carte/4.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte23"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte34"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c34.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c34)
        retounerCarte(c42, "carte42", c34)
        retounerCarte(c43, "carte43", c34)
        retounerCarte(c44, "carte44", c34)
        retounerCarte(c45, "carte45", c34)
        retounerCarte(c46, "carte46", c34)
        retounerCarte(c47, "carte47", c34)
        retounerCarte(c48, "carte48", c34)
        retounerCarte(c49, "carte49", c34)
        retounerCarte(c50, "carte50", c34)
        retounerCarte(c51, "carte51", c34)
        retounerCarte(c52, "carte52", c34)
        retounerCarte(c53, "carte53", c34)
        retounerCarte(c54, "carte54", c34)
        retounerCarte(c55, "carte55", c34)
        retounerCarte(c56, "carte56", c34)
        retounerCarte(c57, "carte57", c34)
        retounerCarte(c58, "carte58", c34)
        retounerCarte(c59, "carte59", c34)
        retounerCarte(c60, "carte60", c34)  
        retounerCarte(c61, "carte61", c34)
        retounerCarte(c62, "carte62", c34)
        retounerCarte(c63, "carte63", c34)
        retounerCarte(c64, "carte64", c34)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte34"
    }
})

//image14
c24.addEventListener("click",function (event){
    c24.src=("mot en anglais/me14.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte39"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte24"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c24.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c24)
        retounerCarte(c42, "carte42", c24)
        retounerCarte(c43, "carte43", c24)
        retounerCarte(c44, "carte44", c24)
        retounerCarte(c45, "carte45", c24)
        retounerCarte(c46, "carte46", c24)
        retounerCarte(c47, "carte47", c24)
        retounerCarte(c48, "carte48", c24)
        retounerCarte(c49, "carte49", c24)
        retounerCarte(c50, "carte50", c24)
        retounerCarte(c51, "carte51", c24)
        retounerCarte(c52, "carte52", c24)
        retounerCarte(c53, "carte53", c24)
        retounerCarte(c54, "carte54", c24)
        retounerCarte(c55, "carte55", c24)
        retounerCarte(c56, "carte56", c24)
        retounerCarte(c57, "carte57", c24)
        retounerCarte(c58, "carte58", c24)
        retounerCarte(c59, "carte59", c24)
        retounerCarte(c60, "carte60", c24)  
        retounerCarte(c61, "carte61", c24)
        retounerCarte(c62, "carte62", c24)
        retounerCarte(c63, "carte63", c24)
        retounerCarte(c64, "carte64", c24)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte24"
    }
})
c39.addEventListener("click",function (event){
    c39.src=("carte/11.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte24"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte39"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c39.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c39)
        retounerCarte(c42, "carte42", c39)
        retounerCarte(c43, "carte43", c39)
        retounerCarte(c44, "carte44", c39)
        retounerCarte(c45, "carte45", c39)
        retounerCarte(c46, "carte46", c39)
        retounerCarte(c47, "carte47", c39)
        retounerCarte(c48, "carte48", c39)
        retounerCarte(c49, "carte49", c39)
        retounerCarte(c50, "carte50", c39)
        retounerCarte(c51, "carte51", c39)
        retounerCarte(c52, "carte52", c39)
        retounerCarte(c53, "carte53", c39)
        retounerCarte(c54, "carte54", c39)
        retounerCarte(c55, "carte55", c39)
        retounerCarte(c56, "carte56", c39)
        retounerCarte(c57, "carte57", c39)
        retounerCarte(c58, "carte58", c39)
        retounerCarte(c59, "carte59", c39)
        retounerCarte(c60, "carte60", c39)  
        retounerCarte(c61, "carte61", c39)
        retounerCarte(c62, "carte62", c39)
        retounerCarte(c63, "carte63", c39)
        retounerCarte(c64, "carte64", c39)               
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte39"
    }
})

//image15
c25.addEventListener("click",function (event){
    c25.src=("mot en anglais/me15.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte38"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte25"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c25.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c25)
        retounerCarte(c42, "carte42", c25)
        retounerCarte(c43, "carte43", c25)
        retounerCarte(c44, "carte44", c25)
        retounerCarte(c45, "carte45", c25)
        retounerCarte(c46, "carte46", c25)
        retounerCarte(c47, "carte47", c25)
        retounerCarte(c48, "carte48", c25)
        retounerCarte(c49, "carte49", c25)
        retounerCarte(c50, "carte50", c25)
        retounerCarte(c51, "carte51", c25)
        retounerCarte(c52, "carte52", c25)
        retounerCarte(c53, "carte53", c25)
        retounerCarte(c54, "carte54", c25)
        retounerCarte(c55, "carte55", c25)
        retounerCarte(c56, "carte56", c25)
        retounerCarte(c57, "carte57", c25)
        retounerCarte(c58, "carte58", c25)
        retounerCarte(c59, "carte59", c25)
        retounerCarte(c60, "carte60", c25)  
        retounerCarte(c61, "carte61", c25)
        retounerCarte(c62, "carte62", c25)
        retounerCarte(c63, "carte63", c25)
        retounerCarte(c64, "carte64", c25)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte25"
    }
})
c38.addEventListener("click",function (event){
    c38.src=("carte/17.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte25"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte38"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c38.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c38)
        retounerCarte(c42, "carte42", c38)
        retounerCarte(c43, "carte43", c38)
        retounerCarte(c44, "carte44", c38)
        retounerCarte(c45, "carte45", c38)
        retounerCarte(c46, "carte46", c38)
        retounerCarte(c47, "carte47", c38)
        retounerCarte(c48, "carte48", c38)
        retounerCarte(c49, "carte49", c38)
        retounerCarte(c50, "carte50", c38)
        retounerCarte(c51, "carte51", c38)
        retounerCarte(c52, "carte52", c38)
        retounerCarte(c53, "carte53", c38)
        retounerCarte(c54, "carte54", c38)
        retounerCarte(c55, "carte55", c38)
        retounerCarte(c56, "carte56", c38)
        retounerCarte(c57, "carte57", c38)
        retounerCarte(c58, "carte58", c38)
        retounerCarte(c59, "carte59", c38)
        retounerCarte(c60, "carte60", c38)  
        retounerCarte(c61, "carte61", c38)
        retounerCarte(c62, "carte62", c38)
        retounerCarte(c63, "carte63", c38)
        retounerCarte(c64, "carte64", c38)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte38"
    }
})

//image16
c26.addEventListener("click",function (event){
    c26.src=("mot en anglais/me16.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte28"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte26"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c26.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c26)
        retounerCarte(c42, "carte42", c26)
        retounerCarte(c43, "carte43", c26)
        retounerCarte(c44, "carte44", c26)
        retounerCarte(c45, "carte45", c26)
        retounerCarte(c46, "carte46", c26)
        retounerCarte(c47, "carte47", c26)
        retounerCarte(c48, "carte48", c26)
        retounerCarte(c49, "carte49", c26)
        retounerCarte(c50, "carte50", c26)
        retounerCarte(c51, "carte51", c26)
        retounerCarte(c52, "carte52", c26)
        retounerCarte(c53, "carte53", c26)
        retounerCarte(c54, "carte54", c26)
        retounerCarte(c55, "carte55", c26)
        retounerCarte(c56, "carte56", c26)
        retounerCarte(c57, "carte57", c26)
        retounerCarte(c58, "carte58", c26)
        retounerCarte(c59, "carte59", c26)
        retounerCarte(c60, "carte60", c26)  
        retounerCarte(c61, "carte61", c26)
        retounerCarte(c62, "carte62", c26)
        retounerCarte(c63, "carte63", c26)
        retounerCarte(c64, "carte64", c26)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte26"
    }
})
c28.addEventListener("click",function (event){
    c28.src=("carte/23.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte26"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte28"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c28.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c28)
        retounerCarte(c42, "carte42", c28)
        retounerCarte(c43, "carte43", c28)
        retounerCarte(c44, "carte44", c28)
        retounerCarte(c45, "carte45", c28)
        retounerCarte(c46, "carte46", c28)
        retounerCarte(c47, "carte47", c28)
        retounerCarte(c48, "carte48", c28)
        retounerCarte(c49, "carte49", c28)
        retounerCarte(c50, "carte50", c28)
        retounerCarte(c51, "carte51", c28)
        retounerCarte(c52, "carte52", c28)
        retounerCarte(c53, "carte53", c28)
        retounerCarte(c54, "carte54", c28)
        retounerCarte(c55, "carte55", c28)
        retounerCarte(c56, "carte56", c28)
        retounerCarte(c57, "carte57", c28)
        retounerCarte(c58, "carte58", c28)
        retounerCarte(c59, "carte59", c28)
        retounerCarte(c60, "carte60", c28)  
        retounerCarte(c61, "carte61", c28)
        retounerCarte(c62, "carte62", c28)
        retounerCarte(c63, "carte63", c28)
        retounerCarte(c64, "carte64", c28)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte28"
    }
})

//image17
c27.addEventListener("click",function (event){
    c27.src=("mot en anglais/me17.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte33"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte27"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c27.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c27)
        retounerCarte(c42, "carte42", c27)
        retounerCarte(c43, "carte43", c27)
        retounerCarte(c44, "carte44", c27)
        retounerCarte(c45, "carte45", c27)
        retounerCarte(c46, "carte46", c27)
        retounerCarte(c47, "carte47", c27)
        retounerCarte(c48, "carte48", c27)
        retounerCarte(c49, "carte49", c27)
        retounerCarte(c50, "carte50", c27)
        retounerCarte(c51, "carte51", c27)
        retounerCarte(c52, "carte52", c27)
        retounerCarte(c53, "carte53", c27)
        retounerCarte(c54, "carte54", c27)
        retounerCarte(c55, "carte55", c27)
        retounerCarte(c56, "carte56", c27)
        retounerCarte(c57, "carte57", c27)
        retounerCarte(c58, "carte58", c27)
        retounerCarte(c59, "carte59", c27)
        retounerCarte(c60, "carte60", c27)  
        retounerCarte(c61, "carte61", c27)
        retounerCarte(c62, "carte62", c27)
        retounerCarte(c63, "carte63", c27)
        retounerCarte(c64, "carte64", c27)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte27"
    }
})
c33.addEventListener("click",function (event){
    c33.src=("carte/29.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte27"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte33"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c33.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c33)
        retounerCarte(c42, "carte42", c33)
        retounerCarte(c43, "carte43", c33)
        retounerCarte(c44, "carte44", c33)
        retounerCarte(c45, "carte45", c33)
        retounerCarte(c46, "carte46", c33)
        retounerCarte(c47, "carte47", c33)
        retounerCarte(c48, "carte48", c33)
        retounerCarte(c49, "carte49", c33)
        retounerCarte(c50, "carte50", c33)
        retounerCarte(c51, "carte51", c33)
        retounerCarte(c52, "carte52", c33)
        retounerCarte(c53, "carte53", c33)
        retounerCarte(c54, "carte54", c33)
        retounerCarte(c55, "carte55", c33)
        retounerCarte(c56, "carte56", c33)
        retounerCarte(c57, "carte57", c33)
        retounerCarte(c58, "carte58", c33)
        retounerCarte(c59, "carte59", c33)
        retounerCarte(c60, "carte60", c33)  
        retounerCarte(c61, "carte61", c33)
        retounerCarte(c62, "carte62", c33)
        retounerCarte(c63, "carte63", c33)
        retounerCarte(c64, "carte64", c33)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte33"
    }
})

//image18
c30.addEventListener("click",function (event){
    c30.src=("mot en anglais/me18.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte36"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte30"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c30.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c30)
        retounerCarte(c42, "carte42", c30)
        retounerCarte(c43, "carte43", c30)
        retounerCarte(c44, "carte44", c30)
        retounerCarte(c45, "carte45", c30)
        retounerCarte(c46, "carte46", c30)
        retounerCarte(c47, "carte47", c30)
        retounerCarte(c48, "carte48", c30)
        retounerCarte(c49, "carte49", c30)
        retounerCarte(c50, "carte50", c30)
        retounerCarte(c51, "carte51", c30)
        retounerCarte(c52, "carte52", c30)
        retounerCarte(c53, "carte53", c30)
        retounerCarte(c54, "carte54", c30)
        retounerCarte(c55, "carte55", c30)
        retounerCarte(c56, "carte56", c30)
        retounerCarte(c57, "carte57", c30)
        retounerCarte(c58, "carte58", c30)
        retounerCarte(c59, "carte59", c30)
        retounerCarte(c60, "carte60", c30)  
        retounerCarte(c61, "carte61", c30)
        retounerCarte(c62, "carte62", c30)
        retounerCarte(c63, "carte63", c30)
        retounerCarte(c64, "carte64", c30)          
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte30"
    }
})
c36.addEventListener("click",function (event){
    c36.src=("carte/35.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte30"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte36"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c36.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c36)
        retounerCarte(c42, "carte42", c36)
        retounerCarte(c43, "carte43", c36)
        retounerCarte(c44, "carte44", c36)
        retounerCarte(c45, "carte45", c36)
        retounerCarte(c46, "carte46", c36)
        retounerCarte(c47, "carte47", c36)
        retounerCarte(c48, "carte48", c36)
        retounerCarte(c49, "carte49", c36)
        retounerCarte(c50, "carte50", c36)
        retounerCarte(c51, "carte51", c36)
        retounerCarte(c52, "carte52", c36)
        retounerCarte(c53, "carte53", c36)
        retounerCarte(c54, "carte54", c36)
        retounerCarte(c55, "carte55", c36)
        retounerCarte(c56, "carte56", c36)
        retounerCarte(c57, "carte57", c36)
        retounerCarte(c58, "carte58", c36)
        retounerCarte(c59, "carte59", c36)
        retounerCarte(c60, "carte60", c36)  
        retounerCarte(c61, "carte61", c36)
        retounerCarte(c62, "carte62", c36)
        retounerCarte(c63, "carte63", c36)
        retounerCarte(c64, "carte64", c36)              
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte36"
    }
})

//image19
c31.addEventListener("click",function (event){
    c31.src=("mot en anglais/me19.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte40"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte31"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c31.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c31)
        retounerCarte(c42, "carte42", c31)
        retounerCarte(c43, "carte43", c31)
        retounerCarte(c44, "carte44", c31)
        retounerCarte(c45, "carte45", c31)
        retounerCarte(c46, "carte46", c31)
        retounerCarte(c47, "carte47", c31)
        retounerCarte(c48, "carte48", c31)
        retounerCarte(c49, "carte49", c31)
        retounerCarte(c50, "carte50", c31)
        retounerCarte(c51, "carte51", c31)
        retounerCarte(c52, "carte52", c31)
        retounerCarte(c53, "carte53", c31)
        retounerCarte(c54, "carte54", c31)
        retounerCarte(c55, "carte55", c31)
        retounerCarte(c56, "carte56", c31)
        retounerCarte(c57, "carte57", c31)
        retounerCarte(c58, "carte58", c31)
        retounerCarte(c59, "carte59", c31)
        retounerCarte(c60, "carte60", c31)  
        retounerCarte(c61, "carte61", c31)
        retounerCarte(c62, "carte62", c31)
        retounerCarte(c63, "carte63", c31)
        retounerCarte(c64, "carte64", c31)          
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte31"
    }
})
c40.addEventListener("click",function (event){
    c40.src=("carte/3.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte31"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte40"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c40.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c40)
        retounerCarte(c42, "carte42", c40)
        retounerCarte(c43, "carte43", c40)
        retounerCarte(c44, "carte44", c40)
        retounerCarte(c45, "carte45", c40)
        retounerCarte(c46, "carte46", c40)
        retounerCarte(c47, "carte47", c40)
        retounerCarte(c48, "carte48", c40)
        retounerCarte(c49, "carte49", c40)
        retounerCarte(c50, "carte50", c40)
        retounerCarte(c51, "carte51", c40)
        retounerCarte(c52, "carte52", c40)
        retounerCarte(c53, "carte53", c40)
        retounerCarte(c54, "carte54", c40)
        retounerCarte(c55, "carte55", c40)
        retounerCarte(c56, "carte56", c40)
        retounerCarte(c57, "carte57", c40)
        retounerCarte(c58, "carte58", c40)
        retounerCarte(c59, "carte59", c40)
        retounerCarte(c60, "carte60", c40)  
        retounerCarte(c61, "carte61", c40)
        retounerCarte(c62, "carte62", c40)
        retounerCarte(c63, "carte63", c40)
        retounerCarte(c64, "carte64", c40)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte40"
    }
})

//image20
c32.addEventListener("click",function (event){
    c32.src=("mot en anglais/me20.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte37"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte32"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c32.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c32)
        retounerCarte(c42, "carte42", c32)
        retounerCarte(c43, "carte43", c23)
        retounerCarte(c44, "carte44", c32)
        retounerCarte(c45, "carte45", c32)
        retounerCarte(c46, "carte46", c32)
        retounerCarte(c47, "carte47", c32)
        retounerCarte(c48, "carte48", c32)
        retounerCarte(c49, "carte49", c32)
        retounerCarte(c50, "carte50", c32)
        retounerCarte(c51, "carte51", c32)
        retounerCarte(c52, "carte52", c32)
        retounerCarte(c53, "carte53", c32)
        retounerCarte(c54, "carte54", c32)
        retounerCarte(c55, "carte55", c32)
        retounerCarte(c56, "carte56", c32)
        retounerCarte(c57, "carte57", c32)
        retounerCarte(c58, "carte58", c32)
        retounerCarte(c59, "carte59", c32)
        retounerCarte(c60, "carte60", c32)  
        retounerCarte(c61, "carte61", c32)
        retounerCarte(c62, "carte62", c32)
        retounerCarte(c63, "carte63", c32)
        retounerCarte(c64, "carte64", c32)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte32"
    }
})
c37.addEventListener("click",function (event){
    c37.src=("carte/10.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte32"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte37"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c37.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
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
        retounerCarte(c41, "carte41", c37)
        retounerCarte(c42, "carte42", c37)
        retounerCarte(c43, "carte43", c37) 
        retounerCarte(c44, "carte44", c37)
        retounerCarte(c45, "carte45", c37)
        retounerCarte(c46, "carte46", c37)
        retounerCarte(c47, "carte47", c37)
        retounerCarte(c48, "carte48", c37)
        retounerCarte(c49, "carte49", c37)
        retounerCarte(c50, "carte50", c37)
        retounerCarte(c51, "carte51", c37)
        retounerCarte(c52, "carte52", c37)
        retounerCarte(c53, "carte53", c37)
        retounerCarte(c54, "carte54", c37)
        retounerCarte(c55, "carte55", c37)
        retounerCarte(c56, "carte56", c37)
        retounerCarte(c57, "carte57", c37)
        retounerCarte(c58, "carte58", c37)
        retounerCarte(c59, "carte59", c37)
        retounerCarte(c60, "carte60", c37)  
        retounerCarte(c61, "carte61", c37)
        retounerCarte(c62, "carte62", c37)
        retounerCarte(c63, "carte63", c37)
        retounerCarte(c64, "carte64", c37)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte37"
    }
})

//image21
c41.addEventListener("click",function (event){
    c41.src=("mot en anglais/me21.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte42"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte41"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c41.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c41)
        retounerCarte(c2, "carte2", c41)
        retounerCarte(c3, "carte3", c41)
        retounerCarte(c4, "carte4", c41)
        retounerCarte(c5, "carte5", c41)
        retounerCarte(c6, "carte6", c41)
        retounerCarte(c7, "carte7", c41)
        retounerCarte(c8, "carte8", c41)
        retounerCarte(c9, "carte9", c41)
        retounerCarte(c10, "carte10", c41)
        retounerCarte(c11, "carte11", c41)
        retounerCarte(c12, "carte12", c41)
        retounerCarte(c13, "carte13", c41)
        retounerCarte(c14, "carte14", c41)
        retounerCarte(c15, "carte15", c41)
        retounerCarte(c16, "carte16", c41)
        retounerCarte(c17, "carte17", c41)
        retounerCarte(c18, "carte18", c41)
        retounerCarte(c19, "carte19", c41)
        retounerCarte(c20, "carte20", c41)  
        retounerCarte(c21, "carte21", c41)
        retounerCarte(c22, "carte22", c41)
        retounerCarte(c23, "carte23", c41)
        retounerCarte(c24, "carte24", c41)
        retounerCarte(c25, "carte25", c41)
        retounerCarte(c26, "carte26", c41)
        retounerCarte(c27, "carte27", c41)
        retounerCarte(c28, "carte28", c41)
        retounerCarte(c29, "carte29", c41)
        retounerCarte(c30, "carte30", c41)
        retounerCarte(c31, "carte31", c41)
        retounerCarte(c32, "carte32", c41)
        retounerCarte(c33, "carte33", c41)
        retounerCarte(c34, "carte34", c41)
        retounerCarte(c35, "carte35", c41)
        retounerCarte(c36, "carte36", c41)
        retounerCarte(c37, "carte37", c41)
        retounerCarte(c38, "carte38", c41)
        retounerCarte(c39, "carte39", c41)
        retounerCarte(c40, "carte40", c41)  
        retounerCarte(c41, "carte41", c41)
        retounerCarte(c42, "carte42", c41)
        retounerCarte(c43, "carte43", c41)
        retounerCarte(c44, "carte44", c41)
        retounerCarte(c45, "carte45", c41)
        retounerCarte(c46, "carte46", c41)
        retounerCarte(c47, "carte47", c41)
        retounerCarte(c48, "carte48", c41)
        retounerCarte(c49, "carte49", c41)
        retounerCarte(c50, "carte50", c41)
        retounerCarte(c51, "carte51", c41)
        retounerCarte(c52, "carte52", c41)
        retounerCarte(c53, "carte53", c41)
        retounerCarte(c54, "carte54", c41)
        retounerCarte(c55, "carte55", c41)
        retounerCarte(c56, "carte56", c41)
        retounerCarte(c57, "carte57", c41)
        retounerCarte(c58, "carte58", c41)
        retounerCarte(c59, "carte59", c41)
        retounerCarte(c60, "carte60", c41)  
        retounerCarte(c61, "carte61", c41)
        retounerCarte(c62, "carte62", c41)
        retounerCarte(c63, "carte63", c41)
        retounerCarte(c64, "carte64", c41)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte41"
    }
})
c42.addEventListener("click",function (event){
    c42.src=("carte/16.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte41"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte42"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c42.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c42)
        retounerCarte(c2, "carte2", c42)
        retounerCarte(c3, "carte3", c42)
        retounerCarte(c4, "carte4", c42)
        retounerCarte(c5, "carte5", c42)
        retounerCarte(c6, "carte6", c42)
        retounerCarte(c7, "carte7", c42)
        retounerCarte(c8, "carte8", c42)
        retounerCarte(c9, "carte9", c42)
        retounerCarte(c10, "carte10", c42)
        retounerCarte(c11, "carte11", c42)
        retounerCarte(c12, "carte12", c42)
        retounerCarte(c13, "carte13", c42)
        retounerCarte(c14, "carte14", c42)
        retounerCarte(c15, "carte15", c42)
        retounerCarte(c16, "carte16", c42)
        retounerCarte(c17, "carte17", c42)
        retounerCarte(c18, "carte18", c42)
        retounerCarte(c19, "carte19", c42)
        retounerCarte(c20, "carte20", c42)  
        retounerCarte(c21, "carte21", c42)
        retounerCarte(c22, "carte22", c42)
        retounerCarte(c23, "carte23", c42)
        retounerCarte(c24, "carte24", c42)
        retounerCarte(c25, "carte25", c42)
        retounerCarte(c26, "carte26", c42)
        retounerCarte(c27, "carte27", c42)
        retounerCarte(c28, "carte28", c42)
        retounerCarte(c29, "carte29", c42)
        retounerCarte(c30, "carte30", c42)
        retounerCarte(c31, "carte31", c42)
        retounerCarte(c32, "carte32", c42)
        retounerCarte(c33, "carte33", c42)
        retounerCarte(c34, "carte34", c42)
        retounerCarte(c35, "carte35", c42)
        retounerCarte(c36, "carte36", c42)
        retounerCarte(c37, "carte37", c42)
        retounerCarte(c38, "carte38", c42)
        retounerCarte(c39, "carte39", c42)
        retounerCarte(c40, "carte40", c42)
        retounerCarte(c41, "carte41", c42)
        retounerCarte(c42, "carte42", c42)
        retounerCarte(c43, "carte43", c42) 
        retounerCarte(c44, "carte44", c42)
        retounerCarte(c45, "carte45", c42)
        retounerCarte(c46, "carte46", c42)
        retounerCarte(c47, "carte47", c42)
        retounerCarte(c48, "carte48", c42)
        retounerCarte(c49, "carte49", c42)
        retounerCarte(c50, "carte50", c42)
        retounerCarte(c51, "carte51", c42)
        retounerCarte(c52, "carte52", c42)
        retounerCarte(c53, "carte53", c42)
        retounerCarte(c54, "carte54", c42)
        retounerCarte(c55, "carte55", c42)
        retounerCarte(c56, "carte56", c42)
        retounerCarte(c57, "carte57", c42)
        retounerCarte(c58, "carte58", c42)
        retounerCarte(c59, "carte59", c42)
        retounerCarte(c60, "carte60", c42)  
        retounerCarte(c61, "carte61", c42)
        retounerCarte(c62, "carte62", c42)
        retounerCarte(c63, "carte63", c42)
        retounerCarte(c64, "carte64", c42)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte42"
    }
})

//image22
c43.addEventListener("click",function (event){
    c43.src=("mot en anglais/me22.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte44"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte43"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c43.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c43)
        retounerCarte(c2, "carte2", c43)
        retounerCarte(c3, "carte3", c43)
        retounerCarte(c4, "carte4", c43)
        retounerCarte(c5, "carte5", c43)
        retounerCarte(c6, "carte6", c43)
        retounerCarte(c7, "carte7", c43)
        retounerCarte(c8, "carte8", c43)
        retounerCarte(c9, "carte9", c43)
        retounerCarte(c10, "carte10", c43)
        retounerCarte(c11, "carte11", c43)
        retounerCarte(c12, "carte12", c43)
        retounerCarte(c13, "carte13", c43)
        retounerCarte(c14, "carte14", c43)
        retounerCarte(c15, "carte15", c43)
        retounerCarte(c16, "carte16", c43)
        retounerCarte(c17, "carte17", c43)
        retounerCarte(c18, "carte18", c43)
        retounerCarte(c19, "carte19", c43)
        retounerCarte(c20, "carte20", c43)  
        retounerCarte(c21, "carte21", c43)
        retounerCarte(c22, "carte22", c43)
        retounerCarte(c23, "carte23", c43)
        retounerCarte(c24, "carte24", c43)
        retounerCarte(c25, "carte25", c43)
        retounerCarte(c26, "carte26", c43)
        retounerCarte(c27, "carte27", c43)
        retounerCarte(c28, "carte28", c43)
        retounerCarte(c29, "carte29", c43)
        retounerCarte(c30, "carte30", c43)
        retounerCarte(c31, "carte31", c43)
        retounerCarte(c32, "carte32", c43)
        retounerCarte(c33, "carte33", c43)
        retounerCarte(c34, "carte34", c43)
        retounerCarte(c35, "carte35", c43)
        retounerCarte(c36, "carte36", c43)
        retounerCarte(c37, "carte37", c43)
        retounerCarte(c38, "carte38", c43)
        retounerCarte(c39, "carte39", c43)
        retounerCarte(c40, "carte40", c43)  
        retounerCarte(c41, "carte41", c43)
        retounerCarte(c42, "carte42", c43)
        retounerCarte(c43, "carte43", c43)
        retounerCarte(c44, "carte44", c43)
        retounerCarte(c45, "carte45", c43)
        retounerCarte(c46, "carte46", c43)
        retounerCarte(c47, "carte47", c43)
        retounerCarte(c48, "carte48", c43)
        retounerCarte(c49, "carte49", c43)
        retounerCarte(c50, "carte50", c43)
        retounerCarte(c51, "carte51", c43)
        retounerCarte(c52, "carte52", c43)
        retounerCarte(c53, "carte53", c43)
        retounerCarte(c54, "carte54", c43)
        retounerCarte(c55, "carte55", c43)
        retounerCarte(c56, "carte56", c43)
        retounerCarte(c57, "carte57", c43)
        retounerCarte(c58, "carte58", c43)
        retounerCarte(c59, "carte59", c43)
        retounerCarte(c60, "carte60", c43)  
        retounerCarte(c61, "carte61", c43)
        retounerCarte(c62, "carte62", c43)
        retounerCarte(c63, "carte63", c43)
        retounerCarte(c64, "carte64", c43)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte43"
    }
})
c44.addEventListener("click",function (event){
    c44.src=("carte/19.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte43"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte44"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c44.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c44)
        retounerCarte(c2, "carte2", c44)
        retounerCarte(c3, "carte3", c44)
        retounerCarte(c4, "carte4", c44)
        retounerCarte(c5, "carte5", c44)
        retounerCarte(c6, "carte6", c44)
        retounerCarte(c7, "carte7", c44)
        retounerCarte(c8, "carte8", c44)
        retounerCarte(c9, "carte9", c44)
        retounerCarte(c10, "carte10", c44)
        retounerCarte(c11, "carte11", c44)
        retounerCarte(c12, "carte12", c44)
        retounerCarte(c13, "carte13", c44)
        retounerCarte(c14, "carte14", c44)
        retounerCarte(c15, "carte15", c44)
        retounerCarte(c16, "carte16", c44)
        retounerCarte(c17, "carte17", c44)
        retounerCarte(c18, "carte18", c44)
        retounerCarte(c19, "carte19", c44)
        retounerCarte(c20, "carte20", c44)  
        retounerCarte(c21, "carte21", c44)
        retounerCarte(c22, "carte22", c44)
        retounerCarte(c23, "carte23", c44)
        retounerCarte(c24, "carte24", c44)
        retounerCarte(c25, "carte25", c44)
        retounerCarte(c26, "carte26", c44)
        retounerCarte(c27, "carte27", c44)
        retounerCarte(c28, "carte28", c44)
        retounerCarte(c29, "carte29", c44)
        retounerCarte(c30, "carte30", c44)
        retounerCarte(c31, "carte31", c44)
        retounerCarte(c32, "carte32", c44)
        retounerCarte(c33, "carte33", c44)
        retounerCarte(c34, "carte34", c44)
        retounerCarte(c35, "carte35", c44)
        retounerCarte(c36, "carte36", c44)
        retounerCarte(c37, "carte37", c44)
        retounerCarte(c38, "carte38", c44)
        retounerCarte(c39, "carte39", c44)
        retounerCarte(c40, "carte40", c44)
        retounerCarte(c41, "carte41", c44)
        retounerCarte(c42, "carte42", c44)
        retounerCarte(c43, "carte43", c44) 
        retounerCarte(c44, "carte44", c44)
        retounerCarte(c45, "carte45", c44)
        retounerCarte(c46, "carte46", c44)
        retounerCarte(c47, "carte47", c44)
        retounerCarte(c48, "carte48", c44)
        retounerCarte(c49, "carte49", c44)
        retounerCarte(c50, "carte50", c44)
        retounerCarte(c51, "carte51", c44)
        retounerCarte(c52, "carte52", c44)
        retounerCarte(c53, "carte53", c44)
        retounerCarte(c54, "carte54", c44)
        retounerCarte(c55, "carte55", c44)
        retounerCarte(c56, "carte56", c44)
        retounerCarte(c57, "carte57", c44)
        retounerCarte(c58, "carte58", c44)
        retounerCarte(c59, "carte59", c44)
        retounerCarte(c60, "carte60", c44)  
        retounerCarte(c61, "carte61", c44)
        retounerCarte(c62, "carte62", c44)
        retounerCarte(c63, "carte63", c44)
        retounerCarte(c64, "carte64", c44)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte44"
    }
})

//image23
c45.addEventListener("click",function (event){
    c45.src=("mot en anglais/me23.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte46"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte45"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c45.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c45)
        retounerCarte(c2, "carte2", c45)
        retounerCarte(c3, "carte3", c45)
        retounerCarte(c4, "carte4", c45)
        retounerCarte(c5, "carte5", c45)
        retounerCarte(c6, "carte6", c45)
        retounerCarte(c7, "carte7", c45)
        retounerCarte(c8, "carte8", c45)
        retounerCarte(c9, "carte9", c45)
        retounerCarte(c10, "carte10", c45)
        retounerCarte(c11, "carte11", c45)
        retounerCarte(c12, "carte12", c45)
        retounerCarte(c13, "carte13", c45)
        retounerCarte(c14, "carte14", c45)
        retounerCarte(c15, "carte15", c45)
        retounerCarte(c16, "carte16", c45)
        retounerCarte(c17, "carte17", c45)
        retounerCarte(c18, "carte18", c45)
        retounerCarte(c19, "carte19", c45)
        retounerCarte(c20, "carte20", c45)  
        retounerCarte(c21, "carte21", c45)
        retounerCarte(c22, "carte22", c45)
        retounerCarte(c23, "carte23", c45)
        retounerCarte(c24, "carte24", c45)
        retounerCarte(c25, "carte25", c45)
        retounerCarte(c26, "carte26", c45)
        retounerCarte(c27, "carte27", c45)
        retounerCarte(c28, "carte28", c45)
        retounerCarte(c29, "carte29", c45)
        retounerCarte(c30, "carte30", c45)
        retounerCarte(c31, "carte31", c45)
        retounerCarte(c32, "carte32", c45)
        retounerCarte(c33, "carte33", c45)
        retounerCarte(c34, "carte34", c45)
        retounerCarte(c35, "carte35", c45)
        retounerCarte(c36, "carte36", c45)
        retounerCarte(c37, "carte37", c45)
        retounerCarte(c38, "carte38", c45)
        retounerCarte(c39, "carte39", c45)
        retounerCarte(c40, "carte40", c45)  
        retounerCarte(c41, "carte41", c45)
        retounerCarte(c42, "carte42", c45)
        retounerCarte(c43, "carte43", c45)
        retounerCarte(c44, "carte44", c45)
        retounerCarte(c45, "carte45", c45)
        retounerCarte(c46, "carte46", c45)
        retounerCarte(c47, "carte47", c45)
        retounerCarte(c48, "carte48", c45)
        retounerCarte(c49, "carte49", c45)
        retounerCarte(c50, "carte50", c45)
        retounerCarte(c51, "carte51", c45)
        retounerCarte(c52, "carte52", c45)
        retounerCarte(c53, "carte53", c45)
        retounerCarte(c54, "carte54", c45)
        retounerCarte(c55, "carte55", c45)
        retounerCarte(c56, "carte56", c45)
        retounerCarte(c57, "carte57", c45)
        retounerCarte(c58, "carte58", c45)
        retounerCarte(c59, "carte59", c45)
        retounerCarte(c60, "carte60", c45)  
        retounerCarte(c61, "carte61", c45)
        retounerCarte(c62, "carte62", c45)
        retounerCarte(c63, "carte63", c45)
        retounerCarte(c64, "carte64", c45)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte45"
    }
})
c46.addEventListener("click",function (event){
    c46.src=("carte/22.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte45"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte46"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c46.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c46)
        retounerCarte(c2, "carte2", c46)
        retounerCarte(c3, "carte3", c46)
        retounerCarte(c4, "carte4", c46)
        retounerCarte(c5, "carte5", c46)
        retounerCarte(c6, "carte6", c46)
        retounerCarte(c7, "carte7", c46)
        retounerCarte(c8, "carte8", c46)
        retounerCarte(c9, "carte9", c46)
        retounerCarte(c10, "carte10", c46)
        retounerCarte(c11, "carte11", c46)
        retounerCarte(c12, "carte12", c46)
        retounerCarte(c13, "carte13", c46)
        retounerCarte(c14, "carte14", c46)
        retounerCarte(c15, "carte15", c46)
        retounerCarte(c16, "carte16", c46)
        retounerCarte(c17, "carte17", c46)
        retounerCarte(c18, "carte18", c46)
        retounerCarte(c19, "carte19", c46)
        retounerCarte(c20, "carte20", c46)  
        retounerCarte(c21, "carte21", c46)
        retounerCarte(c22, "carte22", c46)
        retounerCarte(c23, "carte23", c46)
        retounerCarte(c24, "carte24", c46)
        retounerCarte(c25, "carte25", c46)
        retounerCarte(c26, "carte26", c46)
        retounerCarte(c27, "carte27", c46)
        retounerCarte(c28, "carte28", c46)
        retounerCarte(c29, "carte29", c46)
        retounerCarte(c30, "carte30", c46)
        retounerCarte(c31, "carte31", c46)
        retounerCarte(c32, "carte32", c46)
        retounerCarte(c33, "carte33", c46)
        retounerCarte(c34, "carte34", c46)
        retounerCarte(c35, "carte35", c46)
        retounerCarte(c36, "carte36", c46)
        retounerCarte(c37, "carte37", c46)
        retounerCarte(c38, "carte38", c46)
        retounerCarte(c39, "carte39", c46)
        retounerCarte(c40, "carte40", c46)
        retounerCarte(c41, "carte41", c46)
        retounerCarte(c42, "carte42", c46)
        retounerCarte(c43, "carte43", c46) 
        retounerCarte(c44, "carte44", c46)
        retounerCarte(c45, "carte45", c46)
        retounerCarte(c46, "carte46", c46)
        retounerCarte(c47, "carte47", c46)
        retounerCarte(c48, "carte48", c46)
        retounerCarte(c49, "carte49", c46)
        retounerCarte(c50, "carte50", c46)
        retounerCarte(c51, "carte51", c46)
        retounerCarte(c52, "carte52", c46)
        retounerCarte(c53, "carte53", c46)
        retounerCarte(c54, "carte54", c46)
        retounerCarte(c55, "carte55", c46)
        retounerCarte(c56, "carte56", c46)
        retounerCarte(c57, "carte57", c46)
        retounerCarte(c58, "carte58", c46)
        retounerCarte(c59, "carte59", c46)
        retounerCarte(c60, "carte60", c46)  
        retounerCarte(c61, "carte61", c46)
        retounerCarte(c62, "carte62", c46)
        retounerCarte(c63, "carte63", c46)
        retounerCarte(c64, "carte64", c46)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte46"
    }
})

//image24
c47.addEventListener("click",function (event){
    c47.src=("mot en anglais/me24.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte48"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte47"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c47.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c47)
        retounerCarte(c2, "carte2", c47)
        retounerCarte(c3, "carte3", c47)
        retounerCarte(c4, "carte4", c47)
        retounerCarte(c5, "carte5", c47)
        retounerCarte(c6, "carte6", c47)
        retounerCarte(c7, "carte7", c47)
        retounerCarte(c8, "carte8", c47)
        retounerCarte(c9, "carte9", c47)
        retounerCarte(c10, "carte10", c47)
        retounerCarte(c11, "carte11", c47)
        retounerCarte(c12, "carte12", c47)
        retounerCarte(c13, "carte13", c47)
        retounerCarte(c14, "carte14", c47)
        retounerCarte(c15, "carte15", c47)
        retounerCarte(c16, "carte16", c47)
        retounerCarte(c17, "carte17", c47)
        retounerCarte(c18, "carte18", c47)
        retounerCarte(c19, "carte19", c47)
        retounerCarte(c20, "carte20", c47)  
        retounerCarte(c21, "carte21", c47)
        retounerCarte(c22, "carte22", c47)
        retounerCarte(c23, "carte23", c47)
        retounerCarte(c24, "carte24", c47)
        retounerCarte(c25, "carte25", c47)
        retounerCarte(c26, "carte26", c47)
        retounerCarte(c27, "carte27", c47)
        retounerCarte(c28, "carte28", c47)
        retounerCarte(c29, "carte29", c47)
        retounerCarte(c30, "carte30", c47)
        retounerCarte(c31, "carte31", c47)
        retounerCarte(c32, "carte32", c47)
        retounerCarte(c33, "carte33", c47)
        retounerCarte(c34, "carte34", c47)
        retounerCarte(c35, "carte35", c47)
        retounerCarte(c36, "carte36", c47)
        retounerCarte(c37, "carte37", c47)
        retounerCarte(c38, "carte38", c47)
        retounerCarte(c39, "carte39", c47)
        retounerCarte(c40, "carte40", c47)  
        retounerCarte(c41, "carte41", c47)
        retounerCarte(c42, "carte42", c47)
        retounerCarte(c43, "carte43", c47)
        retounerCarte(c44, "carte44", c47)
        retounerCarte(c45, "carte45", c47)
        retounerCarte(c46, "carte46", c47)
        retounerCarte(c47, "carte47", c47)
        retounerCarte(c48, "carte48", c47)
        retounerCarte(c49, "carte49", c47)
        retounerCarte(c50, "carte50", c47)
        retounerCarte(c51, "carte51", c47)
        retounerCarte(c52, "carte52", c47)
        retounerCarte(c53, "carte53", c47)
        retounerCarte(c54, "carte54", c47)
        retounerCarte(c55, "carte55", c47)
        retounerCarte(c56, "carte56", c47)
        retounerCarte(c57, "carte57", c47)
        retounerCarte(c58, "carte58", c47)
        retounerCarte(c59, "carte59", c47)
        retounerCarte(c60, "carte60", c47)  
        retounerCarte(c61, "carte61", c47)
        retounerCarte(c62, "carte62", c47)
        retounerCarte(c63, "carte63", c47)
        retounerCarte(c64, "carte64", c47)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte47"
    }
})
c48.addEventListener("click",function (event){
    c48.src=("carte/28.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte47"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte48"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c48.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c48)
        retounerCarte(c2, "carte2", c48)
        retounerCarte(c3, "carte3", c48)
        retounerCarte(c4, "carte4", c48)
        retounerCarte(c5, "carte5", c48)
        retounerCarte(c6, "carte6", c48)
        retounerCarte(c7, "carte7", c48)
        retounerCarte(c8, "carte8", c48)
        retounerCarte(c9, "carte9", c48)
        retounerCarte(c10, "carte10", c48)
        retounerCarte(c11, "carte11", c48)
        retounerCarte(c12, "carte12", c48)
        retounerCarte(c13, "carte13", c48)
        retounerCarte(c14, "carte14", c48)
        retounerCarte(c15, "carte15", c48)
        retounerCarte(c16, "carte16", c48)
        retounerCarte(c17, "carte17", c48)
        retounerCarte(c18, "carte18", c48)
        retounerCarte(c19, "carte19", c48)
        retounerCarte(c20, "carte20", c48)  
        retounerCarte(c21, "carte21", c48)
        retounerCarte(c22, "carte22", c48)
        retounerCarte(c23, "carte23", c48)
        retounerCarte(c24, "carte24", c48)
        retounerCarte(c25, "carte25", c48)
        retounerCarte(c26, "carte26", c48)
        retounerCarte(c27, "carte27", c48)
        retounerCarte(c28, "carte28", c48)
        retounerCarte(c29, "carte29", c48)
        retounerCarte(c30, "carte30", c48)
        retounerCarte(c31, "carte31", c48)
        retounerCarte(c32, "carte32", c48)
        retounerCarte(c33, "carte33", c48)
        retounerCarte(c34, "carte34", c48)
        retounerCarte(c35, "carte35", c48)
        retounerCarte(c36, "carte36", c48)
        retounerCarte(c37, "carte37", c48)
        retounerCarte(c38, "carte38", c48)
        retounerCarte(c39, "carte39", c48)
        retounerCarte(c40, "carte40", c48)
        retounerCarte(c41, "carte41", c48)
        retounerCarte(c42, "carte42", c48)
        retounerCarte(c43, "carte43", c48) 
        retounerCarte(c44, "carte44", c48)
        retounerCarte(c45, "carte45", c48)
        retounerCarte(c46, "carte46", c48)
        retounerCarte(c47, "carte47", c48)
        retounerCarte(c48, "carte48", c48)
        retounerCarte(c49, "carte49", c48)
        retounerCarte(c50, "carte50", c48)
        retounerCarte(c51, "carte51", c48)
        retounerCarte(c52, "carte52", c48)
        retounerCarte(c53, "carte53", c48)
        retounerCarte(c54, "carte54", c48)
        retounerCarte(c55, "carte55", c48)
        retounerCarte(c56, "carte56", c48)
        retounerCarte(c57, "carte57", c48)
        retounerCarte(c58, "carte58", c48)
        retounerCarte(c59, "carte59", c48)
        retounerCarte(c60, "carte60", c48)  
        retounerCarte(c61, "carte61", c48)
        retounerCarte(c62, "carte62", c48)
        retounerCarte(c63, "carte63", c48)
        retounerCarte(c64, "carte64", c48)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte48"
    }
})

//image 25
c49.addEventListener("click",function (event){
    c49.src=("mot en anglais/me25.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte50"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte49"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c49.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c49)
        retounerCarte(c2, "carte2", c49)
        retounerCarte(c3, "carte3", c49)
        retounerCarte(c4, "carte4", c49)
        retounerCarte(c5, "carte5", c49)
        retounerCarte(c6, "carte6", c49)
        retounerCarte(c7, "carte7", c49)
        retounerCarte(c8, "carte8", c49)
        retounerCarte(c9, "carte9", c49)
        retounerCarte(c10, "carte10", c49)
        retounerCarte(c11, "carte11", c49)
        retounerCarte(c12, "carte12", c49)
        retounerCarte(c13, "carte13", c49)
        retounerCarte(c14, "carte14", c49)
        retounerCarte(c15, "carte15", c49)
        retounerCarte(c16, "carte16", c49)
        retounerCarte(c17, "carte17", c49)
        retounerCarte(c18, "carte18", c49)
        retounerCarte(c19, "carte19", c49)
        retounerCarte(c20, "carte20", c49)  
        retounerCarte(c21, "carte21", c49)
        retounerCarte(c22, "carte22", c49)
        retounerCarte(c23, "carte23", c49)
        retounerCarte(c24, "carte24", c49)
        retounerCarte(c25, "carte25", c49)
        retounerCarte(c26, "carte26", c49)
        retounerCarte(c27, "carte27", c49)
        retounerCarte(c28, "carte28", c49)
        retounerCarte(c29, "carte29", c49)
        retounerCarte(c30, "carte30", c49)
        retounerCarte(c31, "carte31", c49)
        retounerCarte(c32, "carte32", c49)
        retounerCarte(c33, "carte33", c49)
        retounerCarte(c34, "carte34", c49)
        retounerCarte(c35, "carte35", c49)
        retounerCarte(c36, "carte36", c49)
        retounerCarte(c37, "carte37", c49)
        retounerCarte(c38, "carte38", c49)
        retounerCarte(c39, "carte39", c49)
        retounerCarte(c40, "carte40", c49)  
        retounerCarte(c41, "carte41", c49)
        retounerCarte(c42, "carte42", c49)
        retounerCarte(c43, "carte43", c49)
        retounerCarte(c44, "carte44", c49)
        retounerCarte(c45, "carte45", c49)
        retounerCarte(c46, "carte46", c49)
        retounerCarte(c47, "carte47", c49)
        retounerCarte(c48, "carte48", c49)
        retounerCarte(c49, "carte49", c49)
        retounerCarte(c50, "carte50", c49)
        retounerCarte(c51, "carte51", c49)
        retounerCarte(c52, "carte52", c49)
        retounerCarte(c53, "carte53", c49)
        retounerCarte(c54, "carte54", c49)
        retounerCarte(c55, "carte55", c49)
        retounerCarte(c56, "carte56", c49)
        retounerCarte(c57, "carte57", c49)
        retounerCarte(c58, "carte58", c49)
        retounerCarte(c59, "carte59", c49)
        retounerCarte(c60, "carte60", c49)  
        retounerCarte(c61, "carte61", c49)
        retounerCarte(c62, "carte62", c49)
        retounerCarte(c63, "carte63", c49)
        retounerCarte(c64, "carte64", c49)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte49"
    }
})
c50.addEventListener("click",function (event){
    c50.src=("carte/9m.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte49"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte50"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c50.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c50)
        retounerCarte(c2, "carte2", c50)
        retounerCarte(c3, "carte3", c50)
        retounerCarte(c4, "carte4", c50)
        retounerCarte(c5, "carte5", c50)
        retounerCarte(c6, "carte6", c50)
        retounerCarte(c7, "carte7", c50)
        retounerCarte(c8, "carte8", c50)
        retounerCarte(c9, "carte9", c50)
        retounerCarte(c10, "carte10", c50)
        retounerCarte(c11, "carte11", c50)
        retounerCarte(c12, "carte12", c50)
        retounerCarte(c13, "carte13", c50)
        retounerCarte(c14, "carte14", c50)
        retounerCarte(c15, "carte15", c50)
        retounerCarte(c16, "carte16", c50)
        retounerCarte(c17, "carte17", c50)
        retounerCarte(c18, "carte18", c50)
        retounerCarte(c19, "carte19", c50)
        retounerCarte(c20, "carte20", c50)  
        retounerCarte(c21, "carte21", c50)
        retounerCarte(c22, "carte22", c50)
        retounerCarte(c23, "carte23", c50)
        retounerCarte(c24, "carte24", c50)
        retounerCarte(c25, "carte25", c50)
        retounerCarte(c26, "carte26", c50)
        retounerCarte(c27, "carte27", c50)
        retounerCarte(c28, "carte28", c50)
        retounerCarte(c29, "carte29", c50)
        retounerCarte(c30, "carte30", c50)
        retounerCarte(c31, "carte31", c50)
        retounerCarte(c32, "carte32", c50)
        retounerCarte(c33, "carte33", c50)
        retounerCarte(c34, "carte34", c50)
        retounerCarte(c35, "carte35", c50)
        retounerCarte(c36, "carte36", c50)
        retounerCarte(c37, "carte37", c50)
        retounerCarte(c38, "carte38", c50)
        retounerCarte(c39, "carte39", c50)
        retounerCarte(c40, "carte40", c50)
        retounerCarte(c41, "carte41", c50)
        retounerCarte(c42, "carte42", c50)
        retounerCarte(c43, "carte43", c50) 
        retounerCarte(c44, "carte44", c50)
        retounerCarte(c45, "carte45", c50)
        retounerCarte(c46, "carte46", c50)
        retounerCarte(c47, "carte47", c50)
        retounerCarte(c48, "carte48", c50)
        retounerCarte(c49, "carte49", c50)
        retounerCarte(c50, "carte50", c50)
        retounerCarte(c51, "carte51", c50)
        retounerCarte(c52, "carte52", c50)
        retounerCarte(c53, "carte53", c50)
        retounerCarte(c54, "carte54", c50)
        retounerCarte(c55, "carte55", c50)
        retounerCarte(c56, "carte56", c50)
        retounerCarte(c57, "carte57", c50)
        retounerCarte(c58, "carte58", c50)
        retounerCarte(c59, "carte59", c50)
        retounerCarte(c60, "carte60", c50)  
        retounerCarte(c61, "carte61", c50)
        retounerCarte(c62, "carte62", c50)
        retounerCarte(c63, "carte63", c50)
        retounerCarte(c64, "carte64", c50)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte50"
    }
})

//image26
c51.addEventListener("click",function (event){
    c51.src=("mot en anglais/me26.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte52"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte51"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c51.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c51)
        retounerCarte(c2, "carte2", c51)
        retounerCarte(c3, "carte3", c51)
        retounerCarte(c4, "carte4", c51)
        retounerCarte(c5, "carte5", c51)
        retounerCarte(c6, "carte6", c51)
        retounerCarte(c7, "carte7", c51)
        retounerCarte(c8, "carte8", c51)
        retounerCarte(c9, "carte9", c51)
        retounerCarte(c10, "carte10", c51)
        retounerCarte(c11, "carte11", c51)
        retounerCarte(c12, "carte12", c51)
        retounerCarte(c13, "carte13", c51)
        retounerCarte(c14, "carte14", c51)
        retounerCarte(c15, "carte15", c51)
        retounerCarte(c16, "carte16", c51)
        retounerCarte(c17, "carte17", c51)
        retounerCarte(c18, "carte18", c51)
        retounerCarte(c19, "carte19", c51)
        retounerCarte(c20, "carte20", c51)  
        retounerCarte(c21, "carte21", c51)
        retounerCarte(c22, "carte22", c51)
        retounerCarte(c23, "carte23", c51)
        retounerCarte(c24, "carte24", c51)
        retounerCarte(c25, "carte25", c51)
        retounerCarte(c26, "carte26", c51)
        retounerCarte(c27, "carte27", c51)
        retounerCarte(c28, "carte28", c51)
        retounerCarte(c29, "carte29", c51)
        retounerCarte(c30, "carte30", c51)
        retounerCarte(c31, "carte31", c51)
        retounerCarte(c32, "carte32", c51)
        retounerCarte(c33, "carte33", c51)
        retounerCarte(c34, "carte34", c51)
        retounerCarte(c35, "carte35", c51)
        retounerCarte(c36, "carte36", c51)
        retounerCarte(c37, "carte37", c51)
        retounerCarte(c38, "carte38", c51)
        retounerCarte(c39, "carte39", c51)
        retounerCarte(c40, "carte40", c51)  
        retounerCarte(c41, "carte41", c51)
        retounerCarte(c42, "carte42", c51)
        retounerCarte(c43, "carte43", c51)
        retounerCarte(c44, "carte44", c51)
        retounerCarte(c45, "carte45", c51)
        retounerCarte(c46, "carte46", c51)
        retounerCarte(c47, "carte47", c51)
        retounerCarte(c48, "carte48", c51)
        retounerCarte(c49, "carte49", c51)
        retounerCarte(c50, "carte50", c51)
        retounerCarte(c51, "carte51", c51)
        retounerCarte(c52, "carte52", c51)
        retounerCarte(c53, "carte53", c51)
        retounerCarte(c54, "carte54", c51)
        retounerCarte(c55, "carte55", c51)
        retounerCarte(c56, "carte56", c51)
        retounerCarte(c57, "carte57", c51)
        retounerCarte(c58, "carte58", c51)
        retounerCarte(c59, "carte59", c51)
        retounerCarte(c60, "carte60", c51)  
        retounerCarte(c61, "carte61", c51)
        retounerCarte(c62, "carte62", c51)
        retounerCarte(c63, "carte63", c51)
        retounerCarte(c64, "carte64", c51)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte51"
    }
})
c52.addEventListener("click",function (event){
    c52.src=("carte/2.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte51"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte52"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c52.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c52)
        retounerCarte(c2, "carte2", c52)
        retounerCarte(c3, "carte3", c52)
        retounerCarte(c4, "carte4", c52)
        retounerCarte(c5, "carte5", c52)
        retounerCarte(c6, "carte6", c52)
        retounerCarte(c7, "carte7", c52)
        retounerCarte(c8, "carte8", c52)
        retounerCarte(c9, "carte9", c52)
        retounerCarte(c10, "carte10", c52)
        retounerCarte(c11, "carte11", c52)
        retounerCarte(c12, "carte12", c52)
        retounerCarte(c13, "carte13", c52)
        retounerCarte(c14, "carte14", c52)
        retounerCarte(c15, "carte15", c52)
        retounerCarte(c16, "carte16", c52)
        retounerCarte(c17, "carte17", c52)
        retounerCarte(c18, "carte18", c52)
        retounerCarte(c19, "carte19", c52)
        retounerCarte(c20, "carte20", c52)  
        retounerCarte(c21, "carte21", c52)
        retounerCarte(c22, "carte22", c52)
        retounerCarte(c23, "carte23", c52)
        retounerCarte(c24, "carte24", c52)
        retounerCarte(c25, "carte25", c52)
        retounerCarte(c26, "carte26", c52)
        retounerCarte(c27, "carte27", c52)
        retounerCarte(c28, "carte28", c52)
        retounerCarte(c29, "carte29", c52)
        retounerCarte(c30, "carte30", c52)
        retounerCarte(c31, "carte31", c52)
        retounerCarte(c32, "carte32", c52)
        retounerCarte(c33, "carte33", c52)
        retounerCarte(c34, "carte34", c52)
        retounerCarte(c35, "carte35", c52)
        retounerCarte(c36, "carte36", c52)
        retounerCarte(c37, "carte37", c52)
        retounerCarte(c38, "carte38", c52)
        retounerCarte(c39, "carte39", c52)
        retounerCarte(c40, "carte40", c52)
        retounerCarte(c41, "carte41", c52)
        retounerCarte(c42, "carte42", c52)
        retounerCarte(c43, "carte43", c52) 
        retounerCarte(c44, "carte44", c52)
        retounerCarte(c45, "carte45", c52)
        retounerCarte(c46, "carte46", c52)
        retounerCarte(c47, "carte47", c52)
        retounerCarte(c48, "carte48", c52)
        retounerCarte(c49, "carte49", c52)
        retounerCarte(c50, "carte50", c52)
        retounerCarte(c51, "carte51", c52)
        retounerCarte(c52, "carte52", c52)
        retounerCarte(c53, "carte53", c52)
        retounerCarte(c54, "carte54", c52)
        retounerCarte(c55, "carte55", c52)
        retounerCarte(c56, "carte56", c52)
        retounerCarte(c57, "carte57", c52)
        retounerCarte(c58, "carte58", c52)
        retounerCarte(c59, "carte59", c52)
        retounerCarte(c60, "carte60", c52)  
        retounerCarte(c61, "carte61", c52)
        retounerCarte(c62, "carte62", c52)
        retounerCarte(c63, "carte63", c52)
        retounerCarte(c64, "carte64", c52)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte52"
    }
})

//image27
c53.addEventListener("click",function (event){
    c53.src=("mot en anglais/me27.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte54"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte53"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c53.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c53)
        retounerCarte(c2, "carte2", c53)
        retounerCarte(c3, "carte3", c53)
        retounerCarte(c4, "carte4", c53)
        retounerCarte(c5, "carte5", c53)
        retounerCarte(c6, "carte6", c53)
        retounerCarte(c7, "carte7", c53)
        retounerCarte(c8, "carte8", c53)
        retounerCarte(c9, "carte9", c53)
        retounerCarte(c10, "carte10", c53)
        retounerCarte(c11, "carte11", c53)
        retounerCarte(c12, "carte12", c53)
        retounerCarte(c13, "carte13", c53)
        retounerCarte(c14, "carte14", c53)
        retounerCarte(c15, "carte15", c53)
        retounerCarte(c16, "carte16", c53)
        retounerCarte(c17, "carte17", c53)
        retounerCarte(c18, "carte18", c53)
        retounerCarte(c19, "carte19", c53)
        retounerCarte(c20, "carte20", c53)  
        retounerCarte(c21, "carte21", c53)
        retounerCarte(c22, "carte22", c53)
        retounerCarte(c23, "carte23", c53)
        retounerCarte(c24, "carte24", c53)
        retounerCarte(c25, "carte25", c53)
        retounerCarte(c26, "carte26", c53)
        retounerCarte(c27, "carte27", c53)
        retounerCarte(c28, "carte28", c53)
        retounerCarte(c29, "carte29", c53)
        retounerCarte(c30, "carte30", c53)
        retounerCarte(c31, "carte31", c53)
        retounerCarte(c32, "carte32", c53)
        retounerCarte(c33, "carte33", c53)
        retounerCarte(c34, "carte34", c53)
        retounerCarte(c35, "carte35", c53)
        retounerCarte(c36, "carte36", c53)
        retounerCarte(c37, "carte37", c53)
        retounerCarte(c38, "carte38", c53)
        retounerCarte(c39, "carte39", c53)
        retounerCarte(c40, "carte40", c53)  
        retounerCarte(c41, "carte41", c53)
        retounerCarte(c42, "carte42", c53)
        retounerCarte(c43, "carte43", c53)
        retounerCarte(c44, "carte44", c53)
        retounerCarte(c45, "carte45", c53)
        retounerCarte(c46, "carte46", c53)
        retounerCarte(c47, "carte47", c53)
        retounerCarte(c48, "carte48", c53)
        retounerCarte(c49, "carte49", c53)
        retounerCarte(c50, "carte50", c53)
        retounerCarte(c51, "carte51", c53)
        retounerCarte(c52, "carte52", c53)
        retounerCarte(c53, "carte53", c53)
        retounerCarte(c54, "carte54", c53)
        retounerCarte(c55, "carte55", c53)
        retounerCarte(c56, "carte56", c53)
        retounerCarte(c57, "carte57", c53)
        retounerCarte(c58, "carte58", c53)
        retounerCarte(c59, "carte59", c53)
        retounerCarte(c60, "carte60", c53)  
        retounerCarte(c61, "carte61", c53)
        retounerCarte(c62, "carte62", c53)
        retounerCarte(c63, "carte63", c53)
        retounerCarte(c64, "carte64", c53)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte53"
    }
})
c54.addEventListener("click",function (event){
    c54.src=("carte/9.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte53"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte54"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c54.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c54)
        retounerCarte(c2, "carte2", c54)
        retounerCarte(c3, "carte3", c54)
        retounerCarte(c4, "carte4", c54)
        retounerCarte(c5, "carte5", c54)
        retounerCarte(c6, "carte6", c54)
        retounerCarte(c7, "carte7", c54)
        retounerCarte(c8, "carte8", c54)
        retounerCarte(c9, "carte9", c54)
        retounerCarte(c10, "carte10", c54)
        retounerCarte(c11, "carte11", c54)
        retounerCarte(c12, "carte12", c54)
        retounerCarte(c13, "carte13", c54)
        retounerCarte(c14, "carte14", c54)
        retounerCarte(c15, "carte15", c54)
        retounerCarte(c16, "carte16", c54)
        retounerCarte(c17, "carte17", c54)
        retounerCarte(c18, "carte18", c54)
        retounerCarte(c19, "carte19", c54)
        retounerCarte(c20, "carte20", c54)  
        retounerCarte(c21, "carte21", c54)
        retounerCarte(c22, "carte22", c54)
        retounerCarte(c23, "carte23", c54)
        retounerCarte(c24, "carte24", c54)
        retounerCarte(c25, "carte25", c54)
        retounerCarte(c26, "carte26", c54)
        retounerCarte(c27, "carte27", c54)
        retounerCarte(c28, "carte28", c54)
        retounerCarte(c29, "carte29", c54)
        retounerCarte(c30, "carte30", c54)
        retounerCarte(c31, "carte31", c54)
        retounerCarte(c32, "carte32", c54)
        retounerCarte(c33, "carte33", c54)
        retounerCarte(c34, "carte34", c54)
        retounerCarte(c35, "carte35", c54)
        retounerCarte(c36, "carte36", c54)
        retounerCarte(c37, "carte37", c54)
        retounerCarte(c38, "carte38", c54)
        retounerCarte(c39, "carte39", c54)
        retounerCarte(c40, "carte40", c54)
        retounerCarte(c41, "carte41", c54)
        retounerCarte(c42, "carte42", c54)
        retounerCarte(c43, "carte43", c54) 
        retounerCarte(c44, "carte44", c54)
        retounerCarte(c45, "carte45", c54)
        retounerCarte(c46, "carte46", c54)
        retounerCarte(c47, "carte47", c54)
        retounerCarte(c48, "carte48", c54)
        retounerCarte(c49, "carte49", c54)
        retounerCarte(c50, "carte50", c54)
        retounerCarte(c51, "carte51", c54)
        retounerCarte(c52, "carte52", c54)
        retounerCarte(c53, "carte53", c54)
        retounerCarte(c54, "carte54", c54)
        retounerCarte(c55, "carte55", c54)
        retounerCarte(c56, "carte56", c54)
        retounerCarte(c57, "carte57", c54)
        retounerCarte(c58, "carte58", c54)
        retounerCarte(c59, "carte59", c54)
        retounerCarte(c60, "carte60", c54)  
        retounerCarte(c61, "carte61", c54)
        retounerCarte(c62, "carte62", c54)
        retounerCarte(c63, "carte63", c54)
        retounerCarte(c64, "carte64", c54)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte54"
    }
})

//image28
c55.addEventListener("click",function (event){
    c55.src=("mot en anglais/me28.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte56"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte55"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c55.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c55)
        retounerCarte(c2, "carte2", c55)
        retounerCarte(c3, "carte3", c55)
        retounerCarte(c4, "carte4", c55)
        retounerCarte(c5, "carte5", c55)
        retounerCarte(c6, "carte6", c55)
        retounerCarte(c7, "carte7", c55)
        retounerCarte(c8, "carte8", c55)
        retounerCarte(c9, "carte9", c55)
        retounerCarte(c10, "carte10", c55)
        retounerCarte(c11, "carte11", c55)
        retounerCarte(c12, "carte12", c55)
        retounerCarte(c13, "carte13", c55)
        retounerCarte(c14, "carte14", c55)
        retounerCarte(c15, "carte15", c55)
        retounerCarte(c16, "carte16", c55)
        retounerCarte(c17, "carte17", c55)
        retounerCarte(c18, "carte18", c55)
        retounerCarte(c19, "carte19", c55)
        retounerCarte(c20, "carte20", c55)  
        retounerCarte(c21, "carte21", c55)
        retounerCarte(c22, "carte22", c55)
        retounerCarte(c23, "carte23", c55)
        retounerCarte(c24, "carte24", c55)
        retounerCarte(c25, "carte25", c55)
        retounerCarte(c26, "carte26", c55)
        retounerCarte(c27, "carte27", c55)
        retounerCarte(c28, "carte28", c55)
        retounerCarte(c29, "carte29", c55)
        retounerCarte(c30, "carte30", c55)
        retounerCarte(c31, "carte31", c55)
        retounerCarte(c32, "carte32", c55)
        retounerCarte(c33, "carte33", c55)
        retounerCarte(c34, "carte34", c55)
        retounerCarte(c35, "carte35", c55)
        retounerCarte(c36, "carte36", c55)
        retounerCarte(c37, "carte37", c55)
        retounerCarte(c38, "carte38", c55)
        retounerCarte(c39, "carte39", c55)
        retounerCarte(c40, "carte40", c55)  
        retounerCarte(c41, "carte41", c55)
        retounerCarte(c42, "carte42", c55)
        retounerCarte(c43, "carte43", c55)
        retounerCarte(c44, "carte44", c55)
        retounerCarte(c45, "carte45", c55)
        retounerCarte(c46, "carte46", c55)
        retounerCarte(c47, "carte47", c55)
        retounerCarte(c48, "carte48", c55)
        retounerCarte(c49, "carte49", c55)
        retounerCarte(c50, "carte50", c55)
        retounerCarte(c51, "carte51", c55)
        retounerCarte(c52, "carte52", c55)
        retounerCarte(c53, "carte53", c55)
        retounerCarte(c54, "carte54", c55)
        retounerCarte(c55, "carte55", c55)
        retounerCarte(c56, "carte56", c55)
        retounerCarte(c57, "carte57", c55)
        retounerCarte(c58, "carte58", c55)
        retounerCarte(c59, "carte59", c55)
        retounerCarte(c60, "carte60", c55)  
        retounerCarte(c61, "carte61", c55)
        retounerCarte(c62, "carte62", c55)
        retounerCarte(c63, "carte63", c55)
        retounerCarte(c64, "carte64", c55)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte55"
    }
})
c56.addEventListener("click",function (event){
    c56.src=("carte/15.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte55"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte56"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c56.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c56)
        retounerCarte(c2, "carte2", c56)
        retounerCarte(c3, "carte3", c56)
        retounerCarte(c4, "carte4", c56)
        retounerCarte(c5, "carte5", c56)
        retounerCarte(c6, "carte6", c56)
        retounerCarte(c7, "carte7", c56)
        retounerCarte(c8, "carte8", c56)
        retounerCarte(c9, "carte9", c56)
        retounerCarte(c10, "carte10", c56)
        retounerCarte(c11, "carte11", c56)
        retounerCarte(c12, "carte12", c56)
        retounerCarte(c13, "carte13", c56)
        retounerCarte(c14, "carte14", c56)
        retounerCarte(c15, "carte15", c56)
        retounerCarte(c16, "carte16", c56)
        retounerCarte(c17, "carte17", c56)
        retounerCarte(c18, "carte18", c56)
        retounerCarte(c19, "carte19", c56)
        retounerCarte(c20, "carte20", c56)  
        retounerCarte(c21, "carte21", c56)
        retounerCarte(c22, "carte22", c56)
        retounerCarte(c23, "carte23", c56)
        retounerCarte(c24, "carte24", c56)
        retounerCarte(c25, "carte25", c56)
        retounerCarte(c26, "carte26", c56)
        retounerCarte(c27, "carte27", c56)
        retounerCarte(c28, "carte28", c56)
        retounerCarte(c29, "carte29", c56)
        retounerCarte(c30, "carte30", c56)
        retounerCarte(c31, "carte31", c56)
        retounerCarte(c32, "carte32", c56)
        retounerCarte(c33, "carte33", c56)
        retounerCarte(c34, "carte34", c56)
        retounerCarte(c35, "carte35", c56)
        retounerCarte(c36, "carte36", c56)
        retounerCarte(c37, "carte37", c56)
        retounerCarte(c38, "carte38", c56)
        retounerCarte(c39, "carte39", c56)
        retounerCarte(c40, "carte40", c56)
        retounerCarte(c41, "carte41", c56)
        retounerCarte(c42, "carte42", c56)
        retounerCarte(c43, "carte43", c56) 
        retounerCarte(c44, "carte44", c56)
        retounerCarte(c45, "carte45", c56)
        retounerCarte(c46, "carte46", c56)
        retounerCarte(c47, "carte47", c56)
        retounerCarte(c48, "carte48", c56)
        retounerCarte(c49, "carte49", c56)
        retounerCarte(c50, "carte50", c56)
        retounerCarte(c51, "carte51", c56)
        retounerCarte(c52, "carte52", c56)
        retounerCarte(c53, "carte53", c56)
        retounerCarte(c54, "carte54", c56)
        retounerCarte(c55, "carte55", c56)
        retounerCarte(c56, "carte56", c56)
        retounerCarte(c57, "carte57", c56)
        retounerCarte(c58, "carte58", c56)
        retounerCarte(c59, "carte59", c56)
        retounerCarte(c60, "carte60", c56)  
        retounerCarte(c61, "carte61", c56)
        retounerCarte(c62, "carte62", c56)
        retounerCarte(c63, "carte63", c56)
        retounerCarte(c64, "carte64", c56)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte56"
    }
})

//image29
c57.addEventListener("click",function (event){
    c57.src=("mot en anglais/me29.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte58"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte57"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c57.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c57)
        retounerCarte(c2, "carte2", c57)
        retounerCarte(c3, "carte3", c57)
        retounerCarte(c4, "carte4", c57)
        retounerCarte(c5, "carte5", c57)
        retounerCarte(c6, "carte6", c57)
        retounerCarte(c7, "carte7", c57)
        retounerCarte(c8, "carte8", c57)
        retounerCarte(c9, "carte9", c57)
        retounerCarte(c10, "carte10", c57)
        retounerCarte(c11, "carte11", c57)
        retounerCarte(c12, "carte12", c57)
        retounerCarte(c13, "carte13", c57)
        retounerCarte(c14, "carte14", c57)
        retounerCarte(c15, "carte15", c57)
        retounerCarte(c16, "carte16", c57)
        retounerCarte(c17, "carte17", c57)
        retounerCarte(c18, "carte18", c57)
        retounerCarte(c19, "carte19", c57)
        retounerCarte(c20, "carte20", c57)  
        retounerCarte(c21, "carte21", c57)
        retounerCarte(c22, "carte22", c57)
        retounerCarte(c23, "carte23", c57)
        retounerCarte(c24, "carte24", c57)
        retounerCarte(c25, "carte25", c57)
        retounerCarte(c26, "carte26", c57)
        retounerCarte(c27, "carte27", c57)
        retounerCarte(c28, "carte28", c57)
        retounerCarte(c29, "carte29", c57)
        retounerCarte(c30, "carte30", c57)
        retounerCarte(c31, "carte31", c57)
        retounerCarte(c32, "carte32", c57)
        retounerCarte(c33, "carte33", c57)
        retounerCarte(c34, "carte34", c57)
        retounerCarte(c35, "carte35", c57)
        retounerCarte(c36, "carte36", c57)
        retounerCarte(c37, "carte37", c57)
        retounerCarte(c38, "carte38", c57)
        retounerCarte(c39, "carte39", c57)
        retounerCarte(c40, "carte40", c57)  
        retounerCarte(c41, "carte41", c57)
        retounerCarte(c42, "carte42", c57)
        retounerCarte(c43, "carte43", c57)
        retounerCarte(c44, "carte44", c57)
        retounerCarte(c45, "carte45", c57)
        retounerCarte(c46, "carte46", c57)
        retounerCarte(c47, "carte47", c57)
        retounerCarte(c48, "carte48", c57)
        retounerCarte(c49, "carte49", c57)
        retounerCarte(c50, "carte50", c57)
        retounerCarte(c51, "carte51", c57)
        retounerCarte(c52, "carte52", c57)
        retounerCarte(c53, "carte53", c57)
        retounerCarte(c54, "carte54", c57)
        retounerCarte(c55, "carte55", c57)
        retounerCarte(c56, "carte56", c57)
        retounerCarte(c57, "carte57", c57)
        retounerCarte(c58, "carte58", c57)
        retounerCarte(c59, "carte59", c57)
        retounerCarte(c60, "carte60", c57)  
        retounerCarte(c61, "carte61", c57)
        retounerCarte(c62, "carte62", c57)
        retounerCarte(c63, "carte63", c57)
        retounerCarte(c64, "carte64", c57)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte57"
    }
})
c58.addEventListener("click",function (event){
    c58.src=("carte/21.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte57"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte58"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c58.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c58)
        retounerCarte(c2, "carte2", c58)
        retounerCarte(c3, "carte3", c58)
        retounerCarte(c4, "carte4", c58)
        retounerCarte(c5, "carte5", c58)
        retounerCarte(c6, "carte6", c58)
        retounerCarte(c7, "carte7", c58)
        retounerCarte(c8, "carte8", c58)
        retounerCarte(c9, "carte9", c58)
        retounerCarte(c10, "carte10", c58)
        retounerCarte(c11, "carte11", c58)
        retounerCarte(c12, "carte12", c58)
        retounerCarte(c13, "carte13", c58)
        retounerCarte(c14, "carte14", c58)
        retounerCarte(c15, "carte15", c58)
        retounerCarte(c16, "carte16", c58)
        retounerCarte(c17, "carte17", c58)
        retounerCarte(c18, "carte18", c58)
        retounerCarte(c19, "carte19", c58)
        retounerCarte(c20, "carte20", c58)  
        retounerCarte(c21, "carte21", c58)
        retounerCarte(c22, "carte22", c58)
        retounerCarte(c23, "carte23", c58)
        retounerCarte(c24, "carte24", c58)
        retounerCarte(c25, "carte25", c58)
        retounerCarte(c26, "carte26", c58)
        retounerCarte(c27, "carte27", c58)
        retounerCarte(c28, "carte28", c58)
        retounerCarte(c29, "carte29", c58)
        retounerCarte(c30, "carte30", c58)
        retounerCarte(c31, "carte31", c58)
        retounerCarte(c32, "carte32", c58)
        retounerCarte(c33, "carte33", c58)
        retounerCarte(c34, "carte34", c58)
        retounerCarte(c35, "carte35", c58)
        retounerCarte(c36, "carte36", c58)
        retounerCarte(c37, "carte37", c58)
        retounerCarte(c38, "carte38", c58)
        retounerCarte(c39, "carte39", c58)
        retounerCarte(c40, "carte40", c58)
        retounerCarte(c41, "carte41", c58)
        retounerCarte(c42, "carte42", c58)
        retounerCarte(c43, "carte43", c58) 
        retounerCarte(c44, "carte44", c58)
        retounerCarte(c45, "carte45", c58)
        retounerCarte(c46, "carte46", c58)
        retounerCarte(c47, "carte47", c58)
        retounerCarte(c48, "carte48", c58)
        retounerCarte(c49, "carte49", c58)
        retounerCarte(c50, "carte50", c58)
        retounerCarte(c51, "carte51", c58)
        retounerCarte(c52, "carte52", c58)
        retounerCarte(c53, "carte53", c58)
        retounerCarte(c54, "carte54", c58)
        retounerCarte(c55, "carte55", c58)
        retounerCarte(c56, "carte56", c58)
        retounerCarte(c57, "carte57", c58)
        retounerCarte(c58, "carte58", c58)
        retounerCarte(c59, "carte59", c58)
        retounerCarte(c60, "carte60", c58)  
        retounerCarte(c61, "carte61", c58)
        retounerCarte(c62, "carte62", c58)
        retounerCarte(c63, "carte63", c58)
        retounerCarte(c64, "carte64", c58)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte58"
    }
})

//image30
c59.addEventListener("click",function (event){
    c59.src=("mot en anglais/me30.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte60"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte59"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c59.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c59)
        retounerCarte(c2, "carte2", c59)
        retounerCarte(c3, "carte3", c59)
        retounerCarte(c4, "carte4", c59)
        retounerCarte(c5, "carte5", c59)
        retounerCarte(c6, "carte6", c59)
        retounerCarte(c7, "carte7", c59)
        retounerCarte(c8, "carte8", c59)
        retounerCarte(c9, "carte9", c59)
        retounerCarte(c10, "carte10", c59)
        retounerCarte(c11, "carte11", c59)
        retounerCarte(c12, "carte12", c59)
        retounerCarte(c13, "carte13", c59)
        retounerCarte(c14, "carte14", c59)
        retounerCarte(c15, "carte15", c59)
        retounerCarte(c16, "carte16", c59)
        retounerCarte(c17, "carte17", c59)
        retounerCarte(c18, "carte18", c59)
        retounerCarte(c19, "carte19", c59)
        retounerCarte(c20, "carte20", c59)  
        retounerCarte(c21, "carte21", c59)
        retounerCarte(c22, "carte22", c59)
        retounerCarte(c23, "carte23", c59)
        retounerCarte(c24, "carte24", c59)
        retounerCarte(c25, "carte25", c59)
        retounerCarte(c26, "carte26", c59)
        retounerCarte(c27, "carte27", c59)
        retounerCarte(c28, "carte28", c59)
        retounerCarte(c29, "carte29", c59)
        retounerCarte(c30, "carte30", c59)
        retounerCarte(c31, "carte31", c59)
        retounerCarte(c32, "carte32", c59)
        retounerCarte(c33, "carte33", c59)
        retounerCarte(c34, "carte34", c59)
        retounerCarte(c35, "carte35", c59)
        retounerCarte(c36, "carte36", c59)
        retounerCarte(c37, "carte37", c59)
        retounerCarte(c38, "carte38", c59)
        retounerCarte(c39, "carte39", c59)
        retounerCarte(c40, "carte40", c59)  
        retounerCarte(c41, "carte41", c59)
        retounerCarte(c42, "carte42", c59)
        retounerCarte(c43, "carte43", c59)
        retounerCarte(c44, "carte44", c59)
        retounerCarte(c45, "carte45", c59)
        retounerCarte(c46, "carte46", c59)
        retounerCarte(c47, "carte47", c59)
        retounerCarte(c48, "carte48", c59)
        retounerCarte(c49, "carte49", c59)
        retounerCarte(c50, "carte50", c59)
        retounerCarte(c51, "carte51", c59)
        retounerCarte(c52, "carte52", c59)
        retounerCarte(c53, "carte53", c59)
        retounerCarte(c54, "carte54", c59)
        retounerCarte(c55, "carte55", c59)
        retounerCarte(c56, "carte56", c59)
        retounerCarte(c57, "carte57", c59)
        retounerCarte(c58, "carte58", c59)
        retounerCarte(c59, "carte59", c59)
        retounerCarte(c60, "carte60", c59)  
        retounerCarte(c61, "carte61", c59)
        retounerCarte(c62, "carte62", c59)
        retounerCarte(c63, "carte63", c59)
        retounerCarte(c64, "carte64", c59)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte59"
    }
})
c60.addEventListener("click",function (event){
    c60.src=("carte/27.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte59"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte60"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c60.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c60)
        retounerCarte(c2, "carte2", c60)
        retounerCarte(c3, "carte3", c60)
        retounerCarte(c4, "carte4", c60)
        retounerCarte(c5, "carte5", c60)
        retounerCarte(c6, "carte6", c60)
        retounerCarte(c7, "carte7", c60)
        retounerCarte(c8, "carte8", c60)
        retounerCarte(c9, "carte9", c60)
        retounerCarte(c10, "carte10", c60)
        retounerCarte(c11, "carte11", c60)
        retounerCarte(c12, "carte12", c60)
        retounerCarte(c13, "carte13", c60)
        retounerCarte(c14, "carte14", c60)
        retounerCarte(c15, "carte15", c60)
        retounerCarte(c16, "carte16", c60)
        retounerCarte(c17, "carte17", c60)
        retounerCarte(c18, "carte18", c60)
        retounerCarte(c19, "carte19", c60)
        retounerCarte(c20, "carte20", c60)  
        retounerCarte(c21, "carte21", c60)
        retounerCarte(c22, "carte22", c60)
        retounerCarte(c23, "carte23", c60)
        retounerCarte(c24, "carte24", c60)
        retounerCarte(c25, "carte25", c60)
        retounerCarte(c26, "carte26", c60)
        retounerCarte(c27, "carte27", c60)
        retounerCarte(c28, "carte28", c60)
        retounerCarte(c29, "carte29", c60)
        retounerCarte(c30, "carte30", c60)
        retounerCarte(c31, "carte31", c60)
        retounerCarte(c32, "carte32", c60)
        retounerCarte(c33, "carte33", c60)
        retounerCarte(c34, "carte34", c60)
        retounerCarte(c35, "carte35", c60)
        retounerCarte(c36, "carte36", c60)
        retounerCarte(c37, "carte37", c60)
        retounerCarte(c38, "carte38", c60)
        retounerCarte(c39, "carte39", c60)
        retounerCarte(c40, "carte40", c60)
        retounerCarte(c41, "carte41", c60)
        retounerCarte(c42, "carte42", c60)
        retounerCarte(c43, "carte43", c60) 
        retounerCarte(c44, "carte44", c60)
        retounerCarte(c45, "carte45", c60)
        retounerCarte(c46, "carte46", c60)
        retounerCarte(c47, "carte47", c60)
        retounerCarte(c48, "carte48", c60)
        retounerCarte(c49, "carte49", c60)
        retounerCarte(c50, "carte50", c60)
        retounerCarte(c51, "carte51", c60)
        retounerCarte(c52, "carte52", c60)
        retounerCarte(c53, "carte53", c60)
        retounerCarte(c54, "carte54", c60)
        retounerCarte(c55, "carte55", c60)
        retounerCarte(c56, "carte56", c60)
        retounerCarte(c57, "carte57", c60)
        retounerCarte(c58, "carte58", c60)
        retounerCarte(c59, "carte59", c60)
        retounerCarte(c60, "carte60", c60)  
        retounerCarte(c61, "carte61", c60)
        retounerCarte(c62, "carte62", c60)
        retounerCarte(c63, "carte63", c60)
        retounerCarte(c64, "carte64", c60)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte60"
    }
})

//image31
c61.addEventListener("click",function (event){
    c61.src=("mot en anglais/me31.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte62"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte61"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c61.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c61)
        retounerCarte(c2, "carte2", c61)
        retounerCarte(c3, "carte3", c61)
        retounerCarte(c4, "carte4", c61)
        retounerCarte(c5, "carte5", c61)
        retounerCarte(c6, "carte6", c61)
        retounerCarte(c7, "carte7", c61)
        retounerCarte(c8, "carte8", c61)
        retounerCarte(c9, "carte9", c61)
        retounerCarte(c10, "carte10", c61)
        retounerCarte(c11, "carte11", c61)
        retounerCarte(c12, "carte12", c61)
        retounerCarte(c13, "carte13", c61)
        retounerCarte(c14, "carte14", c61)
        retounerCarte(c15, "carte15", c61)
        retounerCarte(c16, "carte16", c61)
        retounerCarte(c17, "carte17", c61)
        retounerCarte(c18, "carte18", c61)
        retounerCarte(c19, "carte19", c61)
        retounerCarte(c20, "carte20", c61)  
        retounerCarte(c21, "carte21", c61)
        retounerCarte(c22, "carte22", c61)
        retounerCarte(c23, "carte23", c61)
        retounerCarte(c24, "carte24", c61)
        retounerCarte(c25, "carte25", c61)
        retounerCarte(c26, "carte26", c61)
        retounerCarte(c27, "carte27", c61)
        retounerCarte(c28, "carte28", c61)
        retounerCarte(c29, "carte29", c61)
        retounerCarte(c30, "carte30", c61)
        retounerCarte(c31, "carte31", c61)
        retounerCarte(c32, "carte32", c61)
        retounerCarte(c33, "carte33", c61)
        retounerCarte(c34, "carte34", c61)
        retounerCarte(c35, "carte35", c61)
        retounerCarte(c36, "carte36", c61)
        retounerCarte(c37, "carte37", c61)
        retounerCarte(c38, "carte38", c61)
        retounerCarte(c39, "carte39", c61)
        retounerCarte(c40, "carte40", c61)  
        retounerCarte(c41, "carte41", c61)
        retounerCarte(c42, "carte42", c61)
        retounerCarte(c43, "carte43", c61)
        retounerCarte(c44, "carte44", c61)
        retounerCarte(c45, "carte45", c61)
        retounerCarte(c46, "carte46", c61)
        retounerCarte(c47, "carte47", c61)
        retounerCarte(c48, "carte48", c61)
        retounerCarte(c49, "carte49", c61)
        retounerCarte(c50, "carte50", c61)
        retounerCarte(c51, "carte51", c61)
        retounerCarte(c52, "carte52", c61)
        retounerCarte(c53, "carte53", c61)
        retounerCarte(c54, "carte54", c61)
        retounerCarte(c55, "carte55", c61)
        retounerCarte(c56, "carte56", c61)
        retounerCarte(c57, "carte57", c61)
        retounerCarte(c58, "carte58", c61)
        retounerCarte(c59, "carte59", c61)
        retounerCarte(c60, "carte60", c61)  
        retounerCarte(c61, "carte61", c61)
        retounerCarte(c62, "carte62", c61)
        retounerCarte(c63, "carte63", c61)
        retounerCarte(c64, "carte64", c61)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte61"
    }
})
c62.addEventListener("click",function (event){
    c62.src=("carte/33.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte61"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte62"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c62.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c62)
        retounerCarte(c2, "carte2", c62)
        retounerCarte(c3, "carte3", c62)
        retounerCarte(c4, "carte4", c62)
        retounerCarte(c5, "carte5", c62)
        retounerCarte(c6, "carte6", c62)
        retounerCarte(c7, "carte7", c62)
        retounerCarte(c8, "carte8", c62)
        retounerCarte(c9, "carte9", c62)
        retounerCarte(c10, "carte10", c62)
        retounerCarte(c11, "carte11", c62)
        retounerCarte(c12, "carte12", c62)
        retounerCarte(c13, "carte13", c62)
        retounerCarte(c14, "carte14", c62)
        retounerCarte(c15, "carte15", c62)
        retounerCarte(c16, "carte16", c62)
        retounerCarte(c17, "carte17", c62)
        retounerCarte(c18, "carte18", c62)
        retounerCarte(c19, "carte19", c62)
        retounerCarte(c20, "carte20", c62)  
        retounerCarte(c21, "carte21", c62)
        retounerCarte(c22, "carte22", c62)
        retounerCarte(c23, "carte23", c62)
        retounerCarte(c24, "carte24", c62)
        retounerCarte(c25, "carte25", c62)
        retounerCarte(c26, "carte26", c62)
        retounerCarte(c27, "carte27", c62)
        retounerCarte(c28, "carte28", c62)
        retounerCarte(c29, "carte29", c62)
        retounerCarte(c30, "carte30", c62)
        retounerCarte(c31, "carte31", c62)
        retounerCarte(c32, "carte32", c62)
        retounerCarte(c33, "carte33", c62)
        retounerCarte(c34, "carte34", c62)
        retounerCarte(c35, "carte35", c62)
        retounerCarte(c36, "carte36", c62)
        retounerCarte(c37, "carte37", c62)
        retounerCarte(c38, "carte38", c62)
        retounerCarte(c39, "carte39", c62)
        retounerCarte(c40, "carte40", c62)
        retounerCarte(c41, "carte41", c62)
        retounerCarte(c42, "carte42", c62)
        retounerCarte(c43, "carte43", c62) 
        retounerCarte(c44, "carte44", c62)
        retounerCarte(c45, "carte45", c62)
        retounerCarte(c46, "carte46", c62)
        retounerCarte(c47, "carte47", c62)
        retounerCarte(c48, "carte48", c62)
        retounerCarte(c49, "carte49", c62)
        retounerCarte(c50, "carte50", c62)
        retounerCarte(c51, "carte51", c62)
        retounerCarte(c52, "carte52", c62)
        retounerCarte(c53, "carte53", c62)
        retounerCarte(c54, "carte54", c62)
        retounerCarte(c55, "carte55", c62)
        retounerCarte(c56, "carte56", c62)
        retounerCarte(c57, "carte57", c62)
        retounerCarte(c58, "carte58", c62)
        retounerCarte(c59, "carte59", c62)
        retounerCarte(c60, "carte60", c62)  
        retounerCarte(c61, "carte61", c62)
        retounerCarte(c62, "carte62", c62)
        retounerCarte(c63, "carte63", c62)
        retounerCarte(c64, "carte64", c62)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte62"
    }
})

//image32
c63.addEventListener("click",function (event){
    c63.src=("mot en anglais/me32.png")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte64"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte63"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c63.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c63)
        retounerCarte(c2, "carte2", c63)
        retounerCarte(c3, "carte3", c63)
        retounerCarte(c4, "carte4", c63)
        retounerCarte(c5, "carte5", c63)
        retounerCarte(c6, "carte6", c63)
        retounerCarte(c7, "carte7", c63)
        retounerCarte(c8, "carte8", c63)
        retounerCarte(c9, "carte9", c63)
        retounerCarte(c10, "carte10", c63)
        retounerCarte(c11, "carte11", c63)
        retounerCarte(c12, "carte12", c63)
        retounerCarte(c13, "carte13", c63)
        retounerCarte(c14, "carte14", c63)
        retounerCarte(c15, "carte15", c63)
        retounerCarte(c16, "carte16", c63)
        retounerCarte(c17, "carte17", c63)
        retounerCarte(c18, "carte18", c63)
        retounerCarte(c19, "carte19", c63)
        retounerCarte(c20, "carte20", c63)  
        retounerCarte(c21, "carte21", c63)
        retounerCarte(c22, "carte22", c63)
        retounerCarte(c23, "carte23", c63)
        retounerCarte(c24, "carte24", c63)
        retounerCarte(c25, "carte25", c63)
        retounerCarte(c26, "carte26", c63)
        retounerCarte(c27, "carte27", c63)
        retounerCarte(c28, "carte28", c63)
        retounerCarte(c29, "carte29", c63)
        retounerCarte(c30, "carte30", c63)
        retounerCarte(c31, "carte31", c63)
        retounerCarte(c32, "carte32", c63)
        retounerCarte(c33, "carte33", c63)
        retounerCarte(c34, "carte34", c63)
        retounerCarte(c35, "carte35", c63)
        retounerCarte(c36, "carte36", c63)
        retounerCarte(c37, "carte37", c63)
        retounerCarte(c38, "carte38", c63)
        retounerCarte(c39, "carte39", c63)
        retounerCarte(c40, "carte40", c63)  
        retounerCarte(c41, "carte41", c63)
        retounerCarte(c42, "carte42", c63)
        retounerCarte(c43, "carte43", c63)
        retounerCarte(c44, "carte44", c63)
        retounerCarte(c45, "carte45", c63)
        retounerCarte(c46, "carte46", c63)
        retounerCarte(c47, "carte47", c63)
        retounerCarte(c48, "carte48", c63)
        retounerCarte(c49, "carte49", c63)
        retounerCarte(c50, "carte50", c63)
        retounerCarte(c51, "carte51", c63)
        retounerCarte(c52, "carte52", c63)
        retounerCarte(c53, "carte53", c63)
        retounerCarte(c54, "carte54", c63)
        retounerCarte(c55, "carte55", c63)
        retounerCarte(c56, "carte56", c63)
        retounerCarte(c57, "carte57", c63)
        retounerCarte(c58, "carte58", c63)
        retounerCarte(c59, "carte59", c63)
        retounerCarte(c60, "carte60", c63)  
        retounerCarte(c61, "carte61", c63)
        retounerCarte(c62, "carte62", c63)
        retounerCarte(c63, "carte63", c63)
        retounerCarte(c64, "carte64", c63)           
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte63"
    }
})
c64.addEventListener("click",function (event){
    c64.src=("carte/18.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte63"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 32){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte64"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c64.src = "imageDosCarte/DosCarte.jpg"
        }, 1500);
    } else {
        retounerCarte(c1, "carte1", c64)
        retounerCarte(c2, "carte2", c64)
        retounerCarte(c3, "carte3", c64)
        retounerCarte(c4, "carte4", c64)
        retounerCarte(c5, "carte5", c64)
        retounerCarte(c6, "carte6", c64)
        retounerCarte(c7, "carte7", c64)
        retounerCarte(c8, "carte8", c64)
        retounerCarte(c9, "carte9", c64)
        retounerCarte(c10, "carte10", c64)
        retounerCarte(c11, "carte11", c64)
        retounerCarte(c12, "carte12", c64)
        retounerCarte(c13, "carte13", c64)
        retounerCarte(c14, "carte14", c64)
        retounerCarte(c15, "carte15", c64)
        retounerCarte(c16, "carte16", c64)
        retounerCarte(c17, "carte17", c64)
        retounerCarte(c18, "carte18", c64)
        retounerCarte(c19, "carte19", c64)
        retounerCarte(c20, "carte20", c64)  
        retounerCarte(c21, "carte21", c64)
        retounerCarte(c22, "carte22", c64)
        retounerCarte(c23, "carte23", c64)
        retounerCarte(c24, "carte24", c64)
        retounerCarte(c25, "carte25", c64)
        retounerCarte(c26, "carte26", c64)
        retounerCarte(c27, "carte27", c64)
        retounerCarte(c28, "carte28", c64)
        retounerCarte(c29, "carte29", c64)
        retounerCarte(c30, "carte30", c64)
        retounerCarte(c31, "carte31", c64)
        retounerCarte(c32, "carte32", c64)
        retounerCarte(c33, "carte33", c64)
        retounerCarte(c34, "carte34", c64)
        retounerCarte(c35, "carte35", c64)
        retounerCarte(c36, "carte36", c64)
        retounerCarte(c37, "carte37", c64)
        retounerCarte(c38, "carte38", c64)
        retounerCarte(c39, "carte39", c64)
        retounerCarte(c40, "carte40", c64)
        retounerCarte(c41, "carte41", c64)
        retounerCarte(c42, "carte42", c64)
        retounerCarte(c43, "carte43", c64) 
        retounerCarte(c44, "carte44", c64)
        retounerCarte(c45, "carte45", c64)
        retounerCarte(c46, "carte46", c64)
        retounerCarte(c47, "carte47", c64)
        retounerCarte(c48, "carte48", c64)
        retounerCarte(c49, "carte49", c64)
        retounerCarte(c50, "carte50", c64)
        retounerCarte(c51, "carte51", c64)
        retounerCarte(c52, "carte52", c64)
        retounerCarte(c53, "carte53", c64)
        retounerCarte(c54, "carte54", c64)
        retounerCarte(c55, "carte55", c64)
        retounerCarte(c56, "carte56", c64)
        retounerCarte(c57, "carte57", c64)
        retounerCarte(c58, "carte58", c64)
        retounerCarte(c59, "carte59", c64)
        retounerCarte(c60, "carte60", c64)  
        retounerCarte(c61, "carte61", c64)
        retounerCarte(c62, "carte62", c64)
        retounerCarte(c63, "carte63", c64)
        retounerCarte(c64, "carte64", c64)             
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte64"
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
        }, 500);
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
    c41.src = "imageDosCarte/DosCarte.jpg"
    c42.src = "imageDosCarte/DosCarte.jpg"
    c43.src = "imageDosCarte/DosCarte.jpg"
    c44.src = "imageDosCarte/DosCarte.jpg"
    c45.src = "imageDosCarte/DosCarte.jpg"
    c46.src = "imageDosCarte/DosCarte.jpg"
    c47.src = "imageDosCarte/DosCarte.jpg"
    c48.src = "imageDosCarte/DosCarte.jpg"
    c49.src = "imageDosCarte/DosCarte.jpg"
    c50.src = "imageDosCarte/DosCarte.jpg"
    c51.src = "imageDosCarte/DosCarte.jpg"
    c52.src = "imageDosCarte/DosCarte.jpg"
    c53.src = "imageDosCarte/DosCarte.jpg"
    c54.src = "imageDosCarte/DosCarte.jpg"
    c55.src = "imageDosCarte/DosCarte.jpg"
    c56.src = "imageDosCarte/DosCarte.jpg"
    c57.src = "imageDosCarte/DosCarte.jpg"
    c58.src = "imageDosCarte/DosCarte.jpg"
    c59.src = "imageDosCarte/DosCarte.jpg"
    c60.src = "imageDosCarte/DosCarte.jpg"
    c61.src = "imageDosCarte/DosCarte.jpg"
    c62.src = "imageDosCarte/DosCarte.jpg"
    c63.src = "imageDosCarte/DosCarte.jpg"
    c64.src = "imageDosCarte/DosCarte.jpg"
})