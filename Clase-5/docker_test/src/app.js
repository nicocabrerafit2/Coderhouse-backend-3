import { cpus } from "node:os";
import cluster from "node:cluster";
import express from "express";
// console.log(cpus().length)
// console.log(cluster.isPrimary)

const nucleos = cpus().length;
if (cluster.isPrimary) {
  console.log("Proceso Principal ID:", process.pid);
  console.log("Soy el cluster principal, voy a forkear (worker)");
  for (let i = 0; i < nucleos; i++) {
    cluster.fork();
  }
} else {
  console.log("Soy un cluster trabajador, y tengo el id:", process.pid);
  const app = express();

  app.get("/operacionsimple", (req, res) => {
    let sum = 0;
    for (let index = 0; index < 1000000; index++) {
      sum += index;
    }
    return res.json({ sum });
  });

  app.get("/operacioncompleja", (req, res) => {
    let sum = 0;
    for (let index = 0; index < 5e8; index++) {
      sum += index;
    }
    return res.json({ sum });
  });

  app.listen(8080, () => {
    console.log("Server en 8080");
  });
}
