import React from 'react';
import { 
  BarChart3, 
  Box, 
  BrainCircuit, 
  Activity, 
  Swords, 
  FileEdit, 
  GitCompare 
} from 'lucide-react';

interface PlaceholderViewProps {
  title: string;
}

export function PlaceholderView({ title }: PlaceholderViewProps) {
  const getIcon = () => {
    switch (title) {
      case '客户驾驶舱': return <BarChart3 className="w-16 h-16 text-blue-300 mb-4" />;
      case '标品推荐': return <Box className="w-16 h-16 text-blue-300 mb-4" />;
      case '胜率推演': return <BrainCircuit className="w-16 h-16 text-blue-300 mb-4" />;
      case '情报动态': return <Activity className="w-16 h-16 text-blue-300 mb-4" />;
      case '竞对分析': return <Swords className="w-16 h-16 text-blue-300 mb-4" />;
      case '标书建议': return <FileEdit className="w-16 h-16 text-blue-300 mb-4" />;
      case 'A/B对比': return <GitCompare className="w-16 h-16 text-blue-300 mb-4" />;
      default: return null;
    }
  };

  const getDesc = () => {
    switch (title) {
      case '客户驾驶舱': return '全景客户洞察、核心干系人图谱、历年合作数据回溯。';
      case '标品推荐': return '基于AI大模型，智能推荐最优标准产品组合。';
      case '胜率推演': return '从价格、服务、客情等多维度的胜率模拟预测。';
      case '情报动态': return '全网招标与政企动态实时监测网络。';
      case '竞对分析': return '核心竞争对手过往标的及优劣势结构化分析。';
      case '标书建议': return '自动生成针对性标书框架与高分应答要点。';
      case 'A/B对比': return '不同策略维度的投产比(ROI)平行测算。';
      default: return '模块开发中...';
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm m-4">
      {getIcon()}
      <h2 className="text-2xl font-black text-slate-800 mb-2">{title}</h2>
      <p className="text-slate-500 font-medium max-w-md text-center leading-relaxed">
        {getDesc()}
      </p>
      <div className="mt-8 px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100 shadow-sm">
        数据接入中...
      </div>
    </div>
  );
}
