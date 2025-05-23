
import { Button } from '@/components/ui/button';
import { ResourceBadge } from './ResourceBadge';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

export function RoadmapDetail({ roadmap, onBack }) {
  const { milestones = [] } = roadmap;
  const completedMilestones = milestones.filter(milestone => milestone.completed).length;
  const progress = milestones.length > 0 
    ? Math.round((completedMilestones / milestones.length) * 100) 
    : 0;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container p-4 md:p-8 lg:p-12">
        <Button variant="outline" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Roadmaps
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold">{roadmap.title}</h1>
              <Badge className={getDifficultyColor(roadmap.difficulty)}>
                {roadmap.difficulty.charAt(0).toUpperCase() + roadmap.difficulty.slice(1)}
              </Badge>
            </div>
            
            <Badge variant="outline" className="mb-4">{roadmap.category}</Badge>
            <p className="text-muted-foreground mb-6">{roadmap.description}</p>
            
            <div className="pl-1.5 mb-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">Progress</h3>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
            {milestones.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {milestones.map((milestone) => (
                  <AccordionItem key={milestone.id} value={`milestone-${milestone.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {milestone.id}
                        </div>
                        <span>{milestone.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-9">
                        <p className="text-muted-foreground mb-4">{milestone.description}</p>
                        
                        {milestone.resources && milestone.resources.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-2">Resources</h4>
                            <div className="space-y-2">
                              {milestone.resources.map((resource, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-muted/40 p-3 rounded-lg">
                                  <a href={resource.url} className="text-sm hover:underline">{resource.title}</a>
                                  <ResourceBadge type={resource.type} />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">No milestones defined for this roadmap yet.</p>
              </Card>
            )}
          </div>
          
          <div className="md:col-span-1">
            <div 
              className="w-full h-60 rounded-lg bg-cover bg-center mb-4" 
              style={{ backgroundImage: `url(${roadmap.image})` }}
            />
            
            <Card className="p-4">
              <h3 className="font-medium mb-2">Roadmap Stats</h3>
              <Separator className="my-2" />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Milestones</span>
                  <span>{milestones.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed</span>
                  <span>{completedMilestones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completion</span>
                  <span>{progress}%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}