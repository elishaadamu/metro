import { FiInstagram, FiGithub, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className=" bg-[#000000b8]  py-8 mt-[7rem]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-6 my-12">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-color hover:-translate-y-1 text-sky-500 transition"
                    >
                        <FiInstagram size={35} />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-color hover:-translate-y-1 text-sky-500 transition"
                    >
                        <FiGithub size={35} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-color hover:-translate-y-1 text-sky-500 transition"
                    >
                        <FiTwitter size={35} />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-color hover:-translate-y-1 text-sky-500 transition"
                    >
                        <FiFacebook size={35} />
                    </a>
                </div>

                <div className="flex  justify-center space-x-8 my-12 text-sm text-gray-500 ">
                    <a
                        href="/"
                        className="text-color no-underline hover:text-sky-500 transition"
                    >
                        Home
                    </a>
                    <a
                        href="/services"
                        className="text-color no-underline hover:text-sky-500 transition"
                    >
                        Services
                    </a>
                    <a
                        href="/about"
                        className="text-color no-underline hover:text-sky-500 transition"
                    >
                        About
                    </a>
                    <a
                        href="/terms"
                        className="text-color no-underline hover:text-sky-500 transition"
                    >
                        Terms
                    </a>
                    <a
                        href="/privacy"
                        className="text-color no-underline hover:text-sky-500 transition"
                    >
                        Privacy Policy
                    </a>
                </div>

                <div className="text-center text-sm text-color">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} Future Coders. All
                        rights reserved.
                    </p>
                    <p>499 Canyon Ave. | Suite 300 | Fort Collins, CO 80521</p>
                </div>
            </div>
        </footer>
    );
}
