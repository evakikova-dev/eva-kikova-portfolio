import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Skeleton className="h-10 w-40 mb-8" />

        <Skeleton className="aspect-video w-full rounded-2xl mb-12" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-32" />
            </Card>
            <Card className="p-6 space-y-3">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-28" />
            </Card>
            <Card className="p-6 space-y-3">
              <Skeleton className="h-4 w-24" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-18" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
