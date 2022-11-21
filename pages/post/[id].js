import { useState } from "react";
import { useRouter } from "next/router";
import customAxios from "../../config/axios";
import Container from "../../components/Container";
import { useSession } from "next-auth/react";
import useSWR, { SWRConfig, useSWRConfig, unstable_serialize } from "swr";
import { fetcher } from "../../utils/fetcher";

// Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
//   const { data } = await customAxios.get("/");
//   console.log(data);
//   const paths = data.message.map((post) => ({ params: { id: post._id } }));
//   return {
//     paths: [],
//     fallback: true, // can also be true or 'blocking'
//   };
// }
// export async function getStaticProps({ params: { id } }) {
//   // fetch data`/api/v1/post/${id}`
//   const { data } = await customAxios.get(`/post/${id}`);
//   return {
//     props: {
//       fallback: {
//         [unstable_serialize(["api", "v1", "post", id])]: data,
//       },
//     },
//   };
// }

export default function Post() {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();

  const {
    query: { id },
  } = useRouter();
  const { data } = useSWR(`/api/v1/post/${id}`, fetcher);
  if (!data) return;
  const {
    message: { comments, ...post },
  } = data;

  const sendComment = () => {
    return customAxios.put(`/post/${id}`, { comment });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment && session) {
      await sendComment();
      mutate(`/api/v1/post/${id}`);
      setComment("");
    }
  };

  return (
    <Container>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          placeholder="Enter your comment"
          className="border"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit"> Enter</button>
      </form>
      {comments.map((comment, index) => (
        <pre key={index}>{JSON.stringify(comment, null, 2)}</pre>
      ))}
    </Container>
  );
}

// export default function PostWrapper({ fallback }) {
//   return (
//     <SWRConfig value={{ fallback }}>
//       <Post />
//     </SWRConfig>
//   );
// }
