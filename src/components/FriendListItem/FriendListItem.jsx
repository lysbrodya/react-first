import React from "react";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const classAvatar = clsx(css.avatar, isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.friend}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={classAvatar}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
