import React, { useState, useEffect } from 'react';
import BannerSelector from './selectors/BannerSelector';
import BannerRenderer from './renderer/BannerRenderer';
import ImageGenerator from './requests/ImageGenerator';

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [generatedTitle, setGeneratedTitle] = useState<string | null>(null);
  const [generatedButton, setGeneratedButton] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTitleGeneration = (generatedTitleUrl: string) => {
    setGeneratedTitle(generatedTitleUrl);
    setIsLoading(false);
  };

  const handleImageGeneration = (generatedImageUrl: string) => {
    setGeneratedImage(generatedImageUrl);
    setIsLoading(false);
  };

  const handleTextGeneration = (generatedTextUrl: string) => {
    setGeneratedText(generatedTextUrl);
    setIsLoading(false);
  };
  const handleButtonGeneration = (generatedButtonUrl: string) => {
    setGeneratedButton(generatedButtonUrl);
    setIsLoading(false);
  };

  const handleTemplateSelect = (template: string) => {
    if (template !== selectedTemplate) {
      setGeneratedText(null);
      setGeneratedImage(null);
      setSelectedTemplate(template);
      setGeneratedButton(null);
      setGeneratedTitle(null);
      setIsLoading(true);
    }
    //setGeneratedText(template);
  };

  useEffect(() => {
    if (selectedTemplate) {
      setIsLoading(true);
    }
  }, [selectedTemplate]);

  return (
    <div>
      <BannerSelector handleTemplateSelect={handleTemplateSelect} />
      <ImageGenerator
        onGenerateTitle={handleTitleGeneration}
        onGenerateImage={handleImageGeneration}
        onGenerateText={handleTextGeneration}
        onGenerateButtonText={handleButtonGeneration}
        isLoading={isLoading}
        isBannerSelected={!!selectedTemplate}
      />
      <BannerRenderer
        selectedTemplate={selectedTemplate}
        generatedTitle={generatedTitle}
        generatedText={generatedText}
        generatedImage={generatedImage}
        generatedButton={generatedButton}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
