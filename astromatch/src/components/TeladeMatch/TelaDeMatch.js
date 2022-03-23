import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResetBotao } from "../ResetBotao/ResetBotao";
import { ListaDeMatch } from "./ListaDeMatch";
import { ListaContainer } from "./styled";
import { ContainerReset } from "./styled";


export const TelaDeMatch = () => {
  const [matches, setMatches] = useState([])
  
  useEffect (() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:thayna-saad/matches")
      .then(response => {
        console.log(response.data.matches)
        setMatches (response.data.matches)
      })
  }, []);


  return (
    <ListaContainer>
      <div>
      {matches.map((perfil) => {
        return <ListaDeMatch perfil={perfil}/>
      })}
      </div>
      <ContainerReset>
      <ResetBotao/>
      </ContainerReset>
    </ListaContainer>
  )

}