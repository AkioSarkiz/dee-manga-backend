// typeorm requires
import "reflect-metadata";

// setup environment
require("dotenv").config();

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import mangaRoutes from "./routes/manga";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  const port = 3000;
  const app = new Hono();

  app.get("/", (c) => {
    return c.text("Hello Hono!");
  });

  app.route("manga", mangaRoutes);

  console.log(`Server is running on port ${port}`);

  serve({
    fetch: app.fetch,
    port,
  });
});
