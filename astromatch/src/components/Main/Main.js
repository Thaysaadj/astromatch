import React, { useState } from "react";
import { TelaDeMatch } from "../TeladeMatch/TelaDeMatch";
import { TelaInicial } from "../TelaInicial/TelaInicial";
import { MainContainer } from "./styled";
import { AppBar } from "../AppBar/AppBar";


export const Main = () => {
    const [selecPagina, setSelePagina] = useState("tela-inicial")

    const renderPagina = () => {
        switch(selecPagina) {
            case "tela-inicial":
                return <TelaInicial/>
            case "tela-matches":
                return <TelaDeMatch/>
            default:
                return <TelaInicial/>
        }
    }

    
    const vaiParaInicial = () => {
        setSelePagina("tela-inicial")
    }
    
    const vaiParaMatches = () => {
        setSelePagina("tela-matches")
    }
    

    return(
        <MainContainer>
        <AppBar vaiParaInicial={vaiParaInicial} vaiParaMatches={vaiParaMatches}/>
            {renderPagina()}
        </MainContainer>
    )
}