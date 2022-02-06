import React, { useRef, useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import MenuButton from './MenuButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClick } from 'rooks';
import UserContext from '../../UserContext';

const StyledMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.answerMenu.background};
  border-radius: 25px;
`;

const StyledButtonContainer = styled.div``;

const AnswerMenu = ({
  setActiveMenu,
  deleteAnswer,
  answerId,
  setEditable,
  editable,
}) => {
  const userData = useContext(UserContext);
  const ref = useRef();
  function handleOutsideClick() {
    setActiveMenu(false);
  }
  useOutsideClick(ref, handleOutsideClick);
  const theme = useTheme();

  const handleDeleteClick = async () => {
    setActiveMenu(false);
    await deleteAnswer(answerId);
    userData.setPosts(userData.posts.filter((post) => post !== answerId));
  };

  const handleEditClick = () => {
    setEditable(!editable);
    setActiveMenu(false);
  };

  return (
    <StyledMenu ref={ref}>
      <MenuButton
        style={{ color: theme.colors.answerMenu.deleteColor }}
        clickHandler={handleDeleteClick}
        icon={
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{ color: theme.colors.answerMenu.deleteColor }}
          />
        }
      >
        Slett inspill
      </MenuButton>
      <MenuButton
        clickHandler={handleEditClick}
        icon={<FontAwesomeIcon icon={faPen} />}
      >
        Rediger inspill
      </MenuButton>
    </StyledMenu>
  );
};

export default AnswerMenu;
