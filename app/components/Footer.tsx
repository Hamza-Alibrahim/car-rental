import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-[10rem] bg-white">
      <div className="css-container">
        <div className="grid gap-[8rem] grid-cols-[27fr_21fr_21fr_21fr] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:text-center text-[#010103]">
          <ul>
            <li className="text-[2.4rem] mb-[1.5rem]">
              <span className="font-bold">CAR</span> Rental
            </li>
            <li className="text-[#706f7b] text-[1.6rem] leading-[1.7] mb-[3rem]">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className="text-[1.6rem] font-medium mb-[1rem]">
              <Link
                className="flex items-center gap-[.5rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto"
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
                  className="tabler-icon tabler-icon-phone-call"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>{" "}
                &nbsp; (123) -456-789
              </Link>
            </li>
            <li className="text-[1.6rem] font-medium mb-[1rem]">
              <Link
                className="flex items-center gap-[.5rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto"
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
                </svg>
                &nbsp; carrental@gmail.com
              </Link>
            </li>
            <li className="text-[1.4rem]">Design by XpeedStudio</li>
          </ul>
          <ul>
            <li className="text-[2.4rem] font-bold mb-[1rem] uppercase">
              Company
            </li>
            <li className="cursor-pointer text-[1.6rem] mb-[1rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto">
              New York
            </li>
            <li className="cursor-pointer text-[1.6rem] mb-[1rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto">
              Careers
            </li>
            <li className="cursor-pointer text-[1.6rem] mb-[1rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto">
              Mobile
            </li>
            <li className="cursor-pointer text-[1.6rem] mb-[1rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto">
              Blog
            </li>
            <li className="cursor-pointer text-[1.6rem] mb-[1rem] transition-colors hover:text-[#ff4d30] w-fit max-sm:mx-auto">
              How we work
            </li>
          </ul>
          <ul>
            <li className="text-[2.4rem] font-bold mb-[1rem] uppercase">
              Working Hours
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              Mon - Fri: 9:00AM - 9:00PM
            </li>
            <li className="text-[1.6rem] mb-[1rem]">Sat: 9:00AM - 19:00PM</li>
            <li className="text-[1.6rem] mb-[1rem]">Sun: Closed</li>
          </ul>
          <ul>
            <li className="text-[2.4rem] font-bold mb-[1rem] uppercase">
              Subscription
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              Subscribe your Email address for latest news &amp; updates.
            </li>
            <li className="mb-[1rem]">
              <input
                className="bg-[#ececec] text-[1.4rem] leading-[2.6rem] mt-[1rem] outline-none py-[1rem] px-[6rem] w-full"
                type="email"
                placeholder="Enter Email Address"
              />
            </li>
            <li className="text-[1.6rem] mb-[1rem]">
              <button className="bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link text-white cursor-pointer font-bold py-[1.5rem] px-[2.5rem] transition-[background-color,box-shadow] duration-300 w-full hover:bg-[#fa4226] hover:shadow-link-hover">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
