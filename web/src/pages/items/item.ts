export class Item {
    itemId?;
    itemName?;
    itemDescription?;
    //deleted: boolean;
    //createdBy: string;
    //updatedBy: string;

    constructor(obj: any) {
        this.itemId = obj.itemId;
        this.itemName = obj.itemName;
        this.itemDescription = obj.itemDescription;
        //this.deleted = obj.deleted;
        //this.createdBy = obj.createdBy;
        //this.updatedBy = obj.updatedBy;
    }
}