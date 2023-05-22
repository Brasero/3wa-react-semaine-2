import "./App.css";
import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  for(const [page, author] of searchParams) console.log(page, author)

  return (
    <div className="App">
     Post : {id}
    </div>
  );
}

export default Post;
