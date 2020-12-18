var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");

const BUCKET = "web-games-center.appspot.com";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImagem = (request, response, next) => {
    if (!request.file) return next();


    const imagem_video = request.file;
    const nomeArquivo = Date.now() + "." + imagem_video.originalname.split(".").pop();

    const file = bucket.file(nomeArquivo);

    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem_video.mimetype,
        }
    });

    stream.on("error", (e)=>{
        console.error(e);
    });

    stream.on("finish", async () =>{
        // tornar o arquivo publico
        await  file.makePublic();
        //obter a url publica
        request.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

        next();
    });

    stream.end(imagem_video.buffer);

}

module.exports = uploadImagem;
