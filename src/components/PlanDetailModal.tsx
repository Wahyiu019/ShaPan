import React from 'react';
import { Plan } from '../types';
import { ArrowLeft, Download, FileText, ChevronRight, Scale, Activity, FileCheck, DollarSign, ListChecks } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlanDetailModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export function PlanDetailModal({ plan, onClose }: PlanDetailModalProps) {
  if (!plan) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute inset-0 z-30 bg-slate-50/95 backdrop-blur-3xl flex flex-col"
      >
        {/* Top Header */}
        <div className="bg-white/60 border-b border-white px-6 py-4 flex items-center justify-between shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white rounded-xl transition-all text-slate-500 hover:shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-widest uppercase border ${
                  plan.level === '主推' ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {plan.level}
                </span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">{plan.name}｜{plan.type}</h2>
              </div>
              <p className="text-xs font-medium text-slate-500">标品组合：{plan.products.join(' + ')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right mr-4 border-r border-slate-200/60 pr-6">
              <div className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mb-0.5">预测中标胜率</div>
              <div className="text-2xl font-black text-emerald-600 tracking-tighter">{plan.winRate}<span className="text-sm font-bold ml-0.5">%</span></div>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
              <Scale className="w-4 h-4" /> 加入对比
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-orange-50 border border-orange-200 text-orange-600 rounded-xl hover:bg-orange-100 transition-all shadow-sm">
              <Download className="w-4 h-4" /> 导出 PPT
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-md shadow-orange-200">
              <FileText className="w-4 h-4" /> 生成标书建议
            </button>
          </div>
        </div>

        <div className="flex flex-1 min-h-0 relative">
          {/* Left Navigation */}
          <div className="w-56 bg-white/40 border-r border-white/50 py-6 shrink-0 overflow-y-auto hide-scrollbar">
            <nav className="space-y-1 px-3">
              {[
                { name: '客户需求理解', icon: Activity },
                { name: '解决方案总览', icon: Target },
                { name: '权益明细测算', icon: DollarSign },
                { name: '履约与网络', icon: ListChecks },
                { name: '风险与建议', icon: FileCheck }
              ].map((item, idx) => (
                <button 
                  key={item.name}
                  className={`w-full text-left px-4 py-3 text-xs rounded-xl transition-all flex items-center gap-2.5 ${
                    idx === 1 
                      ? 'bg-white shadow-sm text-orange-600 font-bold border border-white' 
                      : 'text-slate-600 font-medium hover:bg-white/60'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Section: Solution Overview */}
              <section className="glass-panel p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  解决方案总览
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed mb-8">
                  结合烟草行业的特性、员工分层痛点及企业福利升级需求，打造“三维四层”定制化产品组合方案，兼顾全员普惠与核心升级，实现从“被动保障”到“主动管理”的闭环升级。
                </p>
                
                <div className="grid grid-cols-3 gap-5 mb-8">
                  {['健康预防', '健康干预', '就医保障'].map((dim, i) => (
                    <div key={dim} className="bg-white/60 rounded-2xl p-5 border border-white/60 shadow-sm shadow-slate-100/50 hover:shadow-md transition-shadow">
                      <div className="text-sm font-bold text-slate-800 mb-2">{dim}</div>
                      <div className="text-xs font-medium text-slate-500 leading-relaxed">
                        {i === 0 ? '体检、科普、慢病前置筛查' : i === 1 ? '在线问诊、心理疏导、慢病干预' : '就医协助、线下陪诊、应急保障'}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-sm font-bold text-slate-800 mb-4 tracking-tight">四层落地架构</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { level: '全员普惠', target: '全体员工', content: '基础健康、日常问诊' },
                    { level: '岗位专项', target: '重点岗位', content: '职业病预防、久坐调理' },
                    { level: '核心升级', target: '管理骨干', content: '高端筛查、三甲就医协助' },
                    { level: '企业赋能', target: 'HR/工会', content: '管理后台、数据复盘' }
                  ].map((layer, i) => (
                    <div key={layer.level} className="bg-white/60 border border-white rounded-xl p-4 flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 font-black flex items-center justify-center shrink-0">
                        0{i+1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 mb-0.5">{layer.level} <span className="text-slate-400 font-medium ml-1">· {layer.target}</span></div>
                        <div className="text-[10px] font-medium text-slate-500">{layer.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section: Rights Details */}
              <section className="glass-panel p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                    权益明细测算
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase">
                    <span className="text-slate-400">当前预算:</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded">待拜访后确认</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: '安主任 (基础版)', target: '全体员工 (~5000人)', desc: '7*24h 在线图文/视频问诊，不限次' },
                    { name: '企业门诊', target: '省公司本部', desc: '每周2次全科医生驻点' },
                    { name: '名医绿通', target: '高管及核心', desc: '三甲副主任及以上，3次/人/年' }
                  ].map(item => (
                    <div key={item.name} className="bg-white/80 border border-white rounded-xl p-4 flex items-center justify-between group hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-medium">{item.target}</span>
                        </div>
                        <p className="text-xs font-medium text-slate-500">{item.desc}</p>
                      </div>
                      <div className="text-right pl-4">
                        <span className="text-xs font-bold text-slate-300 italic group-hover:text-slate-400 transition-colors">待核算单价 →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Safe padding */}
              <div className="h-10"></div>
            </div>
          </div>

          {/* Right Static AI Panel */}
          <div className="w-80 bg-white/40 backdrop-blur-xl border-l border-white/50 p-6 shrink-0 overflow-y-auto hide-scrollbar z-10 shadow-[-8px_0_24px_rgba(0,0,0,0.02)]">
            <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              </div>
              AI 面客指导
            </h3>
            
            <div className="space-y-5">
              <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-white/60">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">💡 标书重点表达</h4>
                <div className="text-xs font-medium text-slate-700 space-y-2">
                  <p className="flex items-start gap-1.5"><span className="text-orange-500">•</span> 突出“统一入口+分层+地市落地”机制</p>
                  <p className="flex items-start gap-1.5"><span className="text-orange-500">•</span> 附录云南本地服务网络说明表</p>
                  <p className="flex items-start gap-1.5"><span className="text-orange-500">•</span> 引用烟草行业同类大型国企案例</p>
                </div>
              </div>

              <div className="bg-red-50/80 rounded-xl p-4 shadow-sm border border-red-100/50">
                <h4 className="text-[10px] font-bold text-red-600/70 uppercase tracking-wider mb-2">⚠️ 风险应对</h4>
                <div className="text-xs font-medium text-red-800 space-y-2.5">
                  <p>如竞对极端低价，当前方案价格分可能受损。</p>
                  <div className="bg-white/60 p-2 rounded-lg">
                    <span className="font-bold">建议：</span>名医绿通作为核心人群专属，避免全员开放拉高总价。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Ensure icons used
function Target(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> }
function Sparkles(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> }

