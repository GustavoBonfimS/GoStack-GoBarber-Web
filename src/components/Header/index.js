import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo_purple.svg';

function Header() {
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
              <strong>Gustavo Bonfim</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://github.com/GustavoBonfimS.png"
              alt="Gustavo Bonfim"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
