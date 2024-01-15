import { Hono } from "hono";

const mangaRoutes = new Hono();

// Find one
mangaRoutes.get("/:id", (c) => {
  const id = c.req.param("id");
  return c.text("Get manga: " + id);
});

// Find all
mangaRoutes.get("/", (c) => {
  return c.text("Get mangas");
});

export default mangaRoutes;
