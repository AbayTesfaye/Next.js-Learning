import "server-only";
export const ServerSideFunction = () => {
  console.log(`fetching sensetive data,
 accessing database,
 secure data`);
  return "Server Result";
};
