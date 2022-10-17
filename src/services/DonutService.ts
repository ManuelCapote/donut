import axios from 'axios'
import DonutsList from '../models/DonutList'

export const getDonuts = (): Promise<DonutsList> => {
  return axios
    .get('https://grandcircusco.github.io/demo-apis/donuts.json')
    .then((response) => {
      return response.data
    })
}

export const getDonutById = (id: string) => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((res) => {
      console.log('res.data', res.data)
      return res.data
    })
}
