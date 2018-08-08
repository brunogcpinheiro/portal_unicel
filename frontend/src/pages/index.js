import React, { Component } from 'react';

import { Form, List } from './styles';

import api from '../../services/api';

class Membros extends Component {
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
    celular: "",
    discipulador: "",
    responsavel: "",
    cep: "",
    estado: "",
    cidade: "",
    logradouro: "",
    numero: "",
    bairro: "",
    complemento: "",
    membros: [],
    show: false,
  };
  
  async componentDidMount() {
    const { data: membros } = await api.get('/dashboard/membros');
    
    this.setState({ membros });
  }

  handleContent = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  handleDelete = async id => {
    await api.delete(`/dashboard/membros/${id}`);
    this.setState({ membros: this.state.membros.filter(item => item.id !== id), show: true });
  }
  
//   handleUpdate = async id => {
//       await api.put(`/dashboard/membros/${id}`);
//       this.setState();
//   }

  handleSave = async e => {
    e.preventDefault();
    
    const { data: membro } = await api.post('dashboard/membros', {
      tipo: this.state.tipo,
      celula: this.state.celula,
      nome: this.state.nome,
      email: this.state.email,
      nascimento: this.state.nascimento,
      sexo: this.state.sexo,
      estadocivil: this.state.estadocivil,
      cpf: this.state.cpf,
      telefone: this.state.telefone,
      celular: this.state.celular,
      discipulador: this.state.discipulador,
      responsavel: this.state.responsavel,
      cep: this.state.cep,
      estado: this.state.estado,
      cidade: this.state.cidade,
      logradouro: this.state.logradouro,
      numero: this.state.numero,
      bairro: this.state.bairro,
      complemento: this.state.complemento,
    });
    
    this.setState({
      membros: [...this.state.membros, membro],
      tipo: '',
      celula: '',
      nome: '',
      email: '',
      nascimento: '',
      sexo: '',
      estadocivil: '',
      cpf: '',
      telefone: '',
      celular: '',
      discipulador: '',
      responsavel: '',
      cep: '',
      estado: '',
      cidade: '',
      logradouro: '',
      numero: '',
      bairro: '',
      complemento: '',
    });
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSave}>
          <input
            type="text"
            placeholder="tipo"
            name="tipo"
            value={this.state.tipo}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="celula"
            name="celula"
            value={this.state.celula}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="nome"
            name="nome"
            value={this.state.nome}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="nascimento"
            name="nascimento"
            value={this.state.nascimento}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="sexo"
            name="sexo"
            value={this.state.sexo}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="estadocivil"
            name="estadocivil"
            value={this.state.estadocivil}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cpf"
            name="cpf"
            value={this.state.cpf}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="telefone"
            name="telefone"
            value={this.state.telefone}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="celular"
            name="celular"
            value={this.state.celular}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="discipulador"
            name="discipulador"
            value={this.state.discipulador}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="responsavel"
            name="responsavel"
            value={this.state.responsavel}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cep"
            name="cep"
            value={this.state.cep}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="estado"
            name="estado"
            value={this.state.estado}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="cidade"
            name="cidade"
            value={this.state.cidade}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="logradouro"
            name="logradouro"
            value={this.state.logradouro}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="numero"
            name="numero"
            value={this.state.numero}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="bairro"
            name="bairro"
            value={this.state.bairro}
            onChange={this.handleContent}
          />
          <input
            type="text"
            placeholder="complemento"
            name="complemento"
            value={this.state.complemento}
            onChange={this.handleContent}
          />
          <button type="submit">Salvar</button>
        </Form>
        
        {this.state.membros.map(membro => (
            <List key={membro.id} >
                <div>
                    <li>{membro.tipo}</li>
                    <li>{membro.celula}</li>
                    <li>{membro.nome}</li>
                    <button>Detalhes</button>
                    <button>Editar</button>
                    <button onClick={() => this.handleDelete(membro.id)}>Deletar</button>
                </div>
            </List>
        ))}
      </div>
    );
  }
}

export default Membros;