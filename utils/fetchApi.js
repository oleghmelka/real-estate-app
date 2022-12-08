import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '5647fff6b7msh79ee4f470998bffp1e0174jsnb52c21bda27e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
  return data
}

