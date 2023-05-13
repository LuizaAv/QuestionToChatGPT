const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let returnedValue = data

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  async function askAquestionCHATGPT(text){
      try{
          const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              max_tokens: 2000
            });
          console.log(completion.data.choices[0].text);
      }catch(error){
          console.log(error)
      }
  }
  
  askAquestionCHATGPT(returnedValue)
})

