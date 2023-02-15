export class AppEnvs {
  static readonly environment = process.env.NODE_ENV || "development";

  static readonly server = {
    port: Number(process.env.PORT || "3333"),
  };

  static readonly services = {
    clientSecret: process.env.CLIENT_SECRET || "",
  };
}
