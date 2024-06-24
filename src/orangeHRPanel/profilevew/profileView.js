import React, { useState } from 'react';
import './ProfileView.css';

const ProfileView = (props) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Springfield, USA",
    bio: "A brief bio about John Doe.",
    profilePicture: "https://via.placeholder.com/150",
    employeeFullName: "",
    middleName: "",
    lastName: "",
    employeeId: "",
    otherId: "",
    drivingLicenseNumber: "",
    licenseDate: "",
    nationality: "",
    maritalStatus: "",
    dateOfBirth: "",
    gender: ""
  });

  const menuItems = [
    "Personal details",
    "Contact details",
    "Emergency contacts",
    "Dependents",
    "Immigration",
    "Salary",
    "Report-to",
    "Qualification",
    "Memberships"
  ];

  return (
    <div className="profile-view">
      <div className="left-section">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h3>{user.name}</h3>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-section">
        <h2>Personal Details</h2>
        <form>
          <div className="form-group">
          <div className="form-row">
          <div className="input-group">
            <label>Employee Full Name:</label>
            <div className='name'>
            <input type="text" placeholder='first name' value={props.email ? props.email : user.employeeFullName} readOnly />
            <input type="text" placeholder='middle name' value={user.middleName} readOnly />
            <input type="text" placeholder='last name' value={user.lastName} readOnly />
            </div>
            </div>
            </div>
          </div>
          <div className="form-group">
  <div className="form-row">
    <div className="input-group">
      <label>Employee ID:</label>
      <input type="text" value={user.employeeId} readOnly />
    </div>
    <div className="input-group">
      <label>Other ID:</label>
      <input type="text" value={user.otherId} readOnly />
    </div>
  </div>
  <div className="form-row">
    <div className="input-group">
      <label>Driving License Number:</label>
      <input type="text" value={user.drivingLicenseNumber} readOnly />
    </div>
    <div className="input-group">
      <label>License Date:</label>
      <input type="date" value={user.licenseDate} readOnly />
    </div>
  </div>
  <div className="form-row">
    <div className="input-group">
      <label>Nationality:</label>
      <input type="text" value={user.nationality} readOnly />
    </div>
    <div className="input-group">
      <label>Marital Status:</label>
      <select value={user.maritalStatus} disabled>
        <option value="">Select</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
      </select>
    </div>
  </div>
  <div className="form-row">
    <div className="input-group">
      <label>Date of Birth:</label>
      <input type="date" value={user.dateOfBirth} readOnly />
    </div>
    <div className="input-group">
      <label>Gender:</label>
      <div className='line'>
        <label className='line'>
          <input type="radio" value="male" checked={user.gender === "male"} readOnly /> Male
        </label>
        <label>
          <input type="radio" value="female" checked={user.gender === "female"} readOnly /> Female
        </label>
      </div>
    </div>
  </div>
</div>

        </form>
      </div>
    </div>
  );
};

export default ProfileView;
