import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between w-full items-center pt-3 mb-10">
        <img src={logo} alt="sumz logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open("https://github.com/dinesh-singaria/ai_summarizer")
          }
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summz, an open-source article Summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
