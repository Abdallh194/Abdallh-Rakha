import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function TotalAvatars() {
  return (
    <AvatarGroup total={24} className="">
      <Avatar alt="Remy Sharp" src="/avatar1.jpg" />
      <Avatar alt="Travis Howard" src="/avatar2.jpg" />
      <Avatar alt="Agnes Walker" src="/avatar3.jpg" />
      <Avatar alt="Trevor Henderson" src="/avatar4.jpg" />
    </AvatarGroup>
  );
}
