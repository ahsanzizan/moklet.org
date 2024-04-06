import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { H4, P } from "@/app/_components/global/Text";

type navbarParam = {
  nav: boolean;
  session: Session | null;
};
export function Sidebar({ nav, session }: navbarParam) {
  const dashboardItems = [{ href: "/admin", text: "Dashboard" }];

  const adminItems = [
    { href: "/admin/", text: "Post" },
    { href: "/admin/", text: "Shortner Link" },
    { href: "/admin/", text: "Form" },
    { href: "/admin/", text: "Sub-Organ Setup" },
    { href: "/admin/", text: "Member" },
  ];

  const superAdminItems = [
    { href: "/admin/", text: "Users" },
    { href: "/admin/", text: "Permission" },
  ];

  return (
    <aside
      id="sidebar"
      className={`fixed ${
        nav ? "w-80" : "w-0 opacity-0"
      } left-0 top-0 z-20 flex h-full flex-shrink-0 transition-all duration-300 lg:w-80 lg:opacity-100`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r px-4 border-red-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
          <div className="flex-1 space-y-1 bg-white px-3">
            <Link href={"/"} className="block">
              <Image
                src={"/horizontal.svg"}
                alt="Logo moklet.org"
                width={120}
                height={50}
                className="pointer-events-none mb-10 h-[50px] w-[130px]"
              />
            </Link>
            <ul className="space-y-4 pb-2">
              {dashboardItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center rounded-lg p-2 text-base font-normal text-red-900 hover:bg-red-100"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.02V4.48C22 3.07 21.36 2.5 19.77 2.5H15.73C14.14 2.5 13.5 3.07 13.5 4.48V9.01C13.5 10.43 14.14 10.99 15.73 10.99H19.77C21.36 11 22 10.43 22 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 20.27V16.23C22 14.64 21.36 14 19.77 14H15.73C14.14 14 13.5 14.64 13.5 16.23V20.27C13.5 21.86 14.14 22.5 15.73 22.5H19.77C21.36 22.5 22 21.86 22 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 9.02V4.48C10.5 3.07 9.86 2.5 8.27 2.5H4.23C2.64 2.5 2 3.07 2 4.48V9.01C2 10.43 2.64 10.99 4.23 10.99H8.27C9.86 11 10.5 10.43 10.5 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 20.27V16.23C10.5 14.64 9.86 14 8.27 14H4.23C2.64 14 2 14.64 2 16.23V20.27C2 21.86 2.64 22.5 4.23 22.5H8.27C9.86 22.5 10.5 21.86 10.5 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <P className="ml-3 whitespace-nowrap text-primary-400 font-semibold">
                      {item.text}
                    </P>
                  </Link>
                </li>
              ))}
              <P className="font-semibold">Admin</P>
              {adminItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center rounded-lg p-2 text-base font-normal text-red-900 hover:bg-red-100"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.02V4.48C22 3.07 21.36 2.5 19.77 2.5H15.73C14.14 2.5 13.5 3.07 13.5 4.48V9.01C13.5 10.43 14.14 10.99 15.73 10.99H19.77C21.36 11 22 10.43 22 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 20.27V16.23C22 14.64 21.36 14 19.77 14H15.73C14.14 14 13.5 14.64 13.5 16.23V20.27C13.5 21.86 14.14 22.5 15.73 22.5H19.77C21.36 22.5 22 21.86 22 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 9.02V4.48C10.5 3.07 9.86 2.5 8.27 2.5H4.23C2.64 2.5 2 3.07 2 4.48V9.01C2 10.43 2.64 10.99 4.23 10.99H8.27C9.86 11 10.5 10.43 10.5 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 20.27V16.23C10.5 14.64 9.86 14 8.27 14H4.23C2.64 14 2 14.64 2 16.23V20.27C2 21.86 2.64 22.5 4.23 22.5H8.27C9.86 22.5 10.5 21.86 10.5 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <P className="ml-3 whitespace-nowrap text-primary-400 font-semibold">
                      {item.text}
                    </P>
                  </Link>
                </li>
              ))}
              <P className="font-semibold">Super Admin</P>
              {superAdminItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center rounded-lg p-2 text-base font-normal text-red-900 hover:bg-red-100"
                  >
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.02V4.48C22 3.07 21.36 2.5 19.77 2.5H15.73C14.14 2.5 13.5 3.07 13.5 4.48V9.01C13.5 10.43 14.14 10.99 15.73 10.99H19.77C21.36 11 22 10.43 22 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 20.27V16.23C22 14.64 21.36 14 19.77 14H15.73C14.14 14 13.5 14.64 13.5 16.23V20.27C13.5 21.86 14.14 22.5 15.73 22.5H19.77C21.36 22.5 22 21.86 22 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 9.02V4.48C10.5 3.07 9.86 2.5 8.27 2.5H4.23C2.64 2.5 2 3.07 2 4.48V9.01C2 10.43 2.64 10.99 4.23 10.99H8.27C9.86 11 10.5 10.43 10.5 9.02Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 20.27V16.23C10.5 14.64 9.86 14 8.27 14H4.23C2.64 14 2 14.64 2 16.23V20.27C2 21.86 2.64 22.5 4.23 22.5H8.27C9.86 22.5 10.5 21.86 10.5 20.27Z"
                        stroke="#E04E4E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <P className="ml-3 whitespace-nowrap text-primary-400 font-semibold">
                      {item.text}
                    </P>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
