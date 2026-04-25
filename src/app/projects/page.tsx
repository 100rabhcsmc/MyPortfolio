import Link from "next/link";
import Footer from "@/components/Footer";

const projects = [
   {
    title: "Dubai Properties",
    description:
      "A real estate and property management mobile application developed for Dubai Properties. Built with React Native, featuring property browsing, virtual tours, investment analytics, secure payment integration, UAE Pass login authentication, and real-time notifications. The app streamlines the real estate buying and leasing experience with an intuitive interface and comprehensive property information display.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
       "Uae Pass Login",
      "Payment Integration",
      "Real Estate",
      "Virtual Tours",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://www.dp.ae/pictures/about-dubai-properties-en.png",
    github: null,
    live: null,
    client: "Dubai Properties",
    playStore: "https://play.google.com/store/apps/details?id=com.dhretechnology.dp&pcampaignid=web_share",
    appStore: "https://apps.apple.com/ae/app/dubai-properties/id6743494015", 
  },
    {
    title: "Meraas Properties",
    description:
      "A real estate and property management mobile application developed for Meraas Properties. Built with React Native, featuring property browsing, virtual tours, investment analytics, secure payment integration, UAE Pass login authentication, and real-time notifications. The app streamlines the real estate buying and leasing experience with an intuitive interface and comprehensive property information display.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
       "Uae Pass Login",
      "Payment Integration",
      "Real Estate",
      "Virtual Tours",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://www.propertyfinder.ae/blog/wp-content/uploads/2023/05/Meraas-Developer-Logo.jpeg",
    github: null,
    live: null,
    client: "Meraas Properties",
    playStore: "https://play.google.com/store/apps/details?id=com.dhretechnology.meraasapp&pcampaignid=web_share",
    appStore: "https://apps.apple.com/ae/app/meraas/id6744596920", 
  },
   {
    title: "Nakheel Properties",
    description:
      "A real estate and property management mobile application developed for Nakheel Properties. Built with React Native, featuring property browsing, virtual tours, investment analytics, secure payment integration, UAE Pass login authentication, and real-time notifications. The app streamlines the real estate buying and leasing experience with an intuitive interface and comprehensive property information display.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
       "Uae Pass Login",
      "Payment Integration",
      "Real Estate",
      "Virtual Tours",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://hausandestates.s3.eu-north-1.amazonaws.com/wp-content/uploads/2025/03/1671027968-f37_nakheel.png",
    github: null,
    live: null,
    client: "Nakheel Properties",
    playStore: "https://play.google.com/store/apps/details?id=com.nakheel.nakheel&pcampaignid=web_share",
    appStore: "https://apps.apple.com/gb/app/my-nakheel/id1557837581", 
  },
  {
    title: "Raise Connect",
    description:
      "A secure fintech mobile application built end-to-end using React Native. Features include login and SSO authentication, role-based access control, workflow approvals, dynamic forms, PDF document management, and offline storage. Designed for high security and scalability, and successfully deployed to both App Store and Play Store.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "SSO Auth",
      "PDF",
      "Offline Storage",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2a/de/02/2ade02c8-4483-6885-9d17-0f3920ce7871/appicon-1x_U007emarketing-0-8-0-85-220-0.png/400x400ia-75.webp?w=800&h=600&fit=crop",
    github: null,
    live: null,
    client: "Linnovate Partners",
    playStore: "https://play.google.com/store/apps/details?id=com.linnovatepartners.raiseconnect&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/raise-connect/id6502817118", 
  },
  {
    title: "Raise FAS",
    description:
      "An investment and analytics-focused fintech application built from scratch using React Native CLI. Includes advanced financial dashboards, interactive charts, animated data visualizations, dynamic tables, and secure document workflows. Optimized for performance with lazy loading and efficient API handling.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "Gifted Charts",
      "SVG Animations",
      "Performance Optimization",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/20/a1/29/20a1299d-f3c2-4125-f22d-1b12e4c50da7/Placeholder.mill/400x400bb-75.webp?w=800&h=600&fit=crop",
    github: null,
    live: null,
    client: "Linnovate Partners",
    playStore: "https://play.google.com/store/apps/details?id=com.linnovatepartners.SMPM.Android&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/raise-fas-2-0/id6751937399",
  },
  {
    title: "BlackBox (AT&T)",
    description:
      "A cross-platform enterprise mobile application developed for AT&T. Collaborated closely with designers and backend engineers to build reusable UI components, implement business logic, and optimize application performance across Android and iOS devices.",
    tags: [
      "React Native",
      "Enterprise App",
      "Reusable Components",
      "API Integration",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://www.business.att.com/content/dam/attbusiness/images/social/featured-image-square.jpg?w=800&h=600&fit=crop",
    github: null,
    live: null,
    client: "AT&T",
    playStore: null,
    appStore: null,
  },
  {
    title: "TalentOjo (KPIT)",
    description:
      "A recruitment-focused mobile application built using React Native. Implemented API integrations, optimized data handling, and delivered reusable components to support scalable development and consistent user experience across platforms.",
    tags: [
      "React Native",
      "Axios",
      "Reusable UI",
      "API Integration",
    ],
    type: "Mobile App",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
    github: null,
    live: null,
    client: "KPIT Technologies",
    playStore: null,
    appStore: null,
  },
  {
    title: "GymBuddy – Complete Guide",
    description:
      "A fitness and workout guidance mobile application developed using React Native. Features include Figma-designed UI, workout dashboards, structured exercise plans, and integrated exercise videos to provide guided training experiences.",
    tags: [
      "React Native",
      "Fitness App",
      "UI/UX",
      "Workout Dashboards",
      "Video Integration",
    ],
    type: "Mobile App",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    github: null,
    live: null,
    client: "Personal Project",
    playStore: null,
    appStore: null,
  },
];


const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a050d]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-3">
          My Work.
        </h1>
        <p className="text-gray-400 mb-12">
          A collection of projects I&apos;ve built and contributed to.
        </p>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-[#4ade80] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full"></span>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <article
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="relative w-full">
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a050d] to-transparent" />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-[#f472b6] bg-[#f472b6]/10 rounded mb-3 w-fit">
                      {project.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View Code
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </Link>
                      )}
                      {project.client && (
                        <span className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {project.client}
                        </span>
                      )}
                      {project.playStore && (
                        <Link
                          href={project.playStore}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                          </svg>
                          Play Store
                        </Link>
                      )}
                      {project.appStore && (
                        <Link
                          href={project.appStore}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          App Store
                        </Link>
                      )}
                      {!project.playStore && !project.appStore && !project.github && !project.live && (
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 italic">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Internal Use
                        </span>
                      )}
                    </div>
                  </div>
              </article>
            ))}
          </div>
        </section>

        {/* Other Projects Grid */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#4ade80] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full"></span>
            More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <article
                key={index}
                className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a050d] via-[#0a050d]/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-[#f472b6] bg-[#0a050d]/80 rounded">
                    {project.type}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-gray-800/80 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-800">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#4ade80] transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Code
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#4ade80] transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Demo
                      </Link>
                    )}
                    {project.playStore && (
                      <Link
                        href={project.playStore}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#4ade80] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                        </svg>
                        Play Store
                      </Link>
                    )}
                    {project.appStore && (
                      <Link
                        href={project.appStore}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#4ade80] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        App Store
                      </Link>
                    )}
                    {!project.playStore && !project.appStore && !project.github && !project.live && (
                      <span className="flex items-center gap-1 text-xs text-gray-500 italic">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Internal Use
                      </span>
                    )}
                    {project.client && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {project.client}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 border-t border-gray-800 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-400 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="mailto:saurabhchavan052@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4ade80] text-[#0a050d] font-semibold rounded-lg hover:bg-[#22c55e] transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Get In Touch
          </Link>
        </section>

        <Footer />
      </main>
    </div>
  );
}
