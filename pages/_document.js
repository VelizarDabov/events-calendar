import { ThemeProvider } from "@/components/ThemeProvider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider>
        <Main />
        <NextScript />

        </ThemeProvider>
     
      </body>
    </Html>
  );
}
