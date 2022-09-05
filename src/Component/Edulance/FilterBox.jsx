import React from 'react'

const FilterBox = () => {
  return (
    <div className='filter'>
      <div className='filter-content'>
        <h3>Filter</h3>
        <input type="search" name="" placeholder='sill, tag , keyword' id="" />
        <div className="speciality">
          <h3>Specilties</h3>
          <label htmlFor="">
           <input type="checkbox" name="Autocad" id="" /> Autocad
          </label>
          <label htmlFor="">
           <input type="checkbox" name="Solidworks" id="" /> Solidworks design 
          </label>
          <label htmlFor="">
           <input type="checkbox" name="Ardino" id="" /> Ardino 
          </label>
          <label htmlFor="">
           <input type="checkbox" name="C++" id="" /> C++
          </label>
          <label htmlFor="">
           <input type="checkbox" name="Database" id="" /> Database
          </label>
          <label htmlFor="">
           <input type="checkbox" name="Geosat" id="" /> Geosat
           
          </label>
        </div>
      </div>
      <div className="budget">
        <h3>Budget</h3>
        <label htmlFor="">
           <input type="checkbox" name="Geosat" id="" /> 1000 - 5000
        </label>
        <label htmlFor="">
           <input type="checkbox" name="Geosat" id="" /> 5000 - 10000
        </label>
        <label htmlFor="">
           <input type="checkbox" name="Geosat" id="" /> 10000 - 50000
        </label>
        <label htmlFor="">
           <input type="checkbox" name="Geosat" id="" /> 50000 - 500000
        </label>
      </div>
    </div>
  )
}

export default FilterBox