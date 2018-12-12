const HOST = window.location.href.startsWith('http://localhost:5000') ? 'http://localhost:5000' : 'https://metamatic-demo-server.herokuapp.com';

export const CAR_DATA_URL = `${HOST}/api/cars`;
export const LOGIN_URL = `${HOST}/api/login`;
