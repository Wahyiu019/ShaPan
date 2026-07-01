import React from 'react';

const TABS = [
  '客户驾驶舱',
  '方案沙盘',
  '标品推荐',
  '胜率推演',
  '情报动态',
  '竞对分析',
  '标书建议',
  'A/B对比'
];

export function TabNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 px-6 shrink-0 flex gap-8 overflow-x-auto relative z-10">
      {TABS.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-3.5 text-xs font-bold transition-all whitespace-nowrap relative tracking-wide ${
            activeTab === tab
              ? 'text-orange-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-t-full shadow-[0_-2px_8px_rgba(249,115,22,0.4)]"></div>
          )}
        </button>
      ))}
    </div>
  );
}
