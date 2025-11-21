import React from 'react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
export function SkillProgress() {
  const skills = [{
    name: 'Sport Skills',
    progress: 71,
    trend: 'up',
    color: 'bg-blue-500'
  }, {
    name: 'Blogging',
    progress: 92,
    trend: 'down',
    color: 'bg-blue-500'
  }, {
    name: 'Leadership',
    progress: 35,
    trend: 'up',
    color: 'bg-blue-500'
  }, {
    name: 'Meditation',
    progress: 56,
    trend: 'down',
    color: 'bg-blue-500'
  }, {
    name: 'Philosophy',
    progress: 79,
    trend: 'down',
    color: 'bg-blue-500'
  }];
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Developed areas</h3>
        <p className="text-xs text-gray-500 mt-1">
          Most recent areas of interests
        </p>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">
                {skill.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{skill.progress}%</span>
                {skill.trend === 'up' ? <TrendingUp className="h-4 w-4 text-orange-500" /> : <Info className="h-4 w-4 text-blue-500" />}
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className={`${skill.color} h-2 rounded-full`} style={{
            width: `${skill.progress}%`
          }}></div>
            </div>
          </div>)}
      </div>
    </div>;
}