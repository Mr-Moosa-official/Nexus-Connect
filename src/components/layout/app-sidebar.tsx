'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Users, User as UserIcon, BookOpen, Quote } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';

const menuItems = [
  { href: '/', label: 'Feed', icon: Home },
  { href: '/connect', label: 'Connect', icon: Users },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/reviews', label: 'Testimonials', icon: Quote },
  { href: '/profile/1', label: 'My Profile', icon: UserIcon },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
