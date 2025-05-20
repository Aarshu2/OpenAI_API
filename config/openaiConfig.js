// config/openaiConfig.js
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Must be defined in your .env file
});

module.exports = openai;
