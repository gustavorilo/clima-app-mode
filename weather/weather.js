const axios = require('axios')

const getWeather = async (lat, lng) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=18a9a6a939d678a017255743e64516ce`
    })

    const resp = await instance.get()
    
    if( resp.data.main.temp.length === 0 ) {
        throw new Error(`No hay resultados para ${lat} / ${lng}`)
    }

    const temp = resp.data.main.temp
    
    return {
        temp
    }
}

module.exports = {
    getWeather
}