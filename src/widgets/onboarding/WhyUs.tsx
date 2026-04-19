import Container from "@/shared/ui/Container";
import {
  Anchor,
  MessagesSquare,
  ShieldHalf,
  TestTubeDiagonal,
  TrendingUpDown,
} from "lucide-react";
import ReasonCard from "./components/ReasonCard";
import { ListChecks } from "lucide-react";

const reasonCards = [
  {
    id: 20,
    name: "Eliminates Anchoring Bias",
    text: "Since everyone reveals their cards at the same time, it prevents the loudest voice or a senior developer from influencing others' estimates. This ensures independent thinking.",
    icon: <Anchor className="size-5 stroke-sky-700" />,
  },
  {
    id: 21,
    name: "Uncovers Hidden Complexity",
    text: "Huge gaps in estimates (e.g., one person picks a 2 and another an 13) trigger a discussion that reveals risks or technical hurdles one person might have missed.",
    icon: <ListChecks className="size-5 stroke-sky-700" />,
  },
  {
    id: 22,
    name: "Cross-Functional Expertise",
    text: "The final score represents the combined knowledge of developers, testers, and analysts, covering the entire Definition of Done rather than just the coding part.",
    icon: <TestTubeDiagonal className="size-5 stroke-sky-700" />,
  },
  {
    id: 23,
    name: "Relative Estimation",
    text: "Humans are much better at comparing things ('this task is twice as big as that one') than predicting exact hours. Using Story Points focuses on effort rather than time.",
    icon: <TrendingUpDown className="size-5 stroke-sky-700" />,
  },
  {
    id: 24,
    name: "Team Buy-in and Commitment",
    text: "Because the team reaches a consensus together, individuals feel more responsible for the estimate. It’s no longer a 'deadline from above', but a commitment they helped shape.",
    icon: <ShieldHalf className="size-5 stroke-sky-700" />,
  },
  {
    id: 25,
    name: "Focused Discussion",
    text: "The process forces the team to justify their choices. This turns 'guessing' into a logical breakdown of the work, leading to a much more grounded and realistic forecast.",
    icon: <MessagesSquare className="size-5 stroke-sky-700" />,
  },
];

function WhyUs() {
  return (
    <section className="why-planning-poker">
      <Container>
        <div className="wrapper py-8 xl:py-12 flex flex-col gap-12">
          <div className="headlines flex flex-col gap-8">
            <h5 className="text-sky-800 uppercase text-sm">Why plan poker</h5>

            <h3 className="text-gray-700 text-6xl">Estimation Accuracy</h3>
          </div>

          <div className="reason-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {reasonCards.map((card) => (
              <ReasonCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;
