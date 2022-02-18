import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPostById, getPostById } from "../../actions";
import Layout from "../Layout/Layout";
import PostContainer from "../PostContainer/PostContainer";

export const Publication = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postById = useSelector((state) => state.postById);
  const post = Object.keys(postById).length ? [postById.data] : [];
  useEffect(() => {
    dispatch(getPostById(id));
    return () => {
      dispatch(clearPostById());
    };
  }, [dispatch, id]);
  return (
    <Layout>
      <PostContainer posts={post} />
    </Layout>
  );
};
