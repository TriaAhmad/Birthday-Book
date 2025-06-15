import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Birthday Book",
  description: "Ucapan Ulang Tahun Romantis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body
        className={`${inter.className} bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800 transition-all duration-300`}
      >
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-10 border border-pink-200">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
