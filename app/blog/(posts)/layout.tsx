
import Header from "@/app/components/header";
import Window from "@/app/components/window";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header></Header>
            <div className="flex flex-col flex-1 justify-center items-center">
                <div className="flex flex-row flex-1 w-full h-full">
                    <div className="flex justify-center md:py-8 font-sans grow">
                        <Window>
                            {children}
                        </Window>
                    </div>
                </div>
            </div>
        </div>
    );
  }