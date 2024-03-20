// import auth from "@/app/middleware";
import { db } from "@/db";

export default async function Page({ params }) {
  // const session = await auth();
  // console.log(session);

  const rawProfile = await db.query(
    `SELECT * FROM users WHERE users.id = ${params.id}`
  );
  const profile = rawProfile.rows[0];
  // console.log(profile);

  const { rows: userPosts } = await db.query(
    `SELECT * FROM posts WHERE posts.user_id = ${params.id}`
  );
  console.log(userPosts);

  return (
    <main>
      <section>
        <img
          className="rounded-full h-32 w-32 object-cover"
          src={profile.image}
        />
        <h3>{profile.name}</h3>
        {profile.email !== null ? (
          <p>{profile.email}</p>
        ) : (
          <p>Email unconfirmed</p>
        )}
      </section>
      <div>
        {userPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
