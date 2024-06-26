import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="images/logo.svg" alt="logo" width={119} height={37} />
      </div>
    </Link>
  );
};
