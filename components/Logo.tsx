import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="relative flex items-center bg-transparent"
      aria-label="AMEK Platinum Services home"
    >
      <Image
        src="/amek-logo.png"
        alt="AMEK Platinum Services"
        width={680}
        height={473}
        priority
        className={
          compact
            ? "h-12 w-auto bg-transparent object-contain object-left"
            : "h-[4.35rem] w-auto bg-transparent object-contain object-left sm:h-[4.75rem]"
        }
      />
    </Link>
  );
}
