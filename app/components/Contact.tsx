import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-[10rem]">
      <div className="css-container">
        <div className="relative text-[#010103] grid grid-cols-2 max-lg:grid-cols-1 gap-[3rem] mx-auto max-lg:text-center">
          <div className="flex flex-col gap-[1rem] max-w-[41rem] max-lg:mx-auto max-lg:mb-[2rem]">
            <h2 className="text-[4.2rem] leading-[1.3] font-bold mb-[2rem]">
              Need additional information?
            </h2>
            <p className="text-[#706f7b] text-[1.6rem] leading-[1.6] mb-[2rem]">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Link
              className="flex items-center text-[1.6rem] font-medium mb-[.5rem] transition-colors duration-200 hover:text-[#ff4d30] w-fit max-lg:mx-auto"
              href="tel:123456789"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-phone"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>{" "}
              &nbsp; (123) 456-7869
            </Link>
            <Link
              className="flex items-center text-[1.6rem] font-medium mb-[.5rem] transition-colors duration-200 hover:text-[#ff4d30] w-fit max-lg:mx-auto"
              href="mailto:  carrental@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>{" "}
              &nbsp; carrental@carmail.com
            </Link>
            <Link
              className="flex items-center text-[1.6rem] font-medium mb-[.5rem] transition-colors duration-200 hover:text-[#ff4d30] w-fit max-lg:mx-auto"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-location"
              >
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
              &nbsp; Belgrade, Serbia
            </Link>
          </div>
          <form className="flex flex-col">
            <label className="text-[1.6rem] font-semibold mb-[1rem]">
              Full Name <b className="text-[#ff4d30]">*</b>
            </label>
            <input
              className="bg-[#f2f2f2] text-[1.6rem] outline-none py-[1.9rem] px-[3rem] mb-[2.3rem]"
              type="text"
              placeholder='E.g: "Joe Shmoe"'
            />
            <label className="text-[1.6rem] font-semibold mb-[1rem]">
              Email <b className="text-[#ff4d30]">*</b>
            </label>
            <input
              className="bg-[#f2f2f2] text-[1.6rem] outline-none py-[1.9rem] px-[3rem] mb-[2.3rem]"
              type="email"
              placeholder="youremail@example.com"
            />
            <label className="text-[1.6rem] font-semibold mb-[1rem]">
              Tell us about it <b className="text-[#ff4d30]">*</b>
            </label>
            <textarea
              className="bg-[#f2f2f2] text-[1.6rem] outline-none py-[1.9rem] px-[3rem] h-[18rem] mb-[2.5rem]"
              placeholder="Write Here.."
            ></textarea>
            <button
              className="text-white font-semibold text-[1.8rem] bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link py-[1.8rem] px-[3rem] transition-[box-shadow,background-color] duration-300 hover:shadow-xlink-hover hover:bg-[#fa4226] w-full flex items-center justify-center h-[6.9rem]"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail-opened"
              >
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
                <path d="M3 19l6 -6"></path>
                <path d="M15 13l6 6"></path>
              </svg>
              &nbsp; Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
