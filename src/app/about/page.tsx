import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a050d]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-6">
          About.
        </h1>
     {/* Information  */}
    <section className="mb-12">
    <p className="text-gray-300 leading-relaxed mb-4">
    Hi, I&apos;m <strong className="text-white">Saurabh Chavan</strong>, a React
    Native Developer with 4+ years of experience building scalable and
    production-ready Android and iOS applications. I currently work as a
    Consultant at{" "}
    <Link
      href="https://www.deloitte.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f472b6] hover:underline"
    >
      Deloitte
    </Link>
    , where I contribute to the development of high-quality mobile applications
    used in real-world enterprise environments.
    </p>

    <p className="text-gray-300 leading-relaxed mb-4">
    My work spans the full mobile development lifecycle—from designing app
    architecture and managing complex state, to implementing secure
    authentication flows, offline-first experiences, and performance
    optimizations. I&apos;ve worked closely with designers, backend engineers,
    and product teams to ship reliable apps at scale.
    </p>

   <p className="text-gray-300 leading-relaxed mb-4">
    Alongside mobile development, I have experience building web applications
    using{" "}
    <strong className="text-[#4ade80]">React</strong>,{" "}
    <strong className="text-[#4ade80]">Next.js</strong>, and{" "}
    <strong className="text-[#4ade80]">Node.js</strong>. While mobile is my
    primary focus today, I enjoy working across the stack when projects require
    it—mostly on a contract or project basis.
   </p>

   <p className="text-gray-300 leading-relaxed">
    I care deeply about clean code, maintainable architecture, and creating
    user experiences that feel fast, intuitive, and reliable. This portfolio is
    a space where I share my work, experience, and thoughts from building and
    shipping real products.
   </p>
  </section>


        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Work Experience
          </h2>

          <ul className="space-y-6">
            <li>
              <p className="text-white font-bold">
                Consultant - React Native Developer{" "}
                <span className="text-gray-400 font-normal">
                  · December 2025 - Current
                </span>
              </p>
              <p className="text-gray-400 ml-4">
                •{" "}
                <Link href="https://www.deloitte.com" className="text-[#f472b6] hover:underline">
                  Deloitte
                </Link>
                , Pune, India 🇮🇳
              </p>
            </li>

             <li>
              <p className="text-white font-bold">
                Software developer{" "}
                <span className="text-gray-400 font-normal">
                  · May 2025 - December 2025
                </span>
              </p>
              <p className="text-gray-400 ml-4">
                •{" "}
                <Link href="https://neohivemind.com/" className="text-[#f472b6] hover:underline">
                  Neo Hive Mind Solution Pvt Ltd
                </Link>
                , Pune, India 🇮🇳
              </p>
            </li>

            <li>
              <p className="text-white font-bold">
                Software developer{" "}
                <span className="text-gray-400 font-normal">
                  · Jan 2022 - April 2025
                </span>
              </p>
              <p className="text-gray-400 ml-4">
                •{" "}
                <Link href="https://griffyn.io/" className="text-[#f472b6] hover:underline">
                  Griffyn Robotech Private Limited
                </Link>
                , Pune, India 🇮🇳
              </p>
            </li>

            <li>
              <p className="text-white font-bold">
                Software developer Intern
                <span className="text-gray-400 font-normal">
                  · Sep 2021 - Jan 2022
                </span>
              </p>
              <p className="text-gray-400 ml-4">
                •{" "}
                <Link href="https://roxiler.com/" className="text-[#f472b6] hover:underline">
                  Roxiler Systems
                </Link>
                , Pune, India 🇮🇳
              </p>
            </li>
          </ul>
        </section>

        {/* Tech Skills */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Tech skills
          </h2>

          <div className="space-y-3">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Programming Language:</strong> JavaScript, Typescript, HTML, CSS, SQL, Python, Swift
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Frameworks:</strong> React Native, Expo, SwiftUI, Redux, Redux toolkit, React, NextJs, Gojs, ChartJs
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Mobile Development:</strong> Navigation, Deep Linking, Offline, Native modules, SVG, Animations, AsyncStorage, Gifted Charts, Setup to App Deployment on App Store/Play Store, Debugging, Auth0, Push notifications
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Tools:</strong> Postman, Xcode, Android Studio, VS Code, Jenkins, Figma, Chrome Dev Tool
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Version Control:</strong> GitLab, GitHub
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Project Management Tools:</strong> Jira, YouTrack
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">OS:</strong> Mac, Linux(Ubuntu), Windows
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Education
          </h2>

          <ul className="space-y-6">
            <li>
              <p className="text-white font-bold">
              ASM Group Of Institutes{" "}
                <span className="text-gray-400 font-normal">· 2022</span>
              </p>
              <p className="text-gray-400 ml-4">
                • Pune, Maharashtra 🇮🇳
              </p>
            </li>

            <li>
              <p className="text-white font-bold">
                Shre Sakeshwar Science Jr Collage{" "}
                <span className="text-gray-400 font-normal">· 2018</span>
              </p>
              <p className="text-gray-400 ml-4">• Jamkhed Ahilyanagar, Maharashtra 🇮🇳</p>
            </li>

            <li>
              <p className="text-white font-bold">
                Yashwant Vidyalaya{" "}
                <span className="text-gray-400 font-normal">· 2016</span>
              </p>
              <p className="text-gray-400 ml-4">
                • Ahmedpur Latur, Maharashtra 🇮🇳
              </p>
            </li>
          </ul>
        </section>

        {/* Language Skills */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Language skills
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong className="text-white">English</strong> 🇬🇧 (fluent,
              professional)
            </li>
            <li>
              • <strong className="text-white">Hindi</strong> 🇮🇳 (native)
            </li>
            <li>
              • <strong className="text-white">Marathi</strong> 🇮🇳 (native,
              mothertongue)
            </li>
          </ul>
        </section>

       {/* Hobbies & Interests */}
<section className="mb-12">
  <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
    Beyond Work
  </h2>

  <p className="text-gray-300 leading-relaxed mb-4">
    Even outside my professional work, I enjoy{" "}
    <strong className="text-white">building side projects</strong> and exploring
    new tools, libraries, and ideas in the React Native ecosystem. This website
    itself is a small example of how I like to experiment and refine my skills.
  </p>

  <p className="text-gray-300 leading-relaxed mb-4">
    I&apos;m genuinely interested in{" "}
    <strong className="text-white">understanding how things work</strong>—whether
    it&apos;s improving app performance, trying out new UI patterns, or learning
    from real-world engineering problems shared by the developer community.
  </p>

  <p className="text-gray-300 leading-relaxed mb-4">
    Outside of coding, I like staying active and keeping a balance. I enjoy{" "}
    <strong className="text-white">travelling</strong>, exploring new places, and
    taking short breaks to reset and gain fresh perspective.
  </p>

  <p className="text-gray-300 leading-relaxed">
    I also enjoy{" "}
    <strong className="text-white">learning continuously</strong>—whether
    through tech blogs, documentation, or experimenting hands-on. For me,
    curiosity and consistency matter more than trends.
  </p>
</section>

        {/* Certificates */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Certificates
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-[#4ade80]">•</span>
              <Link
                href="https://www.udemy.com/certificate/UC-4acfa5cb-3b77-43e2-81ea-66dc7362e1c8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f472b6] transition-colors"
              >
                <strong className="text-white">React Native Certificate</strong>
                <span className="text-gray-400 ml-2">→</span>
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#4ade80]">•</span>
              <Link
                href="https://www.udemy.com/certificate/UC-e7630386-f4fa-4c24-bbb9-b5303f4fd525/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#f472b6] transition-colors"
              >
                <strong className="text-white"> iOS App Development Bootcamp</strong>
                <span className="text-gray-400 ml-2">→</span>
              </Link>
            </li>
          </ul>
        </section>

        {/* Additional Information */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4ade80] mb-6 underline underline-offset-4">
            Additional information
          </h2>

          <div className="border-t border-gray-700">
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Key</span>
              <span className="text-gray-400">Value</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Location</span>
              <span className="text-[#f472b6]">Pune, India</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-gray-400">Available for freelance</span>
              <span className="text-[#f472b6]">Yes</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
