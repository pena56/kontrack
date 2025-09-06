import { Text, View } from "react-native";
import { api } from "@workspace/backend/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Index() {
  const allNotes = useQuery(api.notes.getNotes);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {allNotes?.map((note) => (
        <View key={note._id}>
          <Text>{note.title}</Text>
          <Text>{note.body}</Text>
        </View>
      ))}
    </View>
  );
}
