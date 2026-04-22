import { Card, CardContent } from "@/components/ui/card";
import { LoaderIcon } from "lucide-react";

export const ManualLoader = () => {
  return (
    <div className="p-5">
      <Card className="w-full">
        <CardContent
        className="flex justify-center items-center h-[85vh]">
          <LoaderIcon
            role="status"
            aria-label="Loading"
            className="size-60 animate-spin text-[#566AD3]"/>
        </CardContent>
      </Card>
    </div>
  )
}
