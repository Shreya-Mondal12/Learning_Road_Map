import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownmenu";
import { DarkModeToggle } from "./DarkModeToggle";

export function Header({ setViewMode, viewMode }) {
  return (
    <header className="w-full py-6 border-b bg-background">
      <div className="container flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="/career-atlas-logo.png"
            alt="CareerAtlas Logo"
            className="pl-2 h-16 w-auto rounded "
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-primary">
              Learning Roadmaps
            </h1>
            <p className="pl-1 text-muted-foreground mt-1">
              Visualize your learning journey
            </p>
          </div>
        </div>
        {/* Controls */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "active" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              List View
            </Button>
            <Button
              variant={viewMode === "grid" ? "active" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
