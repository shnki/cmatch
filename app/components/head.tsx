import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row-reverse justify-center items-center">
      <h1 className="text-xl md:text-2xl">ماتشات</h1>
      <Image
        className="w-10 md:w-20"
        src="/header-cover.svg"
        width={100}
        height={100}
        alt="header"
      />
      <h1 className="text-xl md:text-2xl">النهاده</h1>
    </div>
  );
}
