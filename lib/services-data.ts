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
        title: "Executive Virtual Assistance",
        description: "Dedicated remote support for founders and executives",
        items: [
          "Operations & Admin Support",
          "Client & Vendor Communication",
          "Research & Reporting",
          "Calendar Management"
        ]
      },
      {
        id: "linkedin-management",
        icon: "Linkedin",
        title: "LinkedIn Management",
        description: "Strategic professional network growth and engagement",
        items: [
          "LinkedIn Growth & Prospecting",
          "Strategic Social Media Marketing",
          "Inbound / Outbound Sales Outreach",
          "Email Marketing & Sequences"
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
        description: "High-retention digital marketing assets and visual design",
        items: [
          "Social Media Creatives",
          "Brand Visual Design",
          "Marketing Materials & Ad Creatives",
          "Video Production & Editing"
        ]
      },
      {
        id: "podcast-production",
        icon: "Mic2",
        title: "Podcast Production",
        description: "Professional audio content from concept to distribution",
        items: [
          "Production & Editing",
          "Find & Contact Potential Guests",
          "Publishing & Distribution",
          "Thumbnails, Titles & Captions"
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
        description: "Scalable platforms built with modern frameworks",
        items: [
          "Custom Development (Web & Mobile)",
          "SRS Documentation",
          "Conceptualization",
          "Quality Assurance & Testing"
        ]
      },
      {
        id: "ai-integration",
        icon: "Zap",
        title: "AI Integration & Modernization",
        description: "Advanced AI solutions using LLMs and image generation",
        items: [
          "Custom LLM Implementation",
          "Image Generation (Hugging Face, Replicate)",
          "Legacy System Modernization",
          "Deployment & Maintenance"
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
        description: "Modern, responsive web experiences",
        items: [
          "Website Design & UX Strategy",
          "Custom Development",
          "Performance Optimization",
          "Ongoing Maintenance & Support"
        ]
      },
      {
        id: "business-consulting",
        icon: "TrendingUp",
        title: "Business Strategy & Consulting",
        description: "Strategic guidance for growth and optimization",
        items: [
          "Market & Opportunity Analysis",
          "Revenue & Growth Strategy",
          "Go-To-Market Strategy",
          "Personal Brand & Online Courses"
        ]
      }
    ]
  }
];
