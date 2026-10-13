import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import type { LandingLink } from "@/content/landing/types";

/** "Related reading": links into the resources library. */
export function LandingRelated({ links }: { links: LandingLink[] }) {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="Related reading"
						title={
							<>
								Go <Accent>deeper.</Accent>
							</>
						}
					/>
				</Reveal>

				<RevealStagger className="mx-auto mt-12 flex max-w-3xl flex-col gap-2.5">
					{links.map((link) => (
						<RevealItem key={link.href}>
							<SmartLink
								href={link.href}
								className="group flex items-center justify-between gap-4 rounded-[1.1rem] border border-hairline bg-card px-6 py-5 transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent/35"
							>
								<span className="min-w-0 text-[0.95rem] font-medium leading-snug text-ink">
									{link.label}
								</span>
								<ArrowRight
									aria-hidden
									className="h-4 w-4 shrink-0 text-muted transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-accent"
								/>
							</SmartLink>
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
