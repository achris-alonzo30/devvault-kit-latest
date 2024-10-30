export const ChipBanner = ({ text } : { text: string }) => {
    return (
        <div className="group relative w-fit flex items-center z-10 py-0.5 px-4 rounded-full bg-[#fcba28]/10">
            <span className="text-xs font-black tracking-wider leading-6 text-[#fcba28] uppercase">
                {text}
            </span>
        </div>
    )
}