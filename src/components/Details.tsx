import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDonutById } from '../services/DonutService'
import Donut from '../models/Donut'
import './Details.css'
import Result from './Result'

const Details = () => {
  const id: string | undefined = useParams().id
  const [donutDetails, setDonutDetails] = useState<Donut | null>(null)

  useEffect(() => {
    getDonutById(id!).then((res) => {
      console.log(res)
      setDonutDetails(res)
    })
  }, [id])

  return (
    <div className='Details'>
      {donutDetails ? <Result donut={donutDetails} /> : <p>Loading</p>}
    </div>
  )
}

export default Details
