import { cpus } from "node:os";
import cluster from "node:cluster";
import express from "express";

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
    res.json({ sum });
  });

  app.get("/operacioncompleja", (req, res) => {
    let sum = 0;
    for (let index = 0; index < 5e8; index++) {
      sum += index;
    }
    res.json({ sum });
  });

  app.listen(8080, () => {
    console.log("Server en 8080");
  });
}
/*
Lo que estás viendo en la consola es el resultado del uso del módulo cluster de Node.jspara crear múltiples procesos de trabajo (workers). Aquí te explico qué está pasando:

Proceso Principal (Master):

Al iniciar tu aplicación, el proceso principal (master) se ejecuta y detecta el número de núcleos (cpus().length).

Luego, el proceso principal crea (fork) un proceso de trabajo (worker) por cada núcleo disponible.

Cada worker es un proceso de servidor independiente que escucha en el mismo puerto (8080). Esto permite que tu aplicación aproveche múltiples núcleos del procesador, mejorando el rendimiento y la capacidad de manejo de solicitudes concurrentes.

Lo que estás viendo en la consola:
Proceso Principal:

Proceso Principal ID: 3680
Soy el cluster principal, voy a forkear (worker)
Procesos Trabajadores:

Soy un cluster trabajador, y tengo el id: 12452
Soy un cluster trabajador, y tengo el id: 13240
Soy un cluster trabajador, y tengo el id: 14128
...
Server en 8080
Server en 8080
Server en 8080
...
Explicación de los Mensajes:
Proceso Principal ID: Identifica el proceso principal que está creando los workers.

Soy el cluster principal, voy a forkear (worker): Indica que el proceso principal está creando (forking) nuevos procesos de trabajo.

Soy un cluster trabajador, y tengo el id: Cada proceso de trabajo se inicia y se le asigna un ID de proceso único.

Server en 8080: Cada worker inicia un servidor en el puerto 8080.

¿Por qué tantos mensajes "Server en 8080"?
Cada worker está iniciando su propio servidor en el mismo puerto (8080). Debido a que hay varios workers, verás múltiples mensajes de "Server en 8080". Esto es normal y esperado cuando se usa clustering, ya que cada worker se ejecuta independientemente y maneja solicitudes concurrentemente.

Resumen
El proceso principal crea múltiples procesos de trabajo (workers).

Cada worker inicia su propio servidor en el mismo puerto (8080).

Los múltiples mensajes en consola son normales y esperados en un entorno de clustering.

Si tienes más preguntas o necesitas más detalles, aquí estoy para ayudarte. ¡Espero que esto aclare tu duda! 
*/
