import { React, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";





const EditUser = (islandData) => {

  const user = useLoaderData();
  // console.log(user);
  const [userEdit, setUserEdit] = useState({
    id: user?.id || '',
    name: user?.name || '',
    dob: user?.dob || '',
    national_id: user?.national_id || '',
    address: {
      id: user?.address.id || '',
      house: user?.address.house || '',
      island: user?.address.island || '',
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // console.log(name);
    // console.log(value);
    
  
    if (name === 'house') {
        setUserEdit({
          ...userEdit,
          address: {
            ...userEdit.address,
            [name]: value, 
          },
        });

      } else if (name === 'island') {
        console.log(getSelectedIslandId(value));

        setUserEdit({
          ...userEdit,
          address: {
            ...userEdit.address,
            [name]: value, 
          },
        });
        
      } else {
        setUserEdit({
          ...userEdit,
          [name]: value,
        });
      }

  };



  const islands = Object.values(islandData);
// console.log(islands);

const getSelectedIslandId = (islandFullName) => {
  const seachIslandName = islandFullName.split(" ");
  // console.log(seachIslandName[1]);
  const selectedIslandObject = islands.filter((island) =>
    island.name.toLowerCase().includes(seachIslandName[1].toLowerCase())
  );
  console.log(selectedIslandObject[0].id);
  // return selectedIslandObject[0].id
};
 

let selectedIslandId = 6;

const [houses, setHouses] = useState([]);

useEffect(() => {
  const fetchHouses = async (islandId) => {
    try {
      const res = await fetch(`/api/islands/${islandId}`);
      const data = await res.json()
      // console.log(data.data);
      setHouses(data.data);
      
    } catch (error) {
      console.log("Error getting data", error);
    }
  };
  fetchHouses(selectedIslandId);
}, []);


  return (
    <div>
      <form  className="border rounded pb-3">
        <div className="space-y-12 ">
          <div className="border-indigo-900/10 pb-12">
            <div className="text-indigo-700 bg-indigo-50 dark:bg-indigo-700 dark:text-indigo-400 sm:rounded-lg">
              <h2 className="text-base/7 font-semibold text-indigo-900 pl-3 pr-3">
                Patient Information
              </h2>
              <p className="mt-1 text-sm/6 text-indigo-600 pl-3 pr-3">
                This information will be confidential.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-6 pl-3 pr-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="national_id"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  ID Card Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="national_id"
                    id="national_id"
                    autoComplete="national_id"
                    placeholder="AXXXXXX"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={userEdit.national_id}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={userEdit.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="dob"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    autoComplete="dob"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={userEdit.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="island"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Island
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="island"
                    name="island"
                    autoComplete="island"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={userEdit.address.island}
                    onChange={handleChange}
                  >
                    <option disabled>Select an island</option>
              
                    {islands.map(island => (
                      <option key={island.id}>{`${island.atoll} ${island.name}`}</option>
                    ))}

                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="house"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  House
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="house"
                    name="house"
                    autoComplete="house"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={userEdit.address.house}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an house
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo
                -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
          <button
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow
                -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Update
          </button>
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red
                -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Delete
          </button>
          <button
            type="button"
            className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red
            -500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};













export default EditUser;
