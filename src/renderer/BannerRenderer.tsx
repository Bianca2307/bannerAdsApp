import { FC } from 'react';
import InstagramBanner from '../banners/InstagramBanner';
import TwitterHeaderBanner from '../banners/TwitterHeaderBanner';
import StoryBanner from '../banners/StoryBanner';
import { InstagramPost, Story, TwitterHeader } from '../util/constants';

interface BannerRendererProps {
  selectedTemplate: string;
  generatedImage: string;
  isLoading: boolean;
  generatedText: string;
  generatedTitle: string;
  generatedButton: string;
}

const BannerRenderer: FC<BannerRendererProps> = ({
  selectedTemplate,
  generatedImage,
  generatedButton,
  isLoading,
  generatedText,
  generatedTitle,
}) => {
  console.log('selectedTemplate in BannerRenderer:', selectedTemplate);
  return (
    <div>
      {selectedTemplate === InstagramPost && (
        <InstagramBanner
          generatedTitle={generatedTitle}
          generatedText={generatedText}
          generatedImage={generatedImage}
          generatedButton={generatedButton}
          isLoading={isLoading}
          selectedTemplate={selectedTemplate}
        />
      )}
      {selectedTemplate === TwitterHeader && (
        <TwitterHeaderBanner
          generatedTitle={generatedTitle}
          generatedText={generatedText}
          generatedImage={generatedImage}
          generatedButton={generatedButton}
          isLoading={isLoading}
          selectedTemplate={selectedTemplate}
        />
      )}
      {selectedTemplate === Story && (
        <StoryBanner
          generatedTitle={generatedTitle}
          generatedText={generatedText}
          generatedImage={generatedImage}
          generatedButton={generatedButton}
          isLoading={isLoading}
          selectedTemplate={selectedTemplate}
        />
      )}
    </div>
  );
};

export default BannerRenderer;
