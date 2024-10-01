import { useSearchParams } from "react-router-dom";

const ParamEx2 = () => {
  // console.log(`useSearchParams: ${useSearchParams()}`)
  let [params] = useSearchParams();
  let id = params.get("id");
  let useImage = params.get("use-image");
  console.log(`id: ${id}`);
  console.log(`useImage: ${useImage}`);

  return (
    <>
      <h2>ParamEx2.jsx</h2>
      <Link to="https://yts.mx/api/v2/movie_details.json?movie_id=60929&with_images=true&with_cast=true">
        Dune
      </Link>
    </>
  );
};

export default ParamEx2;
