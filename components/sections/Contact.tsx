import { Section } from "@/components/ui/Section";
import { profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon, ArrowUpRight } from "@/components/ui/icons";
import Footer from "@/components/ui/Footer";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.links.x, Icon: XIcon },
];

export default function Contact() {
  return (
    <>
      <Section id="contact" no="02" label="Contact" className="py-24 sm:py-32">
        <h2 className="reveal max-w-[18ch] text-[clamp(2rem,5.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
          Have a hard problem that needs{" "}
          <span className="serif font-normal text-purple-deep">an owner?</span>
        </h2>
        <p className="reveal mt-6 max-w-[58ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
          Whether it is an AI system to build, a pipeline that keeps dropping
          data, or a product you want shipped end to end, I am reachable and I
          reply.
        </p>

        <a
          href={profile.links.email}
          className="reveal group mt-9 inline-flex items-center gap-3 text-[clamp(1.25rem,3.5vw,1.9rem)] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-purple-deep"
        >
          <MailIcon className="opacity-60" width={22} height={22} />
          <span className="ulink">{profile.email}</span>
          <ArrowUpRight className="opacity-40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" width={20} height={20} />
        </a>

        <div className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-ink"
            >
              <Icon className="opacity-70" />
              <span className="ulink">{label}</span>
            </a>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
