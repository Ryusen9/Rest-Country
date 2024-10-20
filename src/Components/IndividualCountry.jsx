import props from "prop-types";
import { useState } from "react";
const IndividualCountry = ({ data, func, func2 }) => {
  const { name, flags, independent } = data;
  const [isIndependent, setIndependent] = useState(independent);
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <div
      id="info"
      className={`border-2 ${
        isIndependent ? "border-green-500" : "border-red-500"
      } w-[80%] mx-auto flex flex-col gap-2 ${
        visited && "opacity-30"
      } items-center justify-center p-5 rounded-lg`}
    >
      <p>Name : {name.common}</p>
      <img src={flags.png} alt="" />
      <button className="btn" onClick={handleVisit}>
        {visited ? "Visited" : "Going"}
      </button>
      <p>{visited ? "I have visited the place" : "I wanna go there"}</p>
      <button className="btn" onClick={() => func(data)}>
        Mark as visited
      </button>
      <button className="btn" onClick={() => func2(data)}>
        Add flag
      </button>
    </div>
  );
};

IndividualCountry.propTypes = {
  data: props.object.isRequired,
  func: props.object.isRequired,
};
export default IndividualCountry;
