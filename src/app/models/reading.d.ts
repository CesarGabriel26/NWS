import { Common } from "./common";

export interface Reading extends Common {
    contentPath: string;
    contentType: string;

    pages: number
}