import { el } from './dom.js';

export function buildEditorialDemo({
  title,
  dek,
  sections
}) {
  const header = el('header', {
    className: 'story-header',
    children: [
      el('p', { className: 'kicker', text: 'Editorial Demo' }),
      el('h1', { text: title }),
      el('p', { className: 'dek', text: dek })
    ]
  });

  const body = el('main', {
    className: 'story-body',
    children: sections.map((section) =>
      el('section', {
        className: 'story-section',
        children: [
          el('h2', { text: section.heading }),
          ...section.paragraphs.map((paragraph) => el('p', { text: paragraph }))
        ]
      })
    )
  });

  return el('article', {
    className: 'story-shell',
    children: [header, body]
  });
}

export const editorialSeed = {
  title: 'Build once, preview everywhere',
  dek: 'A small UI surface for demoing pre-image workflows before production integration.',
  sections: [
    {
      heading: 'Goal',
      paragraphs: [
        'The editorial demo mirrors a real publishing stack, but keeps data and layout intentionally tiny.',
        'Contributors can modify copy, visual hierarchy, and rendering behavior without touching app runtime code.'
      ]
    },
    {
      heading: 'Workflow',
      paragraphs: [
        'Each demo is powered by reusable helper libraries under demos/lib.',
        'As a result, follow-up demo types can share primitives while varying tone and structure.'
      ]
    }
  ]
};
