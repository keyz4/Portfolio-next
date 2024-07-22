import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] h-max grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto rounded-xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  component,
}: {
  className?: string;
  component?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "overflow-y-scroll overflow-x-hidden hide-scrollbar scroll-m-4 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-black border-white/[0.6]  border-2 flex flex-col space-y-4 h-full w-full justify-between",
        className
      )}
    >
      {component}
    </div>
  );
};
