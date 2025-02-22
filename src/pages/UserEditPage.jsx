import {React, useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import EditUser from '../components/EditUser'

const UserEditPage = () => {

  const [islands, setIslands] = useState([]);
  
  useEffect(() => {
    const fetchIslands = async () => {
      try {
        const res = await fetch('/api/islands/')
        const data = await res.json()
        setIslands(data.data);
      } catch (error) {
        console.log("Error getting data", error);
      }
    };

    fetchIslands();

  }, []);


  // console.log(islands);
  

  return (
    <div>
        <EditUser {...islands}/>
    </div>
  )
}
  

export default UserEditPage;