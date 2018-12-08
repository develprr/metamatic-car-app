//fake axios & fake server for easily deploying demo app without need to deploy the actual server.
export const axios = {};

const getCarList = () => [
  {
    'id': 1,
    'model': 'Audi',
    'speed': 170,
    'color': 'black',
    'price': 28500,
    'marketShare': []
  },
  {
    'id': 2,
    'model': 'Porsche',
    'speed': 250,
    'color': 'white',
    'price': 61000,
    'marketShare': []
  },
  {
    'id': 3,
    'model': 'Tesla',
    'speed': 280,
    'color': 'green',
    'price': 79000,
    'marketShare': []
  },
  {
    'id': 4,
    'model': 'Ferrari',
    'speed': 320,
    'color': 'red',
    'price': 344000,
    'marketShare': []
  },
  {
    'id': 5,
    'model': 'Lamborghini',
    'speed': 334,
    'color': 'yellow',
    'price': 521000,
    'marketShare': []
  },
  {
    'id': 6,
    'model': 'Bugatti',
    'speed': 420,
    'color': 'blue',
    'price': 1591000,
    'marketShare': []
  }
];

const getCarsMap = () => getCarList().reduce((map, car) => {
  map[car.id.toString()] = car;
  return map;
}, {});

const getCarById = (carId) => getCarsMap()[carId];

const getData = (url) => {
  if (url === '/api/cars') {
    return getCarList();
  }
  if (url.startsWith('/api/cars/')) {
    return getCarById(url.split('/').pop());
  }
}

axios.get = (url) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      const data = getData(url);
      resolve({data});
    }, 300);
  });
};

