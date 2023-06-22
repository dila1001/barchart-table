import "./Table.css";

const Table = ({ data, sortName, sortArr }) => {
  return (
    <div className="table-grid">
      <div className="table-header">
        <span className="column" onClick={sortName}>
          Name &#8645;
        </span>
        <span className="column" onClick={sortArr}>
          Arr &#8645;
        </span>
        <span>Id</span>
      </div>
      {data.map((item) => (
        <div key={item.id} className="table-row">
          <div className="name-column">{item.name}</div>
          <div>{item.arr}</div>
          <div>{item.id}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
