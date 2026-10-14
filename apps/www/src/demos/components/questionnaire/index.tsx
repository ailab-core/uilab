import type { DemoItem } from "@/demos";
import { QuestionnairePreview } from "./preview";

export const QuestionnaireDemos: Record<string, DemoItem> = {
  "questionnaire-preview": {
    component: QuestionnairePreview,
    file: "components/questionnaire/preview.tsx",
  },
};
