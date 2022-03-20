import { Route, Routes } from "react-router-dom";
import { Collection, Home, Thing } from "../Pages";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { User } from "../Pages/User";

export const RouterHandler = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path={"/:userName"}>
        <Route index element={<User />} />
        <Route path={":collectionName"}>
          <Route index element={<Collection />} />
          <Route path=":thingName" element={<Thing />} />
        </Route>
      </Route>

      {/* <Route path={"/collection/:collectionName"}>
        <Route index element={<Collection />} />
        <Route path=":shirtName" element={<Shirt />} />
      </Route> */}
    </Routes>
  );
};
