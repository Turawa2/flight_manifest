import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Fullname, setFullname] = useState("");
  const [Password, setPassword] = useState("");
  const [loginErrorCount, setLoginErrorCount] = useState(0);
  const [isLoginButtonDisabled, setLoginButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginErrorCount >= 3) {
      setLoginButtonDisabled(true);
      setCountdown(30);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setLoginButtonDisabled(false);
        setLoginErrorCount(0);
        clearInterval(timer);
      }, 30000);

      return () => clearInterval(timer);
    }
  }, [loginErrorCount]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Fullname, Password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("userIdentifier", data.userIdentifier);

        if (data.userType) {
          switch (data.userType) {
            case "FirstMan":
              navigate("/doctorDashboard");
              break;
            case "SecondMan":
              navigate("/firstmanDashboard");
              break;
            case "ThirdMan":
              navigate("/lastmanDashboard");
              break;
            default:
              alert("Invalid user type");
              break;
          }
        } else {
          alert("No user type found in the response");
        }
      } else {
        setLoginErrorCount((prevCount) => prevCount + 1);
        alert("Error login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper">
          <div className="row">
            <div className="content-wrapper full-page-wrapper d-flex align-items-center auth-pages">
              <div className="card col-lg-4 mx-auto">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title text-center mb-3">Login</h3>
                  <form>
                    <div className="form-group">
                      <label>Staff Name *</label>
                      <input
                        type="text"
                        value={Fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="form-control p_input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password *</label>
                      <input
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control p_input"
                      />
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="forgot-pass">
                        Forgot password
                      </a>
                    </div>
                    <div className="text-center">
                      {isLoginButtonDisabled ? (
                        <div className="text-center">
                          <p
                            style={{
                              color: "darkred",
                              letterSpacing: "4px",
                              fontSize: "12px",
                              fontWeight: "400",
                            }}
                          >
                            Lastborn before this   {countdown} seconds... get out form this place
                          </p>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          style={{ cursor: "pointer" }}
                          className="btn btn-primary btn-block enter-btn"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      )}
                    </div>

                    <h3
                      className="card-title text-center mb-3"
                      style={{
                        letterSpacing: "10px",
                        fontFamily: "monospace",
                        fontSize: "15px",
                        // marginLeft: "10px"
                      }}
                    >
                      NILEST-CLINIC
                    </h3>
                  </form>
                  <center>
                    <div class="image-container-logo">
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                        }}
                        src="/nilest.png"
                        alt="Rotating Image"
                      />
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of your code */}
    </>
  );
}

export default Login;
