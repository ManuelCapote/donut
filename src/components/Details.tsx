import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDonutById } from '../services/DonutService'
import Donut from '../models/Donut'
import './Details.css'
import DonutDetailed from './DonutDetailed'

const Details = () => {
  const id: string | undefined = useParams().id
  const [donutDetails, setDonutDetails] = useState<Donut | null>(null)

  useEffect(() => {
    getDonutById(id!).then((res) => {
      setDonutDetails(res)
    })
  }, [id])

  return (
    <div className='Details'>
      {donutDetails ? <DonutDetailed donut={donutDetails} /> : <p>Loading</p>}
    </div>
  )
}

export default Details
