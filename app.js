const location  = require('./location/location')
const weather   = require('./weather/weather')

const argv  = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv

/*
location.getLocationLatLong(argv.direccion)
    .then(res => {

        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })  

weather.getWeather(40.750000, -74.000000)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })  
*/

const getInfo = async ( direccion ) => {

    try {
        const objCoord  = await location.getLocationLatLong(direccion)
        const objTemp   = await weather.getWeather(objCoord.lat, objCoord.lng)

        return `El clima de ${direccion} es de ${objTemp.temp}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}  

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

