import {images, icons} from '../constants'

const hotels = [
  {
    id: '1',
    name: 'Silver Hotel & SPA',
    location: 'Green street,Central district',
    price: 120,
    image: require('../assets/images/hotel1.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
  },
  {
    id: '2',
    name: 'Bring Hotel',
    location: 'Yuki street',
    price: 70,
    image: require('../assets/images/hotel2.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
  },
  {
    id: '3',
    name: 'Aluna Hotel',
    location: 'Almond street',
    price: 90,
    image: require('../assets/images/hotel3.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
  },
  {
    id: '4',
    name: 'Green Hotel',
    location: 'Main street',
    price: 100,
    image: require('../assets/images/hotel4.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
  },
];

const rooms = [
  {
    id: '1',
    name: 'Silver Hotel & SPA',
    maxCapacity: 1,
    price: 120,
    image: require('../assets/images/hotel1.jpg'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    status: 'Available',
    smoke: true,
    number: '2',
  },
  {
    id: '2',
    name: 'Bring Hotel',
    maxCapacity: 4,
    price: 70,
    image: require('../assets/images/hotel2.jpg'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    status: 'Reserved',
    smoke: false,
    number: '8',
  },
  {
    id: '3',
    name: 'Aluna Hotel',
    maxCapacity: 3,
    price: 90,
    image: require('../assets/images/hotel3.jpg'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    status: 'Occupied',
    smoke: true,
    number: '3',
  },
  {
    id: '4',
    name: 'Green Hotel',
    maxCapacity: 2,
    price: 100,
    image: require('../assets/images/hotel4.jpg'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    status: 'Reserved',
    smoke: true,
    number: '7',
  },
];


const restaurant = [
  {
    "businessId": 547164,
      "businessName": "Zaria Airport",
      "typeofBusiness": "Airport",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1324659,
        "longitude": 7.6511192
      },
      "description": "delicious food servered",
      "email": "hotfood@gmail.com",
      "phoneNumber": "08035816287",
      "image": images.fly,
  },
  {
    "businessId": 547164,
      "businessName": "Hot Fast Food",
      "typeofBusiness": "Restaurant",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1411888,
        "longitude": 7.6663502
      },
      "description": "delicious food servered",
      "email": "hotfood@gmail.com",
      "phoneNumber": "08035816287",
      "image": images.burger_restaurant_1,
  },
  {
    "businessId": 547164,
      "businessName": "Softies",
      "typeofBusiness": "Restaurant",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1573047,
        "longitude": 7.6522739,
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": images.fries_restaurant
  },
  {
    "businessId": 547164,
      "businessName": "Softies",
      "typeofBusiness": "Restaurant",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1573152,
        "longitude": 7.6478966,
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": images.japanese_restaurant,
  },
  {
    "businessId": 547164,
      "businessName": "Joclarif",
      "typeofBusiness": "Hotel",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1075426,
        "longitude": 7.6762227
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": require('../assets/images/hotel1.jpg'),
  },
  {
    "businessId": 547164,
      "businessName": "Teeejay Palace",
      "typeofBusiness": "Hotel",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.1095426,
        "longitude": 7.6762227,
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": require('../assets/images/hotel2.jpg'),
  },
  {
    "businessId": 547164,
      "businessName": "A.B.U",
      "typeofBusiness": "Hotel",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.0823955,
        "longitude": 7.6929798,
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": require('../assets/images/hotel3.jpg'),
  },
  {
    "businessId": 547164,
      "businessName": "A.B.U",
      "typeofBusiness": "Taxi",
      "location": "Ungwan pama kaduna, Kaduna.",
      "cordinate": {
        "latitude": 11.0823955,
        "longitude": 7.6929798,
      },
      "description": "delicious food servered",
      "email": "softies@gmail.com",
      "phoneNumber": "08035816287",
      "image": icons.car
  }
]

module.exports = {hotels, rooms, restaurant};
