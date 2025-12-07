export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Hot Bytes' | 'Cold Data' | 'Algorithm Snacks';
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
}