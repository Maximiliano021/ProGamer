export const Loading = () => {
    return(
        <div className="animate-pulse flex-col w-40 content-center items-center">
            <div className="rounded-lg bg-slate-200 h-14 w-14 border mx-auto mb-2"></div>
                <div className="space-y-6 w-14 items-center mx-auto">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                    </div>
                </div>
        </div>
    )
}
