<div align="center">
<img src="public/banner.jpg" height="100">
</div>
<div align="center">

[![Latest Release](https://img.shields.io/badge/Latest%20Version-0.0.0-blue?logo=github)](https://github.com/90barricade93/ai-joke-generator/commits/main)
![Static Badge](https://img.shields.io/badge/Encode_Club-AI_Bootcamp_24Q2-silver)
![Static Badge](https://img.shields.io/badge/GROUP-09-gold)
</div>

# WP_02_EC_AI_24Q2-AI_Joke_Generator
Weekend Project 02 - Encode Club AI BootCamp 24Q2 Repository

## Project Overview
This project is part of the Encode Club AI BootCamp and involves creating a new application from scratch using Next.js, focusing on generating jokes using AI. The application will allow users to customize various joke parameters and generate jokes based on their preferences. Additionally, the AI will evaluate the generated jokes for humor, appropriateness, and potential offensiveness. The project leverages the Text Generation WebUI to serve text generation tasks.

## Features

- **Joke Generation**: Generate jokes using AI with customizable parameters.
- **Customizable Parameters**:
  - Topic (e.g., work, people, animals, food, television)
  - Tone (e.g., witty, sarcastic, silly, dark, goofy)
  - Type of joke (e.g., pun, knock-knock, story)
  - Temperature (randomness/fun level)
- **Joke Evaluation**: AI evaluates jokes for humor, appropriateness, and offensiveness.
- **Integration with Text Generation WebUI**: Serve text generation tasks using the WebUI.

## Project Members Group 9
- [Emmanuel](https://github.com/codehouze)
- [Alessio](https://github.com/AlessioChen)
- [Jan-Christoph](https://github.com/jcklie)
- [Akash](https://github.com/kshntn)
- [Serena](https://github.com/BreadFeet)
- [Raymond](https://github.com/90barricade93/)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm
- Git
- https://github.com/oobabooga/text-generation-webui
- a model that works for your hardware.

### Installing

1. **Clone the Repository**

    ```bash
    git clone https://github.com/90barricade93/ai-joke-generator
    cd ai-joke-generator
    ```

2. **Install Dependencies**

    Using npm:

    ```bash
    npm install ai openai
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory and add a placeholder for your OpenAI API environment variables to prevent 
    ```⨯ Error: The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).```

    ```env
    OPENAI_API_KEY="placeholder"
    ```

4. **Run the Development Server**

    Using npm:

    ```bash
    npm run dev
    ```

5. **Run the Text Generation WebUI**

    Follow the instructions in the Text Generation WebUI documentation to set up and run the WebUI on your local environment.

    ```bash
    cd /path/to/text-generation-webui
    ./start_linux.sh -api
    ```

## Conclusion

This project demonstrates the integration of Next.js with AI capabilities, providing users with a fun and interactive way to generate jokes. By customizing parameters and evaluating the generated content, users can explore the capabilities of AI in creative content generation. The Text Generation WebUI serves as a powerful backend for handling text generation tasks, showcasing the potential of local AI model deployment.

Feel free to contribute, suggest improvements, or ask questions. Happy coding!

### Acknowledgements
We would like to thank the [Encode Club AI BootCamp](https://github.com/Encode-Club-AI-Bootcamp) for this opportunity and [@mpagani](https://github.com/MatheusDaros) for his guidance.

<div align="center">

![GitHub forks](https://img.shields.io/github/forks/90barricade93/ai-joke-generator) &ensp; © GROUP 9 - AI 24Q2 &ensp; ![GitHub stars](https://img.shields.io/github/stars/90barricade93/ai-joke-generator) 

</div>

--------