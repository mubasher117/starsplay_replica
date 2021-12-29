import API from ".";

export const getData = (next, pageSize) => {
  return API.get(`/get_data/?next=${next}&pageSize=${pageSize}`);
};
