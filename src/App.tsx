import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body>
        <div className="flex-1 w-full mx-auto min-w-[1200px]">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-600 mb-8">
            This is your new portfolio website built with React. Customize it to showcase your projects and skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* Add your content here */}
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
