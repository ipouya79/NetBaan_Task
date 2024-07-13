import "./AssetsTable.css";

const formatLastSeenDate = (lastSeen) => {
  return new Date(lastSeen)
    .toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(",", " at");
};

const AssetsTable = ({ assets }) => {
  return (
    <div className="assets-table-container">
      <p className="table-title">Assets</p>
      <table>
        <thead>
          <tr>
            <th className="col-grade text-left">Grade</th>
            <th className="col-name text-left">Name</th>
            <th className="col-total text-center">Total Vulnerabilities</th>
            <th className="col-lastseen text-center">Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.name}>
              <td className="col-grade text-left">
                <p className="grade-value"> {asset.grade}</p>
              </td>
              <td className="col-name text-left">{asset.name}</td>
              <td className="col-total text-center">{asset.total_vuls}</td>
              <td className="col-lastseen text-center">
                {formatLastSeenDate(asset.lastSeen)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
