import { describe, expect, it } from "vitest";
import { parseTopicBookmarks, toggleTopicBookmark } from "@/lib/topic-bookmarks";

describe("topic bookmarks", () => {
  it("restores valid saved topics and removes duplicate IDs", () => {
    expect(parseTopicBookmarks('["cyber","consumer","cyber"]')).toEqual(["cyber", "consumer"]);
  });

  it("safely returns an empty list for missing, invalid, or non-list storage", () => {
    expect(parseTopicBookmarks(null)).toEqual([]);
    expect(parseTopicBookmarks("not-json")).toEqual([]);
    expect(parseTopicBookmarks('{"topic":"cyber"}')).toEqual([]);
  });

  it("adds and removes a topic without changing other saved topics", () => {
    expect(toggleTopicBookmark(["consumer"], "cyber")).toEqual(["consumer", "cyber"]);
    expect(toggleTopicBookmark(["consumer", "cyber"], "cyber")).toEqual(["consumer"]);
  });
});