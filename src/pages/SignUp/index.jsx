import { useState } from 'react';
import { api } from '../../services/api'
import {FiUser, FiLock, FiMail} from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import {Link, useNavigate} from 'react-router-dom';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password})
    .then(() => {
      alert("Usuário Cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if (error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o usuário")
      }
    })
  }


  return (
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />                
        <Button title="Cadastrar" onClick={handleSignUp} />
      
        <Link to="/">Voltar para o login</Link>
      </Form>   
      
    </Container>
  );
}