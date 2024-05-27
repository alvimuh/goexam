"use client";

import { MENU_LIST } from "@/lib/menu";
import { Icon } from "../ui/icon";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  path: string;
  icon?: React.ReactElement;
  children?: MenuItem[];
}

const Sidebar = () => {
  let menuList: MenuItem[] = [];
  for (const [_key, menu] of Object.entries(MENU_LIST)) {
    let children: MenuItem[] = [];
    for (const [_key, child] of Object.entries(menu.children)) {
      children.push({
        title: child.title,
        path: child.path,
        icon: child.icon,
      });
    }

    menuList.push({
      title: menu.title,
      path: menu.path,
      children: children,
    });
  }

  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside className="fixed w-56 overflow-scroll h-[calc(100%-64px)] border-r shadow-xl shadow-slate-100">
      <ul className="my-3">
        {menuList.map((menu, index) => (
          <li key={index} className="py-1 px-2">
            {menu.title && (
              <a
                href={menu.path}
                className="text-sm font-medium text-slate-500 px-3"
              >
                {menu.title}
              </a>
            )}
            {menu.children && (
              <ul className="mt-2">
                {menu.children.map((child, index) => {
                  const fullPath = menu.path + child.path;
                  const isActive = pathname === fullPath;
                  return (
                    <li key={index}>
                      <a
                        href={fullPath}
                        className={`cursor-pointer block py-2 px-3 mb-2 rounded-lg font-medium leading-loose text-sm ${
                          isActive
                            ? "bg-sky-600 text-white"
                            : "text-slate-800 hover:bg-slate-200"
                        }`}
                      >
                        <Icon
                          icon={child.icon as React.ReactElement}
                          size={20}
                          color={isActive ? "white" : "#0284c7"}
                          variant="Outline"
                          inlineBlock
                        />
                        {child.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { Sidebar };
