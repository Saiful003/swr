import Link from "next/link";
import Container from "../components/Container";
import { useSession } from "next-auth/react";
import { usePost } from "../hooks/usePost";
import customAxios from "../config/axios";
import { SWRConfig } from "swr";

export async function getStaticProps() {
  // fetch data
  const { data } = await customAxios.get("/");

  return {
    props: {
      fallback: {
        "/api/v1": data,
      },
    },
    // revalidate props
  };
}

const Home = () => {
  const { data: session } = useSession();
  const { posts } = usePost();

  return (
    <Container>
      <div>
        {posts.map((post) => (
          <>
            <Link key={post._id} href={`/post/${post._id}`}>
              <a className="block"> {post.title} </a>
            </Link>
          </>
        ))}
      </div>

      <Link href="/create">
        <a>Create New Post</a>
      </Link>
      <br />
      <Link href="/user/profile">
        <a>{`${session?.user?.name}'s Profile`}</a>
      </Link>
    </Container>
  );
};

export default function App({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      {/* create boundary */}
      <Home />
    </SWRConfig>
  );
}

// asasasasss
// aasasa
