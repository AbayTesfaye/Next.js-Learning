import { comments } from "../data";

export async function GET(request, { params }) {
  const commentId = parseInt(params.id, 10);

  const comment = comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(request, { params }) {
  const commentId = parseInt(params.id, 10);

  // Parse the request body
  const body = await request.json();
  const { text } = body;

  // Find the index of the comment
  const index = comments.findIndex((comment) => comment.id === commentId);

  // If the comment doesn't exist, return a 404 response
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Update the comment text
  comments[index].text = text;

  // Return the updated comment
  return new Response(JSON.stringify(comments[index]), {
    headers: { "Content-Type": "application/json" },
  });
}
