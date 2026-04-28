export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Staff Augmentation",
    services: [
      {
        id: "executive-va",
        icon: "Users",
        title: "Virtual Assistance",
        description: "Dedicated remote executive and business support for founders and teams",
        items: [
          "Operations & Administrative Support",
          "Client & Vendor Communication",
          "Research, Data & Reporting",
          "Calendar & Workflow Management"
        ]
      },
      {
        id: "linkedin-management",
        icon: "Linkedin",
        title: "LinkedIn Management & Outreach",
        description: "Strategic LinkedIn growth, lead generation, and outbound sales support",
        items: [
          "LinkedIn Growth & Prospecting",
          "B2B Sales Outreach & Lead Generation",
          "Inbound / Outbound Marketing Campaigns",
          "Email Marketing & Automation Sequences"
        ]
      }
    ]
  },

  {
    category: "Creative Division",
    services: [
      {
        id: "content-creation",
        icon: "Palette",
        title: "Content Creation & Design",
        description: "High-performing visual content and brand design for digital marketing",
        items: [
          "Social Media Content & Creatives",
          "Brand Identity & Visual Design",
          "Marketing Assets & Ad Creatives",
          "Video Editing & Short-Form Content"
        ]
      },
      {
        id: "content-writing",
        icon: "PenTool",
        title: "Content Writing",
        description: "SEO-optimized content for brands, websites, and marketing campaigns",
        items: [
          "Website Content Writing",
          "Blog & SEO Articles",
          "Product Descriptions & Landing Pages"
        ]
      }
    ]
  },

  {
    category: "Product Engineering",
    services: [
      {
        id: "saas-development",
        icon: "Code",
        title: "SaaS Development",
        description: "Scalable SaaS platforms built with modern frameworks and cloud architecture",
        items: [
          "Custom Web & Mobile App Development",
          "System Architecture & SRS Documentation",
          "Product Design & Concept Development",
          "QA Testing & Deployment"
        ]
      },
      {
        id: "ai-integration",
        icon: "Zap",
        title: "AI Integration & Automation",
        description: "Advanced AI-powered solutions for automation and intelligent systems",
        items: [
          "Custom LLM Integration",
          "AI Image & Content Generation (Hugging Face, Replicate)",
          "Business Process Automation",
          "Legacy System Modernization"
        ]
      },
      {
        id: "crm-automation",
        icon: "Database",
        title: "CRM & GoHighLevel Automation",
        description: "CRM setup, funnel automation, and GoHighLevel (GHL) system integration",
        items: [
          "GoHighLevel Funnel Setup",
          "CRM Automation & Pipeline Management",
          "Lead Tracking & Nurturing Systems",
          "Sales Funnel Optimization"
        ]
      }
    ]
  },

  {
    category: "Additional Services",
    services: [
      {
        id: "website-design",
        icon: "Layout",
        title: "Website Design & Development",
        description: "Modern, responsive, and conversion-focused web experiences",
        items: [
          "UI/UX Design Strategy",
          "Custom Website Development",
          "Performance Optimization (SEO + Speed)",
          "Maintenance & Support"
        ]
      },
      {
        id: "seo-visibility",
        icon: "Search",
        title: "SEO & Digital Visibility",
        description: "Search engine optimization and online growth strategy for businesses",
        items: [
          "On-Page & Technical SEO",
          "Keyword Research & Strategy",
          "Google Ranking Optimization",
          "Brand Visibility & Growth Strategy"
        ]
      },
      {
        id: "business-consulting",
        icon: "TrendingUp",
        title: "Business Strategy & Consulting",
        description: "Strategic consulting for scaling operations and digital growth",
        items: [
          "Market & Competitor Analysis",
          "Revenue Growth Strategy",
          "Go-To-Market Planning",
          "Digital Brand Positioning"
        ]
      }
    ]
  }
];