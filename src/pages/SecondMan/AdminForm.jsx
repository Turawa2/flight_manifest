import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function AdminForm() {

  const navigate = useNavigate();
  const location = useLocation();
  const isEditMode = location.state && location.state.editMode;

  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    ss_number: '',
    e_number: '',
    phone_number: '',
    date: '',
    time: '',
    plane_number: '', 
    starting_point: '',
    end_point: ''

  });

  useEffect(() => {
    if (isEditMode) {
      const passengerId = location.state.passengerId;
      fetchPassengerData(passengerId);
    }
  }, [isEditMode, location.state]);

  const fetchPassengerData = async (passengerId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getPassenger/${passengerId}`);
      const existingData = response.data;
      setFormData(existingData);
    } catch (error) {
      console.error('Error fetching passenger data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:8000/api/updatePassenger/${location.state.passengerId}`, formData);
        alert('Passenger data updated successfully!');
      } else {
        await axios.post('http://localhost:8000/api/addPassenger', formData);
        alert('Passenger data added successfully!');
      }
      navigate('/');
    } catch (error) {
      alert('Error submitting form:', error);
    }
  };

      
  
  return (
    <>
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{isEditMode ?  "Update Passenger" : "Add Passenger"}</h4>
            <form class="form-sample"  onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">First Name</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Date of Birth</label>
                    <div class="col-sm-9">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="dd/mm/yyyy"
                        name="dob"
                             value={formData.dob}
                             onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

              </div>
          
          
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Social Security Number</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                      name="ss_number"
                      value={formData.ss_number}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Emergency Number</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                      name="e_number"
                      value={formData.e_number}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Phone Number</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" 
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
               

                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Date</label>
                    <div class="col-sm-9">
                      <input type="date" class="form-control" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Time</label>
                    <div class="col-sm-9">
                      <input type="time" class="form-control" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
               

                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Plane Number</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                      name="plane_number"
                      value={formData.plane_number}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Departure From</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                      name="starting_point"
                      value={formData.starting_point}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
               

                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Arrived At</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" 
                      name="end_point"
                      value={formData.end_point}
                      onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
             
              <br />
              <button
                type="submit"
                style={{ cursor: "pointer" }}
                className="btn btn-success mr-2"
              
              >
                  {isEditMode ? "Update" : "Submit"}
              </button>
              <button style={{ cursor: "pointer" }} className="btn btn-light">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminForm;
