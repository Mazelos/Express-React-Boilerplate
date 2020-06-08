import axios from 'axios';

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/');
    return response.data.message
  } catch (error) {
    console.error(error);
  }
}

export { getData }