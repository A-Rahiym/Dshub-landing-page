'use client'

import {
  Code2,
  Brain,
  Database,
  Lightbulb,
  Shield,
  Palette,
  Megaphone,
  Clapperboard,
  BarChart3,
} from 'lucide-react'
import { RoleCard } from './role-card'

const roles = [
  {
    title: 'Frontend Development',
    description: 'Work with a team to build real websites and user interfaces while learning professional workflows.',
    icon: <Code2 size={24} />,
    variant: 'blue' as const,
    tools: [
      { icon: Code2, name: 'HTML5' },
      { icon: Palette, name: 'CSS3' },
      { icon: Code2, name: 'JavaScript' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Work with datasets to train models, test predictions, and build simple intelligent systems that solve real-world problems.',
    icon: <Brain size={24} />,
    variant: 'purple' as const,
    tools: [
      { icon: Code2, name: 'Python' },
      { icon: Brain, name: 'TensorFlow' },
      { icon: Database, name: 'Pandas' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Develop APIs, manage databases, and handle server-side logic that powers applications and connects systems together.',
    icon: <Database size={24} />,
    variant: 'orange' as const,
    tools: [
      { icon: Code2, name: 'Node.js' },
      { icon: Database, name: 'Express' },
      { icon: Database, name: 'MongoDB' },
    ],
  },
  {
    title: 'Product Management & Strategy',
    description: 'Plan product features, coordinate teams, and guide projects from idea to launch using structured workflows and roadmaps.',
    icon: <Lightbulb size={24} />,
    variant: 'yellow' as const,
    tools: [
      { icon: Lightbulb, name: 'Notion' },
      { icon: Lightbulb, name: 'Trello' },
      { icon: Palette, name: 'Figma' },
    ],
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Identify vulnerabilities, perform security testing, and implement protective measures for systems and networks.',
    icon: <Shield size={24} />,
    variant: 'red' as const,
    tools: [
      { icon: Shield, name: 'Kali Linux' },
      { icon: Shield, name: 'Wireshark' },
      { icon: Shield, name: 'Burp Suite' },
    ],
  },
  {
    title: 'Graphic & UI/UX Design',
    description: 'Create visual interfaces, prototypes, and improve user experience across digital products and platforms.',
    icon: <Palette size={24} />,
    variant: 'pink' as const,
    tools: [
      { icon: Palette, name: 'Figma' },
      { icon: Palette, name: 'Adobe XD' },
      { icon: Palette, name: 'Photoshop' },
    ],
  },
  {
    title: 'Content & Digital Marketing',
    description: 'Create online content, manage campaigns, and analyze engagement to grow digital presence.',
    icon: <Megaphone size={24} />,
    variant: 'green' as const,
    tools: [
      { icon: Megaphone, name: 'Canva' },
      { icon: BarChart3, name: 'Google Analytics' },
      { icon: Megaphone, name: 'Meta Ads' },
    ],
  },
  {
    title: 'Multimedia & Animation',
    description: 'Produce motion graphics, animations, and edited video content for digital platforms.',
    icon: <Clapperboard size={24} />,
    variant: 'indigo' as const,
    tools: [
      { icon: Clapperboard, name: 'After Effects' },
      { icon: Clapperboard, name: 'Premiere Pro' },
      { icon: Code2, name: 'Blender' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    description: 'Analyze datasets and create dashboards to extract insights for data-driven decision making.',
    icon: <BarChart3 size={24} />,
    variant: 'teal' as const,
    tools: [
      { icon: Code2, name: 'Python' },
      { icon: BarChart3, name: 'Excel' },
      { icon: BarChart3, name: 'Power BI' },
    ],
  },
]

export function RolesGrid() {
  return (
    <section id="internship" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-2 sm:mb-3 md:mb-4">
            Available Internship <span className="text-primary-light-blue">Roles</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted px-4">
            Train in one of nine beginner-friendly tracks
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              index={index}
              title={role.title}
              description={role.description}
              icon={role.icon}
              tools={role.tools}
              variant={role.variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
