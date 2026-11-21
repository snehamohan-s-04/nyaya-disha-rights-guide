import { useEffect, useState } from "react";
import { parseTopicBookmarks, TOPIC_BOOKMARKS_KEY, toggleTopicBookmark } from "@/lib/topic-bookmarks";

export function useTopicBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setBookmarks(parseTopicBookmarks(window.localStorage.getItem(TOPIC_BOOKMARKS_KEY)));
    } catch {
      setBookmarks([]);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(TOPIC_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch {
      // Keep bookmarks usable for the current visit when browser storage is unavailable.
    }
  }, [bookmarks, ready]);

  const toggle = (topicId: string) => setBookmarks((saved) => toggleTopicBookmark(saved, topicId));

  return { bookmarks, toggle, ready };
}