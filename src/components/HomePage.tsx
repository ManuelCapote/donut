import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Donut from '../models/Donut'
import { getDonuts } from '../services/DonutService'
import './HomePage.css'

const HomePage = () => {
  const [donutList, setDonutList] = useState<Donut[]>([])

  useEffect(() => {
    getDonuts().then((response) => {
      const data: Donut[] = response.results
      setDonutList(data)
    })
  })

  return (
    <div className='HomePage'>
      <h1>Donuts</h1>
      <ul>
        {donutList.map((donut) => {
          return (
            <li key={donut.id}>
              <Link to={`/Details/${encodeURIComponent(donut.id)}`}>
                {donut.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage
