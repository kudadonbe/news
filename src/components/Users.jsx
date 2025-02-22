import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");
        const data = await res.json();
        setPatients(data.data);
      } catch (error) {
        console.log("Error geting data", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg items-center p-4">
      <h3 className="text-3xl font-bold mb-4 text-indigo-700">Users</h3>
      <table className="w-full text-sm text-left rtl:text-right text-indigo-500 dark:text-indigo-400">
        <thead className="text-bold text-indigo-700 uppercase bg-indigo-100 dark:bg-indigo-700 dark:text-indigo-400 px-2 py-3">
          <tr>
            <th scope="col" className="px-2 py-3">
              ID
            </th>
            <th scope="col" className="px-2 py-3">
              Name
            </th>
            <th scope="col" className="px-2 py-3">
              Date of Birth
            </th>
            <th scope="col" className="px-2 py-3">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="bg-white border-b dark:bg-indigo-800 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-600"
            >
              <th className="px-2 py-1" scope="row">
                <Link to={`/users/${patient.id}`}>{patient.national_id}</Link>
                </th>
              <td

                className="px-2 py-1 font-medium text-indigo-900 whitespace-nowrap dark:text-white"
              >
                {patient.name}
              </td>
              <td className="px-2 py-1">{patient.dob}</td>
              <td className="px-2 py-1">{`${patient.address.house}, ${patient.address.island}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
