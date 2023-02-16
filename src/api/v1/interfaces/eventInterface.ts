export interface EventInterface {
  id?: number;
  userId: number;
  name: string;
  description: string;
  amountTickets: number;
  online: boolean;
  startedAt: Date;
  finishAt: Date;
}
