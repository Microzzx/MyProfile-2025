import { LayoutProps } from "@/types/types";
const SectionBox = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white opacity-50 rounded-2xl shadow-2xs p-6">
      {children}
    </div>
  );
};
export default SectionBox;
