import { useEffect, useState } from "react";
import "./Customers.css";
import Table from "../../components/Table/Table";

const Customers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://startdeliver-mock-api.glitch.me/customer`)
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.map(({ name, id, arr }) => ({
          name,
          id,
          arr,
        }));
        setData(finalData);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="customers-container">
      <h2>Customer</h2>
      {data && !isLoading ? <Table data={data} /> : "Loading..."}
    </div>
  );
};

export default Customers;
