import { UppyProvider } from "@/components/uppy-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uppy + Next.js + Supabase",
  description: "Upload files to Supabase using Uppy and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("py-10", inter.className)}>
        <main className="flex flex-col max-w-7xl mx-auto my-12">
          <UppyProvider>{children}</UppyProvider>
        </main>
      </body>
    </html>
  );
}
