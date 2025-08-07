const aiService = require('../services/ai.service'); // Importing aiService to handle AI-related logic
module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt; // Extracting the prompt from the query parameters

  if (!prompt) {
    return res.status(400).send({ error: "Prompt is required" }); // Return error if prompt is not provided
  }


    const response = await aiService(prompt); // Call the aiService with the prompt
res.send(response); // Send the response back to the client
};