const { createHash } = require('crypto');

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}


fetch('https://shallenge.onrender.com/challenges', {
    method : "POST",
    headers : {"Content-Type" : "application/json"},
})
.then(response => response.json())
.then((data) => {
// pour trouver le salt buffer

// console.log(Buffer.from(monsalt, "hex"));

// pour trouver le mot de passe
// utiliser 6 lettres abcdef... , les Buffer, concatener avec salt buffer les hasher, comparer au hash
console.log(data)
let salt = data.salt;
let theHash = data.hash;
console.log(salt)
console.log(theHash)
let bufferSalt = Buffer.from(salt, 'hex');


//boucle avec 6 carac --> Buffer --> concat avec le salt --> hash --> compare
let alphabet = "abdcefghijklmnopqrstuvwxyz";
for(let a=0; a < 26; a++){
    for(let b=0; b < 26; b++){
        for(let c=0; c < 26; c++){
            for(let d=0; d < 26; d++){
                for(let e=0; e < 26; e++){
                    for(let f=0; f < 26; f++){

                        if(hash(Buffer.concat([bufferSalt, Buffer.from(`${alphabet[a]}${alphabet[b]}${alphabet[c]}${alphabet[d]}${alphabet[e]}${alphabet[f]}`, 'utf-8')]) ) === theHash){
                            console.log(`${alphabet[a]}${alphabet[b]}${alphabet[c]}${alphabet[d]}${alphabet[e]}${alphabet[f]}`)
                            
                            fetch(`https://shallenge.onrender.com/challenges/${data.id}/answer`, {
                                method : "POST",
                                headers : {"Content-Type" : "application/json"},
                                body : JSON.stringify(`${alphabet[a]}${alphabet[b]}${alphabet[c]}${alphabet[d]}${alphabet[e]}${alphabet[f]}`)
                            })
                            .then(res =>  res.json())
                            .then(data => console.log(data))
                            
                            ;
                            return "ok";
                        }
                        
                    
                    }
                }
            }  
        }
    }
}
})



