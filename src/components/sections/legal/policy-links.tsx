import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/shared/smart-link";
import { type Policy, policyPath } from "@/lib/legal";

/** Full-width rows on the legal index. */
export function PolicyIndexList({ policies }: { policies: Policy[] }) {
	return (
		<div className="mt-12 flex flex-col gap-2">
			{policies.map((policy) => (
				<SmartLink
					key={policy.slug}
					href={policyPath(policy.slug)}
					className="group flex items-start justify-between gap-5 rounded-2xl border border-hairline bg-card px-5 py-4 transition-colors hover:border-hairline-strong"
				>
					<span className="min-w-0">
						<span className="block text-[1rem] font-medium text-ink group-hover:text-accent">
							{policy.title}
						</span>
						<span className="mt-1 block text-[0.88rem] leading-relaxed text-muted">
							{policy.summary}
						</span>
					</span>
					<span className="flex shrink-0 items-center gap-3 pt-1">
						<span className="mono-label hidden text-muted sm:block">
							{policy.updated}
						</span>
						<ArrowUpRight
							aria-hidden
							className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
						/>
					</span>
				</SmartLink>
			))}
		</div>
	);
}

/** Compact two-column grid at the foot of a policy. */
export function OtherPolicies({ policies }: { policies: Policy[] }) {
	return (
		<nav
			aria-label="Other policies"
			className="mt-16 border-t border-hairline pt-8"
		>
			<span className="mono-label text-muted">Other policies</span>
			<div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
				{policies.map((policy) => (
					<SmartLink
						key={policy.slug}
						href={policyPath(policy.slug)}
						className="group flex flex-col gap-1 rounded-xl border border-hairline bg-card px-4 py-3 transition-colors hover:border-hairline-strong"
					>
						<span className="text-[0.92rem] font-medium text-ink group-hover:text-accent">
							{policy.title}
						</span>
						<span className="text-[0.8rem] leading-snug text-muted">
							{policy.summary}
						</span>
					</SmartLink>
				))}
			</div>
		</nav>
	);
}
