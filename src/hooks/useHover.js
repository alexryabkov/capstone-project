import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const curr = ref.current
        curr.addEventListener("mouseenter", enter)
        curr.addEventListener("mouseleave", leave)

        return () => {
            curr.removeEventListener("mouseenter", enter)
            curr.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
}

export default useHover
