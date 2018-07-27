"use strict";

const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.get("/dashboard", "DashboardController.index").middleware(["auth"]);

Route.get("/dashboard/membros", "MembroController.index").middleware(["auth"]);
Route.get("/dashboard/membros/create", "MembroController.create").middleware([
  "auth"
]);
Route.post("/dashboard/membros", "MembroController.store").middleware(["auth"]);
Route.put("/dashboard/membros/:id", "MembroController.update").middleware([
  "auth"
]);
Route.delete("/dashboard/membros/:id", "MembroController.destroy").middleware([
  "auth"
]);
