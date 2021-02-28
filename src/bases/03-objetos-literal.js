const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 2323123,
        lat: 12,
        lng: 14,

    }
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre='Peter';

console.log(persona);
console.log(persona2);