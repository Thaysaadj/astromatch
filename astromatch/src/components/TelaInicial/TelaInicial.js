import axios from "axios"
import React, { useEffect, useState } from "react";
import { BotoesDeEscolha } from "./BotoesDeEscolha";
import { CardPerfil } from "./CardPerfil";


export const TelaInicial = () => {
  const [perfilDeEscolha, setPerfilDeEscolha] = useState(undefined)

  const pegarPerfis = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:thayna-saad/person")
    .then(response => {
      setPerfilDeEscolha(response.data.profile)
    })
    
  }

  const escolhePerfil = (choice)=>{
    const body = {
      choice: choice,
      id: perfilDeEscolha.id
    }
    setPerfilDeEscolha(undefined)

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:thayna-saad/choose-person", body)
    .then(response => {
      pegarPerfis()
    })
  }

  useEffect(() =>{
    pegarPerfis()
  }, [])

  const onClickNao = () => {
  escolhePerfil(false)
}

const onClickSim = () => {
  escolhePerfil(true)
}

  return (
    <div>
      {perfilDeEscolha ?
      (<>
      <CardPerfil perfil={perfilDeEscolha}/>
      <BotoesDeEscolha onClickNao={onClickNao} onClickSim={onClickSim}/>
      </>): <p>Carregando...</p>
      }
    </div>
  )
}

