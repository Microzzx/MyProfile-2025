import { SectionProps } from "@/types/types";
const SectionBox = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="bg-white opacity-50 rounded-2xl shadow-2xs p-6">
      {children}
    </section>
  );
};
export default SectionBox;
