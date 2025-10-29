import "./stickyNotes.css"

const StickyNotes = () => {
    return (
        <>
            {/* Wrapper */}
            <div className="note-page">
                <div className="sticky-note" role="group" aria-label="Sticky note">
                    {/* Header: notes */}
                    <div className="sn-controls" aria-label="Note controls">
                        <button className="sn-add" aria-label="New note">+</button>
                        <button className="sn-settings" aria-label="More">⋯</button>
                        <button className="sn-off" aria-label="Close">✕</button>
                    </div>

                    {/* Vùng giữa: textarea */}
                    <textarea
                        className="sn-textarea"
                        placeholder="Take a note..."
                        spellCheck={false}
                    />

                    {/* Footer: tools */}
                    <div className="sn-footer">
                        <button className="sn-tool sn-bold" aria-label="Bold">B</button>
                        <button className="sn-tool sn-italic" aria-label="Italic">/</button>
                        <button className="sn-tool sn-underline" aria-label="Underline">U</button>
                        <button className="sn-tool sn-strike" aria-label="Strikethrough"><span>ab</span></button>
                        <button className="sn-tool sn-list" aria-label="Bulleted list">≡</button>
                        <button className="sn-tool sn-image" aria-label="Insert image">🖼️</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StickyNotes
