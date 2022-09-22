import Input from "../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import supabase from "../config/supabase";
import { useRouter } from "next/router";
import Form from "../components/Form";
import { IFriend } from "../types";
import { useAuth } from "../context/authContext";
import { useProtectPage } from "../hooks/useProtectPage";

function CreateNewFriend() {
  const { register, handleSubmit, formState } = useForm<IFriend>();
  const { errors } = formState;
  const { name, age, introduceBy, profession } = errors;
  const router = useRouter();
  const { currentUser } = useAuth();

  // protect this page
  useProtectPage();

  // onSubmit function
  const onSubmit: SubmitHandler<IFriend> = async (data) => {
    const { data: friend, error } = await supabase
      .from("friends")
      .insert([data]);
    if (friend) {
      router.push("/");
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="h-[calc(100vh-81px)]  flex items-center justify-center">
      <Form>
        <h2 className="text-center font-medium text-2xl mt-2 mb-4">
          Create new friend
        </h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
            Create
          </button>
        </form>
      </Form>
    </div>
  );
}

export default CreateNewFriend;
