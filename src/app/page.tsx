import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/chill_guy_img.png"
          alt="Chill Guy Img"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            go watch this video to become a chill guy
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://youtu.be/sw5U8MiZeYI?si=ReuHOLx7TVTxpCRP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            </code>
          </li>
          <li className="mb-2">
            <a href="https://github.com/suhaasteja/chillGuy" target="__blank" style={{"textDecoration": "underline"}}>
              github
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}
