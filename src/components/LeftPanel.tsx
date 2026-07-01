import React, { useState } from 'react';
import { CustomerInfo, Weights } from '../types';
import { FileText, Plus, Target, CheckCircle2, Settings2, Database, ShieldAlert, Zap, Search, X } from 'lucide-react';

interface LeftPanelProps {
  customer: CustomerInfo;
  weights: Weights;
  setWeights: (w: Weights) => void;
}

export function LeftPanel({ customer, weights, setWeights }: LeftPanelProps) {
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(customer);

  const businessProblems = [
    '提高中标胜率', '控制报价成本', '强化高管体验', '提升全员覆盖',
    '满足招标评分', '应对竞对压价', '强化本地服务', '自定义场景'
  ];

  const updateWeight = (key: keyof Weights, value: number) => {
    setWeights({ ...weights, [key]: value });
  };

  const handleSaveCustomer = () => {
    setIsCustomerModalOpen(false);
    // Ideally update upstream state, but here we just keep local state for now
  };

  return (
    <div className="w-[280px] shrink-0 h-full overflow-y-auto flex flex-col hide-scrollbar gap-4 pb-4">
      
      {/* Customer Info Card */}
      <div 
        className="glass-card !rounded-2xl p-4 flex items-center justify-start relative overflow-hidden group cursor-pointer hover:border-blue-300 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]"
        onClick={() => setIsCustomerModalOpen(true)}
      >
        <h3 className="text-base font-black text-blue-900 flex items-center gap-2 tracking-tight">
          <Target className="w-5 h-5 text-blue-600" />
          {editedCustomer.name}
        </h3>
        <span className="absolute right-3 text-[10px] bg-cyan-50 text-cyan-700 px-2 py-1 rounded border border-cyan-100 font-bold shadow-sm group-hover:bg-cyan-100 transition-colors">AI画像</span>
      </div>

      {isCustomerModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsCustomerModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                客户画像详情 (编辑模式)
              </h3>
              <button className="text-slate-400 hover:text-slate-600 p-1" onClick={() => setIsCustomerModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">客户名称</p>
                  <input 
                    type="text" 
                    value={editedCustomer.name} 
                    onChange={e => setEditedCustomer({...editedCustomer, name: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">所属行业</p>
                  <input 
                    type="text" 
                    value={editedCustomer.industry} 
                    onChange={e => setEditedCustomer({...editedCustomer, industry: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">所在地域</p>
                  <input 
                    type="text" 
                    value={editedCustomer.region} 
                    onChange={e => setEditedCustomer({...editedCustomer, region: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">人员规模</p>
                  <input 
                    type="text" 
                    value={editedCustomer.scale} 
                    onChange={e => setEditedCustomer({...editedCustomer, scale: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">组织结构</p>
                  <input 
                    type="text" 
                    value={editedCustomer.structure} 
                    onChange={e => setEditedCustomer({...editedCustomer, structure: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">当前预算</p>
                  <input 
                    type="text" 
                    value={editedCustomer.budgetStatus} 
                    onChange={e => setEditedCustomer({...editedCustomer, budgetStatus: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-blue-50 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-xs text-slate-500">主营业务</p>
                  <input 
                    type="text" 
                    value={editedCustomer.business} 
                    onChange={e => setEditedCustomer({...editedCustomer, business: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-xs text-slate-500">人员分布</p>
                  <input 
                    type="text" 
                    value={editedCustomer.distribution} 
                    onChange={e => setEditedCustomer({...editedCustomer, distribution: e.target.value})}
                    className="w-full text-sm font-medium text-slate-900 border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
                <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]" onClick={() => setIsCustomerModalOpen(false)}>取消</button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-[0_2px_4px_rgba(37,99,235,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]" onClick={handleSaveCustomer}>保存修改</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Business Problems */}
      <div className="glass-card p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center gap-1.5 mb-3">
          <CheckCircle2 className="w-4 h-4 text-purple-primary" />
          <h3 className="text-xs font-bold text-blue-dark">经营目标设定</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {businessProblems.map((p, i) => (
            <button
              key={p}
              className={`text-[10px] px-2 py-1 rounded-md border transition-all font-medium ${
                i === 0 
                  ? 'border-orange-200/80 bg-gradient-to-b from-orange-50 to-orange-100 text-orange-600 shadow-[0_2px_4px_rgba(249,115,22,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]' 
                  : 'border-slate-200/80 bg-gradient-to-b from-white to-slate-50 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Weights Sliders */}
      <div className="glass-card p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center gap-1.5 mb-3">
          <Settings2 className="w-4 h-4 text-blue-primary" />
          <h3 className="text-xs font-bold text-blue-dark">模型评分权重</h3>
        </div>
        <div className="space-y-3">
          {[
            { label: '价格权重', key: 'price', val: weights.price, baseColor: '59, 130, 246', accent: 'accent-blue-500' },
            { label: '服务方案', key: 'service', val: weights.service, baseColor: '168, 85, 247', accent: 'accent-purple-500' },
            { label: '同类案例', key: 'case', val: weights.case, baseColor: '6, 182, 212', accent: 'accent-cyan-500' },
          ].map(item => {
            const intensity = 0.4 + (item.val / 100) * 0.6;
            return (
            <div key={item.key}>
              <div className="flex justify-between text-[10px] mb-1 font-bold">
                <span className="text-slate-500">{item.label}</span>
                <span className="text-slate-800">{item.val}%</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" 
                value={item.val} 
                onChange={(e) => updateWeight(item.key as keyof Weights, parseInt(e.target.value))}
                className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer shadow-inner ${item.accent}`}
                style={{
                  background: `linear-gradient(to right, rgba(${item.baseColor}, ${intensity}) ${item.val}%, #e2e8f0 ${item.val}%)`,
                }}
              />
            </div>
            );
          })}
        </div>
      </div>

      {/* Visit Records */}
      <div className="glass-card p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center gap-1.5 mb-3">
          <Database className="w-4 h-4 text-cyan-primary" />
          <h3 className="text-xs font-bold text-blue-dark">拜访输入池</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button className="flex items-center justify-center gap-1 bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 rounded-md py-1.5 text-[10px] font-bold text-slate-600 hover:border-blue-300 hover:text-blue-600 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all">
            <Plus className="w-3.5 h-3.5" /> 记笔录
          </button>
          <button className="flex items-center justify-center gap-1 bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200/80 rounded-md py-1.5 text-[10px] font-bold text-blue-600 hover:bg-blue-100 shadow-[0_1px_2px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all">
            <Zap className="w-3.5 h-3.5" /> AI提取
          </button>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 rounded-md p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[9px] font-bold text-blue-800">最新线索提取</span>
          </div>
          <p className="text-[10px] text-blue-900/80 leading-relaxed font-medium">
            关注点：价格控制、本地资源、高管名医。<br/>
            风险：预算未定。
          </p>
        </div>
      </div>

      {/* Reliability */}
      <div className="glass-card p-4 mt-auto shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]">
        <div className="flex items-center gap-1.5 mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-[10px] font-bold text-slate-800">推演可信度</span>
        </div>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-[9px] font-bold mb-1">
              <span className="text-slate-500">信息完整度</span>
              <span className="text-slate-700">{customer.completeness}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]" style={{ width: `${customer.completeness}%` }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9px] font-bold mb-1">
              <span className="text-slate-500">模型置信度</span>
              <span className="text-slate-700">{customer.reliability}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" style={{ width: `${customer.reliability}%` }}></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
