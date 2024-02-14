import { FunctionComponent, useState } from 'react';
import { Button } from '../styles/styles';

interface BannerSelectorProps {
  handleTemplateSelect: (template: string) => void;
}

const BannerSelector: FunctionComponent<BannerSelectorProps> = ({
  handleTemplateSelect,
}) => {
  const [selectedBanner, setSelectedBanner] = useState<string | null>(null);

  const handleBannerClick = (template: string) => {
    setSelectedBanner(template);
    handleTemplateSelect(template);
  };

  return (
    <div>
      <h1>Select Banner Template</h1>
      <Button
        selected={selectedBanner === 'InstagramPost'}
        onClick={() => handleBannerClick('InstagramPost')}
      >
        Instagram Post
      </Button>
      <Button
        selected={selectedBanner === 'TwitterHeader'}
        onClick={() => handleBannerClick('TwitterHeader')}
      >
        Twitter Header
      </Button>
      <Button
        selected={selectedBanner === 'Story'}
        onClick={() => handleBannerClick('Story')}
      >
        Story
      </Button>
    </div>
  );
};

export default BannerSelector;
