function Progress ({competence, pourcentage, color}) {
    return (
        <div>
        <span className="text-base font-medium">{competence} {pourcentage}</span>
        <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans bg-gray-200 mb-5">
            <div className="flex h-full items-center justify-center overflow-hidden break-all text-white" style={{width: pourcentage, backgroundColor: color}}></div>
        </div>
        </div>
    )
}



export default Progress