import Image from "next/image";
import { imgSize } from "@/content/images";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  frame?: string;
  preload?: boolean;
  sizes?: string;
};

export function Figure({ src, alt, caption, className = "", frame = "bg-card", preload, sizes }: Props) {
  const [w, h] = imgSize[src] ?? [1600, 900];
  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-[18px] border border-line ${frame}`}>
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          preload={preload}
          sizes={sizes ?? "(min-width: 1024px) 960px, 100vw"}
          className="h-auto w-full"
        />
      </div>
      {caption && <figcaption className="mt-2.5 px-1 text-[13px] leading-relaxed text-faint">{caption}</figcaption>}
    </figure>
  );
}

/** Schermate da telefono: bordo arrotondato e ombra leggera */
export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [w, h] = imgSize[src];
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      sizes="(min-width: 1024px) 220px, 33vw"
      className={`h-auto w-full rounded-[14px] border border-black/5 shadow-[0_12px_28px_-12px_rgba(27,42,74,.35)] ${className}`}
    />
  );
}
