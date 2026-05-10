import Image from "next/image";
import Link from "next/link";

const GLOBE_SRC = "/brand/logo-globe-640.png";

type BrandLogoVariant = "navbar" | "footer";

/** Square hit area; PNG is transparent outside the globe (object-contain preserves padding). */
const markSizes = {
  navbar: { className: "h-9 w-9 sm:h-10 sm:w-10", img: 96 },
  footer: { className: "h-10 w-10 sm:h-11 sm:w-11", img: 96 },
};

function BrandGlobeMark({ variant }: { variant: BrandLogoVariant }) {
  const s = markSizes[variant];
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center ${s.className} transition-[filter] duration-200 [filter:drop-shadow(0_2px_10px_rgba(15,23,42,0.55))] group-hover:[filter:brightness(1.06)_drop-shadow(0_2px_14px_rgba(30,64,175,0.38))]`}
    >
      <Image
        src={GLOBE_SRC}
        alt=""
        width={s.img}
        height={s.img}
        className="h-full w-full select-none object-contain object-center"
        sizes={variant === "navbar" ? "(min-width: 640px) 40px, 36px" : "(min-width: 640px) 44px, 40px"}
        draggable={false}
        priority={variant === "navbar"}
        quality={92}
      />
    </span>
  );
}

function BrandWordmark({ variant }: { variant: BrandLogoVariant }) {
  if (variant === "footer") {
    return (
      <span className="text-lg font-semibold leading-snug tracking-tight text-white">
        Daily IT Needs
      </span>
    );
  }
  return (
    <span className="truncate text-[15px] font-semibold leading-tight tracking-tight text-white sm:text-base">
      Daily IT Needs
    </span>
  );
}

export function BrandLogoLink({
  href = "/",
  variant = "navbar",
  className = "",
}: {
  href?: string;
  variant?: BrandLogoVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Daily IT Needs — Home"
      className={`group flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <BrandGlobeMark variant={variant} />
      <BrandWordmark variant={variant} />
    </Link>
  );
}
