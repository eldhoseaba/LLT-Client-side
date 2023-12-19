import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Example() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/userlist/view');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleAddUsersClick = () => {
    // Redirect to UserPage using useNavigate
    navigate('/adduser');
  };

  return (
    <>
      <Navigation />
      <div className='m-10'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md"> {/* Adjust max-width based on your design */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Users List
          </h2>
          {/* Add Users Button */}
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 bottom-0 right-0 justify-items-end" onClick={handleAddUsersClick}>
            Add Users
          </button>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {people.map((person) => (
            <li key={person._id} className="flex justify-center py-5">
              <div className="w-full max-w-md bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-900">{person.firstName} {person.lastName}</p>
                  <p className="mt-1 text-sm text-gray-500">{person.email}</p>
                  {/* Add additional fields as needed */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      
      </div>
      
    </>
  );
}
