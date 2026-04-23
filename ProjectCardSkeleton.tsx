import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col backdrop-blur-md bg-card/80 border-primary/10">
      <Skeleton className="aspect-video w-full" />
      <div className="p-6 flex-1 flex flex-col space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex gap-2 mt-auto">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </Card>
  );
}
