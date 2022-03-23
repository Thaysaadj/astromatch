import styled from "styled-components";
import { details, primary } from "../../cores/cores";

export const CardPerfilContainer = styled.div`
    margin: 16px;
    width: auto;
    /* border: 1px solid black; */
`

export const PerfilFoto = styled.img `
    width: 100%;
    height: 550px;
    display: block;
`

export const PerfilInfo = styled.div `
    padding: 0 16px;
    background-color: #ffff;
    border: 1px solid #ffff;
    box-shadow: 2px 3px grey;
`

export const BotoesContainer = styled.div `
    display: flex;
    justify-content: space-around;
  

    
    button:nth-child(1){
        width: 50px;
        height: 50px;
        border-radius: 3px;
        border:1px solid black;
        font-weight: bolder;
        transition: 0.2s;
        cursor:pointer;


        ion-icon{
            font-size: 2em;
            color: red ;
        }

        :hover{
            border-radius: 50%;
            background-color: ${primary};

            ion-icon{
                color: white;
            }
            
        }

        
    }

    button:nth-child(2){
        width: 50px;
        height: 50px;
        border-radius: 3px;
        border:1px solid black;
        font-weight: bolder;
        transition: 0.2s;
        cursor:pointer;


        ion-icon{
            font-size: 2em;
            color: green ;
        }

        :hover{
            border-radius: 50%;
            background-color: ${primary};

            ion-icon{
                color: ${details};
            }
            
        }

        
    }

`