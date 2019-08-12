export class Menu {
    public _id:string;
    public name:string;
    public price:number;
    public quantity:number = 1;
    public type:string;
}

export class MenuItem {
    public _id:string;
    public name:string;
    public price:number;
    public quantity:number;
    public type:string;
}

export class Order {
    public menuItems:MenuItem[] = [];
    _id: string;
    order_no: number;
    order_date: Date;
    discount: number;
    tax: number;
    subtotal: number;
    total: number;
    special_instructions: string;
    status: string;
    created_on: Date;
    
}