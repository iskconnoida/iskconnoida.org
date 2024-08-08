export default function Social() {
  return (
    <div className="w-full mt-12 py-12 z-[5] rounded-t-lg bg-violet-600">
      <div className="text-center text-3xl font-bold text-white pb-12">
        Stay In Touch
      </div>
      <div className="w-full md:flex items-center justify-evenly">
        <div className="md:mx-4 my-4 md:my-0 md:w-1/2 h-full flex justify-center">
          <iframe
            src="https://www.instagram.com/iskcon_noida/embed/"
            className="rounded-xl shadow-lg mx-auto w-[350px] h-[442px] md:w-[400px] md:h-[460px] lg:w-[500px] lg:h-[555px]"
            scrolling="no"
          />
        </div>
        <div className="md:mx-4 my-4 md:my-0 md:w-1/2 h-full flex justify-center">
          <iframe
            src="https://www.youtube.com/embed?list=UULFuirvO7R7VK16rTwdgHR9fg"
            className="rounded-xl shadow-lg mx-auto w-[350px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[410px]"
          />
        </div>
      </div>
    </div>
  );
}
