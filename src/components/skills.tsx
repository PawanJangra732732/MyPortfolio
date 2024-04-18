export function Skills() {
  // Array of skills with their names and image URLs
  const skills = [
    { name: "React", imageUrl: "/react-js-icon.svg" },
    { name: "Node.js", imageUrl: "/node-js-icon.svg" },
    { name: "Python", imageUrl: "/python-icon.svg" },
    { name: "Docker", imageUrl: "/docker-icon.svg" },
    { name: "AWS", imageUrl: "/aws-icon.svg" },
    { name: "Kubernetes", imageUrl: "/kubernetes-icon.svg" },
    { name: "TypeScript", imageUrl: "/typescript-icon.svg" },
    { name: "Java", imageUrl: "/java-icon.svg" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 content-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-sans text-black">My Skills</h2>
            <p className="max-w-[700px] text-slate-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
              I'm proficient in a wide range of technologies and frameworks that enable me to deliver efficient and
              scalable automation solutions as well as full-stack web applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <img
                alt={skill.name}
                className="h-12 w-12 object-contain"
                height={48}
                src={skill.imageUrl}
                width={48}
              />
              <span className="text-sm font-medium text-black">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
