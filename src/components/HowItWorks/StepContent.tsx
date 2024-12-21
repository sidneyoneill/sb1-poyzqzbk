import React from 'react';
import { UserCircle2, Building2, Handshake, Calendar, MessageSquare, UserCog } from 'lucide-react';

export const steps = [
  {
    headline: "Create Your Profile",
    description: "Quickly set up your profile to showcase your skills and interests.",
    mockupContent: (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-4">
        <UserCircle2 className="w-12 h-12 text-blue-600 mb-4" />
        <div className="w-full space-y-2">
          <div className="h-8 bg-white rounded shadow-sm" />
          <div className="h-8 bg-white rounded shadow-sm" />
          <div className="h-8 bg-white rounded shadow-sm" />
        </div>
      </div>
    )
  },
  {
    headline: "Explore Career Profiles",
    description: "Discover opportunities tailored to your goals and interests.",
    mockupContent: (
      <div className="flex flex-col h-full bg-gray-50 p-4 space-y-3">
        <Building2 className="w-8 h-8 text-blue-600" />
        <div className="flex-1 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100" />
              <div className="flex-1">
                <div className="h-2 w-24 bg-gray-200 rounded" />
                <div className="h-2 w-16 bg-gray-200 rounded mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    headline: "Get Matched",
    description: "Effortlessly find jobs without the hassle of endless applications.",
    mockupContent: (
      <div className="flex flex-col h-full bg-gray-50 p-4">
        <Handshake className="w-10 h-10 text-blue-600 mb-4" />
        <div className="flex-1 space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-green-100" />
                <div className="h-2 w-20 bg-gray-200 rounded" />
              </div>
              <div className="h-2 w-32 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    headline: "Receive Invitations",
    description: "Get interview invites directly from companies interested in your profile.",
    mockupContent: (
      <div className="flex flex-col h-full bg-gray-50 p-4">
        <Calendar className="w-10 h-10 text-blue-600 mb-4" />
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="space-y-3">
            <div className="h-2 w-32 bg-gray-200 rounded" />
            <div className="h-2 w-24 bg-gray-200 rounded" />
            <div className="flex justify-between mt-4">
              <div className="h-6 w-20 bg-blue-100 rounded" />
              <div className="h-6 w-20 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    headline: "Receive Feedback",
    description: "Get tailored advice to improve your skills and stand out.",
    mockupContent: (
      <div className="flex flex-col h-full bg-gray-50 p-4">
        <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
              <div className="h-2 w-full bg-gray-200 rounded mb-2" />
              <div className="h-2 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    headline: "Enhance Your Profile",
    description: "Continuously refine your profile for better matches and more opportunities.",
    mockupContent: (
      <div className="flex flex-col h-full bg-gray-50 p-4">
        <UserCog className="w-10 h-10 text-blue-600 mb-4" />
        <div className="space-y-3">
          <div className="h-24 w-24 mx-auto rounded-full bg-gray-200 mb-4" />
          <div className="h-2 w-full bg-gray-200 rounded" />
          <div className="h-2 w-3/4 bg-gray-200 rounded" />
          <div className="h-6 w-32 mx-auto bg-blue-100 rounded-full" />
        </div>
      </div>
    )
  }
];