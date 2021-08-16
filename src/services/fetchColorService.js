import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
    .get('/api/colors')
    .then((response) => {
      console.log("fetchColorService", response)
      return (response.data)
    })
    .catch((error) => {
      console.log(error);
    })
}

export default fetchColorService;