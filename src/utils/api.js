import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'ce58aff60bmshb383183c81712f5p18b80ejsneb8f5f6715c0',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
  