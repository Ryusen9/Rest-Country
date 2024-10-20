import { useEffect, useState } from "react";

const UseEffect = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <p>Api data: </p>
      {datas.map((data) => (
        <div key={data.id}>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
