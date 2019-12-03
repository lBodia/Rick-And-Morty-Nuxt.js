import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/';

const api = axios.create({
  baseURL,
  method: 'get',
  timeout: 5000,
});

const preparePayload = payload => {
  const isIdOrIds =
    (typeof payload === 'number' && Number.isInteger(payload)) ||
    Array.isArray(payload);

  if (isIdOrIds) {
    return `/${payload}`;
  }

  if (typeof payload === 'object') {
    const query = Object.keys(payload)
      .map(key => key + '=' + payload[key])
      .join('&');
    return `/?${query}`;
  }

  throw new TypeError(
    'Unexpected param type, please use integer, array, object or leave it blank'
  );
};

const request = async (endpoint, payload = {}) => {
  const query = preparePayload(payload);

  try {
    const { data } = await api(endpoint + query);
    return data;
  } catch (e) {
    return {
      status: e.response.status,
      error: e.response.data.error,
    };
  }
};

export function getCharacters(payload) {
  return request('character', payload);
}

export function getEpisodes(payload) {
  return request('episode', payload);
}

export function getLocations(payload) {
  return request('location', payload);
}
