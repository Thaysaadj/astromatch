import styled from 'styled-components'
import {details, primary, secundary} from '../../cores/cores'

export const ListaContainer = styled.div `
    padding: 8px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

`  
export const MatchContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;

    :hover {
        background-color: rgba(0,0,0,0.1)
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
    width: 30px;
    height: 30px;
`

export const ContainerReset = styled.div `
    display: flex;
    justify-content:center;

    button {
        background-color: ${primary};
        height: 35px;
        width: 200px;
        border-radius: 4px;
        border: 1px solid ${primary};
        cursor: pointer;
        transition: 0.2s;
        color: white;

        :hover {
            opacity:0.7;
            border: 1px solid ${secundary};
        }

        :active{
            transform: translateY(-2px);
        }
        
    }
`