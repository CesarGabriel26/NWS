
export type ContentType =
    | 'text'
    | 'image'
    | 'video';

export interface Content {
    type: ContentType;

    /**
     * Texto, URL, caminho do asset,
     * data URI, etc.
     */
    source: string;
}
