import Link from "next/link";

export default function Home() {
  return (
    // Use 'w-screen h-screen' to make the div take up the entire screen.
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      {/* Use 'w-full' to make the div take up the entire width of the parent. And use max-w-[custom-px] to set the maximum width of the div. Then set the x margin auto to let it center. */}
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
