export const Button = ({ children }) => {
    return (
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <div className="absolute border rounded-lg border-white/40 inset-0 [mask-image:liner-gradient(to_top,black,transparent)]">
                        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)]_inset rounded-lg"></div>
                    </div>
                </div>
            </div>
            <span>{ children }</span>
        </button>
    )
}