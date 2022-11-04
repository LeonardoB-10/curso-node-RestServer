//Trabaja con promesas en caso algo salga mal o bien en la subida del archivo
const { v4 : uuidv4 } = require ('uuid');
uuidv4();
const path = require("path");

const subirArchivo = (
  files,
  extensionesValidas = ["png", "jpg", "jpeg", "gif"],
    carpeta = ""
) => {
  return new Promise((resolve, reject) => {
    // -> Si no hay archivos en la petición o no hay archivos en la petición (req.files) o no hay archivos en la petición (Object.keys(req.files).length === 0) entonces ...
    const { archivo } = files;
    const nombreCortado = archivo.name.split(".");
    // -> Obtenemos la extensión del archivo (jpg, png, etc)
    const extensionArchivo = nombreCortado[nombreCortado.length - 1];

    if (!extensionesValidas.includes(extensionArchivo)) {
      return reject(
        `La extensión ${extensionArchivo} no es permitida. Las extensiones permitidas son: ${extensionesValidas}`
      );
    }

    const nomberTemp = uuidv4() + "." + extensionArchivo; // identificador único
    //Dende me encuentro y donde quiero mover el archivo
    const uploadPath = path.join(__dirname, "../uploads/",carpeta, nomberTemp);

    archivo.mv(uploadPath, (err) => {
      reject(err);
    });
    resolve(nomberTemp);
  });
};

module.exports = {
    subirArchivo,
};

