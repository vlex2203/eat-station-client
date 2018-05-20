import axios from 'axios';

export const get = category => {
  let url = 'https://fast-waters-17140.herokuapp.com/restaurants';
  if(category !== 'all'){
    url += `/${category}`;
  }
  return axios.get(url)
		.then(response => {
			return response.data;
		})
		.catch(error => {
      throw new Error({ error: error.response.data });
		});
};
