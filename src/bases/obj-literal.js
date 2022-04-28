const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion: {
        ciudad:'Veracruz',
        zip:1234432,
        lat:1.54,
        lng:452.34,
    }
};
const persona2 = {...persona};
persona2.nombre = 'Edwin';
console.log(persona2);

console.log(persona);