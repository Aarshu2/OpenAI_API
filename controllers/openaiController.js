// controllers/openaiController.js
const openai = require('../config/openaiConfig');

const generateMeta = async (req, res) => {
  const { title } = req.body

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [  
      { role: 'user', content: `Create YouTube metadata for: ${title}` },
    ],
  });


  const tags = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', 
        content: `Come up with 10 keywords for a Youtube video called ${title}` },
    ],
  });

  res.status(200).json({
    completion: completion.choices[0].message,
    tags: tags.choices[0].message
  })
};


const generateImage = async (req, res) => {
  try {
    const response = await openai.images.generate({
      prompt: req.body.prompt,
      n: 1,
      size: '512x512',
    });
    
    res.json({
      url: response.data[0].url
    })

  } catch (err) {
    console.error('Error generating image:', err);
  }
};

module.exports = { generateMeta, generateImage };
