import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../Redux/Action/UserAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./../Loading/Error/Loading";
import Message from "./../Loading/Error/Error";

const Login = () => {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  console.log("email", email, "pass", password);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  console.log(userInfo);
  React.useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <>
      <div className="login-wrapper py-5">
        <div className="container">
          <div className="row gx-5 justify-content-center align-items-center">
            <div className="col-md-6 col-12 d-md-block d-none ">
              <img src="/images/log.png" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mt-3">
              <div className="login-container">
                <div className="login-card">
                  <div className="header-logo m-auto">
                    <img src="/images/logo.png" className="img-fluid " />
                  </div>
                  {loading && <Loading />}
                  {error && <Message variant="danger">{error}</Message>}
                  <h2 className="text-center">Login</h2>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="login-input">
                      <div>
                        <label className="mb-2">Enter email</label>
                        <input
                          type="email"
                          value={email}
                          required={true}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mt-4 mb-4">
                        <label className="mb-2">Enter password</label>
                        <input
                          type="password"
                          value={password}
                          required={true}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button className="login-btn mb-4">Submit</button>

                    <p className="text-center">
                      Not a member yet? <Link to={"/register"}>Register</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
