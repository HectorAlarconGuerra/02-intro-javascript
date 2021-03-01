//import {heroes} from './data/heroes';
//imp esnipet
//import {heroes} from './data/heroes'
//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';


//console.log(owners);



// const getHeroeById = (id) => {
//   return heroes.find(heroe => {
//       if(heroe.id === id){
//           return true;
//       }else{
//           return false;
//       }
//   });
// }

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

// find?, filter

// function getHeroeByOwner(owner) {
//     return heroes.filter(function(el) {
//         return el.owner === owner;
//     })
// }

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);



//console.log(getHeroeByOwner('Marvel'));