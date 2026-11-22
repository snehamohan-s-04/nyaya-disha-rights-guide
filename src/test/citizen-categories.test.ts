import { describe, expect, it } from "vitest";
import { allTopics, citizenCategories, topicGuideDetails } from "@/data/citizen-categories";
import { topicQuiz } from "@/data/topic-quiz";

describe("citizen legal guides", () => {
  it("provides the eight requested citizen categories", () => {
    expect(citizenCategories).toHaveLength(8);
    expect(citizenCategories.map((category) => category.id)).toEqual([
      "common-citizens",
      "women",
      "children",
      "senior-citizens",
      "students",
      "workers",
      "farmers",
      "businesses",
    ]);
  });

  it("maps every category to an existing topic with a detailed guide", () => {
    for (const category of citizenCategories) {
      expect(category.topicIds.length, category.id).toBeGreaterThan(0);
      for (const topicId of category.topicIds) {
        expect(allTopics.some((topic) => topic.id === topicId), `${category.id}: ${topicId}`).toBe(true);
        expect(topicGuideDetails[topicId], `${category.id}: ${topicId}`).toBeDefined();
      }
    }
  });

  it("provides three bilingual knowledge-check questions with one valid answer each", () => {
    expect(topicQuiz).toHaveLength(3);
    for (const question of topicQuiz) {
      expect(question.options).toHaveLength(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.question.en).toBeTruthy();
      expect(question.question.kn).toBeTruthy();
      expect(question.explanation.en).toBeTruthy();
      expect(question.explanation.kn).toBeTruthy();
    }
  });

  it("links each guide only to official HTTPS resources", () => {
    for (const [topicId, guide] of Object.entries(topicGuideDetails)) {
      expect(guide.resources.length, topicId).toBeGreaterThan(0);
      for (const resource of guide.resources) {
        expect(resource.url, topicId).toMatch(/^https:\/\//);
      }
    }
  });
});