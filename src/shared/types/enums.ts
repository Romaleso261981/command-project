export enum RoutersPaths {
  MAIN = "/",
  ADMIN = "/admin",
  PRODUCTS = "/products",
  PRODUCT = "/products/:id",
  PROFILE = "admin/:id",
  USERDETAIL = "profile/:id",
  LOGIN = "/login",
  NOFOUND = "*",
}
export enum Status {
  LOADING = "loading",
  SUCCES = "succes",
  ERROR = "error",
}
export enum DataBasePath {
  Products = "products",
}
export enum MessagesType {
  NOTIFICATION = "notification",
  MESSAGES = "messages",
}
