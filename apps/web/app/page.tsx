"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

import { api } from "@workspace/backend/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";

export default function Page() {
  const addNote = useMutation(api.notes.createNote);
  const allNotes = useQuery(api.notes.getNotes);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Web</h1>

        {allNotes?.map((note) => (
          <div key={note._id}>
            <p>{note.title}</p>
            <p>{note.body}</p>
          </div>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            addNote({
              title: formData.get("title") as string,
              body: formData.get("body") as string,
            });
            form.reset();
          }}
          className="flex flex-col gap-2"
        >
          <Input name="title" placeholder="Title" required />
          <Input name="body" placeholder="Body" required />
          <Button type="submit">Add Note</Button>
        </form>
      </div>
    </div>
  );
}
