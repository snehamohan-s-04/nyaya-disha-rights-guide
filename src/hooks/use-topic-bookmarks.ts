import { useEffect, useState } from "react";
import { parseTopicBookmarks, TOPIC_BOOKMARKS_KEY, toggleTopicBookmark } from "@/lib/topic-bookmarks";

export function useTopicBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBookmarks(parseTopicBookmarks(window.localStorage.getItem(TOPIC_BOOKMARKS_KEY)));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(TOPIC_BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks, ready]);

  const toggle = (topicId: string) => setBookmarks((saved) => toggleTopicBookmark(saved, topicId));

  return { bookmarks, toggle, ready };
}