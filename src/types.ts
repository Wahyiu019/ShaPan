export interface CustomerInfo {
  name: string;
  industry: string;
  region: string;
  scale: string;
  structure: string;
  business: string;
  distribution: string;
  budgetStatus: string;
  completeness: number;
  reliability: number;
}

export interface Plan {
  id: string;
  name: string;
  type: string;
  products: string[];
  winRate: number;
  budgetPressure: '很低' | '低' | '中' | '中高' | '高' | '待补充';
  deliveryRisk: '很低' | '低' | '中' | '中高' | '高';
  techScore: '低' | '中' | '高' | '很高';
  customerValue: '低' | '中' | '高' | '很高';
  diff: '低' | '中' | '高';
  scenario: string;
  reason: string;
  level: '主推' | '推荐' | '备选' | '防守';
  keyAdvantage?: string;
  mainRisk?: string;
}

export interface IntelligenceItem {
  id: string;
  tag: string;
  type: 'warning' | 'info' | 'success' | 'danger';
  content: string;
  time: string;
}

export interface Weights {
  price: number;
  service: number;
  case: number;
  local: number;
  executive: number;
}
