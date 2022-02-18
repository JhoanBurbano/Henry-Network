import React, { useState, useEffect, useRef } from "react";
import { getPeopleByName } from "../../actions";
import { StyledForm } from "./styles";
import Search from "../Icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBar() {

  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector((state => state.search));
  const array = users.data ? users.data : users
  const myId = useSelector((state) => state.myPhoto)

  const overlay = useRef();
  const event = (e) => {
    if (e.key === 'Escape') {
      setIsFocus(false);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', event)
    return () => {
      window.removeEventListener('keydown', event)
    }
  })
  const handleOverlayClick = (e) => {
    if (e.target === overlay.current) {
      setIsFocus(false);
    }
  }
  const handleFilter = (event) => {
    if(event.target.value.length>0){
    setIsFocus(true)
    dispatch(getPeopleByName(event.target.value))
    }else{
      setIsFocus(false)
    }
  };
  return (
    <StyledForm>
      <button type="submit">
        <Search />
      </button>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilter}
      />
      {array && array.length !== 0 && isFocus && (
        <>
          <div className='overlay-searchBar' ref={overlay} onClick={handleOverlayClick} />
          <div className='datalist'>
            {array?.map((value) => {
              return (
                <p className='name' key={value.id}>
                  <img className='user-img' src={value.profile.includes('http') ? value.profile : process.env.REACT_APP_PUERTO + value.profile} alt={value.fullname.split(' ')[0]} />
                  <Link to={`/${myId.data.id === value.id ? `myprofile` : `profile/` + value.id}`} >
                    {value.fullname}
                    <span className='email'>{value.email}</span>
                    <span className='span-link' />
                  </Link>
                </p>
              );
            })}
          </div>
        </>
      )}
    </StyledForm>
  );
}