import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useMessageData } from '../../hooks/useMessageData';

export function MessageCharts() {
  const { data, loading, error } = useMessageData();

  if (loading) {
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[1, 2].map(i => (
        <div key={i} className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
          <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="h-80 bg-gray-100 rounded"></div>
        </div>
      ))}
    </div>;
  }

  if (error) {
    return null; // Don't show charts if there's an error (metrics cards will show the error)
  }

  const categoryMap = new Map<string, number>();
  const displayMap = new Map<string, number>();

  data.forEach(item => {
    const category = item.msg_category || 'Unknown';
    const display = item.msg_display || 'Not Displayed';

    categoryMap.set(category, (categoryMap.get(category) || 0) + item.number_of_messages_sent);

    if (item.msg_display) {
      displayMap.set(display, (displayMap.get(display) || 0) + item.number_of_messages_sent);
    }
  });

  const colors = ['#a855f7', '#06b6d4', '#ec4899', '#3b82f6', '#f59e0b', '#10b981'];

  const categoryData = Array.from(categoryMap.entries()).map(([name, value], index) => ({
    name,
    value,
    color: colors[index % colors.length]
  }));

  const completionData = Array.from(displayMap.entries()).map(([name, value], index) => ({
    name,
    value,
    color: colors[index % colors.length]
  }));
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Message Volume by Category
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" labelLine={false} outerRadius={100} innerRadius={60} fill="#8884d8" dataKey="value" label={({
              percent
            }) => `${(percent * 100).toFixed(0)}%`}>
                {categoryData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Message Completion
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={completionData} cx="50%" cy="50%" labelLine={false} outerRadius={100} innerRadius={60} fill="#8884d8" dataKey="value" label={({
              percent
            }) => `${(percent * 100).toFixed(0)}%`}>
                {completionData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>;
}