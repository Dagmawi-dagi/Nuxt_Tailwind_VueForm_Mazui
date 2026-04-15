<script setup>
import { onMounted, ref, reactive, markRaw } from 'vue';
import { 
  Plus, 
  Filter, 
  Download, 
  MoreHorizontal,
  Bell,
  Users,
  Briefcase,
  User,
  Building2,
  FileText,
  CheckSquare,
  Phone,
  Mail,
  Link as LinkIcon,
  Moon,
  Settings
} from 'lucide-vue-next';
import { gsap } from 'gsap';

const containerRef = ref(null);

const toggleTheme = () => {
  console.log('Toggle theme clicked');
};

const crmSidebar = reactive({
  header: {
    title: 'Frappe CRM',
    subtitle: 'Jane Doe',
    logo: 'https://raw.githubusercontent.com/frappe/crm/develop/.github/logo.svg',
    menuItems: [
      { label: 'Toggle Theme', icon: markRaw(Moon), onClick: toggleTheme },
      {
        label: 'Help',
        to: '/help',
        icon: markRaw(Settings),
        onClick: () => alert('Help clicked!'),
      },
      {
        label: 'Logout',
        to: '/logout',
        icon: markRaw(User),
        onClick: () => alert('Logging out...'),
      },
    ],
  },
  sections: [
    {
      label: '',
      items: [{ label: 'Notifications', icon: markRaw(Bell), to: '' }],
    },
    {
      label: '',
      items: [
        { label: 'Leads', icon: markRaw(Users), to: '/leads' },
        { label: 'Deals', icon: markRaw(Briefcase), to: '/deals' },
        { label: 'Contacts', icon: markRaw(User), to: '/contacts' },
        { label: 'Organizations', icon: markRaw(Building2), to: '/organizations' },
        { label: 'Notes', icon: markRaw(FileText), to: '/notes' },
        { label: 'Tasks', icon: markRaw(CheckSquare), to: '/tasks' },
        { label: 'Call Logs', icon: markRaw(Phone), to: '/call-logs' },
        {
          label: 'Email Templates',
          icon: markRaw(Mail),
          to: '/email-templates',
        },
      ],
    },
    {
      label: 'Views',
      collapsible: true,
      items: [
        { label: 'My Open Deals', icon: markRaw(LinkIcon), to: '/my-open-deals' },
        { label: 'Partnership Deals', icon: markRaw(LinkIcon), to: '/partnership-deals' },
        { label: 'Unassigned Deals', icon: markRaw(LinkIcon), to: '/unassigned-deals' },
        {
          label: 'Enterprise Pipeline',
          icon: markRaw(LinkIcon),
          to: '/enterprise-pipeline',
        },
      ],
    },
  ],
});

onMounted(() => {
  if (containerRef.value) {
    const tl = gsap.timeline();
    
    tl.from(containerRef.value.querySelector('header'), {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    });
    
    tl.from(containerRef.value.querySelectorAll('.animate-item'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');
  }
});
</script>

<template>
  <div ref="containerRef" class="flex min-h-screen bg-crm-dark text-crm-text font-sans transition-colors duration-300">
    <LocalsiteNewSidebar :header="crmSidebar.header" :sections="crmSidebar.sections" />
    
    <div class="flex-1 flex flex-col min-w-0">
      <LocalsiteNewTopNav />
      
      <main class="flex-1 p-6 overflow-y-auto">
          <slot ></slot>
      </main>
    </div>
  </div>
</template>
