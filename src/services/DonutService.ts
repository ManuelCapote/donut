import axios from 'axios'
import Donut from '../models/Donut'
import DonutsListResponse from '../models/DonutsListResponse'
import SingleDonutResponse from '../models/singleDonutResponse'

export const getDonuts = (): Promise<DonutsListResponse> => {
  return axios
    .get('https://grandcircusco.github.io/demo-apis/donuts.json')
    .then((response) => {
      return response.data
    })
}

export const getDonutById = (id: string): Promise<Donut> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((res) => res.data)
}
