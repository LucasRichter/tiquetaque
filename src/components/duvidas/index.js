import React from 'react'

import Duvida from './duvida'

const TOPICOS = [
  {
    key: 'instalacao',
    texto: 'Instalação'
  },
  {
    key: 'funcionalidades',
    texto: 'Funcionalidades',
  },
  {
    key: 'planos',
    texto: 'Preços e planos',
  }
]

const DUVIDAS = {
  instalacao: [
    {
      titulo: 'Como funciona a instalação?',
      resposta: '1. Realize o cadastro da empresa e as configurações do ponto;2. Cadastre seus funcionários;3. Colete as digitais dos funcionários utilizando o aplicativo“ TiqueTaque Gestor” disponível no Google Play e App Store;4. Tudo certo!Você já pode usar o TiqueTaque.'
    },
    {
      titulo: 'Posso importar os dados dos meus funcionários e jornadas de trabalho?',
      resposta: 'kkk'
    },
    {
      titulo: 'O TiqueTaque está certificado pelas portarias da lei do Ponto Eletrônico?',
      resposta: 'kkk'
    }
  ],
  funcionalidades: [ {
    titulo: 'Como funciona a instalação?',
    resposta: '1. Realize o cadastro da empresa e as configurações do ponto;2. Cadastre seus funcionários;3. Colete as digitais dos funcionários utilizando o aplicativo“ TiqueTaque Gestor” disponível no Google Play e App Store;4. Tudo certo!Você já pode usar o TiqueTaque.'
  },
  {
    titulo: 'Posso importar os dados dos meus funcionários e jornadas de trabalho?',
    resposta: 'kkk'
  },
  {
    titulo: 'O TiqueTaque está certificado pelas portarias da lei do Ponto Eletrônico?',
    resposta: 'kkk'
  }
  ],
  planos: [ {
    titulo: 'Como funciona a instalação?',
    resposta: '1. Realize o cadastro da empresa e as configurações do ponto;2. Cadastre seus funcionários;3. Colete as digitais dos funcionários utilizando o aplicativo“ TiqueTaque Gestor” disponível no Google Play e App Store;4. Tudo certo!Você já pode usar o TiqueTaque.'
  },
  {
    titulo: 'Posso importar os dados dos meus funcionários e jornadas de trabalho?',
    resposta: 'kkk'
  },
  {
    titulo: 'O TiqueTaque está certificado pelas portarias da lei do Ponto Eletrônico?',
    resposta: 'kkk'
  }
  ]
}

export default class Duvidas extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      topicoAtivo: 'instalacao',
    }
  }

  getTopicos() {
    const { topicoAtivo } = this.state
    return (
      <ul className={ `duvidas__topicos` }>
        { TOPICOS.map( topico => (
          <li
            className={ `duvidas__topico${topico.key === topicoAtivo ? '--ativo' : ''}` }
            key={ topico.key }
            onClick={ () => this.setState( { topicoAtivo: topico.key } ) }
          >
            { topico.texto }
          </li>
        ) ) }
      </ul>
    )
  }

  getDuvidas() {
    const { topicoAtivo } = this.state
    return DUVIDAS[ topicoAtivo ].map( duvida => (
      <Duvida
        key={ duvida.titulo }
        resposta={ duvida.resposta }
        titulo={ duvida.titulo }
      />
    ) )
  }

  render() {
    return (
      <div className={ `duvidas` }>
        <div className={ `duvidas__wrapper` }>
          <div className={ `duvidas__block` }>
            <h2 className={ `duvidas__title` }>
              { `Dúvidas?` }
            </h2>
            <p className={ `duvidas__ajuda` }>
              { `Se você não encontrou a informação que precisava, ` }
              <span>
                { `fale com a gente.` }
              </span>
            </p>
          </div>
          <div className={ `duvidas__block-left` }>
            { this.getTopicos() }
            { this.getDuvidas() }
          </div>
        </div>
      </div>
    )
  }
}
