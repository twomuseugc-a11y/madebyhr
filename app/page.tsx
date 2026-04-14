import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f5efe6] text-[#2d2d2d]">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="max-w-3xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight animate-fadeUp">
            Made slowly,<br />
            <span className="italic">worn proudly.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 animate-fadeUp delay-1">
            Thoughtfully crafted pieces designed for comfort,
            simplicity, and timeless wear.
          </p>

          <div className="mt-6 sm:mt-8 animate-fadeUp delay-2">
            <a
              href="#collection"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#b08968] text-white rounded-full text-sm hover:bg-[#9c7052] transition"
            >
              Explore Collection
            </a>
          </div>

        </div>

      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">

        <h2 className="text-2xl sm:text-3xl text-center mb-10 sm:mb-12 font-light animate-fadeUp">
          Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

          {[
            { name: "Linen Wrap Dress", price: "₹4,200", img: "/product1.jpg" },
            { name: "Cozy Knit Sweater", price: "₹2,800", img: "/product2.jpg" },
            { name: "Satin Midi Skirt", price: "₹3,200", img: "/product3.jpg" },
          ].map((item, i) => (
            <Link
              href="/product"
              key={i}
              className="group block animate-scaleIn"
              style={{ animationDelay: `${i * 0.2}s` }}
            >

              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-3 text-sm sm:text-base">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>

            </Link>
          ))}

        </div>

      </section>

      {/* WHY US */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 bg-[#efe7dc]">

        <h2 className="text-2xl sm:text-3xl text-center font-light mb-10 sm:mb-12">
          Why madebyhr
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center">

          <div>
            <div className="text-xl sm:text-2xl mb-3">🎀</div>
            <h3 className="font-medium text-sm sm:text-base">Made to Order</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Each piece is crafted only after you order.
            </p>
          </div>

          <div>
            <div className="text-xl sm:text-2xl mb-3">🧵</div>
            <h3 className="font-medium text-sm sm:text-base">No Mass Production</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Slow fashion that values quality over quantity.
            </p>
          </div>

          <div>
            <div className="text-xl sm:text-2xl mb-3">🌿</div>
            <h3 className="font-medium text-sm sm:text-base">Crafted with Care</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Designed for comfort and timeless wear.
            </p>
          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              madebyhr started with two best friends who wanted clothing
              to feel personal, premium, and made just for you.
              Not mass-produced, not rushed — but thoughtfully created.
            </p>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Each piece is crafted only after you order,
              making it exclusive, intentional, and truly yours.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 text-xs sm:text-sm">
        © {new Date().getFullYear()} madebyhr. All rights reserved.
      </footer>

    </main>
  );
}