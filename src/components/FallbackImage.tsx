import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/**
 * Wraps a plain <img> so a failed load shows a quiet, on-brand
 * placeholder instead of a broken-image icon, without disturbing
 * the surrounding layout.
 */
export function FallbackImage({ src, alt, className = "", ...rest }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-accent-tint text-stone ${className}`}
      >
        <ImageOff size={28} aria-hidden="true" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
