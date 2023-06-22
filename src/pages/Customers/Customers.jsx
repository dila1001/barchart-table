import { useEffect, useState } from "react";
import "./Customers.css";
import Table from "../../components/Table/Table";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [nameIsAscending, setNameIsAscending] = useState(false);
  const [arrIsAscending, setArrIsAscending] = useState(false);

  useEffect(() => {
    fetch(`https://startdeliver-mock-api.glitch.me/customer`)
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.map(({ name, id, arr }) => ({
          name,
          id,
          arr,
        }));
        setCustomers(finalData);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  const sort = (sortBy, ascendingState, setAscendingState) => {
    const customersArray = [...customers];
    const sortedCustomersArray = customersArray.sort(function (a, b) {
      if (a[sortBy] < b[sortBy]) {
        return ascendingState ? 1 : -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return ascendingState ? -1 : 1;
      }
      return 0;
    });
    setCustomers(sortedCustomersArray);
    setAscendingState((prevVal) => !prevVal);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCustomers = customers.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });

  return (
    <div className="customers-container">
      <div className="page-header">
        <h2>Customer</h2>
        <label>
          Search:{" "}
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>
      {customers && !isLoading ? (
        <Table
          data={filteredCustomers}
          sortName={() => sort("name", nameIsAscending, setNameIsAscending)}
          sortArr={() => sort("arr", arrIsAscending, setArrIsAscending)}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Customers;
