"use client";

import { Users, FileText, Clock, Shield } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      value: "10.000+",
      label: "Utenti Attivi",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-500" />,
      value: "50.000+",
      label: "Contratti Generati",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      value: "30 sec",
      label: "Tempo Medio",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      value: "100%",
      label: "Sicuro & Legale",
    },
  ];

  return (
    <div className="bg-white py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

