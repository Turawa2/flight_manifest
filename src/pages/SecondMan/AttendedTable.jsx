import React from "react";

function AttendedTable() {
  return (
    <>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Attended Patients</h4>

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
                  type="text"
                  className="form-control border-0"
                  placeholder="Search"
                  style={{ backgroundColor: "#eee" }}
                />
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Full name</th>

                  <th>ID number</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">
                    <img src="/pic-1.png" alt="image" />
                  </td>
                  <td>Musa Hamza Turawa</td>

                  <td>CS583</td>
                  <td>
                    <button
                      type="button"
                      style={{
                        width: "70%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="bg-gradient-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <img src="/pic-2.png" alt="image" />
                  </td>
                  <td>Musa Hamza Turawa</td>

                  <td>CS583</td>
                  <td>
                    <button
                      type="button"
                      className="bg-gradient-info"
                      style={{
                        width: "70%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <img src="/pic-3.png" alt="image" />
                  </td>
                  <td>Musa Hamza Turawa</td>

                  <td>CS583</td>
                  <td>
                    <button
                      type="button"
                      className="bg-gradient-info"
                      style={{
                        width: "70%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-1">
                    <img src="/pic-4.png" alt="image" />
                  </td>
                  <td>Musa Hamza Turawa</td>

                  <td>CS583</td>
                  <td>
                    <button
                      type="button"
                      className="bg-gradient-info"
                      style={{
                        width: "70%",
                        height: "35px",
                        border: "none",
                        borderRadius: "5px",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendedTable;
