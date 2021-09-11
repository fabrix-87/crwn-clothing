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

    &:hover{
        .image{
            opacity: 0.8;
        }

        button{
            opacity: 0.85;
            display: flex;
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
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionItemName = styled.span
`
    width: 90%; 
    margin-bottom: 15px;
`

export const CollectionItemPrice = styled.span
`
    width: 15%;

    &::before{
        content: '€ ';
    }
`

export const AddButton = styled(CustomButton)
`
    width: 80%;
    position: absolute;
    top: 255px;
    display: none;
`