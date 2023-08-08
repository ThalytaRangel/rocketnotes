import {Container, Profile, Logout} from './styles';
import { RiShutDownLine} from 'react-icons/ri'


export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/thalytarangel.png" alt="Foto do Usuário" />
        <div>
          <span>Bem vindo,</span>
          <strong>Thalyta Rangel</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}