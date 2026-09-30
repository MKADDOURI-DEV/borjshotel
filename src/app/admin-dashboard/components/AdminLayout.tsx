'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import {
  LayoutDashboard, BedDouble, CalendarCheck, Sparkles, UtensilsCrossed,
  Wrench, Image, FileText, MessageSquare, Settings, Globe, ChevronLeft,
  ChevronRight, Bell, User, LogOut, Menu
} from 'lucide-react';

const navSections = [
  {
    key: 'section-main',
    label: 'Principal',
    items: [
      { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
      { key: 'rooms', icon: BedDouble, label: 'Chambres', badge: null },
      { key: 'reservations', icon: CalendarCheck, label: 'Réservations', badge: '12' },
    ],
  },
  {
    key: 'section-content',
    label: 'Services',
    items: [
      { key: 'spa', icon: Sparkles, label: 'Spa', badge: null },
      { key: 'restaurant', icon: UtensilsCrossed, label: 'Restaurant', badge: null },
      { key: 'services', icon: Wrench, label: 'Services', badge: null },
    ],
  },
  {
    key: 'section-media',
    label: 'Contenu',
    items: [
      { key: 'gallery', icon: Image, label: 'Galerie', badge: null },
      { key: 'content', icon: FileText, label: 'Contenu', badge: null },
      { key: 'messages', icon: MessageSquare, label: 'Messages', badge: '5' },
    ],
  },
  {
    key: 'section-config',
    label: 'Configuration',
    items: [
      { key: 'booking-settings', icon: Settings, label: 'Réservation', badge: null },
      { key: 'languages', icon: Globe, label: 'Langues', badge: null },
      { key: 'website-settings', icon: Settings, label: 'Paramètres', badge: null },
    ],
  },
];

interface AdminLayoutProps {
  children: React.ReactNode;
  activeSection: string;
}

export default function AdminLayout({ children, activeSection }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out flex-shrink-0
          ${collapsed ? 'w-16' : 'w-64'}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center border-b border-border h-16 flex-shrink-0 ${collapsed ? 'justify-center px-2' : 'px-5 gap-3'}`}>
          <AppLogo size={32} />
          {!collapsed && (
            <div className="flex flex-col leading-tight overflow-hidden">
              <span className="font-bold text-xs tracking-widest uppercase text-foreground truncate">BORJS</span>
              <span className="text-[9px] tracking-[0.12em] uppercase font-medium text-muted-foreground truncate">Admin Panel</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin py-4 px-2 space-y-5">
          {navSections.map((section) => (
            <div key={section.key}>
              {!collapsed && (
                <p className="px-3 mb-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {section.label}
                </p>
              )}
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <button
                    key={`nav-${item.key}`}
                    className={`admin-sidebar-item w-full ${activeSection === item.key ? 'active' : ''} ${collapsed ? 'justify-center px-2' : ''}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.icon size={18} className="flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        {item.badge && (
                          <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-border p-3 space-y-1">
          <Link
            href="/"
            className={`admin-sidebar-item w-full ${collapsed ? 'justify-center px-2' : ''}`}
            title={collapsed ? 'Voir le site' : undefined}
          >
            <Globe size={18} className="flex-shrink-0" />
            {!collapsed && <span>Voir le site</span>}
          </Link>
          <button
            className={`admin-sidebar-item w-full text-red-500 hover:bg-red-50 hover:text-red-600 ${collapsed ? 'justify-center px-2' : ''}`}
            title={collapsed ? 'Déconnexion' : undefined}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {!collapsed && <span>Déconnexion</span>}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`admin-sidebar-item w-full ${collapsed ? 'justify-center px-2' : ''}`}
            aria-label={collapsed ? 'Développer' : 'Réduire'}
          >
            {collapsed ? <ChevronRight size={18} /> : <><ChevronLeft size={18} /><span>Réduire</span></>}
          </button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-64 bg-card border-r border-border flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between px-5 h-16 border-b border-border">
              <div className="flex items-center gap-2">
                <AppLogo size={28} />
                <span className="font-bold text-sm text-foreground">Admin</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-md hover:bg-secondary">
                <ChevronLeft size={18} />
              </button>
            </div>
            <nav className="flex-1 py-4 px-2 space-y-4">
              {navSections.map((section) => (
                <div key={`mobile-${section.key}`}>
                  <p className="px-3 mb-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {section.label}
                  </p>
                  {section.items.map((item) => (
                    <button
                      key={`mobile-nav-${item.key}`}
                      onClick={() => setMobileOpen(false)}
                      className={`admin-sidebar-item w-full ${activeSection === item.key ? 'active' : ''}`}
                    >
                      <item.icon size={18} />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <span className="bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-1 bg-foreground/40" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
            <div>
              <p className="font-bold text-foreground text-sm">Borjs Hotel — Administration</p>
              <p className="text-muted-foreground text-xs">Tableau de bord</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Notifications">
              <Bell size={18} className="text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-foreground text-sm font-semibold">Admin</p>
                <p className="text-muted-foreground text-xs">admin@borjshotel.ma</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          {children}
        </main>
      </div>
    </div>
  );
}