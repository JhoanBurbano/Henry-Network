import styled from 'styled-components';




export const MessengeHeadyou = styled.div`

display: flex;
gap:10px;
justify-content: flex-end;
margin: 1%;

`;
export const SendContainer = styled.div`

display: flex;
gap:10px;
justify-content:space-between;


`;


export const MessengeHead = styled.div`

display: flex;
gap:10px;
max-width: 350px;
margin:1%;

`;

export const MessengeCont = styled.div`

  max-width: 350px;
  display: flex;
  gap:10px;
  justify-content: space-between; 
  background-color: #FAE800;
  padding: 5%;
  border-radius:10px;

`;

export const MessengeContFriend = styled.div`

  display: flex;
  gap:10px;
  background-color: #504949;
  padding: 5%;
  border-radius:10px;

`;

export const Pyou = styled.p`
max-width: 350px;
color:black;


`;


export const Pfriend = styled.p`
max-width: 350px;
color:#f3f3f3;

`;

export const LabeldateFriend = styled.label`
color:gray;
position:relative;
font-size:13px;
margin: 3%;
left:300px;
`;

export const LabeldateYou = styled.label`
color: #FAE800;
position:relative;
font-size:13px;
margin: 3%;
left:100px;
`;

export const Pconversa = styled.p`

color: #FAE800;

`;

export const Ponline= styled.p`

color: #39ff14;

`;

export const NameHead= styled.h3`

color: #f3f3f3;

`;
export const Poffline= styled.p`

color: gray;

`;

export const ButtonSubmit= styled.button`

background:#347fd2;
width:100px;
border:none;
border-radius:20px;
cursor:pointer;
transition: 0.3s;
outline:none;
&:hover{
  background:#FAE800;
}

`;

export const InputMessage = styled.input`
/* margin-top: 15px; */
padding: 12px;
height: 50px;
border-radius: 4px;
border: 2px solid transparent;
font-weight: 500;
width: 500px;
color: #eee;
background-color: var(--grey-5);
outline: none;
transition: border-color 300ms;

 &:focus {
      border: 2px solid var(--yellow-1);
    } 
`;

