"use strict";

const Model = use("Model");

class Token extends Model {
  user() {
    return this.belongsTo("App/Models/User", "user_id");
  }
}

module.exports = Token;
