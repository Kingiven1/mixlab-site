// ──────────────────────────────────────────────────────────────────────────
// COMMUNITY PARTNER DIRECTORY (Digital Experience Guide)
//
// Add a listing here only once it reaches "Published" in the GlobalLYNK
// admin (/admin/partners): approved → paid → materials → listing reviewed.
// Applications themselves stay private in Supabase and never come here.
//
// placement: 'featured' (top of its category, larger logo) or 'standard'.
// Within a category: Featured first, then Standard in the order listed.
// Empty categories are hidden automatically.
// ──────────────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { key: 'health_wellness', label: 'Health & Wellness' },
  { key: 'ai_tech_creative', label: 'AI, Technology & Creative Futures' },
  { key: 'business_financial', label: 'Business Development & Financial Growth' },
  { key: 'community_social', label: 'Community & Social Capital' },
];

// Mirrors the live GlobalLYNK site (src/components/MixLabPartnership.jsx).
// If you change prices or benefits there, change them here too.
export const PACKAGES = {
  standard: {
    name: 'Standard',
    price: 500,
    capacityNote: 'Three per category',
    benefits: [
      'Business logo',
      'Short business description',
      'Direct website or social media link',
      'Optional attendee offer or resource',
      'Standard placement within the selected category',
      'Inclusion in the Community Partner directory',
    ],
  },
  featured: {
    name: 'Featured',
    price: 1000,
    capacityNote: 'One per category',
    benefits: [
      'Larger business logo',
      'Expanded business description',
      'Direct website or social media link',
      'Optional attendee offer or resource',
      'Top placement within the selected category',
      'Inclusion in the Community Partner directory',
      'Logo included in the collective on-site partner display',
    ],
  },
};

export default {
  categories: CATEGORIES,
  packages: PACKAGES,
  listings: [
    // Examples so you can see the layout with `npm run dev:drafts`.
    // They're drafts, so they never appear on the real site. Delete them once real partners are in.
    { status: 'draft', name: 'Example Wellness Studio', category: 'health_wellness', placement: 'featured', logo: null, description: 'Short description supplied in listing materials.', link: 'https://example.com', offer: '15% off a first class for Mix Lab guests' },
    { status: 'draft', name: 'Example Therapy Collective', category: 'health_wellness', placement: 'standard', logo: null, description: 'Short description supplied in listing materials.', link: 'https://example.com', offer: null },
    { status: 'draft', name: 'Example Juice Bar', category: 'health_wellness', placement: 'standard', logo: null, description: 'Short description supplied in listing materials.', link: 'https://example.com', offer: null },
    { status: 'draft', name: 'Example AI Studio', category: 'ai_tech_creative', placement: 'standard', logo: null, description: 'Short description supplied in listing materials.', link: 'https://example.com', offer: null },
  ],
};
