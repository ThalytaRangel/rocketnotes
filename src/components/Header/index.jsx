import {Container, Profile, Logout} from './styles';
import { RiShutDownLine} from 'react-icons/ri';
import { useAuth} from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import {api} from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header(){
  const navigation = useNavigate()
  const { signOut, user } = useAuth();

  function handleSignOut() {
    navigation("/")
    signOut()

  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />
        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}