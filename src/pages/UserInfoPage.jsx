import React from 'react'
import User from '../components/User'
import { useParams, useLoaderData } from 'react-router-dom'
import Card from '../components/Card';




const UserInfoPage = () => {
  // const { id } = useParams();
  const user = useLoaderData();
  return (
    <>
      <Card bg='bg-green-200'>
          <User {...user} />
      </Card>
      <Card >
          <p>Card 2</p>
      </Card>
    </>
  )
}


const userLoader = async ({params}) => {
  const res = await fetch(`/api/patients/${params.id}`)
  const data = await res.json()
  return data.data
}

export  {UserInfoPage as default, userLoader}