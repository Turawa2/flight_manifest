import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Table() {
 const navigate = useNavigate();
  const [passengers, setPassengers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const response = await axios.get('http://localhost:8000/api/getPassengers');
      setPassengers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEditClick = (passengerId) => {
    // Navigate to the form page with the passenger data for editing
    navigate(`/addDoctor/${passengerId}`, { state: { editMode: true, passengerId } });
  };


  const handleDeleteClick = (passengerId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this passenger?");
    if (shouldDelete) {
      handleConfirmDelete(passengerId);
    }
  };

  const handleConfirmDelete = async (passengerId) => {
    try {
      await axios.delete(`http://localhost:8000/api/deletePassenger/${passengerId}`);
      alert('Passenger deleted successfully!');
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.error('Error deleting passenger:', error);
    }
  };

  return (
    <>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Passengers</h4>

            <div className="search-field ml-4 d-none d-md-block">
              <div
                className="input-group"
                style={{
                  width: "30%",
                  height: "40px",
                  borderRadius: "5px",
                  color: "white",
                  margin: "10px",
                }}
              >
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search"
                  style={{ backgroundColor: "#eee" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            {passengers.length === 0 ? (
              <p style={{fontSize: "30px", fontWeight: "900", textAlign: "center"}}>No passengers available.</p>
            ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                <th>S/N</th>
                  <th>Full name</th>
                  <th>D.O.B</th>
                  <th>S.S Number</th>
                  <th>Emergency Contact</th>
                  <th>Phone Number</th>
                  <th> Flight Date </th>
                  <th>Time</th>
                  <th>Plane Number</th>
                  <th>Departure From</th>
                  <th>Arrived At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {passengers
                        .filter((passenger) =>
                          Object.values(passenger).some(
                            (value) =>
                              typeof value === 'string' &&
                              value.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                        )
                        .map((passenger, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{passenger.fullname}</td>

                  <td>{passenger.dob}</td>
                   <td>{passenger.ss_number}</td>
                   <td>{passenger.e_number}</td>
                   <td>{passenger.phone_number}</td> 
                   <td>{passenger.date}</td>
                   <td>{passenger.time}</td>
                   <td>{passenger.plane_number}</td>
                   <td>{passenger.starting_point}</td>
                   <td>{passenger.end_point}</td>
                  <td>
                    <button
                      type="button"
                      style={{
                        width: "100%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="bg-gradient-info"
                      onClick={() => handleEditClick(passenger.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className=" bg-gradient-danger "
                      style={{
                        width: "100%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteClick(passenger.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
