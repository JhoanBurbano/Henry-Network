import React, { useEffect, useState } from "react";
import { StyledForm } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePost,
  getCleanHome,
  getExperiencesPosts,
  getMyId,
  getMyPhoto,
} from "../../actions";
import { Link } from "react-router-dom";
import Delete from "../Icons/Delete";
import toast, { Toaster } from "react-hot-toast";

export default function CrearExperience() {
  const dispatch = useDispatch();

  const myPhoto = useSelector((state) => state.myPhoto);
  useEffect(() => {
    dispatch(getMyPhoto());
    dispatch(getExperiencesPosts());
    return () => {
      dispatch(getMyId()); // !!no tocar please
      dispatch(getCleanHome());
    };
  }, [dispatch]);

  const [input, setInput] = useState({
    description: "",
    tags: [],
  });

  function handleSelect(e) {
    if (input.tags.length <= 1) {
      setInput({
        ...input,
        tags: [e.target.value],
      });
    } else {
      return null;
    }
    console.log(input.tags.length, "length");
  }

  function handleChange(e) {
    const isEmpty = /^\s/.test(e.target.value);
    setInput({
      ...input,
      [e.target.name]: isEmpty ? "" : e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    notify();
    alert("Experiencia creada");
    let data = new FormData();

    data.append("description", input.description);
    data.append("tags", input.tags);
    dispatch(CreatePost(data));
    setInput({
      description: "",
    });
    window.location.reload();
  }
  const handleBorrar = (el) => {
    setInput({
      ...input,
      tags: input.tags.filter((e) => e !== el),
    });
  };

  const notify = () =>
    toast.success("Tu post se creo exitosamente", {
      duration: 9000,
      position: "top-center",
    });
  //holaa

  return (
    <StyledForm
      className={input.description ? "expanded" : undefined}
      onSubmit={submitHandler}
    >
      <Toaster
        toastOptions={{
          success: {
            duration: 7000,
          },
        }}
      />
      <div className="img-post">
        <Link to={"/myprofile"}>
          <img
            className="user-img"
            src={
              myPhoto
                ? myPhoto.data?.profile[0] === "u"
                  ? process.env.REACT_APP_PUERTO +
                    myPhoto.data?.profile.replace(/\\/g, "/")
                  : myPhoto.data?.profile.replace(/\\/g, "/")
                : "https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg"
            }
            alt=""
            width={"20px"}
            height={"20px"}
          />
        </Link>
        <textarea
          className="textarea"
          placeholder={
            "Contanos tu experiencia para asi ayudar a otros Henrys "
          }
          name="description"
          value={input.description}
          required
          onChange={handleChange}
        />
      </div>
      <div className="tags__container">
        <label htmlFor="tags" className="tags__label">
          Etiqueta
        </label>
        <select
          disabled={input.description ? undefined : true}
          id="tags"
          required
          onChange={(e) => handleSelect(e)}
          className="tags__select"
        >
          <option value="" selected disabled hidden>
            Selecciona una
          </option>
          <option value="#General">#General</option>
          <option value="#M1">#M1</option>
          <option value="#M2">#M2</option>
          <option value="#M3">#M3</option>
          <option value="#M4">#M4</option>
          <option value="#ProyectoIndividual">#ProyectoIndividual</option>
          <option value="#ProyectoGrupal">#ProyectoGrupal</option>
        </select>
        <ul>
          <li>
            {input.tags?.map((el) => (
              <button
                className="tags__btn"
                type="button"
                key={el}
                onClick={() => handleBorrar(el)}
              >
                <li>
                  {el}
                  <Delete />
                </li>
              </button>
            ))}
          </li>
        </ul>
        <button
          className="btn-submit"
          disabled={input.description && input.tags.length ? undefined : true}
          type="submit"
        >
          Compartir
        </button>
      </div>
    </StyledForm>
  );
}
