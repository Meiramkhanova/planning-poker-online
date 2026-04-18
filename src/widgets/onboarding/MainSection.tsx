import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import PokerUi from "./PokerUi";

function MainSection() {
  return (
    <div className="outer-wrapper h-[calc(100vh-64px)] flex items-center">
      <Container>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="left-info-section flex flex-col gap-8">
            <div
              className={cn(
                "bg-sky-100 py-2 px-2.5 text-xs rounded-full text-sky-800 w-fit",
                "flex items-center gap-2",
              )}>
              <div className="size-1.5 bg-sky-700 rounded-full" />

              <div>
                For <span className="font-medium">Agile</span> and{" "}
                <span className="font-medium">Scrum</span> team
              </div>
            </div>

            <h1 className="text-3xl text-gray-700">
              Estimate tasks <span className="text-sky-800">together, </span>
              without pressure
            </h1>

            <p className="text-gray-500">
              Planning Poker Online is a tool for remote teams. It features
              anonymous voting, Fibonacci charts, and instant consensus.
            </p>
          </div>
          <div className="right-info-section">
            <PokerUi />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainSection;
