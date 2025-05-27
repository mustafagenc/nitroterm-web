export const NitrokitText = () => {
    return (
        <svg
            width="464"
            height="100"
            viewBox="0 0 464 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="nitroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#a855f7' }} />
                    <stop offset="50%" style={{ stopColor: '#f472b6' }} />
                    <stop offset="100%" style={{ stopColor: '#22d3ee' }} />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <style>
                {`
                    .nitro-text {
                      font-family: 'Courier New', monospace;
                      font-size: 10px;
                      font-weight: bold;
                      fill: url(#nitroGradient);
                      filter: url(#glow);
                      text-align:center;
                    }
                    
                    .cursor {
                      font-family: 'Courier New', monospace;
                      font-size: 12px;
                      font-weight: bold;
                      fill: url(#nitroGradient);
                      filter: url(#glow);
                    }
                    
                    @media (prefers-reduced-motion: no-preference) {
                      .cursor {
                        animation: blink 1s step-end infinite;
                      }
                    }
                    
                    @keyframes blink {
                      0%, 50% { opacity: 1; }
                      51%, 100% { opacity: 0; }
                    }
                `}
            </style>

            {/* NITROKIT ASCII Art - R, O, K sola yaklaştırıldı */}
            <g className="nitro-text">
                {/* N harfi */}
                <text x="10" y="25">███╗&nbsp;&nbsp;&nbsp;██╗</text>
                <text x="10" y="37">████╗&nbsp;&nbsp;██║</text>
                <text x="10" y="49">██╔██╗&nbsp;██║</text>
                <text x="10" y="61">██║╚██╗██║</text>
                <text x="10" y="73">██║&nbsp;╚████║</text>
                <text x="10" y="85">╚═╝&nbsp;&nbsp;╚═══╝</text>

                {/* I harfi */}
                <text x="85" y="25">██╗</text>
                <text x="85" y="37">██║</text>
                <text x="85" y="49">██║</text>
                <text x="85" y="61">██║</text>
                <text x="85" y="73">██║</text>
                <text x="85" y="85">╚═╝</text>

                {/* T harfi */}
                <text x="110" y="25">████████╗</text>
                <text x="110" y="37">╚══██╔══╝</text>
                <text x="110" y="49">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="110" y="61">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="110" y="73">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="110" y="85">&nbsp;&nbsp;&nbsp;╚═╝</text>

                {/* R harfi - T'den biraz uzaklaştırıldı */}
                <text x="175" y="25">██████╗</text>
                <text x="175" y="37">██╔══██╗</text>
                <text x="175" y="49">██████╔╝</text>
                <text x="175" y="61">██╔══██╗</text>
                <text x="175" y="73">██║&nbsp;&nbsp;██║</text>
                <text x="175" y="85">╚═╝&nbsp;&nbsp;╚═╝</text>

                {/* O harfi */}
                <text x="240" y="25">&nbsp;██████╗</text>
                <text x="240" y="37">██╔═══██╗</text>
                <text x="240" y="49">██║&nbsp;&nbsp;&nbsp;██║</text>
                <text x="240" y="61">██║&nbsp;&nbsp;&nbsp;██║</text>
                <text x="240" y="73">╚██████╔╝</text>
                <text x="240" y="85">&nbsp;╚═════╝</text>

                {/* K harfi */}
                <text x="310" y="25">██║&nbsp;&nbsp;██╗</text>
                <text x="310" y="37">██║&nbsp;██╔╝</text>
                <text x="310" y="49">█████╔╝</text>
                <text x="310" y="61">██╔═██╗</text>
                <text x="310" y="73">██║&nbsp;&nbsp;██╗</text>
                <text x="310" y="85">╚═╝&nbsp;&nbsp;╚═╝</text>

                {/* I harfi */}
                <text x="380" y="25">██╗</text>
                <text x="380" y="37">██║</text>
                <text x="380" y="49">██║</text>
                <text x="380" y="61">██║</text>
                <text x="380" y="73">██║</text>
                <text x="380" y="85">╚═╝</text>

                {/* T harfi */}
                <text x="405" y="25">████████╗</text>
                <text x="405" y="37">╚══██╔══╝</text>
                <text x="405" y="49">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="405" y="61">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="405" y="73">&nbsp;&nbsp;&nbsp;██║</text>
                <text x="405" y="85">&nbsp;&nbsp;&nbsp;╚═╝</text>
            </g>

            {/* Terminal Cursor */}
            <g className="cursor">
                <text x="450" y="80">█</text>
            </g>
        </svg>
    )
}