import { useState, useEffect } from "react";
import { API_BASE_URL } from "../Components/utils";
import axios from "axios";

export const Signup = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kolla om användaren är inloggad
    const authToken = localStorage.getItem("authtoken");
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const createNewUserAccount = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
      console.log(res);
      alert(res.data.message);
      localStorage.setItem("authtoken", res.data.token);
      setIsLoggedIn(true); // Sätt inloggningstillstånd till true efter registrering
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setIsLoggedIn(false); // Sätt inloggningstillstånd till false vid utloggning
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">{isLoggedIn ? "Logga ut" : "Signup"}</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="signup-button">Logga ut</button>
      ) : (
        <form onSubmit={createNewUserAccount} className="signup-form">
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder="Email"
            className="signup-input"
          />
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            placeholder="Password"
            className="signup-input"
          />
          <button type="submit" className="signup-button">Submit</button>
        </form>
      )}
    </div>
  );
};
