import "./stickyNotes.css"
import {Button, DatePicker, type DatePickerProps, TimePicker} from "antd";
import dayjs from "dayjs"
import {useEffect, useRef, useState} from "react";

const StickyNotes = () => {
    const editorRef = useRef(null);
    const [isBold, setIsBold] = useState(false);
    useEffect(() => {
        // Dùng CSS thay vì <b> nếu muốn: bật styleWithCSS (hỗ trợ rộng rãi)
        try {
            document.execCommand("styleWithCSS", false, true);
        } catch {}
    }, []);
    const updateBoldState = () => {
        // Kiểm tra trạng thái bold hiện tại của selection/caret
        const state = document.queryCommandState("bold");
        setIsBold(!!state);
    };

    const handleBoldClick = () => {
        // Nếu có bôi đen -> toggle bold vùng chọn
        // Nếu không -> bật/tắt chế độ gõ chữ đậm cho phần tiếp theo
        document.execCommand("bold", false, null);
        updateBoldState();
        // Đưa focus lại vào editor để gõ tiếp
        editorRef.current?.focus();
    };
    return (

        <>
            {/* Wrapper */}
            <div className="note-page">
                <div className="sticky-note" role="group" aria-label="Sticky note">
                    {/* Header: notes */}
                    <div className="sn-controls" aria-label="Note controls">
                        <button className="sn-date" aria-label="New note">
                            <DatePicker
                                defaultValue={dayjs()}
                                // onChange={onChange}
                                needConfirm
                                format="DD-MM-YYYY"
                                allowClear={false}
                                variant={"borderless"}
                            />
                        </button>
                            <TimePicker
                                variant={"borderless"}
                            >

                            </TimePicker>
                        <button className="sn-settings" aria-label="More">=</button>
                    </div>

                    {/* Middle: textarea */}
                    <div>
                        <div className="sn-title">
                            <input
                                className="sn-textarea"
                                placeholder="Title"
                                spellCheck={false}
                            />
                            <textarea
                                className="sn-textarea"
                                placeholder="Take a note..."
                                spellCheck={false}

                            />
                        </div>
                    </div>


                    {/* Footer: tools */}
                    <div className="sn-footer">
                        <button
                            className="sn-tool ${sn-bold ? isActive : ''}"
                            aria-label="Bold"
                            onClick={handleBoldClick}
                            type={"button"}
                        >B</button>
                        <button className="sn-tool sn-italic" aria-label="Italic">/</button>
                        <button className="sn-tool sn-underline" aria-label="Underline">U</button>
                        <button className="sn-tool sn-strike" aria-label="Strikethrough"><span>ab</span></button>
                        <button className="sn-tool sn-list" aria-label="Bulleted list">≡</button>
                        <button className="sn-tool sn-image" aria-label="Insert image">🖼️</button>
                        <div>
                            <Button
                                className = "sn-tool sn-save"
                                type={"text"}
                            >
                                Save
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StickyNotes
