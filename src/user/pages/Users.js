import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Kevin Garcia",
      image:
        "https://i.redd.it/the-witcher-3-21-9-wallpaper-3440x1440-v0-12htynjbjuea1.png?s=1c94e7a57f821912c60284152908814000f6a94e",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
