import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";
import supabase from "../../config/supabase";
import { IFriend } from "../../types";

// interface IInputs {
//   name: string;
//   sector: string;
//   introduceBy: string;
//   age: number | string;
// }

interface IProps {
  friend: IFriend;
}

function FriendDetail({ friend }: IProps) {
  const { register, handleSubmit, formState } = useForm<IFriend>({
    defaultValues: {
      name: friend.name,
      profession: friend.profession,
      introduceBy: friend.introduceBy,
      age: friend.age,
    },
  });
  const { errors } = formState;
  const { name, age, introduceBy, profession } = errors;
  const router = useRouter();

  // onSubmit function
  const onSubmit: SubmitHandler<IFriend> = async (data) => {
    const { data: updatedFriend } = await supabase
      .from("friends")
      .update(data)
      .match({ id: friend.id });

    if (updatedFriend) {
      router.push("/");
    }
  };

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
export const getStaticPaths = async () => {
  const { data } = await supabase.from("friends").select("*");

  const paths = data?.map((friend) => {
    return {
      params: {
        id: friend.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: friend } = await supabase
    .from("friends")
    .select("*")
    .eq("id", params?.id)
    .single();

  return {
    props: {
      friend,
    },
    revalidate: 60,
  };
};

export default FriendDetail;