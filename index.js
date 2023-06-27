const { log } = require('node:console');
const { randomBytes, createHash } = require('node:crypto')
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ANSWER_LENGTH = 6
const SALT_LENGTH = 16

// app.post('/challenges', (req, res, next) => {
 
//     // si y'a trop de challenge
//     if (Object.keys(challenges) >= MAX_CHALLENGES){
//         res.status(403).json('too many challenges, please come back later.')
//         return
//     }

//     //

//     // on va générer 22 bytes
 
//     randomBytes(ANSWER_LENGTH + SALT_LENGTH, (err, bytes) => {
 
//         // si probleme dans la génération de nos bytes
//         if (err){
//             res.status(500).end()
//             return
//         }
        

//         const password = Array.from(bytes.subarray(0, 6))
//         // il récupère 6 lettres de l'alphabet
//             .map(byte => ALPHABET[byte % ALPHABET.length])
//             // on a un string aléatoire de 6 lettres.
//             .join('')
 
//             // on a un tableau typé de 16 bytes
//         const salt = bytes.subarray(6)
 

//         const hash = createHash('sha256')
//             .update(Buffer.concat([salt, Buffer.from(password, 'utf-8')]))
//             .digest()
        
//         const challenge = {
//             id: uuid(),
//             expiresAt: Date.now() + CHALLENGE_EXPIRES_AFTER_MS,
//             password,
//             hash,
//             salt
//         }
 
//         challenges[challenge.id] = challenge
        
//         console.log(`new challenge generated from ${req.ip}: ${challengeToString(challenge)}`)
        
//         res.status(201)
//             .json(challengeToDto(challenge))
//     })
// })



 
// function challengeToDto(challenge){
//     return {
//         id: challenge.id,
//         hash: challenge.hash.toString('hex'),
//         salt: challenge.salt.toString('hex'),
//         expiresAt: challenge.expiresAt
//     }
// }



// const hash = createHash('sha256')
//             .update(Buffer.from("salut78", 'utf-8'))
//             .digest()


//         let byte1;
        
//         randomBytes(16, (err, bytes) => {
//                    console.log(bytes)
          
//             byte1 = bytes.toString('hex') ;
//             console.log(byte1);
//             console.log(Buffer.from(byte1, "hex"));
        
//         });

         
               
       
// console.log(hash.toString('hex'));

// ec9c3a34e791bda21bbcb69ea0eb875857497e0d48c75771b3d1adb5073ce791


// fait un mot de passe avec 6 lettres aléatoires


// salt : tableau typé de 16 bytes toString('hex')


// hash : retourné sous forme hexadecimal hashage de Buffer mot de passe .concat Buffer de salt

// let buf1 = Buffer.from("salut79", 'utf-8');
// console.log(buf1)

// let buf2= Buffer.from("toto", 'utf-8');
// console.log(buf2.toString())

// let conc = Buffer.concat([buf1, buf2]);
// console.log(conc);






