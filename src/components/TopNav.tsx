import React from 'react';
import { Search, Bell, Clock, ChevronDown, Sparkles, Activity } from 'lucide-react';

const TABS = [
  '客户驾驶舱', '方案沙盘', '标品推荐', '胜率推演', 
  '情报动态', '竞对分析', '标书建议', 'A/B对比'
];

interface TopNavProps {
  activeTab: string;
  setActiveTab: (t: string) => void;
}

export function TopNav({ activeTab, setActiveTab }: TopNavProps) {
  return (
    <div className="h-16 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-between px-6 shrink-0 z-20 relative shadow-md border-b border-blue-950/50">
      <div className="flex items-center gap-8 flex-1">
        <div className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight shrink-0">
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white flex items-center justify-center text-sm shadow-inner">
            企
          </div>
          <span className="tracking-wide">企康标品沙盘推演助手</span>
        </div>
        
        {/* Nav Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar flex-1 max-w-3xl">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap relative tracking-wide ${
                activeTab === tab
                  ? 'bg-white/20 text-white shadow-sm border border-white/30'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0 ml-4">
        <div className="relative max-w-[240px] w-full group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-blue-200 group-focus-within:text-white transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-14 py-1.5 bg-white/10 border border-white/20 rounded-full leading-5 text-white placeholder-blue-200/70 focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-white/50 focus:border-white/50 text-xs transition-all shadow-inner"
            placeholder="输入企业名称自动补全..."
            defaultValue="云南烟草"
          />
          <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none">
            <span className="text-[9px] font-medium text-blue-900 bg-cyan-300 rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" /> AI
            </span>
          </div>
        </div>

        <div className="h-4 w-px bg-white/20"></div>

        <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-100 tracking-wider bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
          <Clock className="w-3.5 h-3.5" />
          更新: 10分钟前
        </div>
        
        <button className="relative text-blue-100 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-blue-900"></span>
        </button>
        
        <button className="flex items-center gap-2 text-sm text-white hover:bg-white/10 transition-colors px-2 py-1 rounded-full border border-transparent hover:border-white/20">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs border border-white/30">
            管
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-blue-200" />
        </button>
      </div>
    </div>
  );
}
