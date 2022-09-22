import Link from "next/link";
import React from "react";
import { useAuth } from "../context/authContext";
import Container from "./Container";

function Header() {
  const { currentUser } = useAuth();

  return (
    <div className="border-b">
      <Container>
        <div className="flex flex-col lg:flex-row md:justify-between gap-y-4 items-center min-h-[80px] py-3 lg:py-0">
          <Link href="/">
            <h2 className="mr-4 cursor-pointer text-2xl font-medium text-emerald-500">
              Friends Management System
            </h2>
          </Link>
          <div className="flex items-center flex-wrap gap-4">
            <Link href={"/create"}>
              <a className="px-4 py-2 rounded-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white">
                Create a new friend
              </a>
            </Link>
            {currentUser && (
              <>
                <Link href="/logout">
                  <a className="border px-4 py-2 font-medium">Logout</a>
                </Link>
                <p className="font-medium w-10 aspect-square rounded-full flex items-center justify-center bg-emerald-400 text-white">
                  {currentUser?.email.charAt(0).toUpperCase()}
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
