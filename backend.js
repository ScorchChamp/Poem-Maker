const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);

app.get('/generatePoem/:name/:keywords', async (req, res) => {
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: `Write a rhyming poem about ${req.params.name} that includes the keywords: ${req.params.keywords}.`,
      max_tokens: 200,
      temperature: 0.5,
    });
    console.log(response.data.usage)
    res.send(response.data.choices)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))