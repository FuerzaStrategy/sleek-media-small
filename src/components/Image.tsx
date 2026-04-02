/**
 * Drop-in replacement for next/image that prepends NEXT_PUBLIC_BASE_PATH
 * to all local src paths at build time. This guarantees images load
 * correctly on GitHub Pages regardless of the subpath.
 */
import NextImage, { type ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Image({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && !src.startsWith("http")
      ? `${BASE}${src}`
      : src;
  return <NextImage src={resolved} {...props} />;
}
