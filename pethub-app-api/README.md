# Creación de los modelos de la base de datos en mongo

Para crear todos los modelos de la base de datos necesitamos colocarlos en una carpeta destinada para ello.
Por cada modelo se creará un archivo. Un modelo es una representación de una entidad de la base de datos de nuestro proyecto

## referencia schema

Un esquema es la definición de mi modelo (reglas que seguirá el modelo para poder manipularlo)

```
const schema = mongoose.Schema;

//El primer apartado sirve para especificar los atributos del model y dentro de cada atributo se específica el tipo de dato que almacenará
//junto con la limpieza de texto antes y después del mismo, y definir si es requerido o no, es decir si es indispensable tener este atributo lleno o no

const PostSchema = new schema({
    title:{
        type: String,
        trim: true,
        require: true
    }
},{});

//Esto es aplicable para la api, no para la base de datos a menos que se especifique en la misma de ser así.
```
# Capa de controladores

Aquí estarán middlewares especiales diseñados para marcar el punto final de nuestros procesos. 
Aquí los modelos ya estarán creados, diseñados y a la espera de las consultas del usuario.


### Comandos de mongo

*show collections* -> para mostrar las colecciones de la base de datos
*use db* -> para crear o utilizar bases de datos predefinidas en mongo
*show dbs* -> para mostrar las bases de datos predefinidas en mongo
*db.collection_name.function_collection(insert, update, delete)* -> para insertar las entidades o colecciones a utilizar en mongo
*db.collection_name.find({})* -> para mostrar los datos encontrados en las colecciones.
*db.collection_name-find({}).pretty()* para mostrar los datos encontrados en las colecciones siguiendo un estándar "bonito" o legible 
*mongo --port no_port* -> accesa a la base de datos creada específicando su puerto
*sudo apt install mongodb-clients* instalación del cliente mongodb en la máquina virtual

Para consultas de tipos permitidos en los atributos de las entidades, consultar la siguiente línea de código:
```
Mongoose.Schema.Types.autocompleta(muestra los tipos)
```

### Comandos de instalación npm
*npm i dotenv* -> librería para fácil manejo de variables de entorno 
*npm i mongoose* -> librería para uso del ODM de mongo
*npm i express-validator* -> librería para el uso de validaciones de express
*npm i -D nodemos* -> para trabajar con la versión live de node
*npm i cors* -> comando para permitir el consumo de la api desde origenes remotos

### Comandos para creación de docker container
*docker pull mongo:image_version* -> descarga de una imagen de mongo para usar en una base de datos de mongo
*docker run --name container_name -p port_container:port_default_docker -d mongo:image_pull* -> creación de un contenedor de docker con la img de mongo descargada.

### Comandos de creación de proyecto
*yarn create react-app name-app-client* -> comando para crear una app de react con yarn 
*npx express-generator --git --no-view name-app-api* -> comando para crear los docs por defecto de la api del proyecto
*yarn create vite* -> creación de una app de react con vite
*yarn* -> instalación de dependencias con yarn en el proyecto vite