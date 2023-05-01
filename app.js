let chiffreMagique;
const chanceTxt =document.querySelector('.chance');
const resultat = document.querySelector('.resultat');
const diff = document.querySelector('.diff');
let chance;
let score;
let cond = false;
chiffreMagique = Math.random() * 11 << 0;
chance = 3;


chanceTxt.innerHTML = `Tu as 3 chance`

function utilisateur(){ 
    if(cond == false)
    {
    chance--;
    cond = true;
    }
    score = document.querySelector('.input').value;
    if(score == ""){
        diff.innerHTML = 'Veuillez rentrez un chiffre valide'
    }
    else if(score <  0 || score > 10){
        diff.innerHTML = 'Veuillez rentrez un chiffre compris entre 0 et 10 compris'
         
    }
    else{
        if(chance > 0 || chiffreMagique == score)
        {
            console.log(chance)
            if(score > chiffreMagique ){
                diff.innerHTML = 'Le chiffre magique est plus petit'
                chance--;
            }
            else if(score < chiffreMagique){
                diff.innerHTML = 'Le chiffre magique est plus grand'
                chance--;
            }
            else if(chiffreMagique == score){
                resultat.innerHTML = 'Gagné !'
                diff.innerHTML = `Bien Joué ! Le chiffre magique était : ${chiffreMagique} `
                
            }
            else{
                chance--;
                resultat.innerHTML = 'Perdu !'
                 
            }
            chanceTxt.innerHTML = `il ne te reste que ${chance + 1} chance`    
        }
        else{
            chanceTxt.innerHTML = `Tu n'as plus de de chance`
            resultat.innerHTML = 'Perdu !' 
            diff.innerHTML = `Dommage ! Le chiffre magique était : ${chiffreMagique} `
        }
    }
    
}

