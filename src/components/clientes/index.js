import React from 'react'

const CLIENTES = [
  'safepark',
  'renner',
  'youcom',
  'axur'
]



export default function Clientes() {
  return (
    <div className={ `clientes` } >
      <div className={ `clientes__comentarios` }>
        <div className={ `clientes__comentario` }>
          <img
            className={ `clientes__aspas` }
            src={ require( './images/aspas.svg' ) }
          />
          <p className={ `clientes__text` }>
            { `Estamos adorando usar o TqTq, é muito mais intuitivo, moderno, fácil de usar, estamos muito empolgadas. A Denise esteve aqui ontem e viu o protótipo e adorou, até tirou uma foto para mostrar para o nosso presidente que o relógio dos nossos sonhos existe!`}
          </p>
          <p className={ `clientes__text` }>
            {`Andreia Gomes, Gerente de Recursos Humanos`}
            <br />
            <span>{`Safepark`}</span>
          </p>
        </div>
        <div className={ `clientes__comentario--2` }>
          <img
            className={ `clientes__aspas` }
            src={ require( './images/aspas.svg' ) }
          />
          <p className={ `clientes__text` }>
            { `Hoje o gestor da unidade esteve aqui e conheceu o TqTq e está encantado, não quer mais usar o [concorrente]. [...] O nosso presidente [...], na reunião que teve com todos os gestores da empresa falou do ponto e disse que este ano ainda quer colocar o TqTq em todas as unidades da empresa.`}
          </p>
          <p className={ `clientes__text` }>
            {`Andreia Gomes, Gerente de Recursos Humanos`}
            <br />
            <span>{`Safepark`}</span>
          </p>
        </div>
      </div>
      <div className={ `clientes__images` }>
        { CLIENTES.map( cliente => (
          <img
            key={ cliente }
            src={ require( `./images/${cliente}.png` ) }
          />
        ) )}
      </div>
    </div>
  )
}
