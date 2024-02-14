import React, { useState } from 'react';
import { OPENAI_API_KEY } from '../util/constants';
import {
  Container,
  CustomInput,
  GenerateButton,
  Spinner,
} from '../styles/styles';

interface ImageGeneratorProps {
  onGenerateImage: (generatedImage: string) => void;
  onGenerateText: (generatedText: string) => void;
  onGenerateTitle: (generatedTitle: string) => void;
  onGenerateButtonText: (generatedButtonText: string) => void;
  isLoading: boolean;
  isBannerSelected: boolean;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({
  onGenerateImage,
  onGenerateText,
  onGenerateTitle,
  onGenerateButtonText,
  isLoading,
  isBannerSelected,
}) => {
  const [tweet, setTweet] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const callOpenAIAPI = async () => {
    try {
      if (buttonClicked) {
        return;
      }

      console.log(
        'Generate button pressed. Calling the OpenAI API for image and text generation...'
      );

      setButtonClicked(true);

      const responseImage = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + OPENAI_API_KEY,
          },
          body: JSON.stringify({
            model: 'dall-e-3',
            prompt: tweet,
            n: 1,
            size: '1024x1024',
          }),
        }
      );

      if (!responseImage.ok) {
        const errorMessage = await responseImage.text();
        throw new Error(`Image generation failed: ${errorMessage}`);
      }

      const imageData = await responseImage.json();
      console.log('Image response:', imageData);
      const generatedImage = imageData.data[0].url;
      onGenerateImage(generatedImage);

      setTweet('');

      const responseTitle = await fetch(
        'https://api.openai.com/v1/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + OPENAI_API_KEY,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Generate a short uppercase title for the following input: ${tweet}`,
            max_tokens: 50,
            temperature: 0.7,
          }),
        }
      );

      if (!responseTitle.ok) {
        const errorMessage = await responseTitle.text();
        throw new Error(`Image generation failed: ${errorMessage}`);
      }
      const titleData = await responseTitle.json();
      console.log('Title response:', titleData);
      const generatedTitle = titleData.choices[0].text.trim();
      onGenerateTitle(generatedTitle);

      const responseDescription = await fetch(
        'https://api.openai.com/v1/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + OPENAI_API_KEY,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Generate a suitable add description for the following input:${tweet}`,
            max_tokens: 50,
            temperature: 0.7,
          }),
        }
      );
      if (!responseDescription.ok) {
        const errorMessage = await responseDescription.text();
        throw new Error(`Image generation failed: ${errorMessage}`);
      }

      const descriptionData = await responseDescription.json();
      console.log('Description response: ', descriptionData);
      const generatedText = descriptionData.choices[0].text;
      onGenerateText(generatedText);

      const responseButton = await fetch(
        'https://api.openai.com/v1/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + OPENAI_API_KEY,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `Generate a 3-4 words call to action for the following input: ${tweet} and make it uppercase`,
            max_tokens: 50,
            temperature: 0.7,
          }),
        }
      );

      if (!responseButton.ok) {
        const errorMessage = await responseButton.text();
        throw new Error(`Image generation failed: ${errorMessage}`);
      }
      const buttonData = await responseButton.json();
      console.log('Button response:', buttonData);
      const generatedButtonText = buttonData.choices[0].text.trim();
      onGenerateButtonText(generatedButtonText);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setButtonClicked(false);
    }
  };

  return (
    <Container>
      <CustomInput
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="Paste your description for your add here"
      />
      {isBannerSelected && tweet && (
        <div>
          <GenerateButton onClick={callOpenAIAPI} disabled={buttonClicked}>
            {buttonClicked ? <Spinner /> : 'Generate'}
          </GenerateButton>
        </div>
      )}
    </Container>
  );
};

export default ImageGenerator;
