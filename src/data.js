// import house images
import House3 from './assets/img/houses/house3.jpg';
import House4 from './assets/img/houses/house4.jpg';
import House7 from './assets/img/houses/house7.jpg';
import House8 from './assets/img/houses/house8.jpg';
import House9 from './assets/img/houses/house9.jpg';
import House12 from './assets/img/houses/house12.jpg';

// import house large images
import House3Lg from './assets/img/houses/house3lg.jpg';
import House4Lg from './assets/img/houses/house4lg.jpg';
import House7Lg from './assets/img/houses/house7lg.jpg';
import House8Lg from './assets/img/houses/house8lg.jpg';
import House9Lg from './assets/img/houses/house9lg.jpg';
import House12Lg from './assets/img/houses/house12lg.jpg';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.jpg';
import Apartment2 from './assets/img/apartments/a2.jpg';
import Apartment3 from './assets/img/apartments/a3.jpg';

// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.jpg';
import Apartment2Lg from './assets/img/apartments/a2lg.jpg';
import Apartment3Lg from './assets/img/apartments/a3lg.jpg';

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

// import house details photos 
import House3_1 from './assets/img/houses/House3_1.jpg';
import House3_2 from './assets/img/houses/House3_2.jpg';
import House3_3 from './assets/img/houses/House3_3.jpg';
import House3_4 from './assets/img/houses/House3_4.jpg';
import House3_5 from './assets/img/houses/House3_5.jpg';
import House3_6 from './assets/img/houses/House3_6.jpg';
import House4_1 from './assets/img/houses/house4_1.jpg';
import House4_2 from './assets/img/houses/house4_2.jpg';
import House4_3 from './assets/img/houses/house4_3.jpg';
import House4_4 from './assets/img/houses/house4_4.jpg';
import House4_5 from './assets/img/houses/house4_5.jpg';
import House4_6 from './assets/img/houses/House4_6.jpg';
import House7_1 from './assets/img/houses/house7_1.jpg';
import House7_2 from './assets/img/houses/house7_2.jpg';
import House7_3 from './assets/img/houses/house7_3.jpg';
import House7_4 from './assets/img/houses/house7_4.jpg';
import House7_5 from './assets/img/houses/house7_5.jpg';
import House7_6 from './assets/img/houses/House7_6.jpg';
import House8_1 from './assets/img/houses/house8_1.jpg';
import House8_2 from './assets/img/houses/house8_2.jpg';
import House8_3 from './assets/img/houses/house8_3.jpg';
import House8_4 from './assets/img/houses/house8_4.jpg';
import House8_5 from './assets/img/houses/house8_5.jpg';
import House8_6 from './assets/img/houses/House8_6.jpg';
import House9_1 from './assets/img/houses/house9_1.jpg';
import House9_2 from './assets/img/houses/house9_2.jpg';
import House9_3 from './assets/img/houses/house9_3.jpg';
import House9_4 from './assets/img/houses/house9_4.jpg';
import House9_5 from './assets/img/houses/house9_5.jpg';
import House9_6 from './assets/img/houses/House9_6.jpg';
import House12_1 from './assets/img/houses/house12_1.jpg';
import House12_2 from './assets/img/houses/house12_2.jpg';
import House12_3 from './assets/img/houses/house12_3.jpg';
import House12_4 from './assets/img/houses/house12_4.jpg';
import House12_5 from './assets/img/houses/house12_5.jpg';
import House12_6 from './assets/img/houses/House12_6.jpg';
import a1_1 from './assets/img/apartments/a1_1.jpg';
import a1_2 from './assets/img/apartments/a1_2.jpg';
import a1_3 from './assets/img/apartments/a1_3.jpg';
import a1_4 from './assets/img/apartments/a1_4.jpg';
import a1_5 from './assets/img/apartments/a1_5.jpg';
import a1_6 from './assets/img/apartments/a1_6.webp';
import a2_1 from './assets/img/apartments/a2_1.jpg';
import a2_2 from './assets/img/apartments/a2_2.jpg';
import a2_3 from './assets/img/apartments/a2_3.jpg';
import a2_4 from './assets/img/apartments/a2_4.jpg';
import a2_5 from './assets/img/apartments/a2_5.jpg';
import a2_6 from './assets/img/apartments/a2_6.jpg';
import a3_1 from './assets/img/apartments/a3_1.jpg';
import a3_2 from './assets/img/apartments/a3_2.jpg';
import a3_3 from './assets/img/apartments/a3_3.jpg';
import a3_4 from './assets/img/apartments/a3_4.jpg';
import a3_5 from './assets/img/apartments/a3_5.jpg';
import a3_6 from './assets/img/apartments/a3_6.jpg';


