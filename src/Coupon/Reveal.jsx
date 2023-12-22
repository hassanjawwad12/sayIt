import { Disclosure } from "@headlessui/react";
import { FaArrowDown } from "react-icons/fa";
import { copyToClipboard } from "copy-to-clipboard";

export default function Reveal({ coupon }) {
  const copyToClipboardHandler = (text) => {
    copyToClipboard(text);
    alert("Coupon Copied to clipboard");
  };

  return (
    <div className="w-full px-4 pt-6">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-md font-medium text-purple-900">
                <span>Here is your discount coupon 🎫 </span>
                <FaArrowDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 text-sm text-gray-500">
                <div className="flex justify-between items-center px-2 font-bold">
                  <div>{coupon}</div>
                  <button
                    className="text-xl"
                    onClick={() => copyToClipboardHandler(coupon)}
                  >
                    📃
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
