import { ReactElement } from "react";
import { Icon } from "../ui/icon";

interface IconProps {
  title: string;
  icon: ReactElement;
  topRightChildren?: ReactElement;
}
const Header = ({ title, icon, topRightChildren }: IconProps) => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-slate-800">
        <div className="bg-sky-100 rounded-lg p-2 inline-block align-middle mr-3">
          <Icon icon={icon} size={30} variant="Bulk" color="#0284c7" />
        </div>
        {title}
      </h2>
      {topRightChildren && <div>{topRightChildren}</div>}
    </header>
  );
};

export { Header };
