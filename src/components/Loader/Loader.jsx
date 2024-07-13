import './Loader.css'
import { LoaderIcon } from "react-hot-toast";

function Loader() {
  return (
    <div className="loader-spin">
      <p> Loading Data...</p>
      <LoaderIcon className="loader-icon" />
    </div>
  );
}

export default Loader;