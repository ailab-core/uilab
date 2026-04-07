import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenTextIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'UILab',
    },
    githubUrl: 'https://github.com/ailab-core/uilab',
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        icon: <BookOpenTextIcon />
      },
    ]
  };
}
