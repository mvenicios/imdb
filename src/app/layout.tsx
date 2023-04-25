import Providers from "./Providers";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";

export const metadata = {
  title: "Imdb Clone",
  description: "Este é o imdb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {/*Header*/}
          <Header />
          {/*Navbar*/}
          <Navbar />
          {/*SearchBox*/}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
