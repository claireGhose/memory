 // créer une page d'accueil avec des différents 2 options : normal memory ou english memory
// faire des niveaux dans ces deux options (entre 12 et 50 cartes)
// pour un joueur seul il faudra mettre un chronomètre
// mettre un jeu avec les images et les mots en anglais à trouvé
// faire un niveau avec les images contenant les mots en anglais

//<img class= "picture1" src="imgindex.png"></img>



/*----- constants -----*/
/*----- app's state (variables) -----*/

let ResetBtn= document.getElementById("reset")

let dernierClick= ""

let gagnepoint= 0




/*----- references des elements DOM -----*/
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const c9 = document.getElementById("c9")
const c10 = document.getElementById("c10")
const c11 = document.getElementById("c11")
const c12 = document.getElementById("c12")
const c13 = document.getElementById("c13")
const c14 = document.getElementById("c14")
const c15 = document.getElementById("c15")
const c16 = document.getElementById("c16")
const c17 = document.getElementById("c17")
const c18 = document.getElementById("c18")
const c19 = document.getElementById("c19")
const c20 = document.getElementById("c20")


/*----- event listeners -----*/
//image1
c1.addEventListener("click",function (event){
    c1.src="carte/1.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()

    if (dernierClick == "carte15"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
        }
    } else if (dernierClick== "carte1"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c1.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte1"
    }
})
c15.addEventListener("click",function (event){
    c15.src="carte/1.jpg"
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte1"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
        }
    } else if (dernierClick== "carte15"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c15.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte15"
    }
})
//image2
c2.addEventListener("click",function (event){
    c2.src=("carte/2.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte9"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
        }
    } else if (dernierClick== "carte2"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c2.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte2"
    }
})
c9.addEventListener("click",function (event){
    c9.src=("carte/2.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte2"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
        }
    } else if (dernierClick== "carte9"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c9.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte9"
    }
})

//image3
c3.addEventListener("click",function (event){
    c3.src=("carte/3.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte14"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
        }
    } else if (dernierClick== "carte3"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c3.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte3"
    }
})
c14.addEventListener("click",function (event){
    c14.src=("carte/3.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte3"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte14"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c14.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
        retounerCarte(c15, "carte615", c14)
        retounerCarte(c16, "carte16", c14)
        retounerCarte(c17, "carte17", c14)
        retounerCarte(c18, "carte18", c14)
        retounerCarte(c19, "carte19", c14)
        retounerCarte(c20, "carte20", c14)        
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte14"
    }
})

//image4
c4.addEventListener("click",function (event){
    c4.src=("carte/4.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte19"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte4"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c4.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte4"
    }
})
c19.addEventListener("click",function (event){
    c19.src=("carte/4.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte4"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte19"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c19.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte19"
    }
})

//image5
c5.addEventListener("click",function (event){
    c5.src=("carte/5.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte18"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte5"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c5.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte5"
    }
})
c18.addEventListener("click",function (event){
    c18.src=("carte/5.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte5"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte18"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c18.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte18"
    }
})

//image6
c6.addEventListener("click",function (event){
    c6.src=("carte/6.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte8"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte6"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c6.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte6"
    }
})
c8.addEventListener("click",function (event){
    c8.src=("carte/6.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte6"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte8"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c8.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte8"
    }
})

//image7
c7.addEventListener("click",function (event){
    c7.src=("carte/7.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte13"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte7"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c7.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte7"
    }
})
c13.addEventListener("click",function (event){
    c13.src=("carte/7.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte7"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte13"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c13.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte13"
    }
})

//image8
c10.addEventListener("click",function (event){
    c10.src=("carte/8.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte16"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte10"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c10.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte10"
    }
})
c16.addEventListener("click",function (event){
    c16.src=("carte/8.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte10"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte16"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c16.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte16"
    }
})

//image9
c11.addEventListener("click",function (event){
    c11.src=("carte/9.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte20"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte11"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c11.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte9"
    }
})
c20.addEventListener("click",function (event){
    c20.src=("carte/9.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte9"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte20"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c20.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte20"
    }
})

//image10
c12.addEventListener("click",function (event){
    c12.src=("carte/10.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte17"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte12"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c12.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte12"
    }
})
c17.addEventListener("click",function (event){
    c17.src=("carte/10.jpg")
    const player = new Audio('musique/flipcard.wav');
    player.play()
    if (dernierClick == "carte12"){
        const player = new Audio('musique/winmatch.wav');
        player.play()
        gagnepoint +=1
        if (gagnepoint == 10){
            confetti.start()
            const player = new Audio('musique/finalwin.wav');
            player.play()
        }
    } else if (dernierClick== "carte17"){
        
        const player = new Audio('musique/flipcard.wav');
        player.play()
        setTimeout(function() {
            c17.src = "imageDosCarte/DosCarte.jpg"
        }, 1000);
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
    }
    if (dernierClick) {
        dernierClick = ""
    } else {
        dernierClick="carte17"
    }
})





/*----- functions -----*/

// retourner les cartes qd ce ne sont pas les mêmes
function retounerCarte(carteDOM, carteNuméro, carteDOM2){
    console.log("dernier click:", dernierClick)

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
        }, 1600);
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
})