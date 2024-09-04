import House1 from '../assets/houses/house1.png';
import House2 from '../assets/houses/house2.png';
import House3 from '../assets/houses/house3.png';
import House4 from '../assets/houses/house4.png';
import House5 from '../assets/houses/house5.png';
import House6 from '../assets/houses/house6.png';
import House7 from '../assets/houses/house7.png';
import House8 from '../assets/houses/house8.png';
import House9 from '../assets/houses/house9.png';
import House10 from '../assets/houses/house10.png';
import House11 from '../assets/houses/house11.png';
import House12 from '../assets/houses/house12.png';
// import house large images
import House1Lg from '../assets/houses/house1lg.png';
import House2Lg from '../assets/houses/house2lg.png';
import House3Lg from '../assets/houses/house3lg.png';
import House4Lg from '../assets/houses/house4lg.png';
import House5Lg from '../assets/houses/house5lg.png';
import House6Lg from '../assets/houses/house6lg.png';
import House7Lg from '../assets/houses/house7lg.png';
import House8Lg from '../assets/houses/house8lg.png';
import House9Lg from '../assets/houses/house9lg.png';
import House10Lg from '../assets/houses/house10lg.png';
import House11Lg from '../assets/houses/house11lg.png';
import House12Lg from '../assets/houses/house12lg.png';

// import apartments images
import Apartment1 from '../assets/apartments/a1.png';
import Apartment2 from '../assets/apartments/a2.png';
import Apartment3 from '../assets/apartments/a3.png';
import Apartment4 from '../assets/apartments/a4.png';
import Apartment5 from '../assets/apartments/a5.png';
import Apartment6 from '../assets/apartments/a6.png';
// import apartments large images
import Apartment1Lg from '../assets/apartments/a1lg.png';
import Apartment2Lg from '../assets/apartments/a2lg.png';
import Apartment3Lg from '../assets/apartments/a3lg.png';
import Apartment4Lg from '../assets/apartments/a4lg.png';
import Apartment5Lg from '../assets/apartments/a5lg.png';
import Apartment6Lg from '../assets/apartments/a6lg.png';

// import agents images
import Agent1 from '../assets/agents/agent1.png';
import Agent2 from '../assets/agents/agent2.png';
import Agent3 from '../assets/agents/agent3.png';
import Agent4 from '../assets/agents/agent4.png';
import Agent5 from '../assets/agents/agent5.png';
import Agent6 from '../assets/agents/agent6.png';
import Agent7 from '../assets/agents/agent7.png';
import Agent8 from '../assets/agents/agent8.png';
import Agent9 from '../assets/agents/agent9.png';
import Agent10 from '../assets/agents/agent10.png';
import Agent11 from '../assets/agents/agent11.png';
import Agent12 from '../assets/agents/agent12.png';

 const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    image: House1,
    amenities:"Gym",
    imageLg: House1Lg,
    location: 'Gurgaon',
    address: 'H.no- 252 , jal vihar sector-46 haryana',
    bedrooms: '3',
    bathrooms: '3',
    surface: '4200 sq ft',
    price: '110000',
    agent: {
      name: 'Patricia Tullert',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    image: House2,
    imageLg: House2Lg,
    location: 'Delhi',
    amenities:"Parking",
    address: 'H.no - 111A Central park New Delhi',
    bedrooms: '4',
    bathrooms: '3',
    surface: '4200 sq ft',
    price: '140000',
    agent: {
      name: 'Daryl Hawker',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    image: House3,
    location: 'Noida',
    amenities:"Pool",
    imageLg: House3Lg,
    address: 'H.n- 512B/c Samams colony sector-63 ',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    price: '170000',
    agent: {
      name: 'Amado Smith',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    image: House4,
    imageLg: House4Lg,
    location: 'Gurgaon',
    address: '84 Samspur Village sector-53 Haryana',
    bedrooms: '3',
    amenities:"Gym",
    bathrooms: '3',
    surface: '4200 sq ft',
    price: '200000',
    agent: {
      name: 'Kaitlyn Gonzalez',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    image: House5,
    imageLg: House5Lg,
    location: 'Delhi',
    amenities:"Parking",
    address: '352 Lokhandwala NEw Delhi',
    bedrooms: '4',
    bathrooms: '3',
    surface: '4200 sq ft',
    price: '210000',
    agent: {
      name: 'Grover Robinson',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    image: House6,
    imageLg: House6Lg,
    address: '32B/A  sector-53 Greater Noida',
    bedrooms: '5',
    amenities:"Pool",
    bathrooms: '3',
    surface: '6200 sq ft',
    location: 'Noida',
    price: '220000',
    agent: {
      name: 'Karen Sorensen',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    image: Apartment1,
    imageLg: Apartment1Lg,
    location: 'Gurgaon',
    address: 'H.no-512 Arcadea sector 52',
    bedrooms: '3',
    amenities:"Gym",
    bathrooms: '1',
    surface: '1200 sq ft',
    price: '250000',
    agent: {
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    image: Apartment2,
    imageLg: Apartment2Lg,
    address: 'H.no-312A Jhandewalan New Delhi',
    bedrooms: '4',
    bathrooms: '1',
    amenities:"Pool",
    location: 'Delhi',
    surface: '1000 sq ft',
    price: '330000',
    agent: {
      name: 'Juana Douglass',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    image: Apartment3,
    imageLg: Apartment3Lg,
    amenities:"Parking",
    location: 'Noida',
    address: '84 Sector- 67 Greater Noida ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1100 sq ft',
    price: '340000',
    agent: {
      name: 'Jerry Schenck',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    amenities:"Gym",
    location: 'Gurgaon',
    address: 'H.no - 512 DLF Phase- 5 Gurgaon',
    bedrooms: '3',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    amenities:"Parking",
    location: 'Gurgaon',
    address: '798 Dlf phase -2 Gurgaon',
    bedrooms: '4',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    location: 'Noida',
    imageLg: House9Lg,
    amenities:"Pool",
    address: '222/A sector - 5 Greater Noida',
    bedrooms: '5',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    amenities:"Gym",
    location: 'Gurgaon',
    address: '285/a Sector -55 Sushanl Lok',
    bedrooms: '3',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    amenities:"Parking",
    address: '2843/A Rajiv Chowk Delhi',
    bedrooms: '4',
    bathrooms: '2',
    location: 'Delhi',
    surface: '3200 sq ft',
    price: '213000',
    agent: {
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    amenities:"Pool",
    address: '35 Greater noida Sector-56',
    bedrooms: '5',
    bathrooms: '3',
    surface: '5200 sq ft',
    price: '221000',
    location: 'Noida',
    agent: {
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    amenities:"Gym",
    address: 'H.no-1511 Huda Colony Sector - 45 ',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    location: 'Gurgaon',
    price: '310000',
    agent: {
      name: 'Kaitlyn Gonzalez',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    image: Apartment5,
    imageLg: Apartment5Lg,
    address: '282 Kashmiri gate New Delhi',
    bedrooms: '4',
    bathrooms: '1',
    location: 'Delhi',
    surface: '1000 sq ft',
    amenities:"Parking",
    year: '2012',
    price: '320000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    image: Apartment6,
    imageLg: Apartment6Lg,
    amenities:"Pool",
    location: 'Noida',
    address: '843 Woodlan Park Sector-65 Noida ',
    bedrooms: '5',
    bathrooms: '1',
    surface: '1200 sq ft',
    price: '380000',
    agent: {
      name: 'Karen Sorensen',
    },
  },
];

export default housesData;