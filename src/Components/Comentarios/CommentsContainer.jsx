import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import CreateComment from "./CreateComment";
import { CommentContainer } from "./styles";

export default function CommentsContainer({ post }) {
  const postById = useSelector((state) => state.postById);

  return (
    <CommentContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {postById.data
        ? post.comentarios
            .map((el) => <Comments el={el} key={el._id} p={post} />)
            .reverse()
        : post.comentarios
            .slice(0, 3)
            .map((el) => <Comments el={el} key={el._id} p={post} />)
            .reverse()}
      {postById.data ? null : post.comentarios.length > 3 ? (
        <Link className="comment__mas" to={`/post/` + post._id}>
          Ver más
        </Link>
      ) : null}
      <CreateComment p={post} />
    </CommentContainer>
  );
}
