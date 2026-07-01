/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { MainWorkspace } from './components/MainWorkspace';
import { ComparisonTable } from './components/ComparisonTable';
import { PlanDetailModal } from './components/PlanDetailModal';
import { PlaceholderView } from './components/PlaceholderView';
import { mockCustomer, mockPlans, mockIntelligence } from './data';
import { Weights, Plan } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('方案沙盘');
  const [weights, setWeights] = useState<Weights>({
    price: 40,
    service: 30,
    case: 15,
    local: 10,
    executive: 5
  });
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden font-sans text-slate-900 bg-[#F4F7FB] relative selection:bg-orange-500/30">
      
      {/* Background gradients for subtle tech feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-cyan-100/30 blur-[120px]"></div>
      </div>

      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === '方案沙盘' ? (
        <div className="flex-1 flex overflow-hidden relative z-10 p-4 gap-4">
          <LeftPanel customer={mockCustomer} weights={weights} setWeights={setWeights} />
          
          <div className="flex-1 flex flex-col min-w-0 relative">
            <MainWorkspace plans={mockPlans} onSelectPlan={setSelectedPlan} />
            <ComparisonTable plans={mockPlans} />
          </div>
          
          <RightPanel intelligence={mockIntelligence} />

          <PlanDetailModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        </div>
      ) : (
        <PlaceholderView title={activeTab} />
      )}
    </div>
  );
}
