export interface SessionInterface {
  userId: number;
  revoke: boolean;
  token: string;
  expireIn: Date;
}
