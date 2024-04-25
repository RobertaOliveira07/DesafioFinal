import React from 'react'
import Header from '../components/Header'
import { ProfileStyles, ProfileHeader } from '../styles/profileStyles'
import profile1 from '../imgs/profile/1.png'
import DevFullStackBar from '../components/DevFullStackBar'

function Profile() {
  return (
    <>
      <Header />
      <DevFullStackBar />
      <ProfileHeader>
        <h1>Perfil</h1>
      </ProfileHeader>
      <ProfileStyles>
        <section className='perfil'>
          <div>
            
            <img src={profile1} alt="" />
            
          </div>
          
          <p>
            Desde criança fascinada por tecnologia desenvolvendo minha curiosidade,
            eu nao tinha pc então ficava sentada do lado do meu primo vendo ele mexer,
            meu sonho era crescer, comprar um computador e começar a programar.
          </p>
          <p>
            Sou um estudante de Análise e Desenvolvimento de Sistemas, onde até agora ja aprendi GIT, 
            HTML, CSS, JS, Jest, Metodologias ágeis, Kanban, Scrum, Trello, Requisições 
            em api externas, fiz alguns projetos em grupo para consolidar conhecimentos e 
            experiêncas em um ambiente de trabalho coletivo. Focando em Frontend aprendi, 
            REACT, RTL, Redux, Context API, além das Soft Skills. Atualmente focando em Backend, 
            estudando Typescript.
          </p>
        </section>
        <section className='contato'>
          <h1>Entre em contato via rede social</h1>
          <div>
            <a href="https://www.linkedin.com/in/roberta-oliveira07/" target='_blank' rel='noopener noreferrer'>
              
              <img src="" alt="logo linkedin" />
              <p> Linkedin </p>
            </a>
            <a href="https://github.com/RobertaOliveira07" target='_blank' rel='noopener noreferrer'>
              
              <img src="" alt="logo linkedin" />
              <p> Github </p>
            </a>
            <a href="" target='_blank' rel='noopener noreferrer'>
              
              <img src="" alt="logo linkedin" />
              <p> Whatsapp </p>
            </a>
          </div>
          <h1> ou envie um email para:</h1>
          <h2> • robertavalentim07@gmail.com •</h2>
          
        </section>
        
      </ProfileStyles>
    </>
  )
}

export default Profile