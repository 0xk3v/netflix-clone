import { Button } from "../../utils";
import { NavBar } from "./Nav.styled";

const Nav = () => {
  return (
    <NavBar>
      <div className="logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="btns">
        <Button>Sign in</Button>
      </div>
    </NavBar>
  );
};

export default Nav;
