import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="border-t bg-[#1e40af]">
      <div className="container mx-auto flex w-full flex-col items-center gap-8 bg-[#1e40af] p-8 text-white md:px-8">
        <section className="grid w-full grid-cols-1 gap-8 border-b-2 pb-10 lg:grid-cols-4 lg:gap-5">
          <div>
            <div className="shrink-0">
              <Image alt="Logo" className="h-auto w-64" height="64" priority src="/icon.svg" width="64" />
            </div>
            <div className="my-6 flex flex-col gap-2 text-sm text-white">
              <span className="text-xl">Bluebird Main Office</span>
              <span className="text-xl font-semibold">Jl. Mampang Prapatan Raya No. 60, Jakarta 12790</span>
            </div>
            <div className="inline-flex items-center gap-3 rounded-xl border bg-white p-1">
              <Link href="/">
                <Icon className="text-blue-600" fill="#2563eb" name="facebook" size={24} strokeWidth={1} />
              </Link>
              <Link href="/">
                <Icon className="text-[#00acee]" fill="#00acee" name="twitter" size={24} strokeWidth={1} />
              </Link>
              <Link href="/">
                <Icon color="#6b21a8" name="instagram" size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Quick Links</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Policy
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Term & Condition
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                FAQs
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Company</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                About Us
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Affiliate
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Contact
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
          <div className="lg:ml-auto">
            <p className="font-semibold">Bussiness</p>
            <div className="my-6 flex flex-col gap-2">
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Our Press
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
              <Link className="group inline-block w-fit text-white transition duration-300" href="/">
                Checkout
                <span className="block h-[0.80px] max-w-0 bg-white transition-all duration-500 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-5">
          <h1 className="text-white">&copy; 2024 Blue Bird Group. All Rights Reserved.</h1>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
