import BarChart from "../Chart/BarChart";
import arrowIcon from "../../assets/Images/arrow-icon.png";
import networkIcon from "../../assets/Images/network-icon.png";
import lightningIcon from "../../assets/Images/lightning-icon.png";
import bugIcon from "../../assets/Images/bug-icon.png";
const DataBox = ({ category, icon, data, bg, onClick }) => {
  return (
    <div className="box-container" onClick={() => onClick(category)}>
      <div className="box-header-section">
        <div className="card">
          <div className={"card-img-top bg-" + bg}>
            <img src={icon} alt={category} />
          </div>

          <div className="card-body">
            <p className="card-text">{data.total}</p>
          </div>
        </div>

        <div>
          <img className="icon-arrow" src={arrowIcon} alt="arrow" />
        </div>
      </div>
      <div className="box-main-section">
        <p className="box-title">{category}</p>
        <div className="box-info-container">
          <div className="box-left-side-info">
            <div className="text-info">
              <span className="info-label">Live</span>
              <span className="value-label">{data.total_live}</span>
            </div>

            {data.live && <BarChart chartData={data.live} />}
          </div>
          <div className="box-right-side-info">
            <div className="text-info">
              <span className="info-label">Monitored</span>
              <span className="value-label">{data.total_monitored}</span>
            </div>

            {data.live && <BarChart chartData={data.monitored} />}
          </div>
        </div>
      </div>
      <div className="box-footer-section">
        <div className="box-footer-items">
          <div className="footer-img">
            <img src={networkIcon} alt="" />
          </div>
          <div className="text-info">
            <span className="info-label">IPs</span>
            <span className="value-label">{data.ips}</span>
          </div>
        </div>
        <div className="box-footer-items">
          <div className="footer-img">
            <img src={lightningIcon} alt="" />
          </div>
          <div className="text-info">
            <span className="info-label">Ports</span>
            <span className="value-label">{data.ports}</span>
          </div>
        </div>

        <div className="box-footer-items">
          <div className="footer-img">
            <img src={bugIcon} alt="" />
          </div>
          <div className="text-info">
            <span className="info-label">Vulns</span>
            <span className="value-label">{data.vulns}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBox;
