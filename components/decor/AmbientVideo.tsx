"use client"

/**
 * Ambient background video — plays muted, on loop, autoplaying.
 * Heavily tinted/faded into the page colour (#04000c) so it reads as a soft
 * moving backdrop effect rather than an obvious video. Background layer only.
 */
export function AmbientVideo({
  src,
  className,
  opacity = 0.3,
}: {
  src: string
  className?: string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity, filter: "blur(3px) saturate(0.85)" }}
      />

      {/* Vignette — pulls the video into the page colour */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 42%, rgba(4,0,12,0.18), rgba(4,0,12,0.78) 80%)",
        }}
      />
      {/* Top & bottom fade into the page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #04000c 0%, transparent 26%, transparent 70%, #04000c 100%)",
        }}
      />
      {/* Theme tint (purple/gold) so the colours match the site */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 32%, rgba(88,28,135,0.16), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  )
}
