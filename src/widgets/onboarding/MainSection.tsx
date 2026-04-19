import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";
import PokerUi from "./PokerUi";

function MainSection() {
  return (
    <section className="main-info">
      <div className="outer-wrapper xl:h-[calc(100vh-64px)] flex items-center py-8 xl:py-12">
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

              <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-gray-700">
                Estimate tasks <span className="text-sky-800">together, </span>
                without pressure
              </h1>

              <p className="text-gray-500 text-lg">
                Planning Poker Online is a specialized collaborative tool
                designed to streamline story point estimation for remote teams.
                By leveraging anonymous voting, it effectively eliminates
                "groupthink" and the "anchoring effect," ensuring each
                contribute their honest perspectives without bias.
              </p>
            </div>
            <div className="right-info-section">
              <PokerUi />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default MainSection;
