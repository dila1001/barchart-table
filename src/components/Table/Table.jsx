import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table-grid">
      <div className="table-header">
        <span>Name</span>
        <span>Arr</span>
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
