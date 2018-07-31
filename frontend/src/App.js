import React, { Component } from "react";

import "../src/styles/global";

import api from "../src/services/api";

class App extends Component {
  state = {
    tipo: "",
    celula: "",
    nome: "",
    email: "",
    nascimento: "",
    sexo: "",
    estadocivil: "",
    cpf: "",
    telefone: "",
    celula: "",
    discipulador: "",
    responsavel: "",
    cep: "",
    estado: "",
    cidade: "",
    logradouro: "",
    numero: "",
    bairro: "",
    complemento: ""
  };

  handleContent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = async e => {
    e.preventDefault();
    console.log(this.state.nome);
    console.log(this.state.celula);
  };

  render() {
    return (
      <div className="App">
        <form action="" onSubmit={this.handleSave}>
          <input
            type="text"
            placeholder="tipo"
            name="tipo"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="celula"
            name="celula"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="nome"
            name="nome"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="nascimento"
            name="nascimento"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="sexo"
            name="sexo"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="estadocivil"
            name="estadocivil"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cpf"
            name="cpf"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="telefone"
            name="telefone"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="celular"
            name="celular"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="discipulador"
            name="discipulador"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="responsavel"
            name="reponsavel"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cep"
            name="cep"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="estado"
            name="estado"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cidade"
            name="cidade"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="logradouro"
            name="logradouro"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="numero"
            name="numero"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="bairro"
            name="bairro"
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="complemento"
            name="complemento"
            onChange={this.handleContent}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default App;
