// app/head.tsx
export default function Head() {
  return (
    <>
      {/* 1) Mobile viewport — applied on every route */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* …any other site‑wide <head> tags (fonts, icons, global styles) */}
    </>
  );
}
