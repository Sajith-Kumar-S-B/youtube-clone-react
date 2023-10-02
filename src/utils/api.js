import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'f943935347mshab780a7c58dd6eap1f4e3bjsne643e7c61b62',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
  