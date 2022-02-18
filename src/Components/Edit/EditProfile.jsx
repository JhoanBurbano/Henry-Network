import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUploadProfile } from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import { StyledEdit } from "./styles";
import Pencil from "../Icons/Pencil";
import Save from "../Icons/Save";

function EditProfile({ userInfo }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tokensito = tokenUsuario().headers.token;
  const [input, setInput] = useState({
    //  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBf9NIb94QLztGC6JuQk3-FNCrCY1ry64GA&usqp=CAU"
    // "https://images.ole.com.ar/2022/01/01/smOuc4YsP_340x340__1.jpg"
    // `${process.env.REACT_APP_PUERTO}
    // `${process.env.REACT_APP_PUERTO}uploads/ESiDsykaitaH1weBOslWLJs0TLJ2_profile.jpg`

    fullname: userInfo.fullname,
    description: userInfo.description,
    nacionalidad: userInfo.nacionalidad,
    birthday: userInfo.birthday,
  });

  const [image, setImage] = useState({ preview: "", data: "" });
  const [imageP, setImageP] = useState({ preview: "", data: "" });
  const [, setEditP] = useState(false);
  const [, setEdit] = useState(false);
  const [OptionUpProfile, setOptionUpProfile] = useState(false);
  const [OptionUpPort, setOptionUpPort] = useState(false);
  const [errors, setErrors] = useState({});


  const ErrorsValidacion = () => {
    let errors = {}
    
    if (!input.fullname || input.fullname.length > 25 || !/^(([A-Za-z])*([A-Za-z]+)?\s)+([A-Za-z])*([A-Za-z]+)?$/.test(input.fullname)){
      errors.fullname = "No se permiten numeros, 25 caracteres permitidos";
    }
    if(input.description.length > 100 ){
      errors.description = "solo se permiten 100 caracteres"
    }
    return errors;
  }


  const update = () => {
    setOptionUpProfile((previousState) => {
      return { ...previousState, OptionUpProfile: !OptionUpProfile };
    });
  };

  const update2 = () => {
    setOptionUpPort((previousState) => {
      return { ...previousState, OptionUpPort: !OptionUpPort };
    });
  };

  function handleChange(evt) {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
    setErrors(ErrorsValidacion({
      ...input,
      [evt.target.name]: evt.target.value,
  }))
  }

  const handleFileChangeP = (e) => {
    const imgP = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };

    userInfo.background_picture = imgP.preview;
    setImageP(imgP);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };

    if (e.target.name === "profile") {
      userInfo.profile = img.preview;
      setImage(img);
    }
  };

  async function handleSubmit(evt) {
    evt.preventDefault();

    let formData = new FormData();
    let formDataP = new FormData();

    if (image.data !== "") {
      formData.append("profile", image.data);
      const response = await fetch(
        `${process.env.REACT_APP_PUERTO}usuarios/updateProfile`,
        {
          method: "PUT",
          body: formData,
          headers: {
            token: tokensito,
          },
        }
      );

      if (response) {
        console.log(response.statusText);
      }
    }

    if (imageP.data !== "") {
      formDataP.append("background_picture", imageP.data);
      const responder = await fetch(
        `${process.env.REACT_APP_PUERTO}usuarios/updateBackPicture`,
        {
          method: "PUT",
          body: formDataP,
          headers: {
            token: tokensito,
          },
        }
      );

      if (responder) {
        console.log(responder.statusText);
      }
    }
    if(ErrorsValidacion()){
      dispatch(postUploadProfile(input));
      navigate("/myprofile", { replace: true });  
    }
    // console.log(formData, "lo que estoy mandando")
  }
  const preview = userInfo.profile.includes("uploads");
  const previewP = userInfo.background_picture.includes("uploads");

  
 
  return (
    <StyledEdit>
      <h1 className="edit__profile"> Editar Perfil </h1>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div className="edit__images">
          <div className="edit__portada">
            <img
              onMouseEnter={() => setEdit(true)}
              onMouseOut={() => setEdit(false)}
              onClick={update2}
              src={
                previewP
                  ? `${process.env.REACT_APP_PUERTO}${userInfo.background_picture}`
                  : userInfo.background_picture
              }
              alt="portada"
            />

            {!OptionUpPort ? (
              <div className="edit__img-portada">
                <label>
                  {" "}
                  Cambiar portada
                  <input
                    type="file"
                    name="background_picture"
                    onChange={(evt) => handleFileChangeP(evt)}
                    multiple
                  />
                </label>
                <button>
                  <Pencil />
                  Editar
                </button>
              </div>
            ) : null}
          </div>
          <div className="edit__avatar">
            <img
              src={
                preview
                  ? `${process.env.REACT_APP_PUERTO}${userInfo.profile}`
                  : userInfo.profile
              }
              onMouseEnter={() => setEditP(true)}
              onMouseOut={() => setEditP(false)}
              onClick={update}
              alt=""
            />

            {!OptionUpProfile ? (
              <div className="edit__img-avatar">
                <label>
                  {" "}
                  Cambiar foto
                  <input
                    type="file"
                    name="profile"
                    onChange={(evt) => handleFileChange(evt)}
                    multiple
                  />
                </label>
                <button>
                  <Pencil />
                  Editar
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="edit__container">
          <div className="edit__row">
            <label>
              Nombre
              <input
                required
                value={input.fullname}
                name="fullname"
                onChange={(evt) => handleChange(evt)}
              />
              {errors.fullname && (<p>{errors.fullname}</p>)}
            </label>

            <label>
              Nacionalidad
              <select
                name="nacionalidad"
                value={`${input.nacionalidad}`}
                onChange={(evt) => handleChange(evt)}
              >
                <option>Argentina</option>
                <option> Bolivia</option>
                <option> Brasil</option>
                <option> Chile</option>
                <option> Colombia</option>
                <option> Costa Rica </option>
                <option> Cuba</option>
                <option> Ecuador</option>
                <option> El Salvador</option>
                <option> Guatemala</option>
                <option> Haití </option>
                <option> Honduras</option>
                <option> Jamaica</option>
                <option> México</option>
                <option> Nicaragua</option>
                <option> Paraguay</option>
                <option> Panamá</option>
                <option> Perú</option>
                <option> Puerto Rico</option>
                <option> República Dominicana</option>
                <option> Uruguay</option>
                <option> Venezuela</option>
              </select>
            </label>
          </div>

          <div className="edit__row">
            <label>
              Fecha de nacimiento
              <input
                type="date"
                value={`${input.birthday}`}
                name="birthday"
                onChange={(evt) => handleChange(evt)}
              />
            </label>

          </div>

          <label className="edit__description">
            Descripcion
            <textarea
              value={`${input.description}`}
              name="description"
              onChange={(evt) => handleChange(evt)}
            />
            {errors.description && (<p>{errors.descriptions}</p>)}
          </label>

          {/* {(input.fullname !== '') ?

            <button className='edit__btn' type='submit'><Save />Guardar</button>
            : <span>username is require</span>
          } */}
          <button className="edit__btn" type="submit">
            <Save />
            Guardar
          </button>
        </div>
      </form>
    </StyledEdit>
  );
}

export default EditProfile;
