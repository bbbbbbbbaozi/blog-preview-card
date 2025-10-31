import Image from "next/image";
import IllustrationArticle from "@/assets/images/illustration-article.svg";
import ImageAvatar from "@/assets/images/image-avatar.webp";

function User() {
  return (
    <div className="h-8 flex items-center justify-start gap-3 mt-7">
      <Image src={ImageAvatar} className="w-8 h-8" alt="user's avatar"></Image>
      <div className="text-gray-900 font-extrabold">Greg Hooper</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-svh p-4 flex justify-center items-center bg-yellow">
      <article className="w-[375px] flex flex-col items-start bg-white p-6 rounded-xl border border-gray-900 shadow-custom">
        <IllustrationArticle className="w-full rounded-md" />
        <div className="h-8 bg-yellow flex items-center justify-center mt-5 rounded-sm font-extrabold px-3">
          Learning
        </div>
        <div className="mt-4 text-gray-900 font-medium text-sm">
          Published 21 Dec 2023
        </div>
        <h1 className="mt-7 font-extrabold text-2xl tracking-tight">
          HTML & CSS foundations
        </h1>
        <p className="text-start mt-7 text-gray-500 text-base">
          These language are the backbone of every website, defining structure,
          content, and presentation
        </p>

        <User />
      </article>
    </main>
  );
}
