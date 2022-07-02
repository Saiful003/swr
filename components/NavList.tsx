import Link from "next/link";

type props = {
  linkName: string;
};

function NavList({ linkName }: props) {
  return (
    <li>
      <Link href="/">
        <a className="text-white font-semibold text-lg "> {linkName} </a>
      </Link>
    </li>
  );
}

export default NavList;
