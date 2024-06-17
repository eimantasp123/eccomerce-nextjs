import Link from "next/link";

export default function FooterSection({
  list,
  label,
  labelSize = "text-sm",
  children,
  linkSize = "text-sm",
  paddingLeft = "",
}) {
  return (
    <div className={`flex flex-1 ${paddingLeft} flex-col`}>
      {label && <h4 className={`mb-7 ${labelSize} tracking-wide`}>{label}</h4>}
      {children && <p className="mb-4">{children}</p>}
      {list && (
        <ul className={`mb-4 flex flex-col font-normal ${linkSize} gap-4`}>
          {list.map((el) => (
            <li key={el.label} className="inline-block">
              <Link href={el.link} className="group relative inline-block">
                {el.label}
                <span className="absolute bottom-[-3px] left-0 h-[1px] w-0 bg-current bg-stone-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
