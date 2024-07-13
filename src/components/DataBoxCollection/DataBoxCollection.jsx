import "./DataBoxCollection.css";
import earthIcon from "../../assets/Images/earth-icon.png";
import cloudIcon from "../../assets/Images/cloud-icon.png";
import DataBox from "../DataBox/DataBox";

const DataBoxCollection = ({ data, onClick }) => {
  return (
    <div className="data-box-collection">
      {data && data.domain && (
        <DataBox
          category="Domains"
          icon={earthIcon}
          data={data.domain}
          bg="orange"
          onClick={() => onClick("domain")}
        />
      )}
      {data && data.ip && (
        <DataBox
          category="IP Addresses"
          icon={earthIcon}
          data={data.ip}
          bg="purple"
          onClick={() => onClick("ip")}
        />
      )}
      {data && data.cloud && (
        <DataBox
          category="Cloud Accounts "
          icon={cloudIcon}
          data={data.cloud}
          bg="yellow"
          onClick={() => onClick("cloud")}
        />
      )}
    </div>
  );
};

export default DataBoxCollection;
