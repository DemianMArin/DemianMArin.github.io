import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About me',
      href: getPermalink('/portfolio_pages/aboutme'),
    },
    {
      text: 'CV',
      href: getPermalink('/portfolio_pages/cv'),
    },
  ],
};
