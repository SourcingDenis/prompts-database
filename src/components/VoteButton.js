import React, { useState } from 'react';
import { IconButton, Badge } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';

const VoteButton = ({ promptId, votes }) => {
  const [voteCount, setVoteCount] = useState(votes);

  const handleVote = () => {
    setVoteCount(voteCount + 1);
    // Update vote count on the backend
  };

  return (
    <IconButton onClick={handleVote}>
      <Badge badgeContent={voteCount} color="primary">
        <ThumbUp />
      </Badge>
    </IconButton>
  );
};

export default VoteButton;
