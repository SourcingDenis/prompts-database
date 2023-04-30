import React, { useState } from 'react';

const VoteButton = ({ promptId, votes }) => {
  const [voteCount, setVoteCount] = useState(votes);

  const handleVote = () => {
    setVoteCount(voteCount + 1);
    // Update vote count on the backend
  };

  return (
    <button className="vote-button" onClick={handleVote}>
      Vote ({voteCount})
    </button>
  );
};

export default VoteButton;
