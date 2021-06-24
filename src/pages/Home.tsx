import React from 'react';

import Button from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

const Home: React.FC = () => (
  <div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <button className="create-room">
          <img src={googleIconImg} alt="Logo do Google" />
          Crie sua sala com o Google
        </button>
        <div className="separator">ou entre em uma sala</div>
        <form>
          <input
            type="text"
            placeholder="Digite o código da sala"
          />
          <Button type="submit">Entrar na sala</Button>
        </form>
      </div>
    </main>
  </div>
);

export default Home;
