import './App.css';

import React, {useEffect, useState} from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from 'axios'
import TableHead from "@material-ui/core/TableHead";


function getVideos() {
  return axios.get('https://cors-anywhere.herokuapp.com/https://cartillalibre-back.herokuapp.com/medics')
}

function App() {

  const [medics, setMedics] = useState([1,2,3])

  useEffect(() => {
    getVideos().then(response => {
      setMedics(response.data)
    })
  }, [])


  return (
    <div className="App">
      <h2>Cartilla de medicos</h2>
      {medics ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Especialidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medics.length <= 0 ? (
              <h3>No hay medicos</h3>
            ) : (
              medics.map(medic => {
                return (
                  <TableRow key={medic._id}>
                    <TableCell>
                          {medic.name}
                    </TableCell>
                    <TableCell>
                          {medic.speciality}
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      ) : (
        <CircleLoader color={'blue'} size={250}/>
      )}
    </div>
  );
}

export default App;
