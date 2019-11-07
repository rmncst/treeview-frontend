export class Item {
    id: string;
    name: string;
    children?: Item[];
    parentId?: string;
}