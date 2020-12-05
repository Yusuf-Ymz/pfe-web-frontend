const fs = require("fs");
const { exit } = require("process");
const API_URL = process.env.API_URL;
let MODE = process.env.MODE;

if (!MODE) {
  MODE = "prod";
}

if (MODE != "dev" && MODE != "prod") {
  console.error(
    "Please check MODE environment variable: expected values(dev,prod)"
  );
  exit(1);
}

if (!API_URL) {
  console.error("Please specify a API_URL as environment variable");
  exit(1);
}

if (API_URL) {
  let data;
  try {
    data = fs.readFileSync("./dist/pfe-web-frontend/assets/config/config.json");
  } catch (err) {
    console.error("Please check if the project's name is the same");
    exit(1);
  }

  const deserializedData = data.toString();
  const isProduction = MODE === "prod" ? true : false;
  const mode = `"production": ${isProduction},`;
  const apiUrl = `"serverUrl": "${API_URL}"`;
  let injectedFileWithEnvironmentsVariables = deserializedData
    .replace(/"serverUrl":(.*)/g, apiUrl)
    .replace(/"production":(.*)/g, mode);

  injectedFileWithEnvironmentsVariables = Buffer.from(
    injectedFileWithEnvironmentsVariables,
    "binary"
  );

  fs.writeFileSync(
    "./dist/pfe-web-frontend/assets/config/config.json",
    injectedFileWithEnvironmentsVariables,
    "utf-8"
  );
}
