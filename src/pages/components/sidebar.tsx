import Link from "next/link";

export default function SideBar({
  sectionRefs,
}: {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}) {
  const nav = [
    "Home",
    "Integrations",
    "Feature",
    "Process",
    "Testimonial",
    "Blog",
  ];

  return (
    <div className="w-[100vw] relative z-[100]">
      <ul className="flex flex-col font-bold text-[15px] pt-16 bg-white right-0 fixed z-[100] h-full w-[40%]">
        {nav.map((item, index) => (
          <li
            key={index}
            className="hover:bg-[#5c8ed0] hover:text-white transition ease-in-out p-5 px-10"
            onClick={(e) => {
              e.preventDefault();
              sectionRefs[item]?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Link
              href=""
              className=""
              onClick={(e) => {
                e.preventDefault();
                sectionRefs[item]?.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
