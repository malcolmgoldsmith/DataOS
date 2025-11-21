import React from 'react';
import { Calendar, ExternalLink, ChevronRight } from 'lucide-react';
export function MeetingsList() {
  const meetings = [{
    date: 'Tue, 11 Jul',
    time: '08:15 am',
    title: 'Quick Daily Meeting',
    platform: 'Zoom',
    color: 'text-orange-500'
  }, {
    date: 'Tue, 11 Jul',
    time: '09:30 pm',
    title: 'John Onboarding',
    platform: 'Google Meet',
    color: 'text-blue-500'
  }, {
    date: 'Tue, 12 Jul',
    time: '02:30 pm',
    title: 'Call With a New Team',
    platform: 'Google Meet',
    color: 'text-blue-500'
  }, {
    date: 'Tue, 15 Jul',
    time: '04:00 pm',
    title: 'Lead Designers Event',
    platform: 'Zoom',
    color: 'text-orange-500'
  }];
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">My meetings</h3>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {meetings.map((meeting, index) => <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <div className="text-xs text-gray-500">{meeting.date}</div>
              <div className="text-sm font-medium text-gray-900 mt-0.5">
                {meeting.title}
              </div>
              <div className="text-xs text-gray-600 mt-1">{meeting.time}</div>
              <div className={`text-xs ${meeting.color} mt-1 flex items-center space-x-1`}>
                <span>●</span>
                <span>{meeting.platform}</span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </div>)}
      </div>
      <button className="w-full mt-4 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-1">
        <span>See all meetings</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>;
}