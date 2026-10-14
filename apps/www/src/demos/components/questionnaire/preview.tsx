import * as React from "react";
import {
  Button,
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "uilab-core";

export function QuestionnairePreview() {
  const [answers, setAnswers] = React.useState<Record<string, string[]> | null>(
    null,
  );

  if (answers) {
    return (
      <div className="flex w-full max-w-md flex-col gap-3 text-sm">
        <p className="font-medium">Thanks for the feedback!</p>
        <ul className="text-xs text-muted-foreground">
          {Object.entries(answers).map(([name, values]) => (
            <li key={name}>
              {name}: {values.join(", ") || "skipped"}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="self-start"
          onClick={() => setAnswers(null)}
        >
          Start over
        </Button>
      </div>
    );
  }

  return (
    <Questionnaire
      defaultItem="role"
      shortcuts="letters"
      className="max-w-md"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setAnswers({
          role: data.getAll("role").map(String),
          tools: data.getAll("tools").map(String),
          feedback: data.getAll("feedback").map(String).filter(Boolean),
        });
      }}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="role" required>
        <QuestionnaireTitle>What best describes your role?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="developer">Developer</QuestionnaireChoice>
          <QuestionnaireChoice value="designer">Designer</QuestionnaireChoice>
          <QuestionnaireChoice value="product">
            Product manager
            <QuestionnaireChoiceDescription>
              Planning, roadmaps and specs
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError>Pick one to continue.</QuestionnaireError>
      </QuestionnaireItem>

      <QuestionnaireItem name="tools" multiple>
        <QuestionnaireTitle>Which tools do you use daily?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Select all that apply.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="figma">Figma</QuestionnaireChoice>
          <QuestionnaireChoice value="vscode">VS Code</QuestionnaireChoice>
          <QuestionnaireChoice value="jira">Jira</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>

      <QuestionnaireItem name="feedback">
        <QuestionnaireTitle>Anything we could do better?</QuestionnaireTitle>
        <QuestionnaireInput placeholder="Optional" />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit />
      </QuestionnaireActions>
    </Questionnaire>
  );
}
