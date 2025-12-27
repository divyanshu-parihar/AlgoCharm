// This service handles mission logic.
// Currently it returns static data, but it's structured to easily switch to DB calls.

import { db } from "@/db";
import { exercises } from "@/db/schema";
import { eq } from "drizzle-orm";

export interface MissionFiles {
  [filename: string]: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  files: MissionFiles;
}

export const MissionService = {
  async getMissionById(missionId: string): Promise<Mission | null> {
    const result = await db.select().from(exercises).where(eq(exercises.id, missionId));
    
    if (result.length === 0) {
      return null;
    }

    const exercise = result[0];
    const starterCode = exercise.starterCode as { go?: string; python?: string };

    return {
      id: exercise.id,
      title: exercise.title,
      description: `# Mission: ${exercise.title}\n\n${exercise.description}\n\nDifficulty: ${exercise.difficulty}`,
      files: {
        "main.go": starterCode.go || "",
        "solution.py": starterCode.python || "",
      }
    };
  }
};