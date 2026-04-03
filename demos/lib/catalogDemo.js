import { el } from './dom.js';

export function buildCatalogDemo({ title, items }) {
  return el('section', {
    className: 'story-shell',
    children: [
      el('header', {
        className: 'story-header',
        children: [
          el('p', { className: 'kicker', text: 'Catalog Demo' }),
          el('h1', { text: title })
        ]
      }),
      el('div', {
        className: 'story-body',
        children: [
          el('ul', {
            attrs: { role: 'list' },
            children: items.map((item) =>
              el('li', {
                children: [
                  el('strong', { text: item.name }),
                  el('p', { text: item.description })
                ]
              })
            )
          })
        ]
      })
    ]
  });
}

export const catalogSeed = {
  title: 'Remaining demo queue',
  items: [
    {
      name: 'Comparative layout',
      description: 'Side-by-side evaluation blocks for copy and image placeholders.'
    },
    {
      name: 'Story card feed',
      description: 'Compact card format for validating density and visual rhythm.'
    },
    {
      name: 'Briefing notes',
      description: 'Fast plain-text mode for editorial standups and internal review.'
    }
  ]
};
