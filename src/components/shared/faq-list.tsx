import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export type Faq = { question: string; answer: string };

/** Stack of expandable questions. Several can be open at once. */
export function FaqList({ items }: { items: Faq[] }) {
	return (
		<Accordion
			type="multiple"
			className="mx-auto flex max-w-3xl flex-col gap-3"
		>
			{items.map((item) => (
				<AccordionItem key={item.question} value={item.question}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>{item.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
