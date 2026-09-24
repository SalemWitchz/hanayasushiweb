"use client";

type ScrollLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ScrollLink({ href, onClick, children, ...rest }: ScrollLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const id = href.slice(1);
    const el = id ? document.getElementById(id) : document.body;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.(e);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
