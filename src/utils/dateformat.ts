export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Define the formatting options
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  };

  // Return the formatted date string
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
