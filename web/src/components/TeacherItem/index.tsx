import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/8976323?s=460&u=3084567be8df57ec600f54ff442a3aa51d8c8dcd&v=4" alt="Vaéria Carvalho" />
        <div>
          <strong>Valéria Carvalho</strong>
          <span>Química</span>
        </div>
      </header>

      <p>Entusiasta das melhores tecnologias de química avançada.
        <br/>
        <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
