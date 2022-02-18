import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledComment = styled.article`
  display: flex;
  margin-bottom: 15px;

  .comment__avatar {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .comment__text {
    display: flex;
    margin-left: 15px;
    padding: 10px;
    background-color: var(--grey-4);
    flex: 1;
    border-radius: 7px;

    a {
      text-decoration: none;
      color: #eee;
    }

    h3 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
    }

    p {
      color: #eee;
    }
    .comment__time {
      margin-left: auto;
      color: #666;
      font-size: 14px;
    }
  }
`;

export const CommentContainer = styled(motion.div)`
  margin-top: 20px;

  .comment__mas {
    text-decoration: none;
    color: #eee;
    display: block;
    text-align: center;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Create = styled.form`
  display: flex;
  border-radius: 8px;
  background-color: var(--grey-4);
  transition: outline 300ms;

  input {
    font-size: 16px;
    color: #eee;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: transparent;
    padding: 10px;
    flex: 1;
  }

  button {
    margin-left: auto;
    border-radius: 0 5px 5px 0;
    border: none;
    background-color: transparent;
    padding: 5px;
    color: #777;
    width: 100px;
    padding: 10px;
    transition: background-color 300ms, color 300ms;
    cursor: pointer;

    &:hover {
      background-color: var(--blue-1);
      color: #eee;
    }
  }

  &:focus-within {
    outline: 2px solid var(--yellow-1);
  }
`;
