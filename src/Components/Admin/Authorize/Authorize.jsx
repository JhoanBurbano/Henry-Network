import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorized } from "../../../actions";
import Layout from "../../Layout/Layout";
import Error from "../../Icons/Error";
import { CardsAuthorize } from "./CardsAuthorize";
import { FormAuthorize } from "./FormAuthorize";
import { CardContainer } from "./styles";

export const Authorize = () => {
  const dispatch = useDispatch();
  const usersAuthorized = useSelector((state) => state.authorized);
  useEffect(() => {
    dispatch(authorized());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="layout__title">Personas autorizadas</h1>
      <FormAuthorize />
      <CardContainer>
        {usersAuthorized?.length ? (
          usersAuthorized.map((e) => <CardsAuthorize users={e} />)
        ) : (
          <p className="post__error">
            <Error />
            No hay usuarios autorizados.
          </p>
        )}
      </CardContainer>
    </Layout>
  );
};
