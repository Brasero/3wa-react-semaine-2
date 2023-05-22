import {
  NavLink, useParams
} from "react-router-dom";

function Statistic () {
  const { count } = useParams();

  return (
    <>
      <p>Statistic </p>
      <p>Nombre de brelan(s) : {count}</p>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
    </>
  );
};

export default Statistic;
