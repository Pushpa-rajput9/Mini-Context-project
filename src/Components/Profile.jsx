import { useContext } from "react";

import UserContext from "../Context/Context";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;
  return <div className="text-2xl">Welcome {user.username}</div>;
}

export default Profile;
