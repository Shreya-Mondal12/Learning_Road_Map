
import { useState } from 'react';
import { roadmaps } from '@/data/roadmaps';
import { RoadmapCard } from '@/components/RoadmapCard';
import { RoadmapDetail } from '@/components/RoadmapDetail';
import { FilterBar } from '@/components/FilterBar';
import { Header } from '@/components/Header';

const Index = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    if (selectedCategory && roadmap.category !== selectedCategory) {
      return false;
    }
    if (selectedDifficulty && roadmap.difficulty !== selectedDifficulty) {
      return false;
    }
    return true;
  });

  if (selectedRoadmap) {
    return <RoadmapDetail roadmap={selectedRoadmap} onBack={() => setSelectedRoadmap(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header setViewMode={setViewMode} viewMode={viewMode} />
      
      <main>
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        
        <div className="container pl-12 pb-16">
          {filteredRoadmaps.length > 0 ? (
            <div className={`
              ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
            `}>
              {filteredRoadmaps.map(roadmap => (
                <RoadmapCard
                  key={roadmap.id}
                  roadmap={roadmap}
                  onClick={() => setSelectedRoadmap(roadmap)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <h3 className="text-xl font-semibold mb-2">No roadmaps found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find roadmaps.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;