import { FC } from 'react';
import {
  TwitterBannerContainer,
  TwitterBannerTitle,
  TwitterBannerContent,
  TwitterBannerImage,
  TwitterActionButton,
  TwitterBannerText,
} from '../styles/styles';

import { TwitterHeader } from '../util/constants';
import { twitterHeaderElements } from './bannerElements';

interface TwitterHeaderBannerProps {
  generatedTitle: string;
  generatedText: string;
  generatedImage: string;
  generatedButton: string;
  isLoading: boolean;
  selectedTemplate: string;
}

const TwitterHeaderBanner: FC<TwitterHeaderBannerProps> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedButton,
  isLoading,
  selectedTemplate,
}) => {
  if (selectedTemplate !== TwitterHeader) {
    return null;
  }

  return (
    <TwitterBannerContainer>
      <TwitterBannerTitle>
        {generatedTitle?.slice(1, -1) || twitterHeaderElements.text}
      </TwitterBannerTitle>
      <TwitterBannerContent>
        <TwitterBannerText>
          {generatedText || twitterHeaderElements.description}
        </TwitterBannerText>
        <TwitterBannerImage src={generatedImage} alt="Twitter Post" />
      </TwitterBannerContent>
      <TwitterActionButton>
        {generatedButton?.slice(1, -1) || twitterHeaderElements.callToAction}
      </TwitterActionButton>
    </TwitterBannerContainer>
  );
};

export default TwitterHeaderBanner;
