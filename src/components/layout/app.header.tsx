import  { useState } from "react";
import {Badge, Popover, Button, Input, Avatar,} from "antd";
import {SearchOutlined, BellOutlined, MenuOutlined, SettingOutlined, UserOutlined,} from "@ant-design/icons";
import "./app.header.css";

const AppHeader = () => {
    const [q, setQ] = useState("");

    const onSearch = () => {
        const query = q.trim();
        if (!query) return;
    };

    return (
        <>
            <div className="header-container">
                <header className="page-header">
                    <div className="page-header__top">
                        <Button
                            className="btn-icon mobile-only"
                            type="default"
                            aria-label="Mở menu"
                            icon={<MenuOutlined />}

                        />

                        <div className="page-header__logo">
              <span className="logo" aria-label="Logo">

              </span>
                            <div className="search">
                                <Input
                                    className="input-search"
                                    allowClear
                                    placeholder="What're you looking for?"
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    onPressEnter={onSearch}
                                />
                                <Button
                                    className="btn-search"
                                    type="primary"
                                    icon={<SearchOutlined />}
                                    onClick={onSearch}
                                >
                                    <span className="label-full">Search</span>
                                </Button>
                            </div>
                        </div>

                        <div className="page-header__actions">

                            <Popover content={<span>Notifications</span>} placement="bottomRight">
                                <Badge count={3} size="small" className="badge-wrap">
                                    <Button className="btn-icon" type="default" icon={<BellOutlined />} />
                                </Badge>
                            </Popover>
                            <Avatar size={28} icon={<UserOutlined />} />

                            <Button className="btn-icon" type="default" icon={<SettingOutlined />} />
                        </div>
                    </div>
                </header>
            </div>


        </>
    );
};

export default AppHeader;
