import { useRouter } from "next/router";

export default function Post() {
  const {
    query: { category },
  } = useRouter();
  return <h2> {category} </h2>;
}
