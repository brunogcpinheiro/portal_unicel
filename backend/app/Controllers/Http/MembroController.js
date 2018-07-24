"use strict";

const Membro = use("App/Models/Membro");

/**
 * Resourceful controller for interacting with members
 */
class MembroController {
  /**
   * Show a list of all members.
   * GET members
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new member.
   * GET members/create
   */
  async create({ request }) {
    const data = request.only([
      "tipo",
      "celula",
      "nome",
      "email",
      "nascimento",
      "sexo",
      "estadocivil",
      "cpf",
      "telefone",
      "celular",
      "discipulador",
      "responsavel",
      "cep",
      "estado",
      "cidade",
      "logradouro",
      "numero",
      "bairro",
      "complemento"
    ]);

    const membro = await Membro.create(data);

    return membro;
  }

  /**
   * Create/save a new member.
   * POST members
   */
  async store({ request, response }) {}

  /**
   * Display a single member.
   * GET members/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing member.
   * GET members/:id/edit
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update member details.
   * PUT or PATCH members/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a member with id.
   * DELETE members/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = MembroController;
