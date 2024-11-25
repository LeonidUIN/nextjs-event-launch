interface SidebarMenuItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarMenuItem({
  icon,
  label,
  isActive,
  onClick,
}: SidebarMenuItemProps) {
  const baseClasses =
    "flex overflow-hidden items-start py-3 pr-2 pl-3 w-full text-sm tracking-normal";
  const activeClasses = isActive
    ? "font-medium text-white bg-indigo-600 rounded-lg border border-solid border-stone-300"
    : "text-slate-600 rounded-lg";

  return (
    <button
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
      type="button"
    >
      <div className="flex flex-1 shrink gap-5 justify-between w-full basis-0">
        <div className="flex gap-3.5 items-center">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 w-6 aspect-square"
            alt=""
          />
          <span>{label}</span>
        </div>
        <img
          loading="lazy"
          src={isActive ? "/icons/chevron-right-white.svg" : "/icons/chevron-right.svg"}
          className="object-contain shrink-0 my-auto w-4 aspect-square"
          alt=""
        />
      </div>
    </button>
  );
}
