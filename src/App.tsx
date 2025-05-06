import { Calendar, LaptopMinimalCheck, Link as LinkIcon, Mail, Phone, UserRound } from 'lucide-react';
import "./App.css"
import "./index.css"
import { Badge } from './components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';

function App() {
  return (
    <>
      <div className="">
        <div className="header-master">
          <div className="overlay">
            <header className="flex justify-between py-4 max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold">My Portfolio</h1>
              <nav>
                <ul className="flex space-x-8 text-lg">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#archiving">Archiving</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                </ul>
              </nav>
            </header>
            <section className="flex flex-col justify-center items-center h-full space-y-6">
              <h2 className="text-6xl font-bold">About</h2>
              <p className="text-xl">안녕하세요, XXX입니다.</p>
              <p className="text-xl">항상 새로운 것에 도전합니다.</p>
            </section>
          </div>
        </div>
        
        <main className="relative flex flex-col py-6 space-y-12">
          <div className="flex flex-col">
            <a href="#about" className="block no-underline flex justify-center items-center text-4xl space-x-4 p-4">
              <LinkIcon size={32} />
              <span>About</span>
            </a>
            <div className="grid justify-center items-center space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-60">
                <div className="flex space-x-4">
                  <UserRound />
                  <span>김주호</span>
                </div>
                <div className="flex space-x-4">
                  <Phone />
                  <span>010-3178-0739</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-60">
                <div className="flex space-x-4">
                  <Calendar />
                  <span>1983. 07. 19</span>
                </div>
                <div className="flex space-x-4">
                  <Mail />
                  <span>juho0719@naver.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 bg-white text-black font-bold mb-6">
            <a href="#skills" className="block no-underline flex justify-center items-center text-4xl space-x-4 p-4">
              <LinkIcon size={32} />
              <span>Skills</span>
            </a>
            <div className="grid justify-center items-center space-y-6">
              <div className="grid grid-cols-[140px_1fr]">
                <div className="flex space-x-4">
                  <LaptopMinimalCheck />
                  <span>
                    Language
                  </span>
                </div>
                <div className="flex space-x-1">
                  <Badge>JAVA</Badge>
                  <Badge>KOTLIN</Badge>
                  <Badge>JAVASCRIPT</Badge>
                  <Badge>TYPESCRIPT</Badge>
                  <Badge>PYTHON</Badge>
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr]">
                <div className="flex space-x-4">
                  <LaptopMinimalCheck />
                  <span>
                    Frontend
                  </span>
                </div>
                <div className="flex space-x-1">
                  <Badge>REACT</Badge>
                  <Badge>NEXT.JS</Badge>
                  <Badge>SVELTE</Badge>
                  <Badge>REMIX</Badge>
                  <Badge>TAILWIND CSS</Badge>
                  <Badge>SHADCN UI</Badge>
                  <Badge>VITE</Badge>
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr]">
                <div className="flex space-x-4">
                  <LaptopMinimalCheck />
                  <span>
                    Backend
                  </span>
                </div>
                <div className="flex space-x-1">
                  <Badge>SPRING BOOT</Badge>
                  <Badge>NODE.JS</Badge>
                  <Badge>SUPABASE</Badge>
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr]"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#skills" className="block no-underline flex justify-center items-center text-4xl space-x-4 p-4">
              <LinkIcon size={32} />
              <span>Projects</span>
            </a>
            <div className="grid justify-center items-center space-y-6">
              <div className="flex gap-12">
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>hmg-Pay2.0</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <footer>
          
        </footer>
      </div>
      
    </>
  )
}

export default App
