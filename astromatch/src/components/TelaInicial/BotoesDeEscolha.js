import axios from "axios";
import React from "react";
import { BotoesContainer } from "./styled";

export const BotoesDeEscolha = (props) =>{
    return(
        <BotoesContainer>
            <button onClick={props.onClickNao}><ion-icon name="heart-dislike-outline"/></button>
            <button onClick={props.onClickSim}><ion-icon name="fitness-outline"/></button>
        </BotoesContainer>
    )
}