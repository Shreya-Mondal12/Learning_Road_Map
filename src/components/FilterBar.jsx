import { Button } from "@/components/ui/button";
import { categories, difficulties } from "@/data/roadmaps";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownmenu";
import { ChevronDown } from "lucide-react";

export function FilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  return (
    <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pl-6 py-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "active" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="transition-all"
        >
          All Categories
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "active" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={selectedDifficulty?"active":"outline"} className="min-w-[150px] hover:scale-105 ">
            {selectedDifficulty
              ? selectedDifficulty.charAt(0).toUpperCase() +
                selectedDifficulty.slice(1)
              : "Difficulty"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Select Difficulty</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setSelectedDifficulty(null)}>
            <span className={selectedDifficulty === null ? "bg-blue-950 text-white font-bold" : ""}>
              All Levels
            </span>
          </DropdownMenuItem>
          {difficulties.map((difficulty) => (
            <DropdownMenuItem
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
            >
              <span
                className={selectedDifficulty === difficulty ? "bg-blue-950 text-white font-bold" : ""}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
