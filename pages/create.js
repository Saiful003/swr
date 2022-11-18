import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import { useRouter } from "next/router";
import customAxios from "../config/axios";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import classNames from "classnames";
import { showToast } from "../utils/showToast";

function CreateNewFriend() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { title } = errors;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isLightTheme } = useTheme();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // onSubmit function
  const onSubmit = async (data) => {
    // enable loading state
    setLoading(true);
    await customAxios.post("/post/create", data);
    // disable loading state
    setLoading(false);
    // show success toast
    showToast({
      text: "Successfully Created!",
      type: "success",
    });
    router.push("/");
  };

  return (
    <Form>
      <h2
        className={classNames("text-center font-medium text-2xl mt-2 mb-4", {
          "text-white": !isLightTheme,
        })}
      >
        Create new friend
      </h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          isError={title?.type === "required"}
          errorMessage={title?.message}
          type="text"
          placeholder="Enter post title"
          label="Post title"
          {...register("title", {
            required: "Post title required",
          })}
        />

        <button
          type="submit"
          className="px-3 py-2 mt-2 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </Form>
  );
}

export default CreateNewFriend;
