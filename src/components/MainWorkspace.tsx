import React from 'react';
import { Plan } from '../types';
import { Crosshair, ShieldCheck, Zap, Activity, ChevronRight, BarChart2, Info } from 'lucide-react';

interface MainWorkspaceProps {
  plans: Plan[];
  onSelectPlan: (plan: Plan) => void;
}

export function MainWorkspace({ plans, onSelectPlan }: MainWorkspaceProps) {
  const mainPlan = plans.find(p => p.level === '主推') || plans[0];
  const otherPlans = plans.filter(p => p.level !== '主推');

  return (
    <div className="flex-1 h-full overflow-y-auto hide-scrollbar flex flex-col gap-4 relative pb-[76px]">
      
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-4 gap-3 shrink-0">
        <div className="glass-card p-3 relative overflow-hidden group border-orange-200/50 shadow-[0_4px_12px_rgba(249,115,22,0.05)]">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
          <p className="text-[10px] text-slate-500 font-bold mb-1">当前主推方案</p>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">{mainPlan.type}</h2>
        </div>
        
        <div className="glass-card p-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
          <p className="text-[10px] text-slate-500 font-bold mb-1">最高预测胜率</p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-2xl font-black text-blue-primary tracking-tighter">{mainPlan.winRate}</h2>
            <span className="text-xs text-slate-500 font-bold">%</span>
          </div>
        </div>

        <div className="glass-card p-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
          <p className="text-[10px] text-slate-500 font-bold mb-1">预算匹配度</p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-xl font-bold text-slate-400 tracking-tight">待补充</h2>
          </div>
        </div>

        <div className="glass-card p-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
          <p className="text-[10px] text-slate-500 font-bold mb-1">综合交付风险</p>
          <div className="flex items-baseline gap-1">
            <h2 className="text-xl font-bold text-emerald-600 tracking-tight">中低</h2>
          </div>
        </div>
      </div>

      {/* Central Engine Visualization & Main Plan */}
      <div className="flex gap-4 shrink-0 mt-2">
        
        {/* Engine Visualization */}
        <div className="w-1/3 glass-card p-4 flex flex-col items-center justify-center relative min-h-[220px] shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
          <h3 className="absolute top-4 left-4 text-[10px] font-bold text-slate-500 flex items-center gap-1">
            <Activity className="w-3 h-3 text-blue-500" /> 推演核心引擎
          </h3>
          
          <div className="relative w-36 h-36 mt-4">
            {/* Outer dashed ring */}
            <div className="absolute inset-0 border-[2px] border-dashed border-blue-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
            {/* Inner solid ring */}
            <div className="absolute inset-2 border-[4px] border-blue-50 rounded-full"></div>
            {/* Progress ring for win rate */}
            <svg className="absolute inset-2 w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="62" fill="none" stroke="#2F80ED" strokeWidth="4" strokeDasharray="389" strokeDashoffset={389 - (389 * mainPlan.winRate) / 100} className="transition-all duration-1000 ease-out" />
            </svg>
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full shadow-[0_0_15px_rgba(47,128,237,0.1)] m-4">
              <span className="text-[10px] text-slate-400 font-bold">综合胜率</span>
              <span className="text-3xl font-black text-blue-primary tracking-tighter leading-none mt-1">{mainPlan.winRate}<span className="text-[10px]">%</span></span>
            </div>

            {/* Orbiting dots */}
            <div className="absolute top-0 left-1/2 -ml-1.5 -mt-1.5 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(53,198,195,0.8)]"></div>
            <div className="absolute bottom-4 right-2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(139,124,246,0.8)]"></div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-1.5 px-2">
             {['预算匹配', '行业适配', '同行案例', '竞对压力', '交付能力', '招标评分'].map((label, idx) => (
               <span key={label} className="text-[9px] px-1.5 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded font-medium">
                 {label}
               </span>
             ))}
          </div>
        </div>

        {/* Main Plan Card */}
        <div 
          className="w-2/3 glass-card border-orange-200 shadow-[0_4px_24px_rgba(234,88,12,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] cursor-pointer flex flex-col relative group overflow-hidden"
          onClick={() => onSelectPlan(mainPlan)}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>
          
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] px-2.5 py-1 rounded shadow-sm font-bold tracking-widest uppercase">
                当前主推方案
              </div>
              <div className="flex items-center gap-1 text-[10px] text-orange-600 bg-orange-50 px-2 py-0.5 rounded font-bold border border-orange-100">
                <BarChart2 className="w-3 h-3" /> 模型评分 92
              </div>
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 mt-2 mb-1">{mainPlan.type}</h3>
            <p className="text-xs font-medium text-slate-500 mb-4">{mainPlan.products.join(' + ')}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-800">关键优势</span>
                </div>
                <p className="text-[11px] font-medium text-emerald-900 leading-tight">{mainPlan.keyAdvantage}</p>
              </div>
              
              <div className="bg-red-50/50 border border-red-100/50 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-bold text-red-800">主要风险</span>
                </div>
                <p className="text-[11px] font-medium text-red-900 leading-tight">{mainPlan.mainRisk}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-100/50 p-3 bg-orange-50/30 flex justify-between items-center px-5">
             <div className="flex items-center gap-2">
               <Info className="w-4 h-4 text-orange-500" />
               <span className="text-[11px] font-bold text-orange-800">推演结论：{mainPlan.reason}</span>
             </div>
             <button className="flex items-center gap-1 text-[10px] text-orange-600 font-bold bg-white px-3 py-1.5 rounded shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                方案推演工作台 <ChevronRight className="w-3 h-3" />
             </button>
          </div>
        </div>
      </div>

      {/* Strategy Cards (Others) */}
      <div className="grid grid-cols-3 gap-4 shrink-0">
        {otherPlans.map((plan) => (
          <div 
            key={plan.id}
            className="glass-card p-4 hover:border-blue-200 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_24px_rgba(47,128,237,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all cursor-pointer flex flex-col group relative overflow-hidden"
            onClick={() => onSelectPlan(plan)}
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold border ${
                plan.level === '备选' ? 'bg-slate-50 text-slate-500 border-slate-200' : 'bg-blue-50 text-blue-600 border-blue-100'
              }`}>
                {plan.level === '防守' ? '底线方案' : `${plan.level}方案`}
              </span>
              <div className="text-xl font-black text-slate-800 tracking-tighter group-hover:text-blue-600 transition-colors">
                {plan.winRate}<span className="text-[10px] text-slate-400 ml-0.5">%</span>
              </div>
            </div>
            
            <h4 className="font-bold text-slate-900 text-sm mb-1">{plan.type}</h4>
            <p className="text-[10px] font-medium text-slate-500 mb-3 truncate">{plan.products.join(' + ')}</p>
            
            <div className="mt-auto space-y-2 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/50">
               <div className="flex items-start gap-1.5">
                 <span className="text-emerald-500 font-black text-[10px] leading-tight">+</span>
                 <p className="text-[10px] font-medium text-slate-600 leading-tight truncate">{plan.keyAdvantage}</p>
               </div>
               <div className="flex items-start gap-1.5">
                 <span className="text-red-400 font-black text-[10px] leading-tight">-</span>
                 <p className="text-[10px] font-medium text-slate-600 leading-tight truncate">{plan.mainRisk}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
