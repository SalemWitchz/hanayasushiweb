"use client";

type ScrollLinkProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  href: string;
};

// A <button>, not an <a href="#...">, on purpose: an anchor with a real
// href can fire the browser's native "jump to fragment" behavior (e.g. if
// tapped before hydration attaches this handler), which is exactly the bug
// this component exists to avoid — landing on whatever section happens to
// sit at that id instead of scrolling from the current position.
export function ScrollLink({ href, onClick, children, ...rest }: ScrollLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const id = href.slice(1);
    const el = id ? document.getElementById(id) : document.body;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClick?.(e);
  }

  return (
    <button type="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}
