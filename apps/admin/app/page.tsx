"use client";

import { api } from "@workspace/backend/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Page() {
  const allNotes = useQuery(api.notes.getNotes);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {allNotes?.map((note) => (
          <div key={note._id}>
            <p>{note.title}</p>
            <p>{note.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
