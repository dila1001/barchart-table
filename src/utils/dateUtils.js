export function convertDateFormat(dateString) {
  const [year, month] = dateString.split("-");
  const formattedDate = new Date(`${year}-${month}-01`).toLocaleString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
  return formattedDate;
}
