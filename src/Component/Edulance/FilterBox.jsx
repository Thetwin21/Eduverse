import React from 'react'

const FilterBox = () => {
  return (
    <section className='filter'>
      <section className='filter-content'>
        <h4>Filter</h4>
        <input type="search" name="" placeholder='sill, tag , keyword' id="" />
        <hr />
        <div className="speciality">
          <h4>Specilties</h4>
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
      </section>
        <hr />
      <section className="budget">
        <h4>Budget</h4>
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
      </section>
      <button>Filter Results</button>
    </section>
  )
}

export default FilterBox