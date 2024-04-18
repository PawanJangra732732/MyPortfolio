import Link from "next/link"

export function IntroductionSection() {
  return (
    <>
      <section className="mt-16 bg-gray-100 py-10 dark:bg-gray-500">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-6">
          <div className="flex-1">
            <img
              alt="Profile Picture"
              className="mx-auto h-400 w-400 rounded-full object-cover sm:h-64 sm:w-64"
              height={400}
              src="/pawan.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="flex-1 space-y-2 text-center md:text-left font-serif">
            <h1 className=" text-3xl font-bold tracking-tight sm:text-4xl">
              Pawan <span className="text-blue-400">Jangra</span>
            </h1>
            <h2 className="text-gray-500 text-2xl dark:text-white">Software Engineer & Automation Developer</h2>
            <p>Crafting innovative solutions and optimizing workflows through robust software engineering and automation expertise.</p>

          </div>
        </div>
      </section>
      {/* added a cooment to check the new branch created */}
    </>
  )
}
