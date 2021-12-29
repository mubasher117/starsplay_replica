import API from ".";
export const getData = (next) => {
   return API.get(`/get_data/${next}`)
}