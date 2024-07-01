export default function formatTimeAgo(dateStr) {
  const now = new Date();
  const publishDate = new Date(dateStr);
  //console.log(dateStr);
  const secondAgo = (now.getTime() - publishDate.getTime()) / 1000;

  if (secondAgo < 60) {
    return `${Math.floor(secondAgo)}s ago `;
  }

  if (secondAgo < 3600) {
    return `${Math.floor(secondAgo / 60)}m ago `;
  }

  if (secondAgo <= 86400) {
    return `${Math.floor(secondAgo / 3600)}h ago `;
  }

  if (secondAgo > 86400) {
    const day = Math.floor(secondAgo / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
}
