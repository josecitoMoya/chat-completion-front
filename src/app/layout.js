import { Providers } from "./providers";

export const metadata = {
  title: "Chat Completion Challenge",
  description: "Chat completion by joseMoya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
