import Link from "next/link";

type props = {
  linkName: string;
};

function SiteLink({ linkName }: props) {
  return (
    <Link href="/">
      <a className="text-sm text-gray-400 inline-block hover:underline mr-2 last:mr-0">
        {linkName}
      </a>
    </Link>
  );
}

export default SiteLink;
