import React, { useState } from 'react';
import { Plan } from '../types';
import { ShieldAlert, Sparkles, Target, Zap, CircleDollarSign, ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ComparisonTableProps {
  plans: Plan[];
}

export function ComparisonTable({ plans }: ComparisonTableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Reorder plans to put '主推' first
  const sortedPlans = [...plans].sort((a, b) => (a.level === '主推' ? -1 : b.level === '主推' ? 1 : 0));

  const getScoreColor = (score: string, type: 'risk' | 'value' | 'pressure') => {
    if (type === 'risk' || type === 'pressure') {
      if (score.includes('高')) return 'text-red-600 bg-red-50 border border-red-100';
      if (score.includes('低')) return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      return 'text-orange-600 bg-orange-50 border border-orange-100';
    }
    if (type === 'value') {
      if (score.includes('高')) return 'text-emerald-600 bg-emerald-50 border border-emerald-100 font-bold';
      return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
    return '';
  };

  return (
    <motion.div 
      initial={false}
      animate={{ y: isExpanded ? 0 : 'calc(100% - 44px)' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.1)] rounded-2xl z-20 flex flex-col max-h-[85%]"
    >
      <div 
        className="px-5 h-[44px] flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors shrink-0 rounded-t-2xl border-b border-slate-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 w-full relative">
          <div className="w-8 h-1 rounded-full bg-slate-300 absolute left-1/2 -translate-x-1/2 -top-2 opacity-50"></div>
          
          <h3 className="text-xs font-bold text-blue-dark flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-blue-primary" />
            多方案策略对比矩阵
          </h3>
          
          <div className="ml-auto">
            <button className="text-[10px] text-blue-primary font-bold flex items-center gap-1 hover:text-blue-700 transition-colors">
              {isExpanded ? (
                <>收起矩阵 <ChevronDown className="w-3 h-3" /></>
              ) : (
                <>展开对比 (已选{plans.length}套) <ChevronUp className="w-3 h-3" /></>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto hide-scrollbar flex-1 pb-4">
        <div className="p-4">
          <div className="overflow-hidden border border-slate-200/60 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead>
                <tr>
                  <th className="px-4 py-3 font-bold text-slate-400 w-32 border-b border-r border-slate-100 bg-slate-50/50 text-[9px] uppercase tracking-wider">
                    核心对比维度
                  </th>
                  {sortedPlans.map(plan => (
                    <th key={plan.id} className={`px-4 py-3 font-bold border-b ${plan.level === '主推' ? 'bg-orange-50/50 text-orange-900 border-orange-100' : 'bg-white text-slate-800 border-slate-100'}`}>
                      <div className="flex flex-col gap-0.5">
                        <span className={`text-[8px] px-1.5 py-0.5 w-max rounded font-bold ${plan.level === '主推' ? 'bg-orange-500 text-white' : plan.level === '备选' ? 'bg-slate-100 text-slate-500' : 'text-blue-600 bg-blue-50'}`}>
                          {plan.level === '防守' ? '底线方案' : (plan.level === '备选' ? '备选方案' : plan.level)}
                        </span>
                        <span className="mt-1 text-sm tracking-tight">{plan.type}</span>
                        <span className="text-[9px] font-medium text-slate-400 truncate w-32">{plan.products.join('+')}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-slate-500 border-r border-slate-100 flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-orange-400" />预测胜率</td>
                  {sortedPlans.map(plan => (
                    <td key={plan.id} className={`px-4 py-3 font-black text-lg ${plan.level === '主推' ? 'bg-orange-50/30 text-orange-600' : 'text-slate-800'}`}>
                      {plan.winRate}<span className="text-[9px] ml-0.5 text-slate-400">%</span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-slate-500 border-r border-slate-100 flex items-center gap-1.5"><CircleDollarSign className="w-3 h-3 text-blue-400" />预算压力</td>
                  {sortedPlans.map(plan => (
                    <td key={plan.id} className={`px-4 py-3 ${plan.level === '主推' ? 'bg-orange-50/30' : ''}`}>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${getScoreColor(plan.budgetPressure, 'pressure')}`}>{plan.budgetPressure}</span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-slate-500 border-r border-slate-100 flex items-center gap-1.5"><Zap className="w-3 h-3 text-purple-400" />技术评分</td>
                  {sortedPlans.map(plan => (
                    <td key={plan.id} className={`px-4 py-3 ${plan.level === '主推' ? 'bg-orange-50/30' : ''}`}>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${getScoreColor(plan.techScore, 'value')}`}>{plan.techScore}</span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-slate-500 border-r border-slate-100 flex items-center gap-1.5"><ShieldAlert className="w-3 h-3 text-red-400" />交付风险</td>
                  {sortedPlans.map(plan => (
                    <td key={plan.id} className={`px-4 py-3 ${plan.level === '主推' ? 'bg-orange-50/30' : ''}`}>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${getScoreColor(plan.deliveryRisk, 'risk')}`}>{plan.deliveryRisk}</span>
                    </td>
                  ))}
                </tr>
                <tr className="bg-slate-50/50 hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 text-[10px] font-bold text-slate-500 border-r border-slate-100 flex items-center gap-1.5"><Target className="w-3 h-3 text-slate-400" />综合结论</td>
                  {sortedPlans.map(plan => (
                    <td key={plan.id} className={`px-4 py-3 text-[10px] leading-relaxed ${plan.level === '主推' ? 'bg-orange-100/40 text-orange-900 font-bold border-t border-orange-200' : 'text-slate-600'}`}>
                      {plan.reason}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
