'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CalendarWidget() {
  const shouldReduceMotion = useReducedMotion();

  // Dynamic JS Date calculation
  const { monthName, year, daysInMonth, startDayOfWeek, currentDay } = useMemo(() => {
    const today = new Date();
    const mName = today.toLocaleString('default', { month: 'long' }).toUpperCase();
    const y = today.getFullYear();
    const cDay = today.getDate();

    // First day of month
    const firstDay = new Date(y, today.getMonth(), 1);
    // 0 = Sunday, convert to Monday = 0: (day + 6) % 7
    const sDay = (firstDay.getDay() + 6) % 7;

    // Total days in month
    const totalDays = new Date(y, today.getMonth() + 1, 0).getDate();

    return {
      monthName: mName,
      year: y,
      daysInMonth: totalDays,
      startDayOfWeek: sDay,
      currentDay: cDay,
    };
  }, []);

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  // Construct calendar grid cells (blanks + days)
  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }
    return days;
  }, [startDayOfWeek, daysInMonth]);

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -6, 0],
              rotate: [0, 1, 0],
            }
      }
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="clay clay-cream w-[270px] sm:w-[290px] overflow-hidden p-3.5 shadow-xl select-none"
    >
      {/* Availability Header Badge */}
      <div className="flex items-center justify-between px-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CC589] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7CC589]" />
          </span>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#4B2E25]">
            Availability
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#6B4A3E] bg-[#FCEFDD] px-2 py-0.5 rounded-full">
          Open for Work
        </span>
      </div>

      {/* Pink Clay Calendar Header */}
      <div className="clay-pink rounded-2xl py-2 px-3 text-center mb-2.5">
        <span className="font-heading font-bold text-sm tracking-wide text-[#FFF6E8]">
          {monthName} {year}
        </span>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-center gap-1 mb-1 text-[11px] font-heading font-bold text-[#6B4A3E]/70">
        {weekDays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 text-center gap-1 text-xs font-bold text-[#4B2E25]">
        {calendarDays.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="h-7 w-7" />;
          }

          const isToday = day === currentDay;

          return (
            <div
              key={`day-${day}`}
              className="h-7 w-7 mx-auto flex items-center justify-center"
            >
              {isToday ? (
                <div className="w-7 h-7 rounded-full bg-[#F2508A] text-[#FFF6E8] flex items-center justify-center shadow-[0_4px_8px_rgba(242,80,138,0.45),inset_0_1px_2px_rgba(255,255,255,0.7)] font-heading font-bold text-xs scale-105">
                  {day}
                </div>
              ) : (
                <span className="hover:text-[#F2508A] transition-colors">{day}</span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
