import { useSession } from "next-auth/react";
import Container from "../../components/Container";
import { usePost } from "../../hooks/usePost";

function Profile() {
  const { data: session } = useSession();
  const { posts } = usePost();

  const findUserPosts = () => {
    return posts.filter((post) => post.user === session?.user?.userId);
  };

  return (
    <Container>
      <div> Profile </div>
      {findUserPosts().map((userPost) => (
        <pre key={userPost._id}> {JSON.stringify(userPost, null, 2)} </pre>
      ))}
    </Container>
  );
}

export default Profile;
