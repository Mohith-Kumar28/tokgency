import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { OrderStatusMock } from "@/components/sections/how-it-works/order-status-mock";
import { ButtonLink } from "@/components/shared/button-link";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";

export function OrderStatus() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
					<Reveal>
						<div className="flex min-w-0 flex-col gap-8">
							<SectionHeading
								align="left"
								index="02"
								label="Order status"
								title={
									<>
										You can always see <Accent>where it is.</Accent>
									</>
								}
								description="Each campaign and distribution order carries a readable status with timestamps at every step, so a stalled draft is visible the day it stalls, not at the end of the month."
							/>
							<div className="flex flex-col gap-3 sm:flex-row">
								<ButtonLink href={headerActions.primary.href} external>
									Start a campaign
									<ArrowUpRight aria-hidden className="h-4 w-4" />
								</ButtonLink>
								<ButtonLink href="/creator-marketplace" variant="ghost">
									Browse creators
								</ButtonLink>
							</div>
						</div>
					</Reveal>

					<Reveal>
						<OrderStatusMock />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
