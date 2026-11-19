export const TOPIC_BOOKMARKS_KEY = "nyayadisha-topic-bookmarks";

export function parseTopicBookmarks(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((item): item is string => typeof item === "string"))];
  } catch {
    return [];
  }
}

export function toggleTopicBookmark(bookmarks: string[], topicId: string): string[] {
  return bookmarks.includes(topicId)
    ? bookmarks.filter((id) => id !== topicId)
    : [...bookmarks, topicId];
}