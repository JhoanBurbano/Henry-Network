import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUsers, getAllUsers } from "../../../actions";
import Layout from "../../Layout/Layout";
import LoaderFull from "../../Loader/LoaderFull";
import { DivCards } from "../../Suggestions/StyledSuggestions";
import CardAllUsers from "./CardsAllUsers";
import Error from "../../Icons/Error";

export const BlockAccount = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
    return () => {
      dispatch(clearAllUsers());
    };
  }, [dispatch]);
  return (
    <Layout>
      <h1 className="layout__title">Bloquear usuarios</h1>
      <p className="layout__description">
        Acá vas a poder ver los usuarios reportados y poder bloquearlos.
      </p>
      <DivCards>
        {allUsers.data?.length ? (
          allUsers.data.map((e) =>
            e.id ? (
              <CardAllUsers key={e.id} users={e} />
            ) : (
              <p className="post__error">
                <Error />
                No hay usuarios reportados.
              </p>
            )
          )
        ) : (
          <LoaderFull />
        )}
      </DivCards>
    </Layout>
  );
};
