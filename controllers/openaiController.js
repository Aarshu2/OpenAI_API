// controllers/openaiController.js
const openai = require('../config/openaiConfig');

const generateMeta = async (title) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [  
      { role: 'user', content: `Create YouTube metadata for: ${title}` },
    ],
  });

  console.log(completion.choices[0].message.content);

  const tags = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', 
        content: `Come up with 10 keywords for a Youtube video called ${title}` },
    ],
  });

  console.log(tags.choices[0].message.content);

};

module.exports = { generateMeta };
