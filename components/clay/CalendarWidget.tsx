'use client';

import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface CalendarWidgetProps {
  className?: string;
}

export default function CalendarWidget({ className = '' }: CalendarWidgetProps) {
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
      className={`w-[280px] rounded-[28px] bg-[#FFF6E8] p-4 select-none shadow-[0_20px_40px_-10px_rgba(180,140,110,0.32),0_8px_16px_-4px_rgba(180,140,110,0.18),inset_0_3px_6px_rgba(255,255,255,0.95),inset_0_-4px_8px_rgba(75,46,37,0.08)] ${className}`}
    >
      {/* Availability Header Badge */}
      <div className="flex items-center justify-between px-1 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CC589] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#52A662]" />
          </span>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#4B2E25]">
            Availability
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#4B2E25] bg-[#FCEFDD] px-2.5 py-0.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]">
          Open for Work
        </span>
      </div>

      {/* Pink Clay Calendar Month Header */}
      <div className="rounded-t-[20px] rounded-b-[12px] bg-gradient-to-b from-[#F86E9E] via-[#F55F95] to-[#F2508A] py-2 px-3 text-center mb-3 shadow-[0_6px_12px_rgba(242,80,138,0.4),inset_0_2px_3px_rgba(255,255,255,0.65),inset_0_-3px_6px_rgba(160,20,70,0.25)]">
        <span className="font-heading font-bold text-sm tracking-wider text-white uppercase [text-shadow:0_1px_2px_rgba(170,20,75,0.5)]">
          {monthName} {year}
        </span>
      </div>

      {/* Weekday Labels (No lines/seams) */}
      <div className="grid grid-cols-7 text-center gap-y-1 mb-1 text-[11px] font-heading font-bold text-[#6B4A3E]/75">
        {weekDays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      {/* Days Grid (Completely seamless) */}
      <div className="grid grid-cols-7 text-center gap-y-1 text-xs font-bold text-[#4B2E25]">
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
                <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#F86E9E] to-[#F2508A] text-white flex items-center justify-center shadow-[0_4px_8px_rgba(242,80,138,0.45),inset_0_1px_2px_rgba(255,255,255,0.7)] font-heading font-bold text-xs scale-105">
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
