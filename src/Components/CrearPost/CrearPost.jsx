import React, { useState } from "react";
import { StyledForm } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost } from "../../actions";
import Upload from "../Icons/Upload";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

let id = 0;

export default function CrearPost() {
  const dispatch = useDispatch();

  const myPhoto = useSelector((state) => state.myPhoto);

  const [input, setInput] = useState({
    description: "",
  });
  const [file, setFile] = useState([]);
  const [view, setView] = useState([]);

  function handleChange(e) {
    const isEmpty = /^\s/.test(e.target.value);
    setInput({
      ...input,
      [e.target.name]: isEmpty ? "" : e.target.value,
    });
  }
  const extraerBase64 = async ($event) =>
    new Promise((resolve) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        return null;
      }
    });

  const notify = () =>
    toast.success("Tu post se creo exitosamente", {
      duration: 9000,
      position: "top-center",
    });

  function submitHandler(e) {
    e.preventDefault();
    notify();
    let data = new FormData();
    
    file.forEach((f) => {
      data.append("image", f);
    });

    data.append("description", input.description);
    dispatch(CreatePost(data));
    setInput({
      description: "",
    });
    alert("Post creado exitosamente");
    window.location.reload();
  }
  const handleFile = async (e) => {
    setFile((file) => [...file, e.target.files[0]]);
    let img = await extraerBase64(e.target.files[0]);
    setView((view) => [...view, { img, id: id++ }]);
  };

  const handleDelete = (id) => {
    let newArr = view.filter((i) => i.id !== id);
    setView(newArr);
  };

  return (
    <StyledForm
      className={input.description || view.length ? "expanded" : undefined}
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
                  ? process.env.REACT_APP_PUERTO + myPhoto.data?.profile
                  : myPhoto.data?.profile
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
            "¿Qué estas pensando " + myPhoto?.data?.fullname.split(" ")[0] + "?"
          }
          name="description"
          value={input.description}
          onChange={handleChange}
        />
      </div>
      <div className="file-btn">
        <input
          className="input-file"
          type="file"
          id="file"
          accept=".png, .jpeg, .jpg"
          onChange={handleFile}
        />
        <button className="btn">
          <Upload />
        </button>
      </div>
      <div className="expanded__div">
        <div className="img-preview">
          {view?.map(({ img, id }) => (
            <div key={id} className="img-preview-div">
              <img src={img} alt="" />
              <button className="btn__delete" onClick={() => handleDelete(id)}>
                X
              </button>
            </div>
          ))}
        </div>

        <button
          className="btn-submit"
          disabled={input.description || view.length ? undefined : true}
          type="submit"
        >
          Compartir
        </button>
      </div>
    </StyledForm>
  );
}
