import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

function Participants() {
  return (
    <Sheet>
      <SheetTrigger asChild className="col-span-2 md:col-span-1">
        <Button>Participants</Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-gray-700">Participants</SheetTitle>

          <SheetDescription className="text-gray-500">
            View participants who are currently in the room.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Participants;
