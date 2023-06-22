import { useEffect, useState } from "react";
import BarChart from "../../components/BarChart/BarChart";
import "./Home.css";
import { convertToAbbreviation, separateNumber } from "../../utils/numberUtils";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState(0);
  const [seats, setSeats] = useState(0);

  useEffect(() => {
    fetch(`https://startdeliver-mock-api.glitch.me/report`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
        setArr(data.data.reduce((a, b) => a + b.arr, 0));
        setSeats(data.data.reduce((a, b) => a + b.seats, 0));
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="home-container">
      <h2>Home</h2>
      <div className="top-data">
        <div className="data">
          <h3>Arr</h3>
          <p className="result">
            {arr ? `$ ${convertToAbbreviation(arr)}` : "..."}
          </p>
        </div>
        <div className="data">
          <h3>Seats</h3>
          <p className="result">{seats ? separateNumber(seats) : "..."}</p>
        </div>
      </div>
      {data && !isLoading ? <BarChart data={data} /> : "Loading..."}
    </div>
  );
};

export default Home;
