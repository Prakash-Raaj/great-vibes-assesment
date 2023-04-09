import axios from 'axios';

const url = 'https://641e42f4945125fff3df3895.mockapi.io/api/';

export const postData = async (data) => {
  try {
    const response = await axios.post(`${url}JobDetails`, data);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = async () => {
  const jobDetails = await axios.get(`${url}JobDetails`);
  return jobDetails;
};
