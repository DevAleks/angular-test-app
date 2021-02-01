export interface People {
    name: string;
    phone: string;
    fields?: Array<string>;
    text?: string;
    link?: string;
}
// Оставляю необязательные поля fields, text и link для дальнейшего
// расширения формы с помошью FormArray или FormBuilder
