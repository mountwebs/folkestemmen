import React, {useState, useContext} from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCircle} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'

import UserContext from '../../UserContext'


const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text.primary};
    color: ${({theme, liked}) => liked ? "#F34C90" : theme.colors.text.muted};
    transform: translateY(5%);
    &:hover {
        opacity: ${({liked}) => liked ? "100%" : "30%"};
        color: #F34C90
    }
    
    .fa-circle {
        color: white;
    }

    &:hover .fa-circle {
        color: #F5E4EB;
    }

    &:hover .fa-heart {
        color: #F34C90;
    }
`

const StyledSmall = styled.small`
    transform: translateY(3%);
    font-size: 1.2rem;
    margin-left: 7px;
    user-select: none;
`


const Like = ({like, likes}) => {
    const [liked, setLiked] = useState(like);
    const userId = useContext(UserContext);
    
    const isLiked = likes && likes.some(user => user === userId)

    const handleClick = () => {
        setLiked(!liked)
    }

    return (
        <StyledContainer liked={liked} onClick={handleClick}>
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCircle}  transform={'grow-12'} id="test"/>
                {liked ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={farHeart} />}
                
            </span>
            <StyledSmall>{likes ? likes.length : ""}</StyledSmall>
        </StyledContainer>
    )
}

export default Like
