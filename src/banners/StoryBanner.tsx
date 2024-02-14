import { FC } from 'react';
import {
  StoryBannerContainer,
  StoryBannerTitle,
  StoryBannerContent,
  StoryBannerImage,
  StoryActionButton,
  StoryBannerText,
} from '../styles/styles';

import { Story } from '../util/constants';
import { storyElements } from './bannerElements';

interface StoryBannerProps {
  generatedTitle: string;
  generatedText: string;
  generatedImage: string;
  generatedButton: string;
  isLoading: boolean;
  selectedTemplate: string;
}

const StoryBanner: FC<StoryBannerProps> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedButton,
  isLoading,
  selectedTemplate,
}) => {
  if (selectedTemplate !== Story) {
    return null;
  }

  return (
    <StoryBannerContainer>
      <StoryBannerTitle>
        {generatedTitle?.slice(1, -1) || storyElements.text}
      </StoryBannerTitle>
      <StoryBannerContent>
        <StoryBannerImage src={generatedImage} alt="Story Post" />
        <StoryBannerText>{generatedText || storyElements.description}</StoryBannerText>
      </StoryBannerContent>
      <StoryActionButton>
          {generatedButton?.slice(1, -1) || storyElements.callToAction}
        </StoryActionButton>
    </StoryBannerContainer>
  );
};

export default StoryBanner;
