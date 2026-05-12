'use client'
import AppLayout from '@/app/components/AppLayout'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout defaultNav="HOME">
      {children}
    </AppLayout>
  )
}