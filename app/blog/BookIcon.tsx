// Small open-book glyph used beside the read count. Uses currentColor so it
// inherits whatever text color it sits next to.
export default function BookIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8.5V25" />
      <path d="M16 8.5C13.5 6.8 10 6.5 6.5 7.2V23.7C10 23 13.5 23.3 16 25" />
      <path d="M16 8.5C18.5 6.8 22 6.5 25.5 7.2V23.7C22 23 18.5 23.3 16 25" />
    </svg>
  );
}
