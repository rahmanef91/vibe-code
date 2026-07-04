import { Detail } from "@/features/courses/ui/Detail";

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  return <Detail courseId={courseId as any} />;
}
