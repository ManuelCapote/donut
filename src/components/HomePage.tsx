import { useEffect, useState } from 'react'
import Donut from '../models/Donut'
import { getDonuts } from '../services/DonutService'
import './HomePage.css'
import ResultsList from './ResultsList'

const HomePage = () => {
  const [donutList, setDonutList] = useState<Donut[]>([])

  useEffect(() => {
    getDonuts().then((response) => {
      setDonutList(response.results)
    })
  }, [])

  return (
    <div className='HomePage'>
      <h1>Donuts</h1>
      <div className='HomePage'>
        <ResultsList donuts={donutList} />
      </div>
    </div>
  )
}

export default HomePage