export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Spacious and elegant four-bedroom detached family home set on an impressive 5000 sq ft plot, located just 0.5 miles from Petts Wood station with convenient fast train services to London. This beautiful property is within easy walking distance of local shops, highly-rated schools, bus routes, and picturesque National Trust woodlandThe ground floor boasts three generously sized reception rooms, a modern 22 x 12 kitchen/breakfast room, and a bright and airy conservatory. The property further benefits from a practical utility room, a cloakroom, and ample storage options.On the first floor, there are four well-appointed bedrooms, including a luxurious master suite with an en-suite bathroom, alongside two additional family bathrooms to ensure comfort for the entire household.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '123 Main Street, Springfield, IL 62701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5000 sq ft',
    year: '2019',
    price: '170000',
    agent: {
      image: Agent1,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    additionalImages: [House3_1, House3_2, House3_3, House3_4, House3_5, House3_6],
    blueprint: "./assets/img/houses/House3_6.jpg",
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor ',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '12 Aspen Boulevard, Ottawa, ON K1A 0B1',
    bedrooms: '5',
    bathrooms: '5',
    surface: '5500 sq ft',
    year: '2018',
    price: '200000',
    agent: {
      image: Agent2,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
    additionalImages: [House4_1, House4_2, House4_3, House4_4, House4_5, House4_6],
    blueprint: './assets/img/houses/House4_6.jpg',
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor ',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '34 Willow Crescent, Edmonton, AB T5J 1N3',
    bedrooms: '2',
    bathrooms: '1',
    surface: '4000 sq ft',
    year: '2020',
    price: '117000',
    agent: {
      image: Agent3,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
    additionalImages: [House7_1, House7_2, House7_3, House7_4, House7_5, House7_6],
    blueprint: './assets/img/houses/House7_6.jpg',
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '56 Spruce Drive, Halifax, NS B3J 3A5',
    bedrooms: '3',
    bathrooms: '2',
    surface: '4000 sq ft',
    year: '2021',
    price: '145000',
    agent: {
      image: Agent4,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
    additionalImages: [House8_1, House8_2, House8_3, House8_4, House8_5, House8_6],
    blueprint: './assets/img/houses/House8_6.jpg',
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor ',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '456 Elm Avenue, Austin, TX 78701',
    bedrooms: '2',
    bathrooms: '2',
    surface: '4600 sq ft',
    year: '2020',
    price: '139000',
    agent: {
      image: Agent5,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
    additionalImages: [House9_1, House9_2, House9_3, House9_4, House9_5, House9_6],
    blueprint: './assets/img/houses/House9_6.jpg',
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor ',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '78 Alder Court, Winnipeg, MB R3C 4T3',
    bedrooms: '4',
    bathrooms: '4',
    surface: '5200 sq ft',
    year: '2018',
    price: '221000',
    agent: {
      image: Agent6,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    additionalImages: [House12_1, House12_2, House12_3, House12_4, House12_5, House12_6],
    blueprint: './assets/img/houses/House12_6.jpg',
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor ',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'United States',
    address: '789 Maple Drive, Denver, CO 80202',
    bedrooms: '2',
    bathrooms: '2',
    surface: '3000 sq ft',
    year: '2023',
    price: '30000',
    agent: {
      image: Agent7,
      name: 'Agent 7',
      phone: '0123 456 78910',
    },
    additionalImages: [a1_1, a1_2, a1_3, a1_4, a1_5, a1_6],
    blueprint: './assets/img/apartments/a1_6.webp',
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor ',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '101 Oak Street, San Francisco, CA 94102',
    bedrooms: '4',
    bathrooms: '4',
    surface: '5600 sq ft',
    year: '2020',
    price: '35000',
    agent: {
      image: Agent8,
      name: 'Agent 8',
      phone: '0123 456 78910',
    },
    additionalImages: [a2_1, a2_2, a2_3, a2_4, a2_5, a2_6],
    blueprint: './assets/img/apartments/a2_6.jpg',
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
    address: '202 Pine Road, Miami, FL 33101',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4800 sq ft',
    year: '2023',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Agent 9',
      phone: '0123 456 78910',
    },
    additionalImages: [a3_1, a3_2, a3_3, a3_4, a3_5, a3_6],
    blueprint: './assets/img/apartments/a3_6.jpg',
  },
];
