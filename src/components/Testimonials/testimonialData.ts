interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer Intern",
    comment: "NexGen made the job search process so much easier. I found my dream internship in just a few clicks!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Data Science Graduate",
    comment: "The personalized feedback helped me improve my profile and land interviews at top tech companies.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Design Student",
    comment: "Thanks to NexGen's matching system, I connected with companies that perfectly aligned with my career goals.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 4,
    name: "Michael Park",
    role: "Recent Graduate",
    comment: "The platform's approach to job searching is revolutionary. It's like having a career advisor in your pocket!",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
  }
];