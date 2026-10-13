import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { headerActions, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** `null` means the option simply does not offer it. */
type Row = { feature: string; diy: string; agency: string | null };

const ROWS: Row[] = [
	{
		feature: "Warmed US accounts, handed over to you",
		diy: "A brand-new account, cold from day one",
		agency: "They keep the accounts",
	},
	{
		feature: "50,000 vetted creators to shortlist from",
		diy: "Cold DMs and a lot of silence",
		agency: "Whoever is on their roster",
	},
	{
		feature: "Briefs, drafts and approvals in one workspace",
		diy: "Email, Slack and DM threads",
		agency: "Back-and-forth over weeks",
	},
	{
		feature: "Rights captured with a duration and territory",
		diy: "A handshake, if you remember",
		agency: "Buried in the contract",
	},
	{
		feature: "Creator payouts run through the portal",
		diy: "Manual transfers and chasing invoices",
		agency: "Folded into the retainer",
	},
	{
		feature: "Order status, post links and timestamps you can read",
		diy: "A spreadsheet you maintain",
		agency: "A monthly report",
	},
	{
		feature: "Start without a sales call",
		diy: "Nothing to book, but nothing set up either",
		agency: null,
	},
];

const headCell = "px-4 pb-5 pt-7 text-center";
const bodyCell = "px-4 py-5 text-center";
const alternativeText = "text-[0.88rem] leading-snug text-muted";

function Included() {
	return (
		<span className="inline-grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
			<Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
			<span className="sr-only">Included</span>
		</span>
	);
}

function NotOffered() {
	return (
		<>
			<X aria-hidden className="mx-auto h-4 w-4 text-muted/50" />
			<span className="sr-only">Not offered</span>
		</>
	);
}

export function Comparison() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="06"
						label="How we compare"
						title={
							<>
								The new standard for <Accent>TikTok growth.</Accent>
							</>
						}
						description="The same job, done three ways. Here is what changes depending on who runs it."
					/>
				</Reveal>

				<div className="mt-14">
					<Reveal>
						<div className="-mx-4 overflow-x-auto px-4 pb-2">
							<div className="relative mx-auto min-w-[760px] max-w-5xl">
								{/* Raised card behind the Tokgency column. */}
								<div
									aria-hidden
									className="pointer-events-none absolute inset-y-0 left-[42%] w-[19%] rounded-[1.5rem] border border-accent/30 bg-card shadow-lift"
								/>
								<Table>
									<TableCaption>
										{siteConfig.name} compared with doing it yourself and with a
										traditional agency
									</TableCaption>
									<TableHeader>
										<TableRow>
											<TableHead className="w-[42%] pb-5">
												<span className="sr-only">What you get</span>
											</TableHead>
											<TableHead
												scope="col"
												className={cn("w-[19%]", headCell)}
											>
												<span className="font-display text-[1.15rem] font-medium tracking-[-0.02em] text-accent">
													{siteConfig.name}
												</span>
											</TableHead>
											<TableHead
												scope="col"
												className={cn("w-[19.5%]", headCell)}
											>
												<span className="text-[0.95rem] font-medium text-muted">
													Doing it yourself
												</span>
											</TableHead>
											<TableHead
												scope="col"
												className={cn("w-[19.5%]", headCell)}
											>
												<span className="text-[0.95rem] font-medium text-muted">
													A traditional agency
												</span>
											</TableHead>
										</TableRow>
									</TableHeader>

									<TableBody>
										{ROWS.map((row, index) => {
											const divider =
												index < ROWS.length - 1 && "border-b border-hairline";
											return (
												<TableRow key={row.feature}>
													<TableHead
														scope="row"
														className={cn(
															"py-5 pl-1 pr-6 text-left align-middle",
															divider,
														)}
													>
														<span className="text-[0.95rem] font-medium leading-snug text-ink">
															{row.feature}
														</span>
													</TableHead>
													<TableCell className={cn(bodyCell, divider)}>
														<Included />
													</TableCell>
													<TableCell className={cn(bodyCell, divider)}>
														<span className={alternativeText}>{row.diy}</span>
													</TableCell>
													<TableCell className={cn(bodyCell, divider)}>
														{row.agency ? (
															<span className={alternativeText}>
																{row.agency}
															</span>
														) : (
															<NotOffered />
														)}
													</TableCell>
												</TableRow>
											);
										})}
										<TableRow>
											<TableCell />
											<TableCell className="px-4 pb-8 pt-6 text-center">
												<SmartLink
													href={headerActions.primary.href}
													className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[0.9rem] font-medium"
												>
													Start a campaign
												</SmartLink>
											</TableCell>
											<TableCell />
											<TableCell />
										</TableRow>
									</TableBody>
								</Table>
							</div>
						</div>
					</Reveal>
				</div>

				<Reveal>
					<p className="mx-auto mt-8 max-w-2xl text-center text-[0.82rem] leading-relaxed text-muted">
						The two right-hand columns describe the usual shape of those
						options, not any particular provider. Tokgency also runs a full
						managed program — that is the{" "}
						<SmartLink
							href="/agency"
							className="text-accent underline underline-offset-2"
						>
							agency plan
						</SmartLink>
						, on top of the same workspace.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
