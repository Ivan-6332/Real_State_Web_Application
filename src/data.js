// import house images
import House3 from './assets/img/houses/house3.jpg';
import House4 from './assets/img/houses/house4.jpg';
import House7 from './assets/img/houses/house7.jpg';
import House8 from './assets/img/houses/house8.jpg';
import House9 from './assets/img/houses/house9.jpg';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House3Lg from './assets/img/houses/house3lg.jpg';
import House4Lg from './assets/img/houses/house4lg.jpg';
import House7Lg from './assets/img/houses/house7lg.jpg';
import House8Lg from './assets/img/houses/house8lg.jpg';
import House9Lg from './assets/img/houses/house9lg.jpg';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';

// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

// import house details photos 
import House3_1 from './assets/img/houses/House3_1.jpg';
import House3_2 from './assets/img/houses/House3_2.jpg';
import House3_3 from './assets/img/houses/House3_3.jpg';
import House3_4 from './assets/img/houses/House3_4.jpg';
import House3_5 from './assets/img/houses/House3_5.jpg';
import House4_1 from './assets/img/houses/house4_1.jpg';
import House4_2 from './assets/img/houses/house4_2.jpg';
import House4_3 from './assets/img/houses/house4_3.jpg';
import House4_4 from './assets/img/houses/house4_4.jpg';
import House4_5 from './assets/img/houses/house4_5.jpg';
import House7_1 from './assets/img/houses/house7_1.jpg';
import House7_2 from './assets/img/houses/house7_2.jpg';
import House7_3 from './assets/img/houses/house7_3.jpg';
import House7_4 from './assets/img/houses/house7_4.jpg';
import House7_5 from './assets/img/houses/house7_5.jpg';
import House8_1 from './assets/img/houses/house8_1.jpg';
import House8_2 from './assets/img/houses/house8_2.jpg';
import House8_3 from './assets/img/houses/house8_3.jpg';
import House8_4 from './assets/img/houses/house8_4.jpg';
import House8_5 from './assets/img/houses/house8_5.jpg';
import House9_1 from './assets/img/houses/house9_1.jpg';
import House9_2 from './assets/img/houses/house9_2.jpg';
import House9_3 from './assets/img/houses/house9_3.jpg';
import House9_4 from './assets/img/houses/house9_4.jpg';
import House9_5 from './assets/img/houses/house9_5.jpg';

export const housesData = [
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor ',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    additionalImages: [House3_1, House3_2, House3_3, House3_4, House3_5],
    blueprint: './assets/img/houses/house3-blueprint.png',
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor ',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
    additionalImages: [House4_1, House4_2, House4_3, House4_4, House4_5],
    blueprint: './assets/img/houses/house4-blueprint.png',
  },
  {
    id: 7,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor ',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
    additionalImages: [House7_1, House7_2, House7_3, House7_4, House7_5],
    blueprint: './assets/img/houses/house7-blueprint.png',
  },
  {
    id: 8,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
    additionalImages: [House8_1, House8_2, House8_3, House8_4, House8_5],
    blueprint: './assets/img/houses/house8-blueprint.png',
  },
  {
    id: 9,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor ',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
    additionalImages: [House9_1, House9_2, House9_3, House9_4, House9_5],
    blueprint: './assets/img/houses/house9-blueprint.png',
  },
  {
    id: 12,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor ',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    additionalImages: [House12, House3, House4, House7, House8],
    blueprint: './assets/img/houses/house12-blueprint.png',
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor ',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
    additionalImages: [],
    blueprint: '',
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
    additionalImages: [],
    blueprint: '',
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor ',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
    additionalImages: [],
    blueprint: '',
  },
];
