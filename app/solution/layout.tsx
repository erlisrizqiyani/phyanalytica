import ClientLogos from "@/components/client-logo";

export default function Solution({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto max-w-7xl pt-16 px-6 gap-8 flex-grow">
      <div className="flex w-full ">
      <img
          className="absolute top-0 left-0 w-full sm:h-80 h-60 object-cover "
          src="/Bg-header.png"
        />
      </div>
      <div>
      {children}

      </div>
    </section>
  );
}
