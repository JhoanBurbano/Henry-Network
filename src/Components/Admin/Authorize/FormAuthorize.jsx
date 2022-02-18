import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authorized } from "../../../actions";
import { tokenUsuario } from "../../../actions/actionTypes";
import { cohorte } from "../../../auxiliares/constantes";
import { Form } from "./styles";

export const FormAuthorize = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const authorize = {
    email: input,
    cohorte: select,
  };

  async function onSubmit(e) {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_PUERTO}reportes/auth`,
      authorize,
      tokenUsuario()
    );
    dispatch(authorized());
    alert("se autorizo a " + input);
  }
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <div className="form__div">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="email"
          onChange={handleInputChange}
          required
        ></input>
        <select onChange={handleChange} required>
          <option>Cohorte</option>
          {cohorte.map((e) => (
            <option value={e.option}>{e.option}</option>
          ))}
        </select>
      </div>
      <button className="form__btn" type="submit">
        Autorizar
      </button>
    </Form>
  );
};
