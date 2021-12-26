import React, {useState} from 'react'
import styled from 'styled-components';

import { HeartOutline } from "@styled-icons/evaicons-outline"
import { Heart } from "@styled-icons/evaicons-solid/Heart"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text.primary};
    /* opacity: 30%; */
    color: ${({theme, liked}) => liked ? "#F34C90" : theme.colors.text.muted};
    transform: translateY(5%);
    &:hover {
        opacity: ${({liked}) => liked ? "100%" : "30%"};
        color: #F34C90
    }
    
`

const StyledHeartOutline = styled(HeartOutline)`
    height: 2rem;
    background: none;
    padding: 3px;
    border-radius: 50%;
    ${StyledContainer}:hover & {
        background: #F5E4EB;
    }
`;

const StyledHeart = styled(Heart)`
    height: 2.2rem;
    background: none;
    padding: 5px;
    border-radius: 50%;
    ${StyledContainer}:hover & {
        background: #F5E4EB;
    }
`

const StyledSmall = styled.small`
    transform: translateY(8%);
    font-size: 1.2rem;
    margin-left: 2px;

`

const Like = ({like}) => {
    const [liked, setLiked] = useState(like);

    const handleClick = () => {
        setLiked(!liked)
    }

    return (
        <StyledContainer liked={liked} onClick={handleClick}>
            {liked ? <StyledHeart/>  : <StyledHeartOutline/>}
            
            <StyledSmall>12</StyledSmall>
        </StyledContainer>
    )
}

export default Like
