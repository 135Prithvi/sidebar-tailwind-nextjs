export default function Sidebar() {
  return (
    <div className="flex justify-center items-center px-3 bg-gradient-to-bl from-emerald-300 via-rose-600 to-blue-500">
      <div className="sM:flex flex-row justify-between items-center w-1/5 sm:w-full hidden">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eSVgH4sHTHb2-uaz7BpHcQHaEK%26pid%3DApi&f=1&ipt=802af13a7de037d5bfb53f518552f869e914bf6e714b607b02a8df6de08440a7&ipo=images"
          alt=""
          className="h-10 w-10 rounded-full border-x-pink-400 border-y-yellow-400 border-2"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <a href="/" className="px-4 py-2 rounded-md w-full hover:scale-100 scale-95 transition-transform antialiased duration-200 my-2.5  border  flex items-center justify-center text-[0.5rem] leading-[0.5rem] mM:text-[0.75rem] mM:leading-[0.6rem] sm:text-base">Page 1</a>
        <a href="/" className="px-4 py-2 rounded-md w-full hover:scale-100 scale-95 transition-transform antialiased duration-200 my-2.5  border  flex items-center justify-center text-[0.5rem] leading-[0.5rem] mM:text-[0.75rem] mM:leading-[0.6rem] sm:text-base">Page 2</a>
        <a href="/" className="px-4 py-2 rounded-md w-full hover:scale-100 scale-95 transition-transform antialiased duration-200 my-2.5  border  flex items-center justify-center text-[0.5rem] leading-[0.5rem] mM:text-[0.75rem] mM:leading-[0.6rem] sm:text-base">Page 3</a>
        <a href="/" className="px-4 py-2 rounded-md w-full hover:scale-100 scale-95 transition-transform antialiased duration-200 my-2.5  border  flex items-center justify-center text-[0.5rem] leading-[0.5rem] mM:text-[0.75rem] mM:leading-[0.6rem] sm:text-base">Page 4</a>
      </div>
    </div>
  );
}
