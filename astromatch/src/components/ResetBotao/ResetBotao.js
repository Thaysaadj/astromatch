import axios from "axios";
import React from "react";

export const ResetBotao = ()=>{
    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:thayna-saad/clear")
        .then(response => {
            console.log(response)
        })
    }
    return(
        <div>
            <button onClick={onClickReset}>Resetar curtidas e matches
            </button>
        </div>
    )
}