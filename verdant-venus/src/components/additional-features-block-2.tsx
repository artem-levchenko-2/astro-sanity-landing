
import { SectionHeader } from "./section-header";
import { byPrefixAndName } from "@awesome.me/kit-c9f3baaeec/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    title: "100% Secure",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fadr["bolt"]}
        className="h-5 text-xl"
      />
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fad["split"]}
        className="h-5 text-xl"
      />
    ),
  },
  {
    title: "Unlimited Access",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fad["people-arrows"]}
        className="h-5 text-xl"
      />
    ),
  },
  {
    title: "Easy to Use",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fad["arrows-spin"]}
        className="h-5 text-xl"
      />
    ),
  },
  {
    title: "Built for Developers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fad["code-compare"]}
        className="h-5 text-xl"
      />
    ),
  },
  {
    title: "Always Up to Date",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, numquam possimus necessitatibus voluptatem eius.",
    icon: (
      <FontAwesomeIcon
        icon={byPrefixAndName.fad["shield-quartered"]}
        className="h-5 text-xl"
      />
    ),
  },
];

const AdditionalFeaturesBlock2 = () => {
  return (
    <section className="py-32 pt-48">
      <div className="container">
      <SectionHeader
          theme="light"
          icon={
            <FontAwesomeIcon
              icon={byPrefixAndName.fas["toolbox"]}
              className="text-md text-amber-500"
            />
          }
          label="Toolkits"
          title={
            <>
Built‑in accelerators <br />
for every use case
            </>
          }
          description={
            <>
Intelligent processing implies enough flexibility <br />
to support various business models  and solve routine tasks.
            </>
          }
        />
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="bg-accent text-primary flex size-11 shrink-0 items-center justify-center rounded-md">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold pb-2">{feature.title}</h3>
                <p className="text-zinc-600 text-base leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AdditionalFeaturesBlock2 };

