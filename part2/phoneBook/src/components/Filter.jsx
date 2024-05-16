import { useEffect, useState } from "react";

const Filter = ({ data, setData }) => {
  const [filter, setFilter] = useState("");

  useEffect(
    () =>
      setData(
        filter
          ? data.filter((data) =>
              data.name.toLowerCase().includes(filter.toLowerCase()),
            )
          : data,
      ),
    [data, filter], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
