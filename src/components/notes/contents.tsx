import { Typography } from 'antd';
import "./contents.css"
import StickyNotes from "./stickyNotes.tsx";
const { Title } = Typography;

const Contents = () => {
    return (
        <>
            <div className="title-container">
                <Title>Sticky Notes</Title>
            </div>
            <div>
                <StickyNotes/>
            </div>
        </>
    )
}
export default Contents