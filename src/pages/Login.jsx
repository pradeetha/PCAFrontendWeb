import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometer } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import "../customStyles.css";
import { useState } from "react";
import DashboardPage from "./Dashboard";
// import LoginImage from "../assets/login-image.jpg";
import RegisterationBackground from "../assets/RegistrationImage.png";

export function Login()
{
    const [data, setData] = useState({
        isLogged: false,
        userName: "",
        password: "",
      });

    const handleInputChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };

    function authenticateUser () {
        console.log(data);

        const apiUrl = "/api/v1//UserLogin";
        const postData = {
            userName: data.userName,
            password: data.password,
          };
      
          // Make a POST request with fetch
          fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData), // Convert the data to JSON format
          })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('userdata', JSON.stringify({
                    isLogged : true,
                    userId : data.userId,
                    token : data.token
                }));
                window.location.href = '/';
            })
            .catch((error) => {
              console.error("Error:", error);
              window.location.href = '/';
            });
    }

    return(
        <>
        <div style={{backgroundImage: `url(${RegisterationBackground})`, backgroundSize: 'cover',  backgroundPosition: 'center',}}>
            <div className="hold-transition login-page">
                <div className="login-box">
                <div className="login-logo">
                    {/* <b>Admin</b>LTE */}
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form>
                        <div className="input-group mb-3">
                        <input type="text" name="userName" onChange={handleInputChange} className="form-control" placeholder="User Name" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-user"></span>
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-2">
                        <input type="password" name="password" onChange={handleInputChange} className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary mt-4">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember" style={{marginLeft:'5px'}}>Remember Me</label>
                                </div>
                            </div>
                        {/* /.col */}
                        <div className="col-4">
                            <button type="button" onClick={authenticateUser} className="btn btn-primary btn-block mt-3" >
                            Sign In
                            </button>
                        </div>
                        {/* /.col */}
                        </div>
                    </form>

                    {/* <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div> */}
                    {/* /.social-auth-links */}

                    <p className="mt-4">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    {/* <p className="mb-0">
                        <a href="register.html" className="text-center">
                        Register a new membership
                        </a>
                    </p> */}
                    </div>
                    {/* /.login-card-body */}
                </div>
                </div>
                {/* /.login-box */}

                {/* jQuery */}
            
            </div>
        </div>
        </>
    );
}
export default Login;