// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require("sharp");

const inPath = "public/brand/logo.png";
const outPath = "public/brand/logo-cropped.png";

sharp(inPath)
  .trim() // remove uniform border / whitespace
  .png({ quality: 100 })
  .toFile(outPath)
  .then((info) => {
    console.log("Cropped logo written:", outPath, info);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
