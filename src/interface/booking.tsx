export interface IBooking {
  id: number;
  name: string;
  email: string;
  service?: string;
  phone: number;
  note: string;
  target_date: string;
  target_time: string;
  model_car: string;
  created_at?: string;
  updated_at?: string;
  status: string;
  mileage: string;
  service_name?: string;
  room?: string;
  status_payment?: string;
  jobs?: string;
}
