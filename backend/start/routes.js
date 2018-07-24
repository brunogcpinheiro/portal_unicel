"use strict";

const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.get("/dashboard", "AppController.index").middleware(["auth"]);
Route.post("/dashboard/membros", "MembroController.create").middleware([
  "auth"
]);
