import Link from "next/link";

type props = {
  linkName: string;
  onClick?: () => void;
};

function NavList({ linkName, ...rest }: props) {
  return (
    <li {...rest}>
      <Link href="/">
        <a className=" font-semibold text-lg "> {linkName} </a>
      </Link>
    </li>
  );
}

export default NavList;
