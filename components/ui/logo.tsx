import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <div className="flex flex-1 items-center gap-2">
        <Image src={logo} alt="Cruip Logo" width={32} height={32} />
        <span className="text-xl font-bold text-white">Appzad</span>
      </div>
    </Link>
  );
}
