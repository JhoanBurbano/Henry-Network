import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByTags } from "../../actions";
import { StyledDiv } from "./styles";
import Experience from "../Icons/Experience";
import Error from "../Icons/Error";

export default function PostsExperiences() {
  const posts = useSelector((state) => state.experiencesPost);
  const myId = useSelector((state) => state.myId);
  const dispatch = useDispatch();
  function handleFilterTags(e) {
    e.preventDefault();
    dispatch(filterByTags(e.target.value));
  }
  console.log(posts, "experiences");

  return (
    <StyledDiv>
      <label className="tags__label" htmlFor="filtros">
        Filtrar
      </label>
      <select
        id="filtros"
        className="tags__select"
        onChange={(e) => handleFilterTags(e)}
      >
        <option value="Todos">Todos</option>
        <option value="#General">#General</option>
        <option value="#M1">#M1</option>
        <option value="#M2">#M2</option>
        <option value="#M3">#M3</option>
        <option value="#M4">#M4</option>
        <option value="#ProyectoIndividual">#ProyectoIndividual</option>
        <option value="#ProyectoGrupal">#ProyectoGrupal</option>
      </select>
      <div className="post__contain">
        {posts?.map((el) => {
          let tags = el.tags[0].split(", ");
          return (
            <article className="post__article" key={el.id}>
              <section className="post__section">
                <Link
                  to={`/${
                    myId?.id === el.autorData[0]?.id
                      ? "myprofile"
                      : `profile/${el.autorData[0]?.id}`
                  }`}
                >
                  <img
                    src={
                      el.autorData?.[0]?.profile?.includes("http")
                        ? el.autorData?.[0]?.profile.replace(/\\/g, "/")
                        : process.env.REACT_APP_PUERTO +
                          el.autorData?.[0]?.profile.replace(/\\/g, "/")
                    }
                    alt=""
                    width={"30px"}
                    height={"30px"}
                    className="post__profile"
                  />
                  <p>{el.autorData[0]?.fullname}</p>
                  <Experience />
                </Link>
              </section>
              <p className="post__desc">{el.description}</p>
              <ul className="post__ul">
                {tags.map((t) => (
                  <li>{t}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      {posts.length === 0 && (
        <p className="post__error">
          <Error />
          No hay experiencias con esta etiqueta.
        </p>
      )}
    </StyledDiv>
  );
}
