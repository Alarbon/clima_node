# Aplicación de Clima en Node.js

Esta aplicación de clima en Node.js te permite obtener información meteorológica utilizando la API de OpenWeatherMap. Antes de comenzar, asegúrate de seguir estos pasos para configurar correctamente las claves de acceso y otras dependencias.

## Configuración

1. Clona el repositorio:

```bash
git clone https://github.com/Alarbon/clima_node.git
cd clima_node
```

2. Renombra el archivo example.env a .env:

3. Abre el archivo .env en un editor de texto y completa las siguientes claves:

- `MAPBOX_KEY`: Obtén tu clave de acceso a Mapbox registrándote en [Mapbox](https://www.mapbox.com).
- `OPENWEATHER_KEY`: Obtén tu clave de acceso a OpenWeatherMap registrándote en [OpenWeatherMap](https://openweathermap.org/api).

```bash
MAPBOX_KEY=TU_CLAVE_DE_ACCESO_MAPBOX
OPENWEATHER_KEY=TU_CLAVE_DE_ACCESO_OPENWEATHERMAP
```

## Instalación

Antes de ejecutar la aplicación, instala las dependencias usando el siguiente comando:

```bash
npm install
```

## Uso

Una vez que hayas configurado las claves y instalado las dependencias, puedes ejecutar la aplicación con:

```bash
npm start
```

## IMAGENES DE LA APP

1. Inicio de la app:

   ![Inicio](https://cdn.discordapp.com/attachments/1173755894958395393/1182658853217767446/image.png?ex=65857fe3&is=65730ae3&hm=885b402fbd1aa557736be8cd1b8f6bbd17caa0869da3336664d65449281551d9&)

2. Búsqueda del lugar

   ![Busqueda](https://cdn.discordapp.com/attachments/1173755894958395393/1182659248187002930/image.png?ex=65858041&is=65730b41&hm=3a4318c3ca7ed8e8e69b2567de3bef65b48d7a7fd3c422df70441772b4d4df35&)

3. Informacion del lugar:

   ![info_ciudad](https://cdn.discordapp.com/attachments/1173755894958395393/1182659555910484060/image.png?ex=6585808a&is=65730b8a&hm=1b1ade7b981a7966020f986607341ab73ac2c20bd2be4964659d0bf581330ce2&)

4. Historial de lugares buscados:

   ![Historial_buscados](https://cdn.discordapp.com/attachments/1173755894958395393/1182659829001617508/image.png?ex=658580cb&is=65730bcb&hm=8b6f7ed9c63b9ba57739eb744f49a28842cc4178678fb031b64730a0a2328641&)

