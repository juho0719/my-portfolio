interface BodyProps {
  children: React.ReactNode;
}

function Body({ children }: BodyProps) {
  return (
    <main className="space-y-8">
      <div className="container mx-auto px-4 pt-20 pb-8">
        {children}
      </div>
    </main>
  );
}

export default Body;
