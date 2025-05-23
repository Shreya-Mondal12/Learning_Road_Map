
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export function RoadmapCard({ roadmap, onClick, viewMode }) {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  if (viewMode === 'list') {
    return (
      <Card 
        className="roadmap-card cursor-pointer w-full mb-4 border border-gray-200"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row items-start p-4">
          <div 
            className="w-full md:w-48 h-32 rounded-md bg-cover bg-center mb-4 md:mb-0 md:mr-5 flex-shrink-0" 
            style={{ backgroundImage: `url(${roadmap.image})` }}
          />
          <div className="flex-grow">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold">{roadmap.title}</h3>
              <Badge className={getDifficultyColor(roadmap.difficulty)}>
                {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
              </Badge>
            </div>
            <Badge variant="outline" className="mb-2">{roadmap.category}</Badge>
            <p className="text-muted-foreground mb-3">{roadmap.description}</p>
            <div className="flex items-center gap-3">
              <Progress 
                value={roadmap.progress || 0} 
                className="h-2 flex-grow" 
              />
              <span className="text-sm font-medium">{roadmap.progress || 0}%</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="roadmap-card cursor-pointer h-full border border-gray-200" 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-full h-40 rounded-t-md bg-cover bg-center" 
        style={{ backgroundImage: `url(${roadmap.image})` }}
      />
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle>{roadmap.title}</CardTitle>
          <Badge className={getDifficultyColor(roadmap.difficulty)}>
            {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
          </Badge>
        </div>
        <Badge variant="outline" className="mt-1">{roadmap.category}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{roadmap.description}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center gap-3">
          <Progress 
            value={roadmap.progress || 0} 
            className="h-2 flex-grow" 
          />
          <span className="text-sm font-medium">{roadmap.progress || 0}%</span>
        </div>
      </CardFooter>
    </Card>
  );
}