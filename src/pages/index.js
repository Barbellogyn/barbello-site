import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BarbelloPNG from '../images/barbello.png'
import './styles/index.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Barbello" />
    <div className="card">
      <div className="card__image">
        <img src={BarbelloPNG} alt="Barbello"/>
      </div>
      <h1 className="card__title">O que acha de agendar um corte com o melhor barbeiro sem sair de casa?</h1>
      <p className="card__text">Te oferecemos essa facilidade, basta agendar com a gente.</p>
      <a className="card__button" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5562983226970&text=Ol%C3%A1%2C%20queria%20marcar%20um%20hor%C3%A1rio%20com%20um%20barbeiro." target="_blank">
        Agende agora
      </a>
    </div>
  </Layout>
)

export default IndexPage
