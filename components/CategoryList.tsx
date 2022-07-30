import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLowerCase } from "../hooks/useLowerCase";
import { useTheme } from "../hooks/useTheme";
interface IProps {
  slug: string;
}

function CategoryList({ slug }: IProps) {
  const {
    pathname,
    query: { category },
  } = useRouter();
  const lowerCaseSlug = useLowerCase(slug);
  const { light } = useTheme();

  const setListClass = ({
    forRecent,
    forOthers,
  }: {
    forRecent?: boolean;
    forOthers?: boolean;
  }) => {
    if (forRecent) {
      return classNames(
        "py-4 font-bold",
        {
          "border-b-4 border-b-red-500": pathname === "/",
        },
        { "text-white": !light },
        { "text-gray-600": light }
      );
    }
    if (forOthers) {
      return classNames(
        "py-4 font-bold",
        {
          "border-b-4 border-b-red-500": lowerCaseSlug === category,
        },
        { "text-white": !light },
        { "text-gray-600": light }
      );
    }
  };

  if (lowerCaseSlug === "recent") {
    return (
      <li className={setListClass({ forRecent: true })}>
        <Link href="/">{slug}</Link>
      </li>
    );
  }

  return (
    <li className={setListClass({ forOthers: true })}>
      <Link href={`/categories/${lowerCaseSlug}`}>{slug}</Link>
    </li>
  );
}

export default CategoryList;
