import React from 'react';
import AdminLayout from '@/app/admin-dashboard/components/AdminLayout';
import AdminDashboardContent from '@/app/admin-dashboard/components/AdminDashboardContent';

export default function AdminDashboardPage() {
  return (
    <AdminLayout activeSection="dashboard">
      <AdminDashboardContent />
    </AdminLayout>
  );
}