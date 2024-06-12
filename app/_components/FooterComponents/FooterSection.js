import Link from "next/link";

export default function FooterSection({
  list,
  label,
  labelSize = "text-sm",
  children,
  linkSize = "text-md",
}) {
  return (
    <div className="flex flex-1 flex-col">
      {label && <h4 className={`mb-7 ${labelSize} tracking-wide`}>{label}</h4>}
      {children && <p className="mb-4">{children}</p>}
      {list && (
        <ul className={`mb-4 flex flex-col font-normal ${linkSize} gap-4`}>
          {list.map((el) => (
            <li key={el.label}>
              <Link href={el.link}>{el.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
