
{/* <div className="relative h-32 w-32">
                <div className="absolute inset-y-0 right-0 w-16">
                06
                </div>
                    </div> */}

import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative">
                    <div className="fixed absolute inset-y-0 right-0 right-0 h-0">
                        06
                    </div>
                </div>
                {children}
                {/* <div className="grid grid-cols-3 gap-4">
                    <div>01</div>
                    <div className="invisible">02</div>
                    <div>03</div>
                </div> */}

                {/* <ChevronRightIcon className="h-6 w-6 text-gray-500 relative h-32 w-32 absolute inset-y-0 right-0 w-16" /> */}

            </body>
        </html>
    );
}
