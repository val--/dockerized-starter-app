export const createHeaders = () => {
  const headers = new Headers();
  headers.append('Accept', 'application/json');

  return headers;
};

export const url = `${process.env.REACT_APP_API_URL}/healthCheck`;
