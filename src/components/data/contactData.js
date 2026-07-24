import { HiEnvelope, HiChatBubbleLeftRight } from 'react-icons/hi2';
import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegramPlane } from 'react-icons/fa';

export const contactInfo = [
  {
    id: 'email',
    label: 'Email Me At',
    value: 'chowdhuryhridoy902@gmail.com',
    href: 'mailto:chowdhuryhridoy902@gmail.com',
    icon: HiEnvelope,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@hridoychy',
    href: 'https://t.me/hridoychy',
    icon: FaTelegramPlane,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Message',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/8801610964475',
    icon: HiChatBubbleLeftRight,
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hridoy-chowdhury-webdev',
    icon: FaLinkedinIn,
    hoverColor: 'hover:bg-blue-600 hover:text-white',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hridoy-web',
    icon: FaGithub,
    hoverColor: 'hover:bg-slate-900 hover:text-white',
  },
  {
    name: 'Discord',
    username: 'hridoyinfinity',
    href: 'https://discord.com/users/1470306401891909706',
    icon: FaDiscord,
    hoverColor: 'hover:bg-indigo-600 hover:text-white',
  },
];