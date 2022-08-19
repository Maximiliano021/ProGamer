import Card from "../Card";

const Premier = () => {
    return (
        <div className="my-10 lg:block">
            {/* CATEGORIA */}
            <header className="text-start px-4">
                <p className="text-lg">Premieres en casa y más</p>
                <span className="text-xs">Del cine a tu hogar</span>
            </header>
            <div className="mt-4 w-6/6 -mb-3">
                <div className="not-prose relative bg-slate-50 overflow-hidden dark:bg-slate-800/25">
                    <div className="relative overflow-auto">
                        <div className="relative w-full flex py-2 snap-x snap-mandatory overflow-x-auto">
                            <Card src="https://play-lh.googleusercontent.com/uiLLzSsUG5NlW8h0LKi3mWc4MJbrHWkBrC0BMppdC_zsdgntK73Edtdtgoi8-8Db7RN23eN8vxhEuocZ5YPD=s512-rw" />
                            <Card src="https://play-lh.googleusercontent.com/obFA-kwnDykZw25KsokcqA9gMr5_9DAtaedH09H1BFUu4GWez8TMA8JMTwJCR7mVYPWhJPl5Mw0_1ievWtZ4=s256" />
                            <Card src="https://play-lh.googleusercontent.com/8n1FjKr-MutCHPlrsIPboTAJYefceHZUsI9fhD9fN6wa8kSGFXdrwx_0JpJ8N1i1-qsmpW1C--7u5VHW5T9T=s256" />
                            <Card src="https://play-lh.googleusercontent.com/TcSZz0mjvaAVqQDZXACMCb_JUNXPvDVhrh-THmwNJg-6Li6itvRgG-a-2zeclGf11mqS2bWSlALZMIoT_QdN=s256" />
                            <Card src="https://play-lh.googleusercontent.com/tXbSK07h5alG6QWArO9hbAvDgHYvNGZneMshFrCa0BvG_fANHGp7I5yfz9IR-nzHXNmGNAsRXmn98DWS5rmR=s256" />
                            <Card src="https://play-lh.googleusercontent.com/8DEN-yYUEmAPSNxrf6R8UTYc7vwRTNMiEgE0Mo0p4w1ELwunjlInu-GtOD9SsjG12HfL_cfMyMdet2ewAC0=s256" />
                            <Card src="https://play-lh.googleusercontent.com/uiLLzSsUG5NlW8h0LKi3mWc4MJbrHWkBrC0BMppdC_zsdgntK73Edtdtgoi8-8Db7RN23eN8vxhEuocZ5YPD=s512-rw" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Premier;