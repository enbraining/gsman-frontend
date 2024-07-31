import Link from "next/link";
import { MdiHumanHandsup } from "./Icons";

export default function Header() {
  return (
    <main className="flex w-full fixed p-2">
      <Link href={"/"}>
        <MdiHumanHandsup scope={30} />
      </Link>
      <div className="ml-auto">
        <p className="text-white font-medium text-sm px-4 py-2 bg-[#00000066] rounded-full">
          건의사항은 디스코드 enbraining
        </p>
      </div>
    </main>
  );
}
