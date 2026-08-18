import { Common } from "./common";

export interface Lesson extends Common {}

export interface LessonContent {
    id: string;
    lessonId: string;
    contentType: string;
    contentId: string;
    position: number;
}