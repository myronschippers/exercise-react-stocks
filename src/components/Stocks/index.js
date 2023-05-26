import React from 'react';
import stocks from "../../stocks";

function Users() {

  return (
    <>
        <div className='layout-row justify-content-center'>
        <select className='mt-13 mr-5' data-testid="select-month">
          <option>January</option>
        </select>
          <button data-testid="sort">Sort</button>
        </div>
        <div className='layout-row wrap w-100 justify-content-center' data-testid="stocks">

        <div className='card layout-column w-20 ma-10 px-8'>
            <p className='ma-0'>Date: 9-May-2001</p>
            <p className='ma-0'>High: 3490.12</p>
            <p className='ma-0'>Low: 1290.23</p>
            <p className='ma-0'>Profit: ❌ ({(3201.23 - 2889.23).toFixed(2)})</p> {/* ✅ for profit and ❌ for loss */}
        </div>

        </div>
        <div className='layout-column justify-content-center align-items-center' >
          <p className='mb-0 font-weight-bold' data-testid='total-profit'>Total Profit: <span style={{color: "#1ba94c"}}>{0.00}</span></p>
          <p className='font-weight-bold' data-testid='total-loss'>Total Loss: <span style={{color: "red"}}>{3201.23 - 2889.23}</span></p>
        </div>
    </>
  )
}

export default Users