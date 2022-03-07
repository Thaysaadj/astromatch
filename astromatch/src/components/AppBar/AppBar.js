import React, { useState } from "react";
import { AppBarContainer, LogoAstromatch } from "./styled";
import logo from "../../img/astromatch.png"

export const AppBar = (props) =>{

    const [paginaAtual, setPaginaAtual] = useState("tela-inicial")

    const trocaEscolher = () => {
        props.vaiParaMatches()
        setPaginaAtual("tela-matches")
    }
    
    const trocaListaMatchs = () => {
        props.vaiParaInicial()
        setPaginaAtual("tela-inicial")
    }

    return (
        <AppBarContainer>
            {paginaAtual === "tela-inicial" ? 
            <button onClick={trocaEscolher}>Lista de Match</button>
            :
            <span></span> 
        }

            <img src={logo}/>

            { paginaAtual === "tela-matches" ?
            <button onClick={trocaListaMatchs}>Escolher</button>
            :
            <span></span>
        }
        </AppBarContainer>
    )
}