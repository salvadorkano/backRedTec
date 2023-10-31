const express = require("express");
const { dbConnection } = require("./database/config");
const usuariosRoutes = require("./routes/usuarios");
const app = express();
const port = 3000;

app.use("/api/usuarios", usuariosRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const callDB = async () => {
  await dbConnection();
};

callDB();
