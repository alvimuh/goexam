import React, { Ref } from "react";

interface IconProps {
  icon: React.ReactElement;
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
  ref?: Ref<SVGSVGElement>;
  color?: string;
  size?: string | number;
  inlineBlock?: boolean;
}
const Icon = ({ icon, size = 16, color, variant, inlineBlock }: IconProps) => {
  const newProps = { ...icon.props, size, color, variant };

  if (inlineBlock) {
    newProps.className = "inline-block mr-2 align-middle mb-[2.5px]";
  }

  const newIcon = React.cloneElement(icon, newProps);
  return newIcon;
};

export { Icon };
