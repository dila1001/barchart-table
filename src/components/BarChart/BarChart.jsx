import { convertDateFormat } from "../../utils/dateUtils";
import "./BarChart.css";
const BarChart = ({ data }) => {
  // Max bar height
  const maxItemHeight = 280;

  const mostArr = data.reduce((acc, cur) => {
    const { arr } = cur;
    return arr > acc ? arr : acc;
  }, 0);

  const divisionNum = maxItemHeight / mostArr;

  // Normalize data
  const massagedData = data.map((month) => ({
    ...month,
    arr: month.arr * divisionNum,
  }));

  return (
    <>
      <h3>New arr per month</h3>
      <div className="chart">
        {massagedData.map((month, index) => {
          return (
            <div className="outer-bar" key={index}>
              <div className="bar" style={{ height: month.arr }}></div>
              <span className="month-label">
                {convertDateFormat(month.month)}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BarChart;
