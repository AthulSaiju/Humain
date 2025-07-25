'use client';

import Link from "next/link";
import Image from "next/image";
import {
  //  SignInButton,
  //  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo1.png" alt="logo" width={46} height={46} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        
        <SignedOut>

          

          <div className="flex gap-1">

            {/* <SignInButton>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-black bg-[#dcdcdc] cursor-pointer">
              <p>Login</p>
            </button>
          </SignInButton>

          <SignUpButton>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-white bg-black cursor-pointer">
              <p>Sign Up</p>
            </button>
          </SignUpButton> */}

          <Link href="/sign-up" prefetch={true}>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-black bg-white cursor-pointer max-sm:hidden">
              <p>Sign Up </p>
            </button>
          </Link>

          <Link href="/sign-in" prefetch={true}>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-white bg-black cursor-pointer">
              <p>Sign In</p>
            </button>
          </Link>

          


          </div>


        </SignedOut>
        <SignedIn>
            <NavItems />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
