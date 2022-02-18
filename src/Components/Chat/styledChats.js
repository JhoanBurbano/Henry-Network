import styled from 'styled-components';

export const Messenger = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  margin-left:3%;
  margin-top:2%;
  width: 1200px;
  gap:50px
`;

export const ChatMenu = styled.div`
flex: 3.5;
@media (max-width: 768px) {
    flex: 1;
  }
`;


export const ContainerIndex= styled.div`
display: flex;
margin: 0%;
padding: 0%;
`;

export const ChatMenuWrapper = styled.div`
`;

export const ChatMenuInput = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChatBox = styled.div`
flex: 5.5;
@media (max-width: 768px) {
    flex: 10;
  }
`;

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ChatBoxTop = styled.div`
 height: 400px;
 overflow-y: scroll;
 overflow-inline: 10px;
 padding-right: 5px; 
 -webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

`;

export const ChatBoxBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatMessageInput = styled.textarea`
  width: 80%;
  height: 90px;
  padding: 10px;
`;

export const ChatSubmitButton = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #54D3F3E8;
  color: #1D1D1D;

`;

export const NoConversationText = styled.span`
  position: absolute;
  top: 10%;
  font-size: 50px;
  color: rgb(224, 220, 220);
  cursor: default;
`;
export const ChatOnlineContainer = styled.div`
 flex: 3;
 @media (max-width: 768px) {
    flex: 1px;
   }
`;

export const ChatOnlineWrapper = styled.div`
`;

