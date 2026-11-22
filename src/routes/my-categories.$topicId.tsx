import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Bookmark, BookmarkCheck, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopicIcon } from "@/components/topic-icon";
import { allTopics, topicFaqs, topicGuideDetails } from "@/data/citizen-categories";
import { topicQuiz } from "@/data/topic-quiz";
import { useTopicBookmarks } from "@/hooks/use-topic-bookmarks";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/my-categories/$topicId")({
  head: ({ params }) => {
    const topic = allTopics.find((item) => item.id === params.topicId);
    const title = topic ? `${topic.title.en} | NyayaDisha` : "Legal Topic Guide | NyayaDisha";
    const description = topic
      ? topic.summary.en
      : "Bilingual legal-awareness guides for citizens of India.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TopicGuidePage,
});

function TopicGuidePage() {
  const { topicId } = Route.useParams();
  const { t, bi } = useLanguage();
  const { bookmarks, toggle, ready } = useTopicBookmarks();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const topic = allTopics.find((item) => item.id === topicId);
  const guide = topicGuideDetails[topicId];

  if (!topic || !guide) {
    return (
      <main className="mx-auto min-h-80 max-w-6xl px-4 py-16 sm:px-6">
        <p className="mb-6 text-lg text-muted-foreground">{t("guide.notFound")}</p>
        <Button asChild variant="outline">
          <Link to="/my-categories">
            <ArrowLeft aria-hidden="true" /> {t("guide.back")}
          </Link>
        </Button>
      </main>
    );
  }

  const saved = bookmarks.includes(topic.id);
  const score = topicQuiz.reduce(
    (total, question, index) => total + (answers[index] === question.correctIndex ? 1 : 0),
    0,
  );
  const quizComplete = Object.keys(answers).length === topicQuiz.length;

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <Button asChild variant="ghost" className="-ml-3 mb-5">
            <Link to="/my-categories">
              <ArrowLeft aria-hidden="true" /> {t("guide.back")}
            </Link>
          </Button>
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TopicIcon icon={topic.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{bi(topic.title)}</h1>
                <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{bi(topic.summary)}</p>
              </div>
            </div>
            <Button
              type="button"
              variant={saved ? "secondary" : "outline"}
              aria-pressed={saved}
              disabled={!ready}
              onClick={() => toggle(topic.id)}
            >
              {saved ? <BookmarkCheck aria-hidden="true" /> : <Bookmark aria-hidden="true" />}
              {saved ? t("guide.saved") : t("guide.save")}
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="space-y-10">
          <section className="border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.law")}</h2>
            <p className="mt-3 font-semibold leading-relaxed">{bi(guide.law)}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{bi(topic.what)}</p>
            <h3 className="mt-6 font-display text-xl font-bold">{t("guide.purpose")}</h3>
            <p className="mt-2 leading-relaxed">{bi(guide.purpose)}</p>
          </section>

          <section className="border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.rights")}</h2>
            <ul className="mt-4 space-y-3">
              {topic.rights.map((right, index) => (
                <li key={index} className="flex gap-3 leading-relaxed">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  <span>{bi(right)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.situations")}</h2>
            <div className="mt-4 space-y-4">
              {guide.situations.map((situation, index) => (
                <p key={index} className="border-l-2 border-gold pl-4 leading-relaxed">
                  {bi(situation)}
                </p>
              ))}
            </div>
          </section>

          <section className="border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.steps")}</h2>
            <ol className="mt-4 space-y-4">
              {topic.steps.map((step, index) => (
                <li key={index} className="flex gap-3 leading-relaxed">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span>{bi(step)}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 leading-relaxed text-muted-foreground">{bi(topic.help)}</p>
          </section>

          <section className="border-b border-border pb-8" aria-labelledby="knowledge-check-title">
            <h2 id="knowledge-check-title" className="font-display text-2xl font-bold text-primary">
              {t("guide.quiz")}
            </h2>
            <p className="mt-2 text-muted-foreground">{t("guide.quizIntro")}</p>
            <div className="mt-5 space-y-7">
              {topicQuiz.map((question, questionIndex) => {
                const selectedAnswer = answers[questionIndex];
                const answered = selectedAnswer !== undefined;
                const isCorrect = selectedAnswer === question.correctIndex;
                return (
                  <fieldset key={questionIndex} className="space-y-3">
                    <legend className="font-semibold leading-relaxed">
                      {t("guide.quizQuestion")} {questionIndex + 1}: {bi(question.question)}
                    </legend>
                    <div className="grid gap-2">
                      {question.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          type="button"
                          variant={selectedAnswer === optionIndex ? "secondary" : "outline"}
                          aria-pressed={selectedAnswer === optionIndex}
                          onClick={() =>
                            setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))
                          }
                          className="h-auto min-h-10 justify-start whitespace-normal py-3 text-left"
                        >
                          {bi(option)}
                        </Button>
                      ))}
                    </div>
                    {answered && (
                      <p
                        className={`flex gap-2 text-sm leading-relaxed ${
                          isCorrect ? "text-success" : "text-muted-foreground"
                        }`}
                        aria-live="polite"
                      >
                        {isCorrect && <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />}
                        <span>
                          <strong>{t(isCorrect ? "guide.correct" : "guide.incorrect")}</strong>{" "}
                          {bi(question.explanation)}
                        </span>
                      </p>
                    )}
                  </fieldset>
                );
              })}
            </div>
            {quizComplete && (
              <p className="mt-6 rounded-md bg-secondary px-4 py-3 font-semibold" aria-live="polite">
                {t("guide.quizComplete")}: {t("guide.score")} {score} {t("guide.scoreOf")} {topicQuiz.length}.
              </p>
            )}
          </section>

          <section className="border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.faq")}</h2>
            <div className="mt-4 divide-y divide-border">
              {topicFaqs.map((faq, index) => {
                const question =
                  index === 0
                    ? t("guide.faqLaw").replace("{law}", bi(guide.law))
                    : t(index === 1 ? "guide.faqSteps" : "guide.faqAdvice");
                const answer = t(
                  index === 0
                    ? "guide.faqLawAnswer"
                    : index === 1
                      ? "guide.faqStepsAnswer"
                      : "guide.faqAdviceAnswer",
                );
                return (
                  <details key={index} className="py-4">
                    <summary className="cursor-pointer font-semibold leading-relaxed">
                      {question || bi(faq.question)}
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {answer || bi(faq.answer)}
                    </p>
                  </details>
                );
              })}
            </div>
          </section>

          <section className="pb-8">
            <h2 className="font-display text-2xl font-bold text-primary">{t("guide.resources")}</h2>
            <ul className="mt-4 space-y-3">
              {guide.resources.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex max-w-full items-start gap-2 font-semibold text-primary underline underline-offset-4"
                  >
                    <span className="break-words">{bi(resource.title)}</span>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <aside className="flex gap-3 rounded-lg border border-gold/50 bg-accent p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-accent-foreground">{t("guide.disclaimer")}</p>
          </aside>
        </div>
      </main>
    </>
  );
}