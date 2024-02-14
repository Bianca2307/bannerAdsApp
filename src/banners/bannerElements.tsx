export const instagramPostElements: BannerElements = {
  text: 'Instagram Post Preview',
  description: '500 x 500px',
  images: 'insta.png',
  callToAction: 'Visit our profile',
};

export const twitterHeaderElements: BannerElements = {
  text: 'Twitter Header Preview',
  description: '1500 x 500px',
  images: 'Twitter Images',
  callToAction: 'Follow us',
};

export const storyElements: BannerElements = {
  text: 'Story Preview',
  description: '1080 x 1920px',
  images: 'Story Images',
  callToAction: 'Swipe up',
};

interface BannerElements {
  text: string;
  images: string;
  description: string;
  callToAction: string;
}
