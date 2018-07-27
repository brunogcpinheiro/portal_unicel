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
  async index() {
    const membros = Membro.all();

    return membros;
  }

  /**
   * Create/save a new member.
   * POST members
   */
  async store({ request }) {
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
   * Update member details.
   * PUT or PATCH members/:id
   */
  async update({ params, request }) {
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

    const membro = await Membro.find(params.id);
    membro.merge(data);
    await membro.save();
    return membro;
  }

  /**
   * Delete a member with id.
   * DELETE members/:id
   */
  async destroy({ params }) {
    const membro = await Membro.find(params.id);

    await membro.delete();

    return "Membro deletado";
  }
}

module.exports = MembroController;
