import { ChakraProviders } from "./providers";
import { Providers } from "@/store/provider";

export const metadata = {
  title: "Chat Completion Challenge",
  description: "Chat completion by joseMoya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ChakraProviders>{children}</ChakraProviders>
        </Providers>
      </body>
    </html>
  );
}
