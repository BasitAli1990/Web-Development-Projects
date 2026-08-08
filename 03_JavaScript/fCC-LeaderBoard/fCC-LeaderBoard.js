const timeAgo = (isoTimestamp) => {
  const past = new Date(isoTimestamp);
  const now = new Date();
  const diffInMs = now - past;

  let Minutes = Math.floor(diffInMs/ (1000 * 60));
      Minutes = Minutes % 60;
  let Hours = Math.floor(Minutes / 60);
  let Days = Math.floor(Hours / 24);
  return Minutes;
}

console.log(timeAgo("2025-07-13T10:00:00Z"));