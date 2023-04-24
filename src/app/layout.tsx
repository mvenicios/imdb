import Providers from "./Providers";
import Header from "./components/Header";
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
          {/*SearchBox*/}
          {children}
        </Providers>
      </body>
    </html>
  );
}
