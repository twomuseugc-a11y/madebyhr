"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedFit, setSelectedFit] = useState("Regular");
  const [note, setNote] = useState("");

  const handleOrder = () => {
    const order = {
      product: "Linen Wrap Dress",
      price: "₹4,200",
      size: selectedSize,
      fit: selectedFit,
      note,
    };

    localStorage.setItem("order", JSON.stringify(order));
    router.push("/cart");
  };

  return (
    <div className="bg-[#f5efe6] min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16">

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

        {/* LEFT */}
        <div className="flex flex-col sm:flex-row gap-4">

          {/* THUMBNAILS */}
          <div className="flex sm:flex-col gap-3 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-16 h-20 sm:w-20 sm:h-24 border rounded-md overflow-hidden">
                <Image
                  src="https://via.placeholder.com/200x300"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
            <Image
              src="https://via.placeholder.com/600x800"
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5 sm:gap-6">

          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#2d2d2d]">
            Linen Wrap Dress
          </h1>

          <p className="text-base sm:text-lg text-gray-600">₹4,200</p>

          <p className="text-sm sm:text-base text-gray-600">
            This piece is made slowly, just for you.
          </p>

          {/* SIZE */}
          <div className="flex gap-2 flex-wrap">
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1.5 border rounded-full text-sm transition ${
                  selectedSize === s
                    ? "bg-[#2d2d2d] text-white"
                    : "border-gray-300 text-gray-600 hover:bg-black hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-sm underline cursor-pointer">
            View Size Guide
          </p>

          {/* FIT */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-t pt-4 gap-3">

            <p className="text-sm">Fit</p>

            <div className="flex gap-2">
              {["Regular", "Oversized"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFit(f)}
                  className={`px-3 py-1.5 rounded-full text-sm transition ${
                    selectedFit === f
                      ? "bg-[#2d2d2d] text-white"
                      : "border border-gray-300 text-gray-600 hover:bg-black hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

          </div>

          {/* NOTE */}
          <textarea
            placeholder="Add a note (fit, sleeve, length...)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border border-gray-300 p-3 sm:p-4 text-sm rounded-md bg-white text-black placeholder-gray-400 min-h-[100px]"
          />

          {/* BUTTON */}
          <button
            onClick={handleOrder}
            className="bg-[#b68a64] text-white py-3.5 sm:py-3 rounded-md hover:opacity-90 transition"
          >
            Continue to Cart
          </button>

          <p className="text-xs sm:text-sm text-gray-500">
            Each piece takes 15–20 days to craft with care.
          </p>

        </div>
      </div>

      {/* EXTRA INFO */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 space-y-3 sm:space-y-4 px-1">

        {[
          {
            title: "Description",
            content: "Soft breathable linen, made just for you.",
          },
          {
            title: "Delivery & Timeline",
            content: "15–20 days crafting time.",
          },
          {
            title: "Returns & Exchanges",
            content: "Exchange available for size issues.",
          },
        ].map((item, i) => (
          <details key={i} className="bg-white p-4 sm:p-5 rounded-md">
            <summary className="cursor-pointer font-medium text-sm sm:text-base">
              {item.title}
            </summary>
            <p className="mt-3 text-sm text-gray-600">{item.content}</p>
          </details>
        ))}

        <details className="bg-white p-4 sm:p-5 rounded-md">
          <summary className="cursor-pointer font-medium text-sm sm:text-base">
            Care Instructions
          </summary>
          <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
            <li>Hand wash</li>
            <li>Do not bleach</li>
            <li>Dry in shade</li>
          </ul>
        </details>

      </div>

    </div>
  );
}