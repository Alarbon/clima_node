const fs = require("fs");
const axios = require("axios");

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    this.leerDB();
  }

  get historialCapitalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));
      return palabras.join(" ");
    });
  }
  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  get paramsOpenWeather() {
    return {
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
      lang: "es",
    };
  }
  async ciudad(lugar = "") {
    // peticion http
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });

      const resp = await instance.get();

      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async climaLugar(lat, lon) {
    try {
      // instance axios.create()
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsOpenWeather, lat, lon },
      });
      // resp.data
      const resp = await instance.get();
      const { weather, main } = resp.data;
      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp,
      };
    } catch (error) {}
  }

  agregarHistorial(lugar = "") {
    if (this.historial.includes(lugar.toLocaleLowerCase())) {
      return; //si existe no lo agrega
    }
    //limito el historial a 5
    this.historial = this.historial.splice(0, 5);
    //agrego el lugar al inicio del array
    this.historial.unshift(lugar.toLocaleLowerCase());

    // Grabar en DB
    this.guardarDB();
  }

  guardarDB() {
    //creo el objeto que voy a guardar en el archivo
    const payload = {
      historia: this.historial,
    };//guardo el objeto en el archivo
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerDB() {
    // Debe de existir...
    if (!fs.existsSync(this.dbPath)) return;

    // Leer el archivo
    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
    const data = JSON.parse(info);//guardo el historial en el array

    this.historial = data.historia;
  }
}
module.exports = Busquedas;
