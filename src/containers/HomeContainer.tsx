import { useHome } from "@/hooks/useHome";

export function HomeContainer() {
  const data = useHome();
  return <div>data</div>;
}
