import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About me',
      href: getPermalink('/aboutme'),
    },
    {
      text: 'CV',
      href: getPermalink('/cv'),
    },
  ],
};
