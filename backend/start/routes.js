"use strict";

const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.get("/dashboard", "DashboardController.index").middleware(["auth"]);

Route.get("/dashboard/membros", "MembroController.index");
Route.get("/dashboard/membros/create", "MembroController.create");
Route.post("/dashboard/membros", "MembroController.store");
Route.put("/dashboard/membros/:id", "MembroController.update");
Route.delete("/dashboard/membros/:id", "MembroController.destroy");
