import React from 'react';
import { MoreHorizontal } from 'lucide-react';
interface MetricCardProps {
  title: string;
  percentage: number;
  label: string;
  gradient: string;
}
export function MetricCard({
  title,
  percentage,
  label,
  gradient
}: MetricCardProps) {
  return <div className={`bg-gradient-to-br ${gradient} rounded-2xl shadow-sm p-6 relative`}>
      <div className="flex items-start justify-between mb-8">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <button className="p-1 hover:bg-white/20 rounded">
          <MoreHorizontal className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="mt-auto">
        <div className="text-5xl font-bold text-gray-900">{percentage}%</div>
        <p className="text-sm text-gray-600 mt-1">{label}</p>
      </div>
    </div>;
}