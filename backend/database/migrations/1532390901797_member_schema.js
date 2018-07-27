"use strict";

const Schema = use("Schema");

class MembroSchema extends Schema {
  up() {
    this.create("membros", table => {
      table.increments();
      table.string("tipo").notNullable();
      table.string("celula").notNullable();
      table.string("nome").notNullable();
      table.string("email").notNullable();
      table.string("nascimento").notNullable();
      table.string("sexo").notNullable();
      table.string("estadocivil").notNullable();
      table.string("cpf").notNullable();
      table.string("telefone").notNullable();
      table.string("celular").notNullable();
      table.string("discipulador").notNullable();
      table.string("responsavel").notNullable();
      table.string("cep").notNullable();
      table.string("estado").notNullable();
      table.string("cidade").notNullable();
      table.string("logradouro").notNullable();
      table.string("numero").notNullable();
      table.string("bairro").notNullable();
      table.string("complemento").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("membros");
  }
}

module.exports = MembroSchema;
