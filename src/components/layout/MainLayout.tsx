import { ReactNode } from "react";
import { LayoutProps } from "@/types/types";
import VideoBox from "../VideoBox";
import NavBar from "../NavBar/NavBar";
import SongBar from "../SongBar/SongBar";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <VideoBox />
      <SongBar />
      {children}
    </>
  );
}
