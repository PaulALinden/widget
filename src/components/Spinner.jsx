// Spinner.jsx — enkel laddningsindikator som visas medan config laddas eller under async-operationer
function Spinner() {
    return (
        <div className="fixed inset-0 bg-[#f1e4de]/40 backdrop-blur-[2px] flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#043451]"></div>
            </div>
        </div>
    );
}

export default Spinner;