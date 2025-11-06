function Spinner() {
    return (
        <div className="min-h-screen w-screen bg-[#f1e4de] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#043451]"></div>
            </div>
        </div>
    );
}

export default Spinner;