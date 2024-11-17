import { useState } from 'react';

const useOpenAI = (apiKey) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const askQuestion = async (question) => {
    setLoading(true);
    setError(null);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };    
    try {
      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          model: 'gpt-4-turbo',
          messages: [
            {
              role: 'system',
              content: "you are an encouraging to do app. you reply with an encouraging message for doing the task you are asked about"
            },
            {
              role: 'user',
              content: `${question}`
            }
          ]
      })
    });

      if (!result.ok) {
        throw new Error('Failed to fetch response from OpenAI');
      }

      const data = await result.json();
      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, askQuestion };
};

export default useOpenAI;
