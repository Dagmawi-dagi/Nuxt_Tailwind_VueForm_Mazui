<script setup>
import { reactive } from 'vue'

import {
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Bell as Notifications,
  Users as Leads,
  Briefcase as Deals,
  User as Contacts,
  Building2 as Organizations,
  FileText as Notes,
  CheckSquare as Tasks,
  Phone as CallLogs,
  Mail as EmailTemplates,
  Link,
  Moon,
  Settings,
  User as UserIcon
} from 'lucide-vue-next'

// --- sidebar config (your requirement) ---
const toggleTheme = () => {
  console.log('toggle theme')
}

const crmSidebar = reactive({
  header: {
    title: 'Frappe CRM',
    subtitle: 'Jane Doe',
    logo: 'https://raw.githubusercontent.com/frappe/crm/develop/.github/logo.svg',
    menuItems: [
      { label: 'Toggle Theme', icon: Moon, onClick: toggleTheme },
      { label: 'Help', to: '/help', icon: Settings },
      { label: 'Logout', to: '/logout', icon: UserIcon },
    ],
  },
  sections: [
    {
      label: '',
      items: [{ label: 'Notifications', icon: Notifications }],
    },
    {
      label: '',
      items: [
        { label: 'Leads', icon: Leads, to: '/leads' },
        { label: 'Deals', icon: Deals, to: '/deals' },
        { label: 'Contacts', icon: Contacts, to: '/contacts' },
        { label: 'Organizations', icon: Organizations, to: '/organizations' },
        { label: 'Notes', icon: Notes, to: '/notes' },
        { label: 'Tasks', icon: Tasks, to: '/tasks' },
        { label: 'Call Logs', icon: CallLogs, to: '/call-logs' },
        { label: 'Email Templates', icon: EmailTemplates, to: '/email-templates' },
      ],
    },
    {
      label: 'Views',
      collapsible: true,
      items: [
        { label: 'My Open Deals', icon: Link },
        { label: 'Partnership Deals', icon: Link },
        { label: 'Unassigned Deals', icon: Link },
        { label: 'Enterprise Pipeline', icon: Link },
      ],
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen bg-crm-dark text-white font-sans">
    <!-- Sidebar -->
    <LocalsiteNewSidebar :header="crmSidebar.header" :sections="crmSidebar.sections" />

    <!-- Main -->
    <div class="flex-1 flex flex-col min-w-0">
      <LocalsiteNewTopNav />

      <main class="flex-1 p-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto space-y-6">
          
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold tracking-tight">Deals</h1>
              <p class="text-sm text-crm-text-muted">
                Manage and track your sales pipeline
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button class="flex items-center gap-2 px-3 py-2 bg-white/5 border border-crm-border rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
                <Download size="16" />
                <span>Export</span>
              </button>

              <button class="flex items-center gap-2 px-3 py-2 bg-crm-accent text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                <Plus size="16" />
                <span>New Deal</span>
              </button>
            </div>
          </div>

          <!-- Filters -->
          <div class="flex items-center justify-between p-2 bg-white/5 border border-crm-border rounded-lg">
            <div class="flex items-center gap-2">
              <button class="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-crm-text-muted hover:text-white transition-colors">
                <Filter size="14" />
                <span>Filters</span>
              </button>

              <div class="h-4 w-px bg-crm-border" />

              <div class="flex items-center gap-1">
                <span class="text-xs text-crm-text-muted px-2 py-1 bg-white/5 rounded border border-crm-border">
                  Status: Open
                </span>
                <span class="text-xs text-crm-text-muted px-2 py-1 bg-white/5 rounded border border-crm-border">
                  Owner: Me
                </span>
              </div>
            </div>

            <button class="p-1.5 text-crm-text-muted hover:text-white transition-colors">
              <MoreHorizontal size="18" />
            </button>
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div
              v-for="i in 8"
              :key="i"
              class="p-4 bg-crm-sidebar border border-crm-border rounded-xl hover:border-crm-accent/50 transition-colors group cursor-pointer"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-crm-accent/10 transition-colors">
                  <Plus size="20" class="text-crm-text-muted group-hover:text-crm-accent transition-colors" />
                </div>

                <span class="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                  Active
                </span>
              </div>

              <h3 class="font-semibold mb-1 group-hover:text-crm-accent transition-colors">
                Enterprise Solution for Acme Corp
              </h3>

              <p class="text-sm text-crm-text-muted mb-4">
                Acme Corporation
              </p>

              <div class="flex items-center justify-between pt-4 border-t border-crm-border">
                <span class="text-sm font-bold">$45,000</span>
                <span class="text-xs text-crm-text-muted">Updated 2h ago</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>