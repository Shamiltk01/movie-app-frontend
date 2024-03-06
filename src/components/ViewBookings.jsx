import React from 'react'
import Navi from './Navi'

const ViewBookings = () => {
  return (
    <div>
        <Navi/>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table table-dark table-striped-columns">
  <thead>
    <tr>
      <th scope="col">Sl No.</th>
      <th scope="col">Officer Name</th>
      <th scope="col">Position</th>
      <th scope="col">Movie Name</th>
      <th scope="col">Time slot</th>
      <th scope="col">No of seats booked</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Caption</td>
      <td>Titanic</td>
      <td>2:30 pm</td>
      <td>3</td>
        <td>Confirmed</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Caption</td>
      <td>Titanic</td>
      <td>2:30 pm</td>
      <td>3</td>
        <td>Confirmed</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Caption</td>
      <td>Titanic</td>
      <td>2:30 pm</td>
      <td>3</td>
        <td>Confirmed</td>

    </tr>
  </tbody>
</table>


                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBookings