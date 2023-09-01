import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  
  return (
    <div>
      <h1>Opps!!</h1>
      <h4>Something went wrong!!</h4>
      <h4>
        {" "}
        {err.status}: {err.statusText}{" "}
      </h4>
      <h4>{err.data}</h4>
    </div>
  );
};
export default Error;
