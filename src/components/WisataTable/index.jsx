import React, { useEffect } from "react";
import axios from "axios";

const WisataTable = ({ wisataList, setWisataList }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/wisata`
        );
        setWisataList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setWisataList]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {wisataList.map((wisata, index) => (
            <tr key={wisata._id}>
              <th>{index + 1}</th>
              <td>{wisata.name}</td>
              <td>{wisata.description}</td>
              <td>{wisata.location}</td>
              <td>
                <img
                  src={wisata.imageUrl}
                  alt={wisata.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WisataTable;
