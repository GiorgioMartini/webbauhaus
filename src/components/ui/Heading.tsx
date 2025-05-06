import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export default function Heading({
  level,
  children,
  className = "",
  ...props
}: HeadingProps) {
  const baseClasses =
    "font-calsans font-bold text-[color:var(--color-electric-blue)]";
  const sizeClasses = {
    1: "text-4xl md:text-5xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-lg md:text-xl",
    5: "text-base md:text-lg",
    6: "text-sm md:text-base",
  };

  const Component = `h${level}` as const;

  return (
    <Component
      className={`${baseClasses} ${sizeClasses[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
