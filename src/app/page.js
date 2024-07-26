import Image from "next/image";
import PawHacksImage from "../../public/pawhacks_big_logo.png"
import TimeZoneChromeExtension from "../../public/TimeZoneChromeExtension.png"
import WilliamPanImage from "../../public/WilliamPan.jpeg"
import LinkedInLogo from "../../public/linkedin.png"
import GithubLogo from "../../public/Github.png"
import EmailLogo from "../../public/Email.png"
import Link from "next/link";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-gray-800 text-white">
          <div className="flex px-8 py-4 w-full items-center">
              <div className="flex-grow text-2xl">William Pan</div>
              <div className="flex space-x-8">
                  <a href="#experience">Experience</a>
                  <a href="#skills">Skills</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                  <a href="#resume">Resume</a>
              </div>
          </div>
          <div className="px-8 py-4 text-xl ">
              <div>Hello! I am</div>
              <div>William Pan</div>
              <div>Software Engineer</div>
          </div>
          <div className="flex flex-row">
              <div className="px-8 text-lg text-pretty w-1/2">
                  I am a student at Northeastern University majoring in Computer Science and minoring in math.
                  I have experience as a Software Engineer interning at a startup, creating a website for my university
                  hackathon that 150+ users, programming autonomous robots, and creating a chrome extension published on
                  the
                  Chrome Web Store! In addition to my software experience, I am a teaching assistant at my university
                  helping my professor explain Computer Science concepts.
              </div>
              <Image src={WilliamPanImage} width={300} height={300}></Image>
          </div>


          <div className="flex flex-row px-8 py-8 text-5xl justify-center">
              Experience
          </div>

          <div className="px-8">
              <div className="relative">
                  <div className="absolute left-0 h-full w-1 bg-green-500"></div>
                  <div className="ml-4 space-y-8">
                      <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <div className="ml-4">
                              <h3 className="text-xl font-semibold">September 2023 - Present</h3>
                              <h4 className="text-lg font-semibold text-green-300">Software Engineer Intern | Oceanside
                                  Perspective</h4>
                              <p>
                                  • Developed a video library with JavaScript, React.js, Next.js, Tailwind CSS, Supabase
                                  (PostgreSQL), and Node.js
                                  for the Oceanside Perspective website, resulting in a 20% increase in daily
                                  visitors.</p>
                              <p>
                                  • Successfully migrated 80+ videos from YouTube to the company's website using the
                                  YouTube
                                  API, centralizing
                                  video content, and leading to a 30% increase in content views.
                              </p>
                              <p>
                                  • Implemented a user-friendly search and filtering system for the video library,
                                  enhancing
                                  user experience and
                                  resulting in a 15% increase in average session duration on the website.
                              </p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <div className="ml-4">
                              <h3 className="text-xl font-semibold">November 2023 - May 2024</h3>
                              <h4 className="text-lg font-semibold text-green-300">Backend Software Engineer |
                                  PawHacks</h4>
                              <p>• Led the complete overhaul of the Northeastern Oakland Hackathon (PawHacks) website
                                  backend, utilizing
                                  JavaScript, Express.js, and MySQL to serve a userbase of 150+ monthly active
                                  users.</p>
                              <p>• Implemented Google OAuth and Passport.js-based authentication system, enhancing user
                                  experience and
                                  boosting registrations by 20% with streamlined Google account access. </p>
                              <p>• Created features for team creation and management, allowing users to create/delete
                                  and view/join teams with REST
                                  API and CRUD principles. Led to formation of 30+ teams and 33% increase in user
                                  engagement.</p>
                              <p>• Designed, created, and maintained a MySQL database using phpMyAdmin, enhancing
                                  security measures that led to a
                                  100% prevention rate of SQL injection attacks, safeguarding the integrity and security
                                  of user information.</p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <div className="ml-4">
                              <h3 className="text-xl font-semibold">January 2024 - April 2024</h3>
                              <h4 className="text-lg font-semibold text-green-300">Computer Science Teaching Assistant |
                                  Khoury College of Computer Sciences @ Northeastern University</h4>
                              <p>• Mentored 100+ students in Java, test driven development (TDD) with JUnit5 and
                                  Object-Oriented Design (OOD)
                              </p>
                              <p>• Facilitated Git mastery among students, resolving merge conflicts and branch issues,
                                  resulting in a 50% reduction
                                  in version control errors and significantly enhancing collaborative coding
                                  projects.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="flex flex-row px-8 py-8 text-5xl justify-center">
              Projects
          </div>

          <div className="flex flex-col md:flex-row items-center px-8 space-y-4 md:space-y-0 md:space-x-8 py-2">
              <div className="border-2 border-white p-4 rounded-lg">
                  <Image src={PawHacksImage} alt="PawHacks" width={500} height={500} className="rounded-lg"/>
              </div>
              <div>
                  <h3 className="text-3xl font-bold">PawHacks</h3>
                  <p className="text-lg">Built with: <span className="text-blue-300">JavaScript, Express.js, MySQL, Tailwind CSS, Google OAuth, Digital Ocean</span>
                  </p>
                  <p className="text-lg text-pretty w-3/4">A website for users to create an account and sign up for
                      PawHacks, a hackathon hosted at Northeastern University. Users can log in with Google, fill out an
                      application, and once accepted, can create teams and invite other team members using their email.
                      Moderators can see the list of all users who have registered for the hackathon and accept/reject
                      applications. 150+ monthly active users.</p>
                  <a href="#" className="text-blue-300 text-lg mt-2 inline-block">Live</a>
              </div>
          </div>

          <div className="flex flex-row px-8 py-8 text-5xl justify-center">
              Skills
          </div>
          <div className="px-8 py-4 text-2xl ">
              Languages
          </div>
          <div className="flex flex-row px-16 text-xl space-x-4 w-full">
              <div>Java</div>
              <div>JavaScript</div>
              <div>Kotlin</div>
              <div>Python</div>
              <div>C</div>
              <div>C++</div>
              <div>HTML</div>
              <div>CSS</div>
          </div>
          <div className="px-8 py-4 text-2xl ">
              Frameworks
          </div>
          <div className="flex flex-row px-16 text-xl space-x-4 w-full">
              <div>Node.js</div>
              <div>Next.js</div>
              <div>React.js</div>
              <div>Express.js</div>
              <div>JUnit</div>
              <div>Flask</div>
              <div>Tailwind CSS</div>
              <div>Bootstrap</div>
          </div>
          <div className="px-8 py-4 text-2xl ">
              Databases
          </div>
          <div className="flex flex-row px-16 text-xl space-x-4 w-full">
              <div>SQL</div>
              <div>NoSQL</div>
              <div>MySQL</div>
              <div>PostgreSQL</div>
              <div>MongoDB</div>
              <div>MQL</div>
              <div>Redis</div>
              <div>Supabase</div>
          </div>
          <div className="px-8 py-4 text-2xl ">
              Miscellaneous
          </div>
          <div className="flex flex-row px-16 text-xl space-x-4 w-full">
              <div>Git</div>
              <div>GitHub</div>
              <div>Linux</div>
              <div>Google OAuth</div>
              <div>Figma</div>
          </div>
          <div className="px-8 py-4 text-2xl ">
              Specialized
          </div>
          <div className="flex flex-row px-16 text-xl justify-between justify-items-start w-full flex-wrap">
              <div>Web Development</div>
              <div>Object Oriented Design</div>
              <div>Data Structures & Algorithms</div>
              <div>Test Driven Development</div>
              <div>Unit Testing</div>
              <div>Version Control</div>
              <div>REST APIs</div>
              <div>CRUD Principles</div>
          </div>

          <div className="flex flex-row px-8 py-8 text-5xl justify-center">
              Contact
          </div>
          <div className="flex flex-row justify-center place-items-center rounded-lg space-x-4">
              <Link href="https://www.linkedin.com/in/williamlpan/">
                  <Image src={LinkedInLogo} height={100} width={100}></Image>
              </Link>
              <Link href="https://github.com/williampan22">
                  <Image src={GithubLogo} height={100} width={100}></Image>
              </Link>
              <Link href="mailto:williamlpan@gmail.com">
                  <Image src={EmailLogo} height={100} width={100}></Image>
              </Link>
          </div>
          <div className="flex flex-row px-8 py-8 text-2xl justify-center pb-8">
              williamlpan22@gmail.com
          </div>


      </main>
  );
}
