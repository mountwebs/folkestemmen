import React from 'react';
import Tag from '../AnswerBoard/Tag';

const InputTags = ({ tags }) => {
  return (
    <>
      {tags.map((tagData) => {
        return (
          <Tag key={tagData._id} tagColor={tagData.color}>
            {tagData.name}
          </Tag>
        );
      })}
    </>
  );
};

export default InputTags;
