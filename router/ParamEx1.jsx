import { useParams } from "react-router-dom";

const ParamEx1 = () => {
  console.log(useParams());
  let { id } = useParams();
  console.log(`id: ${id}`)
  return (
    <>
      <h2>ParamEx1.jsx</h2>
      <div>id가 {id}입니다.</div>
    </>
  );
};

export default ParamEx1;
