import React from 'react'
import { useSelector } from 'react-redux'
import {employees} from './utils/mockEmployees'

function Table() {
  console.log('##### MOCK #####')
  const mockedEmployees = employees;
  console.log(mockedEmployees)
  /* console.log('##### REDUX #####')
  const reduxEmployes = useSelector((state => state.employees.employees))
  console.log(reduxEmployes) */

  return (
    <div>Tableau</div>
  )
}

export default Table