import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("DOB:", dateOfBirth);
    console.log("Phone:", phoneNumber);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Zip:", zipCode);
    console.log("Country:", country);

    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label><br />
        <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} /><br /><br />

        <label>Email</label><br />
        <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} /><br /><br />

        <label>Password</label><br />
        <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <label>Confirm Password</label><br />
        <input type="password" value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />

        <label>Gender</label><br />
        <input type="radio" value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)} /> Male <br />

        <input type="radio" value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)} /> Female <br /><br />

        <label>Date of Birth</label><br />
        <input type="date" value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)} /><br /><br />

        <label>Phone Number</label><br />
        <input type="tel" value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} /><br /><br />

        <label>Address</label><br />
        <textarea value={address}
          onChange={(e) => setAddress(e.target.value)} /><br /><br />

        <label>City</label><br />
        <input type="text" value={city}
          onChange={(e) => setCity(e.target.value)} /><br /><br />

        <label>State</label><br />
        <input type="text" value={state}
          onChange={(e) => setState(e.target.value)} /><br /><br />

        <label>Zip Code</label><br />
        <input type="text" value={zipCode}
          onChange={(e) => setZipCode(e.target.value)} /><br /><br />

        <label>Country</label><br />
        <select value={country}
          onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;


