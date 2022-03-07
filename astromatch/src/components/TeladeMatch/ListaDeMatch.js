import React from "react";
import { Avatar } from "./styled";
import { MatchContainer } from "./styled";

export const ListaDeMatch = (props) => {
    const perfil= props.perfil
    return (
        <MatchContainer>
            <Avatar src={perfil.photo}/>
            <p>{perfil.name}</p>
        </MatchContainer>
    )
}