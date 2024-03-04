import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    title: "What is EduPlay, and how does it work?",
    text: "EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective.",
  },
  { id: 2, title: "Is EduPlay suitable for all age groups?", text: "" },
  {
    id: 3,
    title: "How does EduPlay ensure my child's safety while using the app?",
    text: "",
  },
  {
    id: 4,
    title: "Can parents track their child's progress on EduPlay?",
    text: "",
  },
  {
    id: 5,
    title: "Are there any costs associated with using EduPlay?",
    text: "",
  },
];

function Faqs() {
  return (
    <section className="container py-10 grid gap-4 lg:grid-cols-2 max-w-[1250px]">
      <h2 className="max-w-xs h-max">Frequently Asked Questions</h2>

      <ul className="flex flex-col gap-4">
        {faqs.map((item) => {
          const { id, title, text } = item;
          return (
            <li key={id}>
              <Accordion type="single" collapsible>
                <AccordionItem value={title}>
                  <AccordionTrigger className="text-base text-left">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">{text}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Faqs;
