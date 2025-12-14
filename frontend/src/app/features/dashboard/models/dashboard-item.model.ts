export interface DashboardItemImage {
  src: string;
  width: string;
  height: string;
  alt: string;
}

export interface DashboardItemModel {
  image: DashboardItemImage;
  title: string;
}

export interface DashboardData {
  serverStatus: DashboardItemModel;
  supportTickets: DashboardItemModel;
  traffic: DashboardItemModel;
}
