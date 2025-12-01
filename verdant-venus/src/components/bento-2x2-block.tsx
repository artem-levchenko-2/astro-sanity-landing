
import { byPrefixAndName } from "@awesome.me/kit-c9f3baaeec/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeader } from "./section-header";

interface Feature {
  id: string;
  heading: string;
  description: string;
  image: string;
  url: string;
}

interface Bento2x2BlockProps {
  title?: string;
  description?: string;
  buttonUrl?: string;
  buttonText?: string;
  features?: Feature[];
}

const Bento2x2Block = ({
  features = [
    {
      id: "feature-1",
      heading: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-2",
      heading: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-3",
      heading: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-4",
      heading: "Advanced Analytics",
      description:
        "Powerful analytics tools to help you understand your users and make data-driven decisions.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      url: "https://shadcnblocks.com",
    },
  ],
}: Bento2x2BlockProps) => {
  return (
    <section className="mx-0 md:mx-2">
    <section className="py-32 bg-zinc-950">
      <div className="container">
      <SectionHeader
          theme="dark"
          icon={
            <FontAwesomeIcon
              icon={byPrefixAndName.fas["diagram-subtask"]}
              className="text-md text-green-400"
            />
          }
          label="Cascading"
          title={
            <>
          Cascading & auto‑retries
            </>
          }
          description={
            <>
              With Cascading and automatic retries in place, you'll see 
              approval rates rise while incident impact shrinks.
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border border-zinc-800 flex flex-col overflow-clip md:rounded-3xl rounded-xl border md:p-6 p-4"
            >
              <img
                src={feature.image}
                alt={feature.heading}
                className="aspect-16/9 w-full object-cover object-center md:rounded-2xl rounded-lg"
              />
              <div className="mt-6">
                <h3 className="mb-4 md:text-xl text-lg font-semibold text-primary-foreground">
                  {feature.heading}
                </h3>
                <p className="text-zinc-400 text-base mb-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};

export { Bento2x2Block };

