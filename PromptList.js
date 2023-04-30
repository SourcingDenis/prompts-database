import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import PromptItem from './PromptItem';

const PromptList = () => {
  const [prompts, setPrompts] = useState([]);

  // Load prompts from GitHub CSV file
  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = 'https://raw.githubusercontent.com/your-username/your-repo/main/your-file.csv';

      const response = await fetch(csvUrl);
      const csvText = await response.text();

      const parsedData = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim(),
      });

      // Assuming the CSV has 'id', 'text', and 'votes' columns
      const promptsData = parsedData.data.map(({ id, text, votes }) => ({
        id: parseInt(id, 10),
        text,
        votes: parseInt(votes, 10),
      }));

      setPrompts(promptsData);
    };

    fetchData();
  }, []);

  return (
    <div className="prompt-list">
      {prompts.map((prompt) => (
        <PromptItem key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default PromptList;
