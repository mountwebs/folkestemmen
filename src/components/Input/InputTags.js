import React from 'react';
import Tag from '../AnswerBoard/Tag';

const InputTags = ({ tags, onTagMouseDown }) => {
  return (
    <>
      {tags.map((tagData) => {
        return (
          <Tag
            key={tagData._id}
            tagColor={tagData.color}
            onMouseDown={onTagMouseDown}
            deletable
          >
            {tagData.name}
          </Tag>
        );
      })}
    </>
  );
};

export default InputTags;
