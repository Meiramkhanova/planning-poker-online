import { cn } from "@/lib/utils";
import Logo from "@/shared/icons/PlanPoker";
import { Eye } from "lucide-react";
import PersonUI from "./components/PersonUI";
import MiniCard from "./components/MiniCard";

const people = [
  {
    id: 1,
    name: "Adina Mei",
    chosedCard: true,
    className: "-top-14 left-1/2 -translate-x-1/2",
    bgColor: "bg-green-100 text-green-300",
  },
  {
    id: 2,
    name: "Rosie Park",
    chosedCard: false,
    bgColor: "bg-yellow-100 text-yellow-300",
    className: "top-0 right-10",
  },
  {
    id: 3,
    name: "Berik Seisen",
    chosedCard: false,
    bgColor: "bg-red-100 text-red-300",
    className: "top-0  left-5",
  },
  {
    id: 4,
    name: "Zhanna Kei",
    chosedCard: true,
    bgColor: "bg-orange-100 text-orange-300",
    className: "top-20 right-24",
  },
  {
    id: 5,
    name: "Samal Zhan",
    chosedCard: true,
    bgColor: "bg-pink-100 text-pink-300",
    className: "top-20 left-20",
  },
];

const cards = [
  {
    order: 1,
  },
  {
    order: 4,
  },
  {
    order: 13,
  },
  {
    order: 9,
  },
  {
    order: 17,
  },
  {
    order: 5,
  },
  {
    order: 7,
  },
];

function PokerUi() {
  return (
    <div className="poker-ui border border-gray-100 rounded-xl overflow-hidden text-xs text-gray-700 bg-sky-50">
      <div
        className={cn(
          "ui-top bg-white grid grid-cols-2 sm:grid-cols-3 items-center",
          "border-b border-gray-100 p-4 gap-4 md:grid-cols-2 lg:grid-cols-3",
        )}>
        <div
          className={cn(
            "logo-name flex items-center gap-2.5 col-span-2 sm:col-span-1",
            "md:col-span-2 lg:col-span-1",
          )}>
          <div className="logo bg-sky-600 size-5 flex items-center justify-center rounded-md">
            <Logo className="fill-white size-3" />
          </div>

          <div className="text-sky-800 font-medium text-sm">PlanPoker</div>
        </div>

        <div className="time-voting flex flex-col sm:text-center md:text-start lg:text-center">
          <div className="text-sm font-medium text-gray-700">37:09</div>

          <div>Voting is underway</div>
        </div>

        <div className="count-online text-end"> 4 online</div>
      </div>

      <div className="ui-bottom p-4 flex flex-col gap-20">
        <div className="current-task border border-gray-100 bg-white p-4 rounded-lg flex flex-col gap-1">
          <p className="uppercase">Current Task</p>

          <p className="text-gray-700 font-medium capitalize">
            Implement OAuth 2.0 authorization
          </p>
        </div>

        <div className="ui-table relative flex justify-center w-full">
          <div
            className={cn(
              "border h-24 w-3/5 rounded-full bg-sky-200/65 justify-center",
              "text-white flex items-center gap-1.5 text-sm font-medium border-sky-200",
            )}>
            <Eye className="size-4" />

            <span>Show Cards</span>
          </div>

          {people.map((person) => (
            <PersonUI key={person.id} person={person} />
          ))}
        </div>

        <div className="valuate-cards flex flex-col gap-4">
          <p className="text-center">Valuate a task</p>

          <div className="mini-cards flex items-center gap-4 justify-center">
            {cards.map((card) => (
              <MiniCard key={card.order} order={card.order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokerUi;
