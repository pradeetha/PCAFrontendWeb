import "@fortawesome/fontawesome-free/css/all.min.css";
import "../customStyles.css";

export function Login()
{
    return(
        <>
        <div className="hold-transition login-page">
            <div className="login-box">
            <div className="login-logo">
                <b>Admin</b>LTE
            </div>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form>
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="User Name" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-user"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-2">
                    <input type="password" className="form-control" placeholder="Password" />
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
                        <button type="submit" className="btn btn-primary btn-block mt-3" >
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
        </>
    );
}
export default Login;