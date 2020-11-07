import React, {useState} from 'react'
import {Link} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';


const Browser = () => {

  const [speciality, setSpeciality] = useState()
  const [location, setLocation] = useState()

  return (
      <>
    <h2>Buscar</h2>
    <input
      name='username'
      value={speciality}
      onChange={e => setSpeciality(e.target.value)}
      placeholder='Especialidad'
    />
    <input
      name='password'
      value={location}
      onChange={e => setLocation(e.target.value)}
      placeholder='Ubicacion'
    />
    <Link to='/medics'>
        <Button><SearchIcon/></Button>
      
    </Link>
    </>
  )
    
}

export default Browser;