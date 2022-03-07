import styled from "styled-components";
import { details, primary, secundary } from "../../cores/cores";

export const AppBarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom :1px solid lightgray;
    align-items: center;
    padding: 0 8px;

    p{
        font-family:Arial
    }

    button {
        border-radius: 3px;
        background-color: green;
        height: 35px;
        width: 110px;
        background-color: ${details};
        cursor: pointer;
        transition: 0.3s ;
        border: 1px solid ${details};

        :hover{
            background-color: ${primary};
            color: white;
            border: 1px solid ${secundary}
        }

        :active {
            transform: translateY(3px)
        }

        
    }

    img {
        width: 200px;
        height: 50px;
    }
`

