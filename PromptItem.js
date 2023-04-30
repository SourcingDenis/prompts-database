import React from 'react';
import VoteButton from './VoteButton';

const PromptItem = ({ prompt }) => {
  const { id, text, votes } = prompt;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="prompt-item">
      <div className="prompt-text" onClick={handleCopy}>
        {text}
      </div>
      <VoteButton promptId={id} votes={votes} />
    </div>
  );
};

export default PromptItem;
