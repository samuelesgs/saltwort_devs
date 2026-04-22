import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router"
import { useManual } from "./Hooks/useManual";
import { ManualLoader } from "./components/ManualLoader";
import type { ManualFile, ManualResponse } from "./Api/manual.interface";
//#566AD3

const getManualFiles = (data: ManualResponse | null): ManualFile[] => {
    return data?.manualFiles || [];
}

export const ManualPage = () => {

    const [api, setApi] = useState<CarouselApi>();
    const [searchParams] = useSearchParams();
    const [current, setCurrent] = useState<number>(0);

    const idManual = searchParams.get("id_manual");
    const { data: manualData, loading } = useManual(idManual);

    const manualFiles = getManualFiles(manualData);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        }

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        }
    }, [api]);

    if(loading) return <ManualLoader />

    return (
        <div className="flex flex-col w-full overflow-hidden p-3">
            <div className="w-full">
                <div
                    className="bg-[#566AD3] text-white rounded-xl p-2 m-4 h-full">
                    <p
                        key={current}
                        className="text-center text-xl">
                        { manualFiles[current].name }
                    </p>
                </div>
                <Carousel
                    className="relative pb-20"
                    setApi={setApi}>
                    <CarouselContent className="w-full">
                        {
                            manualFiles.map((row, index) => (
                                <CarouselItem
                                    className="flex w-full items-center pl-9"
                                    key={index}>
                                    <div
                                        className="flex flex-col gap-2 w-full">
                                        <img
                                            key={index}
                                            src={row.url}
                                            alt=""
                                            className="w-full rounded-sm border border-gray-500"
                                        />
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
                        <CarouselPrevious
                            className="static h-10 w-10 -translate-x-35 translate-y-0 bg-[#566AD3] text-white hover:text-white border border-transparent"
                        />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 mb-2">
                            {manualFiles.map((_, index) => (
                                <button
                                    key={index}
                                    className={`
                                        h-3 w-3 rounded-full transition-all
                                        duration-500
                                        ${index === current ? "w-8 bg-[#566AD3]"
                                            : "w-2 bg-gray hover:bg-muted-foreground"
                                        }`}
                                />
                            ))}
                        </div>
                        <CarouselNext
                            className="static h-10 w-10 translate-x-35 translate-y-0 bg-[#566AD3] text-white hover:text-white border border-transparent"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
