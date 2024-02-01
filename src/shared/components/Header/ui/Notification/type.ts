export type NotificationMessage = {
  message: SingleMessage | SingleMessage[];
};

export type SingleMessage = {
  message: string;
  title: string;
  id: string;
  icon: string;
};
