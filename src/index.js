import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
        
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         //reject('No se pudo encontrar el héroe');
//     }, 2000)

// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err=>console.warn(err));

const getHeroeByAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            
            const p1 = getHeroeById(id);
            resolve(p1);
            //reject('No se pudo encontrar el héroe');
        }, 2000)
    
    });

    
}

getHeroeByAsync(4)
    .then(heroe => console.log('Heroe',heroe))