import { useState } from "react";
import "./Dashboard.css";
import DataBoxCollection from "../DataBoxCollection/DataBoxCollection";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import useFetch from "../../hooks/useFetch";
import AssetsTable from "../AssetsTable/AssetsTable";

const Dashboard = () => {
  const [filteredAssets, setFilteredAssets] = useState([]);
  const { data, loading, error } = useFetch(
    "https://run.mocky.io/v3/6cee870e-47bd-45b7-8650-8c171b6984b5"
  );
  const handleBoxClick = (type) => {
    if (data) {
      const filtered = data.assets.filter((asset) => asset.type === type);
      setFilteredAssets(filtered);
    }
  };
  if (loading) {
    return <Loader />;
  }

  if (error) {
    toast.error("Failed to fetch data!");
    return null;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box-section">
        <DataBoxCollection data={data} onClick={handleBoxClick} />
      </div>
      {data && (
        <AssetsTable
          assets={filteredAssets.length > 0 ? filteredAssets : data.assets}
        />
      )}
    </div>
  );
};

export default Dashboard;
