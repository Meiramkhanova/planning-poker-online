import { cn } from "@/lib/utils";
import Container from "@/shared/ui/Container";

function HowWorks() {
  return (
    <section className="how-it-works">
      <Container>
        <div className="wrapper py-8 flex flex-col gap-12">
          <div className="headlines flex flex-col gap-8">
            <h5 className="text-sky-800 uppercase text-sm">how it works</h5>

            <h3 className="text-gray-700 text-6xl">Four steps to consensus</h3>
          </div>

          <div className="info-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="info-card bg-white border border-gray-100 rounded-xl flex flex-col gap-4 p-4">
              <div className="lines grid grid-cols-4 gap-2">
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
              </div>

              <div className="title-order flex justify-between gap-4">
                <div className="info-titles">
                  <div className="title text-gray-700 text-lg">
                    Create a room
                  </div>

                  <p className="text-gray-500">
                    One click, and your unique link is ready. Invite your team
                    via messenger.
                  </p>
                </div>

                <div
                  className={cn(
                    "size-9 rounded-full border border-gray-100 bg-gray-50",
                    "flex items-center justify-center shrink-0 shadow-xs",
                  )}>
                  1
                </div>
              </div>
            </div>

            <div className="info-card bg-white border border-gray-100 rounded-xl flex flex-col gap-4 p-4">
              <div className="lines grid grid-cols-4 gap-2">
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
              </div>

              <div className="title-order flex justify-between gap-4">
                <div className="info-titles">
                  <div className="title text-gray-700 text-lg">Add tasks</div>

                  <p className="text-gray-500">
                    Insert the tasks so that the team can see the description in
                    real time.
                  </p>
                </div>

                <div
                  className={cn(
                    "size-8 rounded-full border border-gray-100 bg-gray-50",
                    "flex items-center justify-center shrink-0 shadow-xs",
                  )}>
                  2
                </div>
              </div>
            </div>

            <div className="info-card bg-white border border-gray-100 rounded-xl flex flex-col gap-4 p-4">
              <div className="lines grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-50" />
              </div>

              <div className="title-order flex justify-between gap-4">
                <div className="info-titles">
                  <div className="title text-gray-700 text-lg">
                    Vote anonymously
                  </div>

                  <p className="text-gray-500">
                    Everyone chooses a card — no one sees other people's scores
                    until the moment of disclosure.
                  </p>
                </div>

                <div
                  className={cn(
                    "size-8 rounded-full border border-gray-100 bg-gray-50",
                    "flex items-center justify-center shrink-0 shadow-xs",
                  )}>
                  3
                </div>
              </div>
            </div>

            <div className="info-card bg-white border border-gray-100 rounded-xl flex flex-col gap-4 p-4">
              <div className="lines grid grid-cols-4 gap-2">
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
                <div className="h-1.5 rounded-xs bg-gray-100" />
              </div>

              <div className="title-order flex justify-between gap-4">
                <div className="info-titles">
                  <div className="title text-gray-700 text-lg">
                    Reach a consensus
                  </div>

                  <p className="text-gray-500">
                    The cards open simultaneously. Discuss the discrepancies and
                    finalize the assessment.
                  </p>
                </div>

                <div
                  className={cn(
                    "size-8 rounded-full border border-gray-100 bg-gray-50",
                    "flex items-center justify-center shrink-0 shadow-xs",
                  )}>
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowWorks;
