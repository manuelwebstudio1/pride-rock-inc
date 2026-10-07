import Link from "next/link";

type LogoProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="relative flex items-center bg-transparent shadow-none"
      aria-label="Pride Rock Inc. home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/pride-rock-logo.png"
        alt="Pride Rock Inc."
        width={859}
        height={609}
        className={
          compact
            ? "h-12 w-auto bg-transparent object-contain object-left"
            : "h-[4.5rem] w-auto bg-transparent object-contain object-left sm:h-[4.85rem]"
        }
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      />
    </Link>
  );
}
