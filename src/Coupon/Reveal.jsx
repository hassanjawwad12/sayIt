import { Disclosure } from "@headlessui/react";
import { FaArrowDown } from "react-icons/fa";

export default function Reveal({ coupon }) {
  const copyToClipboardHandler = (text) => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      alert("Coupon Copied to clipboard");
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
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
