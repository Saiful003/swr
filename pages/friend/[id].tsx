import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import supabase from "../../config/supabase";
import { IFriend } from "../../types";

function FriendDetail() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { register, handleSubmit, formState, reset } = useForm<IFriend>({
    defaultValues: {
      name: "",
      age: 0,
      introduceBy: "",
      profession: "",
    },
  });
  const { errors } = formState;
  const { name, age, introduceBy, profession } = errors;
  const router = useRouter();

  // fetch friend
  const getFriend = async () => {
    const { data: friend, error } = await supabase
      .from("friends")
      .select("*")
      .eq("id", router.query.id)
      .single();

    if (friend) {
      setLoading(false);
      setError(null);
      reset(friend);
    }
    if (error) {
      setLoading(true);
      setError("There was an error occured!");
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  // onSubmit function
  const onSubmit: SubmitHandler<IFriend> = async (data) => {
    const { data: updatedFriend } = await supabase
      .from("friends")
      .update(data)
      .match({ id: router.query.id });

    if (updatedFriend) {
      router.push("/");
    }
  };

  if (loading) {
    return (
      <Container>
        <h2 className="text-xl font-medium mt-3"> Loading... </h2>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>Update Friend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[calc(100vh-81px)] flex items-center justify-center">
        <Form>
          <h2 className="text-center font-medium text-2xl mt-2 mb-4">
            Update Existing Friend
          </h2>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              isError={name?.type === "required"}
              errorMessage={name?.message!}
              type="text"
              placeholder="Enter Your Friend Name"
              label="Friend Name"
              {...register("name", {
                required: "This friend name field is required.",
              })}
            />
            <Input
              isError={profession?.type === "required"}
              errorMessage={profession?.message!}
              type="text"
              placeholder="Enter Your Friend Profession"
              label="Profession"
              {...register("profession", {
                required: "This sector field is required.",
              })}
            />
            <Input
              isError={introduceBy?.type === "required"}
              errorMessage={introduceBy?.message!}
              type="text"
              placeholder="How introduce your friend ?"
              label="Introduce"
              {...register("introduceBy", {
                required: "This introduce field is required.",
              })}
            />
            <Input
              isError={age?.type === "required"}
              errorMessage={age?.message!}
              type="number"
              placeholder="Enter your friend age"
              label="Age"
              {...register("age", {
                required: "This age field is required.",
              })}
            />
            <button
              type="submit"
              className="px-3 py-2 mt-2 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
            >
              Update
            </button>
          </form>
        </Form>
      </div>
    </>
  );
}

// run build time
// export const getStaticPaths = async () => {
//   const { data } = await supabase.from("friends").select("*");

//   const paths = data?.map((friend) => {
//     return {
//       params: {
//         id: friend.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { data: friend } = await supabase
//     .from("friends")
//     .select("*")
//     .eq("id", params?.id)
//     .single();

//   return {
//     props: {
//       friend,
//     },
//     revalidate: 60,
//   };
// };

export default FriendDetail;
