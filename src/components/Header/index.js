import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo_purple.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Go Barber" />

          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ?? 'https://github.com/GustavoBonfimS.png'
              }
              alt="Gustavo Bonfim"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
