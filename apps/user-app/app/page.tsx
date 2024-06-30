import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    // redirect("/api/auth/signin");
    return (
      <div className="flex flex-col min-h-screen">
        <MainContent />
        <Footer />
      </div>
    );
  }
}

const MainContent = () => {
  return (
    <main
      className="flex-grow bg-gray-100 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/a8/00/f6/a800f6f2cd6a5c507cb723284a3d5843.jpg')",
      }}
    >
      <div className="container mx-auto text-center  p-8 rounded-lg  transition transform hover:scale-105 duration-300 ease-in-out pb-50% pt-50%">
        <section className="bg-cover bg-no-repeat rounded-xl opacity-70 bg-gray-200 bg-blend-multiply">
          <div className="px-4 mx-auto my-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900   md:text-5xl lg:text-6xl ">
              Welcome to Bharat Wallet{" "}
            </h1>
            <h2 className="b-1 text-2xl font-bold tracking-tight leading-none text-black md:text-3xl lg:text-4xl mb-4">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 text-lg from-neutral-950 text-black-300 lg:text-xl sm:px-16 lg:px-48">
              Your all-in-one solution for managing finances on the go. Whether
              you're tracking daily expenses, budgeting for upcoming projects,
              WalletPro offers a seamless and intuitive experience tailored to
              meet your financial needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="https://github.com/Lucirace/BharatWallet"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-300 focus:ring-4 focus:ring-gray-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 ">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-center text-white">
          <svg
            id="logo-14"
            width="73"
            height="49"
            viewBox="0 0 73 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {""}
            <path
              d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
              className="ccustom"
              fill="#68DBFF"
            ></path>{" "}
            <path
              d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
              className="ccompli1"
              fill="#FF7917"
            ></path>{" "}
            <path
              d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
              className="ccompli2"
              fill="#5D2C02"
            ></path>{" "}
          </svg>
        </div>
        <p
          className="text-bold flex flex-col
        justify-center items-center pt-3 text-white"
        >
          BHARAT WALLET
        </p>
        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-white">
          Follow us to stay updated about all our Services
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Careers{" "}
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              History{" "}
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Services{" "}
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Projects{" "}
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Blog{" "}
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-gray-700/75"
            >
              <span className="sr-only">Dribbble</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

/*
      <di9v className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-indigo-600">
                    Payments App
                  </span>
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </nav>

        <header className="bg-indigo-600 flex-grow">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Payments App
            </h1>
            <p className="mt-4 text-lg text-indigo-200">
              Your one-stop solution for all your payments.
            </p>
          </div>
        </header>
      </di9v>
      */

/*import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
const session = await getServerSession(authOptions);
//import { useRouter } from "next/navigation";
//const router = useRouter();
let s = false;
let s2 = false;
try {``
  if (session?.user) s = true;

  // redirect("/dashboard");
} catch (e) {
  redirect("/");
} finally {
  //router.push("/dashboard");
  if (s) {
    redirect("/dashboard");
  }
}

try {
  if (!session?.user) s2 = true;
} catch (e) {
  redirect("/");
  //router.push("/api/auth/signin");
} finally {
  if (s2) {
    redirect("api/auth/signin");
  }
}

/*
const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
*/
/*
"use client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  Payments App
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={async () => {
                  redirect("/api/auth/signin");
                }}
                className="text-indigo-600 hover:text-indigo-900 font-medium"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-indigo-600 flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Payments App
          </h1>
          <p className="mt-4 text-lg text-indigo-200">
            Your one-stop solution for all your payments.
          </p>
          <button
            onClick={async () => {
              redirect("/api/auth/signin");
            }}
            className="mt-8 bg-white text-indigo-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-100"
          >
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Page;
*/
/*



*/
