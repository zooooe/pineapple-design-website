
import { Dictionary } from './types';

export const DICTIONARY: Dictionary = {
  en: {
    header: {
      logo: "Big Pineapple Creative Studio",
      nav: {
        work: "Work",
        services: "Services",
        contact: "Contact",
      },
      toggleEn: "EN",
      toggleZh: "中文",
    },
    hero: {
      title: "Big Pineapple",
      subtitle: "Creative Studio",
      description: "Big Pineapple Creative Studio is a multidisciplinary practice. We blend strategy and aesthetics to create lasting impressions.",
      allLabel: "All",
    },
    works: {
      viewProject: "View Project",
      backLabel: "Back to Works",
      projects: [
        { 
          id: 1, 
          title: "Aesop Skin Care", 
          category: "Social Campaigns", 
          imageUrl: "https://placehold.co/800x1000/eeeeee/cccccc?text=Aesop",
          images: [
            "https://placehold.co/1920x1080/eeeeee/999999?text=Aesop+Detail+1",
            "https://placehold.co/1920x1080/e5e5e5/888888?text=Aesop+Detail+2",
            "https://placehold.co/1920x1080/dddddd/777777?text=Aesop+Detail+3"
          ],
          year: "2023",
          client: "Aesop International",
          description: "A complete overhaul of the digital storefront, focusing on sensory experience through screen. We utilized minimal layouts and rich textures to convey the tactile nature of the products."
        },
        { 
          id: 2, 
          title: "MoMA Identity", 
          category: "Brand Identity", 
          imageUrl: "https://placehold.co/800x1000/e5e5e5/bbbbbb?text=MoMA",
          images: [
            "https://placehold.co/1920x1080/e5e5e5/999999?text=MoMA+Identity+1",
            "https://placehold.co/1920x1080/d5d5d5/888888?text=MoMA+Identity+2"
          ],
          year: "2022",
          client: "Museum of Modern Art",
          description: "Redefining the visual language for one of the world's most influential museums. The identity system is flexible, allowing the art to take center stage while maintaining a strong institutional voice."
        },
        { 
          id: 3, 
          title: "Herman Miller", 
          category: "Events & Exhibition", 
          imageUrl: "https://placehold.co/800x1000/f5f5f5/cccccc?text=Herman+Miller",
          images: [
             "https://placehold.co/1920x1080/f5f5f5/aaaaaa?text=Campaign+Still+1",
             "https://placehold.co/1920x1080/fafafa/bbbbbb?text=Campaign+Still+2"
          ],
          year: "2023",
          client: "Herman Miller",
          description: "A campaign focused on the ergonomics of modern living. We directed a series of films and still photography sets that highlight the seamless integration of furniture into daily life."
        },
        { 
          id: 4, 
          title: "Type Foundry", 
          category: "Corporate Communication",
          imageUrl: "https://placehold.co/800x1000/eeeeee/aaaaaa?text=Type+Foundry",
          images: [
             "https://placehold.co/1920x1080/eeeeee/888888?text=Type+Detail+1",
          ],
          year: "2021",
          client: "Monotype",
          description: "A comprehensive branding exercise for a new boutique type foundry. We created a visual system that celebrates the nuances of typography."
        }
      ]
    },
    services: {
      title: "Our Services",
      items: [
        {
          id: "01",
          title: "Events & Exhibition",
          description: "Creating a unified visual narrative for high-stakes events. From the main stage KV to environmental details, ensuring a seamless brand experience.",
          items: ["Summit Key Visuals", "Stage & Booth Design", "Environmental Graphics", "Event Collaterals"]
        },
        {
          id: "02",
          title: "Corporate Communication",
          description: "Transforming complex data into clear, professional layouts. Enhancing readability and trust for investor relations and publications.",
          items: ["Annual & ESG Reports", "White Papers", "Company Profiles", "Data Visualization"]
        },
        {
          id: "03",
          title: "Social Campaigns",
          description: "High-impact visuals designed to capture attention. Delivering consistent creative assets across digital, social, and print channels.",
          items: ["Campaign Identity", "Social Media Assets", "H5 & Long Page", "Digital Ads"]
        },
        {
          id: "04",
          title: "Brand Identity",
          description: "Constructing comprehensive design systems. Ensuring visual consistency and differentiation across all brand touchpoints.",
          items: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Rebranding"]
        }
      ]
    },
    contact: {
      title: "Let's Talk",
      emailLabel: "Email Us",
      email: "hello@bigpineapple.studio",
      addressLabel: "Visit Us",
      address: [
        "123 Creative Avenue",
        "Design District, NY 10012",
        "United States"
      ]
    },
    footer: {
      copyright: "© 2024 Big Pineapple Creative Studio. All rights reserved.",
      emailLabel: "Get in touch",
      email: "hello@bigpineapple.studio"
    }
  },
  zh: {
    header: {
      logo: "大菠萝创意设计工作室",
      nav: {
        work: "作品",
        services: "服务",
        contact: "联系",
      },
      toggleEn: "EN",
      toggleZh: "中文",
    },
    hero: {
      title: "Big Pineapple",
      subtitle: "创意工作室",
      description: "Big Pineapple 创意工作室是一家多学科的实践机构。我们将策略与美学融合，创造持久的印象。",
      allLabel: "全部",
    },
    works: {
      viewProject: "查看项目",
      backLabel: "返回作品列表",
      projects: [
        { 
          id: 1, 
          title: "Aesop Skin Care", 
          category: "品牌营销", 
          imageUrl: "https://placehold.co/800x1000/eeeeee/cccccc?text=Aesop",
          images: [
            "https://placehold.co/1920x1080/eeeeee/999999?text=Aesop+Detail+1",
            "https://placehold.co/1920x1080/e5e5e5/888888?text=Aesop+Detail+2",
            "https://placehold.co/1920x1080/dddddd/777777?text=Aesop+Detail+3"
          ],
          year: "2023",
          client: "Aesop International",
          description: "彻底改造数字店面，专注于通过屏幕传达感官体验。我们利用极简布局和丰富纹理来传达产品的触感。"
        },
        { 
          id: 2, 
          title: "MoMA Identity", 
          category: "品牌识别", 
          imageUrl: "https://placehold.co/800x1000/e5e5e5/bbbbbb?text=MoMA",
          images: [
            "https://placehold.co/1920x1080/e5e5e5/999999?text=MoMA+Identity+1",
            "https://placehold.co/1920x1080/d5d5d5/888888?text=MoMA+Identity+2"
          ],
          year: "2022",
          client: "Museum of Modern Art",
          description: "重新定义世界上最具影响力的博物馆之一的视觉语言。身份系统灵活，允许艺术占据中心舞台，同时保持强大的机构声音。"
        },
        { 
          id: 3, 
          title: "Herman Miller", 
          category: "活动与会展", 
          imageUrl: "https://placehold.co/800x1000/f5f5f5/cccccc?text=Herman+Miller",
          images: [
             "https://placehold.co/1920x1080/f5f5f5/aaaaaa?text=Campaign+Still+1",
             "https://placehold.co/1920x1080/fafafa/bbbbbb?text=Campaign+Still+2"
          ],
          year: "2023",
          client: "Herman Miller",
          description: "专注于现代生活人体工程学的活动。我们指导了一系列电影和静态摄影集，突出了家具与日常生活的无缝融合。"
        },
        { 
          id: 4, 
          title: "Type Foundry", 
          category: "企业传播",
          imageUrl: "https://placehold.co/800x1000/eeeeee/aaaaaa?text=Type+Foundry",
          images: [
             "https://placehold.co/1920x1080/eeeeee/888888?text=Type+Detail+1",
          ],
          year: "2021",
          client: "Monotype",
          description: "为一家新的精品字体铸造厂进行的全面品牌塑造活动。我们创建了一个庆祝排版细微差别的视觉系统。"
        }
      ]
    },
    services: {
      title: "我们的服务",
      items: [
        {
          id: "01",
          title: "活动与会展",
          description: "为大型峰会与活动打造统一的视觉叙事。从主舞台视觉到现场每一处环境导视，确保沉浸式的品牌体验。",
          items: ["峰会主视觉 (KV)", "舞台与展位设计", "环境导视图形", "活动物料延展"]
        },
        {
          id: "02",
          title: "企业传播",
          description: "将繁杂的数据与信息转化为清晰、专业的视觉排版。提升年报、白皮书及企业内刊的可读性与信赖感。",
          items: ["年报与ESG报告", "行业白皮书", "企业简介画册", "数据可视化 (Infographics)"]
        },
        {
          id: "03",
          title: "品牌营销",
          description: "极具冲击力的视觉创意，旨在抓取注意力。为营销战役提供跨媒介（数字、社媒、印刷）的成套视觉资产。",
          items: ["营销活动主视觉", "社媒传播素材", "H5与长图设计", "数字广告投放图"]
        },
        {
          id: "04",
          title: "品牌识别",
          description: "构建系统化的品牌视觉资产。制定详尽的视觉规范，确保品牌在所有触点上的统一性与差异化。",
          items: ["标志设计", "VI 视觉识别系统", "品牌规范手册", "品牌形象升级"]
        }
      ]
    },
    contact: {
      title: "联系我们",
      emailLabel: "电子邮件",
      email: "hello@bigpineapple.studio",
      addressLabel: "地址",
      address: [
        "123 创意大道",
        "设计区, NY 10012",
        "美国"
      ]
    },
    footer: {
      copyright: "© 2024 Big Pineapple Creative Studio. 保留所有权利。",
      emailLabel: "保持联系",
      email: "hello@bigpineapple.studio"
    }
  }
};
