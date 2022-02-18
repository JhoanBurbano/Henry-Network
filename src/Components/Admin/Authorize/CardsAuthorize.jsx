import { Card } from "./styles";
import Cohorte from "../../Icons/Cohorte";

export const CardsAuthorize = ({ users }) => {
  return (
    <Card>
      <p>{users.email}</p>
      <p>
        <Cohorte />
        {users.cohorte}
      </p>
    </Card>
  );
};
