import { useState, useRef } from "react"

export default function StickyNote({ onClose }) {
    const [allowMove, setAllowMove] = useState(false);
    const stickyNoteRef = useRef();

    const [dx, setDx] = useState(0)
    const [dy, setDy] = useState(0)

    function handleMouseDown(e) {
        setAllowMove(true)
        const dimensions = stickyNoteRef.current.getBoundingClientRect()
        console.log(dimensions)
        setDx(e.clientX - dimensions.x)
        setDy(e.clientY - dimensions.y)
    }

    function handleMouseMove(e) {
        if (allowMove) {
            console.log("allow move", e.clientX, dx, e.clientY, dy);
            const x = e.clientX - dx
            const y = e.clientY - dy
            console.log("inside mouse move")
            stickyNoteRef.current.style.left = x + "px"
            stickyNoteRef.current.style.top = y + "px"
        }
    }

    function handleMouseUp() {
        setAllowMove(false)
    }

    return (
        <div className="sticky-note" ref={stickyNoteRef}>
            <div
                className="sticky-note-header"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <div>Sticky Note</div>
                <div className="exit" onClick={onClose}>
                    &times;
                </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}