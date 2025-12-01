import { Button } from "@/components/ui/button";
import { byPrefixAndName } from "@awesome.me/kit-c9f3baaeec/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeader } from "./section-header";

interface BlackCtaProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const BlackCta = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Book a Demo",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get a Guide",
      url: "https://www.shadcnblocks.com",
    },
  },
}: BlackCtaProps) => {
  return (
    <section className="mx-0 md:mx-2">
    <section className="bg-zinc-950 md:rounded-b-[48px] rounded-b-[32px]">
      <div className="container pb-16">
        <div
          className="rounded-[32px] border-2 border-[#0A0D38] p-4 md:p-12"
          style={{
            background:
              "radial-gradient(circle 300px at 50% 50%, rgba(0, 6, 255, 0.20) 0%, rgba(0, 6, 255, 0.00) 100%), #08091E",
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
          <SectionHeader 
            className="pb-8"
            theme="dark"
            descriptionClassName="text-blue-200"
            title={
              <>
                Route smarter. Approve more.
              </>
            }
            description={
              <>
                Automate routing decisions and policy‑driven Cascading to lift approvals, 
                reduce costs, and protect uptime.
              </>
            }
          />
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              {buttons.primary && (
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export { BlackCta };

