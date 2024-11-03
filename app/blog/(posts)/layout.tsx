
import Header from "@/app/components/header";
import Window from "@/app/components/window";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header></Header>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex flex-row flex-1 w-full h-full">
                    <div className="flex justify-center font-sans md:py-8 grow">
                        <Window>
                            {children}
                        </Window>
                    </div>
                </div>
            </div>
        </div>
    );
  }