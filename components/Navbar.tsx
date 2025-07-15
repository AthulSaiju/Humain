import Link from "next/link";
import Image from "next/image";
import {
   SignInButton,
   SignUpButton,
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
          <Image src="/images/logo1.png" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        
        <SignedOut>

          

          <div className="flex gap-1">

            <SignInButton>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-black bg-[#dcdcdc] cursor-pointer">
              <p>Login</p>
            </button>
          </SignInButton>

          <SignUpButton>
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-white bg-black cursor-pointer">
              <p>Sign Up</p>
            </button>
          </SignUpButton>

          {/* <Link href="/sign-in">
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-black bg-[#dcdcdc] cursor-pointer">
              <p>Login</p>
            </button>
          </Link>

          <Link href="/sign-up">
            <button className=" flex items-center py-4 px-8 rounded-full lg:text-lg text-sm text-white bg-black cursor-pointer">
              <p>Sign Up</p>
            </button>
          </Link> */}
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
