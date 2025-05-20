import {
  BarChartIcon,
  CameraIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon,
  UsersIcon
} from "lucide-react"

const data = {
  user: {
    name: "arif",
    email: "arif@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Articles",
      url: "/articles",
      icon: LayoutDashboardIcon,
      items: [
        {
          title: "Create Article",
          url: "/articles/create",
        },
        {
          title: "Generated Article",
          url: "/articles/generated",
        },
        {
          title: "Keyword Projects",
          url: "/articles/keyword-projects",
        },
        {
          title: "AI Keyword to Article",
          url: "/articles/ai-keyword-to-article",
        },
        {
          title: "Steal Competitor Keyword",
          url: "/articles/steal-competitor-keyword",
        },
        {
          title: "Import Keyword from GSC",
          url: "/articles/import-keyword-from-gsc",
        },
        {
          title: "Manual Keyword to Article",
          url: "/articles/manual-keyword-to-article",
        },
        {
          title: "Bulk Keyword to Article",
          url: "/articles/bulk-keyword-to-article",
        },
        {
          title: "Longtail Keyword to Article",
          url: "/articles/longtail-keyword-to-article",
        },
        {
          title: "Article Settings",
          url: "/articles/article-settings",
        },
      ]
    },
    {
      title: "Auto Blog",
      url: "/auto-blog",
      icon: ListIcon,
    },
    {
      title: "Internal Links",
      url: "/internal-links",
      icon: BarChartIcon,
    },
    {
      title: "Free Backlinks",
      url: "/free-backlinks",
      icon: FolderIcon,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: UsersIcon,
    },
    {
      title: "Subscriptions",
      url: "/subscriptions",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Affiliate Program",
      url: "/affiliate-program",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Help Center",
      url: "/help-center",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Updates",
      url: "/updates",
      icon: FileCodeIcon,
    },
    {
      title: "Live Chat Support",
      url: "/live-chat-support",
      icon: FileCodeIcon,
    }
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
}

export default data