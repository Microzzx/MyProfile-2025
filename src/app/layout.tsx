import "../styles/globals.css";
import { Providers } from "./provider";
import { NavBar, VideoBox, SongBar } from "../components";

export const metadata = {
  title: "My Profile App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col overflow-x-clip relative">
            {/* <NavBar /> */}
            <VideoBox />
            <SongBar />
            {/* <div className="smooth-transition">
              <div className="flex flex-col w-full bg-[#2d2d39]">
                {children}
              </div>
            </div> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
