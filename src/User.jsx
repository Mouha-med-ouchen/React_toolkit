import React from 'react'
import { useSelector } from 'react-redux'
import { userSelectors } from './store/userSelectors'


import { FaUser, FaBirthdayCake, FaGlobe } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

/**
 * Modern and elegant card displaying user information.
 * Uses Bootstrap 5 classes and custom CSS for hover effects and a soft palette.
 * @param {object} props
 * @param {object} props.user The user object containing name, age, and country.
 */
export default function User() {
  const user = useSelector(userSelectors)

  // Destructure for cleaner access

  return (
    // The main card container with Bootstrap classes and the custom class for styling/hover
    // shadow-lg: initial strong shadow
    // rounded-4: extra rounded corners
    // p-4: generous padding
    <div className="user-card card shadow-lg rounded-4 p-4 text-center mx-auto" style={{ maxWidth: '300px' }}>
      <div className="card-body">
        {/* Title/Name: Use a soft background color for a modern look */}
        <h3 className="card-title mb-4 pb-2 border-bottom fw-bold text-primary-emphasis">
          <FaUser className="me-2" />
          {user.name}
        </h3>

        {/* Info Items */}
        <ul className="list-group list-group-flush text-start">

          {/* Age Item */}
          <li className="list-group-item d-flex align-items-center bg-transparent border-0 py-2">
            <FaBirthdayCake className="me-3 text-secondary" size={20} />
            <strong className="text-muted">Age:</strong>
            <span className="ms-auto text-dark">{user.age}</span>
          </li>

          {/* Country Item */}
          <li className="list-group-item d-flex align-items-center bg-transparent border-0 py-2">
            <FaGlobe className="me-3 text-success" size={20} />
            <strong className="text-muted">Country:</strong>
            <p className='ms-auto text-dark'>
              <img src={`https://flagcdn.com/48x36/${user.country}.png`} alt={user.country} />
            </p>

          </li>

        </ul>
      </div>
      {/* Action Buttons */}
     
    </div>
  );
};


