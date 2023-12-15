export interface IService {
    id: number;
    service_name: string;
    image_service: string;
    content: string;
    
  }

export interface ISeviceItem {
    [x: string]: any;
    id: number;
    id_service: number;
    item_name: string;
    time_done: string;
    price: number;
}
  