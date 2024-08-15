import "@/styles/Contact.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <div className="flex w-full h-screen">
      <img
          className="absolute top-0 left-0 w-full object-cover"
          src="/Bg-header.png"
        />
        
      </div>
      {children}
    </section>
  );
}
