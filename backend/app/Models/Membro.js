"use strict";

const Model = use("Model");

class Membro extends Model {
  user() {
    return this.belongsTo("App/Models/User", "user_id");
  }
}

module.exports = Membro;
