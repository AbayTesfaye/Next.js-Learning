import { comments } from "./data";

export async function GET() {
  return new Response(JSON.stringify(comments), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const comment = await request.json(); // Parse JSON from the request body

  // Create a new comment object
  const newComment = {
    id: comments.length + 1, // Calculate the new ID based on the comments array
    text: comment.text,
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Return the newly created comment
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201, // Status code 201 for resource creation
  });
}
