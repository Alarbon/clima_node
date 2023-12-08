require("dotenv").config();
const {
  leerInput,
  inquirerMenu,
  pausa,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt;
  const busquedas = new Busquedas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const termino = await leerInput("Introduzca la ciudad: ");

        // Buscar los lugares
        const lugares = await busquedas.ciudad(termino);

        // Seleccionar el lugar
        const idSeleccionado = await listarLugares(lugares);
        if (idSeleccionado === "0") continue;

        const lugarSeleccionado = lugares.find((l) => l.id === idSeleccionado);

        // Guardar en DB
        busquedas.agregarHistorial(lugarSeleccionado.nombre);

        // Clima
        const clima = await busquedas.climaLugar(
          lugarSeleccionado.lat,
          lugarSeleccionado.lng
        );
        // Mostrar resultados
        console.log("\nInformación de la ciudad\n".green);
        console.log(
          "========================================================".green
        );
        console.log("Ciudad:", lugarSeleccionado.nombre.green);
        console.log("Latitud:", lugarSeleccionado.lat);
        console.log("Longitud:", lugarSeleccionado.lng);
        console.log("Temperatura:", clima.temp, "°C".yellow);
        console.log("Mínima:", clima.min, "°C.".yellow);
        console.log("Máxima:", clima.max, "°C".yellow);
        console.log("Como está el clima:", clima.desc.green);
        console.log(
          "========================================================".green
        );
        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });

        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
