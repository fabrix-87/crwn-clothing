import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div
`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding: 5px;
    
    &:hover{
        .image{
            opacity: 0.8;
        }

        button{
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px){
        width: 40vw;
        padding: 0;

        &:hover{
            .image{
                opacity: unset;
            }
    
            button{
                opacity: unset;
            }
        }
        
    }

`

export const CollectionImageContainer = styled.div
`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url(${ props => props.imageUrl })
`

export const CollectionFooterContainer = styled.div
`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionItemName = styled.span
`
    width: 80%; 
    margin-bottom: 15px;
`
    
    export const CollectionItemPrice = styled.span
`
    width: 20%;
    text-align: right;

    &::before{
        content: '€ ';
    }
`

export const AddButton = styled(CustomButton)
`
    width: 80%;
    position: absolute;
    top: 220px;
    display: none;

    @media screen and (max-width: 800px){
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`