import axios from "axios";
// import { Configuration, OpenAiApi } from "openai";
const CHATGPT_API_KEY = process.env.OPENAI_API_KEY;


export const chatController = async (req, res) => {
    // const config = new Configuration({
    //     apiKey: CHATGPT_API_KEY,
    // })
    // const openai = new OpenAiApi(config);

    // const completion = await openai.createCompletion({
    //     model: "text-devinci-003",
    //     max_tokens: 512,
    //     temprature: 0,
    //     message: "What is Youtube?",
    // })
    // res.send(completion.data.choices[0].text);
    try {

        const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo-1106/completions', {
            prompt: "What is Youtube?",
            max_tokens: 50, // Adjust based on your requirements
            temperature: 0.7 // Adjust based on your requirements
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHATGPT_API_KEY}`
            }
        });

        const generatedText = response.data.choices[0].text.trim();
        // res.json({ response: generatedText });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Internal server error' });
    }
} 