import { CustomerInfo, Plan, IntelligenceItem } from './types';

export const mockCustomer: CustomerInfo = {
  name: '云南烟草',
  industry: '烟草',
  region: '云南',
  scale: '5000人',
  structure: '省市两级',
  business: '待系统补全',
  distribution: '待系统补全',
  budgetStatus: '待拜访后补充',
  completeness: 68,
  reliability: 76,
};

export const mockPlans: Plan[] = [
  {
    id: 'B',
    name: '方案B',
    type: '价值提升型',
    products: ['安主任', '企业门诊', '名医绿通'],
    winRate: 86,
    budgetPressure: '中',
    deliveryRisk: '中',
    techScore: '高',
    customerValue: '高',
    diff: '高',
    scenario: '服务分高、重体验、要本地交付',
    reason: '当前主推方案，兼顾全员与高管',
    level: '主推',
    keyAdvantage: '满足多层级组织，高管增值感知强',
    mainRisk: '超预算风险:高管体验贵,需控总价'
  },
  {
    id: 'A',
    name: '方案A',
    type: '稳健中标型',
    products: ['安主任', '在线问诊'],
    winRate: 83,
    budgetPressure: '低',
    deliveryRisk: '低',
    techScore: '中',
    customerValue: '中',
    diff: '中',
    scenario: '价格分高时优先',
    reason: '控成本、保交付、高价格竞争力',
    level: '备选',
    keyAdvantage: '成本极度可控，交付履约极简',
    mainRisk: '竞对低价:若均低价则价值感弱'
  },
  {
    id: 'C',
    name: '方案C',
    type: '高层突破型',
    products: ['安主任', '名医绿通', '高端体检'],
    winRate: 74,
    budgetPressure: '高',
    deliveryRisk: '中高',
    techScore: '高',
    customerValue: '很高',
    diff: '高',
    scenario: '高管沟通备选',
    reason: '确认高管健康诉求和预算后可用',
    level: '备选',
    keyAdvantage: '直击决策人痛点，建立强信任',
    mainRisk: '严重超预算:需确认预算上限'
  },
  {
    id: 'D',
    name: '方案D',
    type: '价格防守型',
    products: ['在线问诊', '健康档案'],
    winRate: 78,
    budgetPressure: '很低',
    deliveryRisk: '低',
    techScore: '中',
    customerValue: '低',
    diff: '低',
    scenario: '竞对压价备用',
    reason: '极限控价、防止被低价击穿',
    level: '防守',
    keyAdvantage: '价格无死角，兜底竞对战',
    mainRisk: '体验单薄:不适合重体验客户'
  }
];

export const mockIntelligence: IntelligenceItem[] = [
  {
    id: '1',
    tag: '招标更新',
    type: 'warning',
    content: '公告:预算77万,价格分40%。',
    time: '10分钟前'
  },
  {
    id: '2',
    tag: '企康更新',
    type: 'success',
    content: '云南新增2家合作医院。',
    time: '2小时前'
  }
];
