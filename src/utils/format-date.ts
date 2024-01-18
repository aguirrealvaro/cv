const formatDate = (date: string) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toISOString();

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });

  return { dateString, formattedDate };
};

export { formatDate };
