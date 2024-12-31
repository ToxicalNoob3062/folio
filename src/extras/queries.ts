export const fetchAll = (endpoint: string) => async () => {
  const response = await fetch(`/api/${endpoint}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
