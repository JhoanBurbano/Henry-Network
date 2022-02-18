import debounce from "just-debounce-it";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useNearScreen from "../../Hooks/useNearScreen";
import Bienvenido from "../Home/Bienvenido";
import FriendNoPosts from "../Home/FriendNoPosts";
import NoPosts from "../Home/NoPosts";
import Post from "../Post/Post";
import { StyledPostContainer } from "./styles";

export default function PostContainer({ posts = [] }) {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage] = useState(1);

  const allPost = useSelector((state) => state.allPost);
  const myProfilePost = useSelector((state) => state.myProfilePost);

  let lastPostInpage = currentPage * postsPerPage;
  let firstPostInpage = lastPostInpage - postsPerPage;
  let currentPosts = posts?.slice(firstPostInpage, lastPostInpage);
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: !posts.length ? null : externalRef,
    once: false,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPostsPerPage(postsPerPage + 3), 700),
    [postsPerPage]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return allPost?.length ? (
    <StyledPostContainer>
      {!currentPosts[0]?._id ? <Bienvenido /> : null}
      {currentPosts[0]?._id
        ? currentPosts.map((p) => <Post p={p} key={p._id} />)
        : null}
      {postsPerPage >= posts.length ? null : (
        <p className="visor" id="visor" ref={externalRef}>
          cargando...
        </p>
      )}
    </StyledPostContainer>
  ) : myProfilePost?.length ? (
    <StyledPostContainer>
      {!currentPosts[0]?._id ? <NoPosts /> : null}
      {currentPosts[0]?._id
        ? currentPosts.map((p) => <Post p={p} key={p._id} />)
        : null}
      {postsPerPage >= posts.length ? null : (
        <p className="visor" id="visor" ref={externalRef}>
          cargando...
        </p>
      )}
    </StyledPostContainer>
  ) : (
    <StyledPostContainer>
      {" "}
      {!currentPosts[0]?._id ? <FriendNoPosts /> : null}
      {currentPosts[0]?._id
        ? currentPosts.map((p) => <Post p={p} key={p._id} />)
        : null}
      {postsPerPage >= posts.length ? null : (
        <p className="visor" id="visor" ref={externalRef}>
          cargando...
        </p>
      )}
    </StyledPostContainer>
  );
}
