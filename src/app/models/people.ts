export interface People {
    name: string;
    surname: string; 
    phone: string;
    newFields?: Array<
    {
        phone?: string;
        link?: string;
        text?: string;        
    }>;
}
// Оставляю необязательные поля fields, text и link для дальнейшего
// расширения формы с помошью FormArray или FormBuilder
