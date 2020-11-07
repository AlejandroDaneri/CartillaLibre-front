import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
import {Link, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {MedicListWrapper} from "../styles/MedicListWrapper";
import {ClipLoader} from "react-spinners";


function getMedics() {
  return axios.get('https://cors-anywhere.herokuapp.com/https://cartillalibre-back.herokuapp.com/medics')
}

const arrAvg = array => array.reduce((a, b) => a + b,0) / array.length;

const  MedicList = () => {

  const [medics, setMedics] = useState()
  const [value, setValue] = useState(3)
  useEffect(() => {
    getMedics().then(response => {
      setMedics(response.data)
    })
  }, [])


  return (
    <MedicListWrapper>
      <h2>Cartilla de medicos</h2>
      {medics ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Especialidad</TableCell>
              <TableCell colSpan={2}>Calificacion</TableCell>
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
                    <TableCell>
                      <Rating
                        name="simple-controlled"
                        value={arrAvg(medic.rating)}
                        onChange={(event, newValue) => {
                          console.log(value)
                          setValue(newValue);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Link>
                        Comentarios
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="loader">
          <ClipLoader color={'green'} size={200}/>
        </div>
      )}
    </MedicListWrapper>
  );
}

export default MedicList;
