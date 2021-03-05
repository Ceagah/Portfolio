import React from "react";
import { Row, Col, Card } from "react-materialize";

import UserProfile from "../user_profile/userProfile";
import Experience from "../experience/exprecience";

import company_avatar from "../../images/avatar.jpg";

import oceaning from "../../images/company2.png";

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">Sobre Mim !</h5>
      <Card>
        <div>
          <p>
            <b>Coisas Pessoais . . . </b>
          </p>
          <br />
          <p>
            Me chamo Carlos Henrique, mas por favor, chame de Ceagah,
            pronuncia-se C H. 27 anos, Front End Developer, que ama um React.js
            A pouco tempo no mercado, mas sei fazer coisas incriveis no
            desenvolvimento front end, seu usuário ficará muito feliz em ter um
            site bonito e bem estruturado.
          </p>
          <br />
          <p>
            Estou cursando o tecnólogo em Análise e desenvolvimento de Sistemas
            no Institudo Federal de Ciencências e Tecnologias do Estado de São
            Paulo, no campus de Campos do Jordão - SP. Entrei nesse curso com a
            meta de ser professor um dia, já que para ser desenvolvedor muitas
            vezes não é necessario uma formação academica. Minha meta de vida, é
            um dia poder levar todo o conhecimento que eu adquiri, para o maximo
            de pessoas que eu conseguir, de todas as maneiras possiveis, seja
            criando cursos on-line, e até dando aulas presenciais
          </p>
          <br />
          <p>
            <b>Profissional</b>
          </p>
          <p>
            <br />
            Comecei pelo HTML e CSS, que é o arroz com feijão do Front, gostei e
            quis mais. Fiz logo uns três cursos para fixar bem na mente o que eu
            queria, e depois parti para o Javascritp, que é o ovo do PF do Dev.
            Esse eu demorei um pouco , e até agora não sei todas as
            funcionalidades da linguagem, mas tudo o que me é pedido, é um
            aprendizado novo. Ai, quando comecei a procurar emprego e ser
            chamado para testes, descobri outros Frameworks, com Angular, Ruby
            on Rails e React. Confesso que o coração fez um tum dum diferente
            com React, então resolvi me aprofundar mais. Tanto que esse
            portifólio está sendo feito em React. Que legal né?
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Experiences</h5>
      <Experience
        title="Front End Developer"
        company="Dev Junior Taubaté"
        description="Monitor da trilha de Desenvolvimento Front End, onde auxilio os novos desenvolvedores nas suas dúvidas e passo novas tarefas."
        avatar={company_avatar}
      />
      <Experience
        title="Staff - Founder"
        company="Dev Junior Taubaté"
        description="Participar das reuniões da equipe, entrar em contato com os palestrantes, entrar em contato com os patrocinadores dos eventos, encontrar e organizar o local dos eventos
                bem como ajudar a alocar os convidados."
        avatar={company_avatar}
      />
      <Experience
        title="Front End | Mobile Developer "
        company="Oceaning - Estratégia e Marketing "
        description="Desenvolver aplicativos e aplicações web, utilizando React.js e React Native, juntamente com Node.js"
        avatar={oceaning}
      />
    </Col>
  </Row>
);

export default Home;
