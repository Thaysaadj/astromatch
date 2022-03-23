import React from "react";
import { PerfilInfo, PerfilFoto } from "./styled";
import { CardPerfilContainer } from "./styled";


export const CardPerfil = (props) =>{
    const perfil = props.perfil
    return (
        <CardPerfilContainer>
            <PerfilFoto src={perfil.photo}/>
            <PerfilInfo>
            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
            </PerfilInfo>
        </CardPerfilContainer>
    )
}