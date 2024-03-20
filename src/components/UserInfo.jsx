import Link from "next/link";
import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function UserInfo() {
  const session = await auth();
  // console.log(session);

  return (
    <div>
      {session ? (
        <div>
          <Link href={`/users/${session.user.id}`}>User Profile</Link>
          {session.user.name}{" "}
          <span className="text-xs text-zinc-400 mr-3">#{session.user.id}</span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
