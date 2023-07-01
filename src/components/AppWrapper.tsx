"use client";
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react';

export const AppWrapper = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <AnimatePresence mode='popLayout' onExitComplete={() => window.scrollTo(0, 0)}>
      {children}
    </AnimatePresence>
  )
}