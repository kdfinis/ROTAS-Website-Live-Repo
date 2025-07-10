// The Stone Villa (Lot1) property data

export default {
  id: 'the-stone-villa', // for URLs and code
  name: 'The Stone Villa', // full display name
  lot: 'Lot1',
  subtitle: 'Main Residence',
  price: '€890,000 EUR',
  location: 'Croatian Adriatic Coast',
  type: 'villa',
  description: 'Traditional Croatian stone villa showcasing generations of Mediterranean craftsmanship, where every stone tells a story of island heritage.',
  longDescription: 'This magnificent stone villa stands as a testament to Croatian architectural heritage. Built with locally quarried stone and traditional techniques passed down through generations, the villa features six spacious chambers, each with unique character and sea views. The thick stone walls provide natural insulation, keeping the interior cool in summer and warm during Mediterranean winters. Original wooden beams, traditional tile floors, and carefully preserved architectural details create an atmosphere of timeless elegance.',
  features: [
    '3 Bedrooms, each with Private En-Suite Bathrooms',
    'Private Balconies for Each Bedroom',
    'Panoramic Sea View Vistas',
    'Traditional Stone Construction',
    'Heritage Architecture',
    'Stone Terrace with Outdoor Living Space',
    'Full Electrical Grid Connection',
    'Solar Power Off-Grid Capacity',
    'Fully Gated Estate',
    'Private Access Road'
  ],
  specifications: {
    'Villa Size': '162 m²',
    'Bedrooms': '6',
    'Bathrooms': '4',
    'Built': '18th Century',
    'Terrace': '200 m²',
    'Renovation': '2021'
  },
  images: [
    // Strict naming: the-stone-villa-lot1-panoramic-19.jpg
    '/assets/images/villa/panoramic/the-stone-villa-lot1-panoramic-19.jpg',
    '/assets/images/villa/living-room/the-stone-villa-lot1-living-room-01.jpg',
    '/assets/images/villa/bedrooms-bathrooms/the-stone-villa-lot1-bedrooms-bathrooms-01.jpg',
    '/assets/images/villa/exterior/the-stone-villa-lot1-exterior-01.jpg',
    '/assets/images/villa/poolside/the-stone-villa-lot1-poolside-01.jpg'
  ],
  gallery: {
    panoramic: {
      visible: true,
      images: ['/assets/images/villa/panoramic/the-stone-villa-lot1-panoramic-19.jpg']
    },
    livingRoom: {
      visible: true,
      images: ['/assets/images/villa/living-room/the-stone-villa-lot1-living-room-01.jpg']
    },
    bedrooms: {
      visible: true,
      images: ['/assets/images/villa/bedrooms-bathrooms/the-stone-villa-lot1-bedrooms-bathrooms-01.jpg']
    },
    exterior: {
      visible: true,
      images: ['/assets/images/villa/exterior/the-stone-villa-lot1-exterior-01.jpg']
    },
    poolside: {
      visible: true,
      images: ['/assets/images/villa/poolside/the-stone-villa-lot1-poolside-01.jpg']
    }
  },
  documentation: [
    { label: 'Villa Overview', file: '/docs/the-stone-villa-lot1-overview.pdf' },
    { label: 'Architectural Plans', file: '/docs/the-stone-villa-lot1-plans.pdf' },
    { label: 'Title Deed', file: '/docs/the-stone-villa-lot1-title.pdf' }
  ],
  map: {
    lat: 43.325490,
    lng: 16.451220
  },
  contact: {
    whatsapp: 'https://wa.me/352621815753',
    email: 'karlodefinis@gmail.com',
    phone: '+38598432648'
  }
}; 