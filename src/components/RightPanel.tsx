import React, { useState, useEffect } from 'react';
import { IntelligenceItem } from '../types';
import { Zap, Target, AlertTriangle, ArrowRight, Activity, Clock, RefreshCw } from 'lucide-react';

interface RightPanelProps {
  intelligence: IntelligenceItem[];
}

export function RightPanel({ intelligence }: RightPanelProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate network request
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed(new Date());
    }, 1000);
  };

  useEffect(() => {
    // Auto-refresh every 5 minutes (300000ms)
    const interval = setInterval(() => {
      handleRefresh();
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[280px] shrink-0 h-full overflow-y-auto hide-scrollbar flex flex-col gap-4 pb-4">
      
      {/* AI Copilot Area */}
      <div className="glass-card p-4 border-t-2 border-t-purple-500 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-gradient-to-b from-purple-100 to-purple-200 flex items-center justify-center shadow-inner">
            <Zap className="w-3 h-3 text-purple-600" />
          </div>
          <h3 className="text-xs font-bold text-slate-800 tracking-tight">AI 决策引擎</h3>
        </div>
        
        <div className="space-y-2.5">
          {/* AI Conclusion */}
          <div className="bg-gradient-to-b from-white to-slate-50 rounded-lg p-2.5 border border-slate-200 shadow-sm">
            <h4 className="text-[9px] font-bold text-slate-400 mb-1 flex items-center gap-1"><Target className="w-3 h-3"/>智能结论</h4>
            <p className="text-xs text-slate-800 font-bold">主推“价值提升型”，兼顾体验与得分。</p>
          </div>

          {/* Why Recommend */}
          <div className="bg-gradient-to-b from-cyan-50 to-cyan-100/50 rounded-lg p-2.5 border border-cyan-200/80 shadow-sm">
            <h4 className="text-[9px] font-bold text-cyan-700 mb-1 flex items-center gap-1">
              推荐理由
            </h4>
            <div className="text-[10px] text-cyan-900 font-medium space-y-1">
              <p>• 补强线下，统一入口</p>
              <p>• 绿通满足高管核心诉求</p>
            </div>
          </div>

          {/* Current Risk */}
          <div className="bg-gradient-to-b from-red-50 to-red-100/50 rounded-lg p-2.5 border border-red-200/80 shadow-sm">
            <h4 className="text-[9px] font-bold text-red-700 mb-1 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> 风险预警
            </h4>
            <p className="text-[10px] font-medium text-red-900">
              超预算风险：需拜访确认预算上限。
            </p>
            <button className="mt-1.5 text-[9px] bg-gradient-to-b from-white to-slate-50 text-red-600 px-2 py-1 rounded shadow-sm font-bold border border-red-100 w-full text-left hover:bg-red-50 transition-colors">
              生成应对策略 →
            </button>
          </div>

          {/* Next Action */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-lg p-2.5 border border-blue-200/80 shadow-sm">
            <h4 className="text-[9px] font-bold text-blue-700 mb-1 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" /> 下一步动作
            </h4>
            <div className="space-y-1.5 mt-1">
              <label className="flex items-center gap-1.5 text-[10px] font-medium text-blue-900 cursor-pointer group">
                <input type="checkbox" className="rounded-sm border-blue-300 text-blue-600 focus:ring-blue-500 w-3 h-3" />
                <span className="group-hover:text-blue-700">摸底真实预算上限</span>
              </label>
              <label className="flex items-center gap-1.5 text-[10px] font-medium text-blue-900 cursor-pointer group">
                <input type="checkbox" className="rounded-sm border-blue-300 text-blue-600 focus:ring-blue-500 w-3 h-3" />
                <span className="group-hover:text-blue-700">确认员工分层口径</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Timeline */}
      <div className="glass-card p-4 flex-1 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500" />
            <h3 className="text-xs font-bold text-slate-800 tracking-tight">情报动态雷达</h3>
          </div>
          <button 
            onClick={handleRefresh}
            className="text-slate-400 hover:text-blue-500 transition-colors"
            title={`上次更新: ${lastRefreshed.toLocaleTimeString()}`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-500' : ''}`} />
          </button>
        </div>

        <div className="relative pl-3 border-l-2 border-slate-100 space-y-4">
          {intelligence.map((item) => {
            const colors = {
              warning: 'bg-orange-100 text-orange-700',
              info: 'bg-blue-100 text-blue-700',
              success: 'bg-emerald-100 text-emerald-700',
              danger: 'bg-red-100 text-red-700',
            };
            const dotColors = {
              warning: 'bg-orange-500',
              info: 'bg-blue-500',
              success: 'bg-emerald-500',
              danger: 'bg-red-500',
            };

            return (
              <div key={item.id} className="relative group cursor-pointer">
                <div className={`absolute -left-[17px] top-1.5 w-2 h-2 rounded-full border border-white shadow-sm ${dotColors[item.type]}`}></div>
                <div className="mb-1 flex items-center justify-between">
                  <span className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${colors[item.type]}`}>
                    {item.tag}
                  </span>
                  <span className="text-[8px] font-medium text-slate-400 flex items-center gap-0.5"><Clock className="w-2.5 h-2.5"/>{item.time}</span>
                </div>
                <p className="text-[10px] font-medium text-slate-700 leading-relaxed group-hover:text-blue-600 transition-colors">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
