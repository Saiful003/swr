import React from "react";
import Container from "./Container";
import Link from "next/link";

function Footer() {
  return (
    <div className="sticky bottom-0  bg-neutral-100">
      <Container>
        <div className="h-[100px] flex flex-col justify-center items-center">
          <h2 className=" font-medium">Author : Md Saiful Islam Shanto</h2>
          <a>
            Made with
            <Link href="https://nextjs.org/">
              <span className=" text-red-500 font-bold hover:underline cursor-pointer">
                {" "}
                Next.js
              </span>
            </Link>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
