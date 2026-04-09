export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  teaser: string;
  summary: string;
  tags: string[];
  challenge: string;
  responsibilities: string[];
  outcomes: string[];
  whyItMattered: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'orbex-product-systems-growth',
    title: 'Orbex Group: aligning product, systems, and commercial execution',
    company: 'Orbex Group',
    role: 'Product Strategy & Execution',
    period: 'Oct 2023 - Mar 2026',
    teaser: 'A short case study on connecting industrial product strategy, CRM and workflow systems, analytics, and GTM into a clearer operating model.',
    summary: 'Orbex needed stronger connective tissue between product strategy, business priorities, and the systems that supported commercial execution. The work cut across industrial hardware, CRM and workflow design, analytics, and go-to-market decisions.',
    tags: ['Industrial Systems', 'CRM / Workflow', 'GTM', 'Product Strategy'],
    challenge: 'The challenge was not one isolated feature. It was a broader product and systems problem: multiple product lines, commercial goals, and internal workflows needed a tighter roadmap and better operational clarity.',
    responsibilities: [
      'Owned product strategy across industrial hardware and supporting internal systems.',
      'Helped shape CRM and workflow thinking around how leads, funnel quality, and commercial execution actually worked.',
      'Aligned product, operations, analytics, and go-to-market stakeholders around clearer priorities.',
      'Supported funding conversations by connecting roadmap direction to business value.'
    ],
    outcomes: [
      'Created a clearer roadmap across hardware, systems, and commercial priorities.',
      'Improved lead quality and funnel discipline through better systems thinking.',
      'Helped secure funding by making the product and growth story easier to understand and back.'
    ],
    whyItMattered: 'This is the kind of product work that usually gets missed in tidy portfolio writeups. It was messy, cross-functional, and operationally important. The value came from creating clarity people could execute against.'
  },
  {
    slug: 'viessmann-connected-products-platforms',
    title: 'Viessmann: leading a portfolio across apps, tools, portals, and connected products',
    company: 'Viessmann',
    role: 'Portfolio & Product Leadership',
    period: 'Jan 2021 - Aug 2023',
    teaser: 'A short case study on managing a multi-product portfolio across customer apps, internal tools, and connected climate-tech platforms.',
    summary: 'At Viessmann, the work spanned multiple product surfaces, including apps, portals, design tools, and connected products. The job was to improve focus, launches, and customer experience across a portfolio instead of treating each product in isolation.',
    tags: ['Climate Tech', 'Connected Products', 'Portfolio Management', 'Customer Experience'],
    challenge: 'The portfolio had real breadth. That created opportunity, but it also meant prioritization, launch coordination, and product experience had to be managed across multiple teams and product types at once.',
    responsibilities: [
      'Led portfolio-level product work across apps, portals, design tools, and connected products.',
      'Drove prioritization and roadmap decisions across multiple product surfaces.',
      'Worked across functions to improve launches, execution discipline, and customer experience.',
      'Balanced product breadth with the need for sharper focus and clearer delivery.'
    ],
    outcomes: [
      'Improved coordination across a multi-product portfolio.',
      'Supported launches and growth across digital and connected product surfaces.',
      'Helped create a more coherent customer experience across the portfolio.'
    ],
    whyItMattered: 'This was strong portfolio product work, not just feature management. It required judgment across product strategy, execution, and customer experience in a business where hardware and software were tightly connected.'
  }
];
