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


const generateImage = async (desc) => {
  try {
    // call the correct images endpoint
    const response = await openai.images.generate({
      prompt: desc,
      n: 1,
      size: '512x512',
    });

    // the URL lives at response.data[0].url
    console.log(response.data[0].url);
  } catch (err) {
    console.error('Error generating image:', err);
  }
};

module.exports = { generateMeta, generateImage };
