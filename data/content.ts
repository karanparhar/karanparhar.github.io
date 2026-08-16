export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  role: string;
  company: string;
  description: string;
  highlights: { label: string; value: string }[];
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  university: string;
  degree: string;
  field: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'IBM Labs',
    period: 'December 2024 - Present',
    bullets: [
      'Design and implement control plane components using Golang and Python for AI infrastructure and cloud-native systems.',
      'Develop Kubernetes Custom Resource Definitions (CRDs) and operators using Kubebuilder for automated resource management.',
      'Build highly available microservices with gRPC and REST APIs spanning multiple regions.',
      'Manage IBM Cloud Bare Metal Servers at scale, implementing monitoring systems using IPMI/BMC interfaces.',
      'Implement telemetry collection using eBPF and define SLA/SLO metrics for system reliability.',
      'Establish CI/CD pipelines and release management best practices for production deployments.',
      'Collaborate with cross-functional teams ensuring GPU/CUDA compatibility for AI workloads.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'CAST Software',
    period: 'November 2019 - December 2024',
    bullets: [
      'Designed a Role-Based Access Control (RBAC) system, reducing authorization-related issues ensuring seamless integration with multiple platforms.',
      'Designed and implemented a scalable ETL queue system, improving data processing speed.',
      'Optimized Neo4j query performance, cutting down execution time which enhanced system responsiveness.',
      'Mentored a team of 6 backend developers, improving overall code quality and boosting team productivity through continuous learning and technical guidance.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Kloud9 Technologies',
    period: 'March 2018 - October 2019',
    bullets: [
      'Developed a Kubernetes Custom Resource Definition (CRD) to automate resource management, improving scalability and reducing manual intervention in deployments.',
      'Created a custom CI/CD tool tailored for multi-cloud environments (GCP, AWS, OpenShift, Kubernetes), enhancing deployment success rates across 20+ projects.',
      'Designed a template engine for dynamically generating deployment pipelines, enabling teams to create custom workflows across various cloud platforms.',
      'Designed and implemented an approval system that automated deployment propagation from development to QA, and QA to production.',
      'Standardized Kubernetes deployments on AWS, GKE, and AKS, reducing manual effort and accelerating release cycles.',
    ],
  },
  {
    title: 'Production System & Network Engineer',
    company: 'Flipkart Pvt Ltd',
    period: 'November 2015 - March 2018',
    bullets: [
      'Developed a hardware health monitoring system using Golang, Beego, Gorilla Mux, and Redis for real-time server monitoring via IPMI.',
      'Created and consumed REST APIs using Golang for the monitoring system, integrating with hardware to track server metrics.',
      'Built a live capacity planner to monitor resource availability across VMs, utilizing Golang, MySQL, and Beego.',
      'Managed over 21,000 Linux servers in multiple data centers, implementing monitoring tools like Nagios and Splunk.',
      'Automated system administration tasks and monitoring scripts using shell scripting.',
      'Provided production support and handled user administration, key-based access, and virtualization through KVM.',
    ],
  },
  {
    title: 'System Engineer',
    company: 'Brocade Communications',
    period: 'April 2015 - November 2015',
    bullets: [
      'Developed Python and Shell scripts to automate Linux system monitoring, leading to 30% faster issue detection.',
      'Handled hardware issues for 600+ servers from HP, IBM, and Dell, coordinating with vendors for resolution.',
      'Built and configured servers from scratch, including managing Linux KVM servers.',
      'Managed file systems, resolved file system issues, and resized using LVM; applied kernel patches.',
      'Centralized server log management using Splunk, created dashboards and log analysis reports.',
    ],
  },
  {
    title: 'System Engineer',
    company: 'Suksh Technology Pvt Ltd, Bengaluru',
    period: 'January 2013 - April 2015',
    bullets: [
      'Automated hardware provisioning and system configuration tasks using Python and Shell, reducing setup times by 35%.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'CAST Imaging',
    role: 'Enterprise Software Analysis Platform',
    company: 'CAST Software',
    description: 'Led the development of an enterprise-grade software analysis platform that reverse-engineers complex software systems to create interactive architecture blueprints.',
    highlights: [
      { label: 'RBAC System', value: 'Reducing authorization issues by 40%' },
      { label: 'ETL Pipeline', value: 'Improving data processing speed by 60%' },
      { label: 'Database Optimization', value: 'Reducing execution time by 70%' },
      { label: 'Team Leadership', value: 'Mentored 6 developers, improved productivity' },
    ],
    tech: ['Golang', 'Neo4j', 'PostgreSQL', 'Microservices', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Multi-Cloud Continuous Delivery',
    role: 'Platform Engineering',
    company: 'Kloud9 Technologies',
    description: 'Architected and developed a comprehensive CI/CD platform supporting multiple cloud providers with automated deployment pipelines.',
    highlights: [
      { label: 'Multi-Cloud', value: 'AWS EC2, GKE, Azure AKS, OpenShift' },
      { label: 'Kubernetes CRD', value: 'Automated resource management' },
      { label: 'Template Engine', value: 'Dynamic pipeline generation' },
      { label: 'Approval System', value: 'Automated deployment propagation' },
      { label: 'Impact', value: '45% enhanced deployment success rate' },
    ],
    tech: ['Golang', 'Kubernetes', 'Docker', 'Jenkins', 'AWS', 'GCP', 'Azure'],
  },
  {
    title: 'Bare Metal Server Monitoring',
    role: 'Infrastructure Management',
    company: 'Flipkart',
    description: 'Developed a comprehensive hardware health monitoring system for 21,000+ servers across multiple data centers using IPMI protocol.',
    highlights: [
      { label: 'Real-time Monitoring', value: 'Temperature, voltage, fan speeds' },
      { label: 'REST API', value: 'Golang-based hardware metrics' },
      { label: 'Capacity Planning', value: 'Live dashboard with MySQL' },
      { label: 'Scale', value: '21,000+ servers, 99.9% uptime' },
    ],
    tech: ['Golang', 'Beego', 'Redis', 'MySQL', 'IPMI', 'Nagios', 'Splunk'],
  },
  {
    title: 'AI-Driven Infrastructure',
    role: 'Research & Development',
    company: 'Internal Project',
    description: 'Designed intelligent infrastructure management system using machine learning to predict and optimize resource allocation.',
    highlights: [
      { label: 'Predictive Analytics', value: 'Data patterns and demand trends' },
      { label: 'Auto-scaling', value: 'Automated resource deployment' },
      { label: 'Cost Optimization', value: 'Intelligent de-allocation, 30% reduction' },
      { label: 'Config Management', value: 'Automated infrastructure config' },
    ],
    tech: ['Python', 'Machine Learning', 'Kubernetes', 'Cloud APIs', 'Monitoring'],
  },
];

export const skills: Skill[] = [
  { name: 'Golang', level: 95, category: 'languages' },
  { name: 'Python', level: 85, category: 'languages' },
  { name: 'Shell Scripting (Bash)', level: 90, category: 'languages' },
  { name: 'Kubernetes', level: 92, category: 'devops' },
  { name: 'Docker', level: 90, category: 'devops' },
  { name: 'AWS / GCP / Azure', level: 85, category: 'devops' },
  { name: 'Neo4j (Graph DB)', level: 85, category: 'databases' },
  { name: 'PostgreSQL / MySQL', level: 88, category: 'databases' },
  { name: 'Redis', level: 82, category: 'databases' },
];

export const education: Education[] = [
  {
    university: 'Punjab Technical University',
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication Engineering',
    period: 'August 2008 - May 2012',
  },
];

export const portfolioData = {
  name: 'Karanjit',
  lastName: 'Singh',
  title: 'Principal Software Engineer',
  subtitle: 'Bengaluru · +91 9036765664 · karan.parhar90@gmail.com',
  photo: '/img/profile.jpeg',
  bio: 'Software Engineer with 12+ years of expertise in developing large-scale software systems using Golang and other technologies. Proven track record of leading high-performing teams, architecting scalable solutions, and delivering complex projects across multiple industries.',
  social: {
    linkedin: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/',
    github: 'https://github.com/karanparhar',
    twitter: 'https://twitter.com/karanjitparhar',
    facebook: 'https://facebook.com/karan.parhar.5',
   },
  socialLinks: [
    { key: 'linkedin', href: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/', label: 'LinkedIn', icon: 'Linkedin' },
    { key: 'github', href: 'https://github.com/karanparhar', label: 'GitHub', icon: 'Github' },
    { key: 'twitter', href: 'https://twitter.com/karanjitparhar', label: 'Twitter', icon: 'Twitter' },
    { key: 'facebook', href: 'https://facebook.com/karan.parhar.5', label: 'Facebook', icon: 'Facebook' },
    { key: 'email', href: 'mailto:karan.parhar90@gmail.com', label: 'Email', icon: 'Mail' },
   ],
  availableFor: ['Cloud Architecture', 'Backend Development', 'DevOps Engineering', 'Technical Leadership'],
};
