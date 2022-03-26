import { Route, Routes } from "react-router-dom";
import { Collection, Home, Login, Register, Thing, User } from "src/Pages";

export const RouterHandler = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path={"/:username"}>
        <Route index element={<User />} />
        <Route path={":collectionName"}>
          <Route index element={<Collection />} />
          <Route path=":thingName" element={<Thing />} />
        </Route>
      </Route>

    </Routes>
  );
};
