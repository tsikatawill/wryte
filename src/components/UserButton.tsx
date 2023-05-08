import { FC } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../hooks/useUser";
import { userT } from "../types";

type Props = {
  user: userT;
  type?: "small" | "wide";
};

export const UserButton: FC<Props> = ({ user, type = "small" }) => {
  const { logout } = useUser();

  return (
    <div
      className={`wrapper flex gap-2 items-center ${
        type === "wide" && "bg-slate-900 p-2"
      }`}
    >
      <div
        title={user.displayName}
        onDoubleClick={logout}
        className="w-10 h-10 bg-slate-200 flex-shrink-0 rounded-full overflow-hidden flex gap-2"
      >
        <img
          className="w-12 h-12"
          src={user.photoURL ? user.photoURL : "https://picsum.photos/200"}
          alt={user.displayName}
        />
      </div>
      {type === "small" && (
        <button title="logout" onClick={logout}>
          <FaSignOutAlt />
        </button>
      )}

      {type === "wide" && (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold w-22 line-clamp-2">{user.displayName}</p>
          <button
            onClick={logout}
            title="Logout"
            className="hover:bg-slate-200 h-10 w-10 grid place-content-center transition-all duration-200 dark:hover:text-black rounded-full"
          >
            <FaSignOutAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
