import { DotBackground } from "@/components/background/dot-background";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center min-h-screen m-0 p-0 gap-0 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full h-full">
        <DotBackground />
      </main>
    </div>
  );
}
