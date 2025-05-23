
import { Badge } from '@/components/ui/badge';
import { useTheme } from './ThemeProvider';

export function ResourceBadge({ type }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  switch (type) {
    case 'video':
      return (
        <Badge className={`${isDark ? 'bg-red-900/30 hover:bg-red-900/50 text-red-300' : 'bg-red-100 hover:bg-red-200 text-red-800'}`}>
          Video
        </Badge>
      );
    case 'article':
      return (
        <Badge className={`${isDark ? 'bg-blue-900/30 hover:bg-blue-900/50 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}>
          Article
        </Badge>
      );
    case 'course':
      return (
        <Badge className={`${isDark ? 'bg-green-900/30 hover:bg-green-900/50 text-green-300' : 'bg-green-100 hover:bg-green-200 text-green-800'}`}>
          Course
        </Badge>
      );
    case 'book':
      return (
        <Badge className={`${isDark ? 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-300' : 'bg-purple-100 hover:bg-purple-200 text-purple-800'}`}>
          Book
        </Badge>
      );
    default:
      return <Badge>Unknown</Badge>;
  }
}