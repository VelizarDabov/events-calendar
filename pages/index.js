import WeeklyCalendar from "@/components/Calendar";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <>
      <main>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header  />
          <WeeklyCalendar />
        </ThemeProvider>
      </main>
    </>
  );
}
