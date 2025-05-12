import {
  Github,
  BlocksIcon,
  FileTextIcon,
  BotMessageSquare,
} from "lucide-react";

import { ChatBot, CertGen, GhStats, PhoneConfig } from "./tools";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "AWS Certified Cloud Practitioner",
    description:
      "AWS Certified Cloud Practitioner | 2025 | Certification ID: 4J6X2F7G9K5Q",
    className: "col-span-3 lg:col-span-1",
    href: "",
    cta: "View Certificate",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10 md:w-[450px]">
        <CertGen />
      </div>
    ),
  },
  {
    Icon: Github,
    name: "GitHub Stats",
    description: "GitHub Profile Stats and Analytics.",
    href: "https://github.com/Anshikatyagi31",
    cta: "View My Profile",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
        <GhStats />
      </div>
    ),
  },
  {
    Icon: BotMessageSquare,
    name: "Botbyte AI",
    description: "Chatbot for all your queries.",
    href: "https://botbyte.in",
    cta: "View Website",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
        <ChatBot />
      </div>
    ),
  },
  {
    Icon: BlocksIcon,
    name: "Peerlist Profile",
    description: "Peerlist Profile and Stats.",
    href: "https://peerlist.io/anshikatyagi",
    cta: "Visit Profile",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-7 mx-auto flex justify-center duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-110 sm:inset-10">
        <PhoneConfig />
      </div>
    ),
  },
];

export default function OSShowcase() {
  return (
    <section id="tools" className="container relative z-10 mx-auto xl:w-5/6">
      <h2 className="mx-auto mb-20 text-center text-[clamp(1.7rem,7vw,5rem)] font-medium leading-[1] tracking-[-0.07em]">
        Building Tools <br /> for the Community
      </h2>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
