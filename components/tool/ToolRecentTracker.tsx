"use client";

import { saveRecentTool } from "@/lib/navigation";
import { useEffect } from "react";

type ToolRecentTrackerProps = {
  categoryId: string;
  toolId: string;
  name: string;
};

export function ToolRecentTracker({ categoryId, toolId, name }: ToolRecentTrackerProps) {
  useEffect(() => {
    saveRecentTool(categoryId, toolId, name);
  }, [categoryId, toolId, name]);

  return null;
}
