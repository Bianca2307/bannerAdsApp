import { FC } from 'react';
import styled from 'styled-components';
import {
  InstagramBannerContainer,
  BannerTitle,
  BannerContent,
  BannerImage,
  InstagramActionButton,
} from '../styles/styles';
import { InstagramPost } from '../util/constants';
import { instagramPostElements } from './bannerElements';

interface InstagramPostBannerProps {
  generatedTitle: string;
  generatedText: string;
  generatedImage: string;
  generatedButton: string;
  isLoading: boolean;
  selectedTemplate: string;
}

const InstagramPostBanner: FC<InstagramPostBannerProps> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedButton,
  isLoading,
  selectedTemplate,
}) => {
  console.log('selectedTemplate in InstagramBanner:', selectedTemplate);

  if (selectedTemplate !== InstagramPost) {
    console.log('Returning null in InstagramBanner');
    return null;
  }

  return (
    <InstagramBannerContainer>
      <BannerTitle>
        {generatedTitle?.slice(1, -1) || instagramPostElements.text}
      </BannerTitle>
      <BannerContent>
        <p>{generatedText || instagramPostElements.description}</p>
        <BannerImage src={generatedImage} alt="Instagram Post" />
        <InstagramActionButton>
          {generatedButton?.slice(1, -1) || instagramPostElements.callToAction}
        </InstagramActionButton>
      </BannerContent>
    </InstagramBannerContainer>
  );
};

export default InstagramPostBanner;
