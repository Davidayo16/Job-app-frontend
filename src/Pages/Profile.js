import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "./../Redux/Action/UserAction";
import Loading from "../Loading/Error/Loading";
import { toast } from "react-toastify";
import { updateUser } from "../Redux/Action/UserAction";
import Message from "./../Loading/Error/Error";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ChartsContainer from "../components/ChartsContainer";
const Profile = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState(user?.lastname);
  const [location, setLocation] = React.useState(user?.location);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  console.log(user);

  React.useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setLocation(user?.location);
      setLastName(user?.lastname);
    }
  }, [dispatch, user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({ id: user._id, name, email, password, location, lastname })
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="addjob-wrapper py-4 px-4">
        <div className="container-xxl">
          <form className="stats-card row" onSubmit={(e) => handleUpdate(e)}>
            <h2 className="mb-3">Profile</h2>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="search"
              />
            </div>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                id="search"
              />
            </div>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="search"
              />
            </div>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
                id="search"
              />
            </div>
            <div className="mt-3 mt-0 d-flex sc-container gap-4 a">
              <button className="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
