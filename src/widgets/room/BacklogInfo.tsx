import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { PanelRight } from "lucide-react";

function BacklogInfo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PanelRight />

          <span>Backlog</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Room Backlog</SheetTitle>

          <SheetDescription className="text-gray-500">
            Tasks for the current planning session.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default BacklogInfo;
