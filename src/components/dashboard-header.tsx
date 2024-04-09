import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  Layout,
  MenuProps,
} from "antd";
import {
  SettingOutlined,
  BellOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Header } = Layout;

import { IoMdLogOut } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <h1>Notification 1</h1>,
  },
  {
    key: "2",
    label: <h1>Notification 2</h1>,
  },
  {
    key: "3",
    label: <h1>Notification 3</h1>,
  },
];

const messages: MenuProps["items"] = [
  {
    key: "1",
    label: <h1>Messages 1</h1>,
  },
  {
    key: "2",
    label: <h1>Messages 2</h1>,
  },
  {
    key: "3",
    label: <h1>Messages 3</h1>,
  },
];

const settings: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button
        className="flex items-center ring-0 border-none w-full"
        icon={<IoMdLogOut className="text-black" />}
      >
        Logout
      </Button>
    ),
  },
  {
    key: "2",
    label: (
      <Button
        className="flex items-center justify-center ring-0 border-none w-full"
        icon={<MdDelete className="text-black" />}
      >
        Delete Someting
      </Button>
    ),
  },
];

const profiles: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button
        className="flex items-center ring-0 border-none w-full"
        icon={<BiUser className="text-black" />}
      >
        Profile
      </Button>
    ),
  },
];

const DashboardHeader = () => {
  return (
    <Header
      style={{
        background: "#F9F9F9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Search
        placeholder="Search by profile, setting, artifact etc..."
        allowClear
        onSearch={() => {}}
        style={{ width: 500 }}
      />

      <div className="flex items-center justify-center space-x-4">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Button className="group flex h-3 w-5 items-center justify-center rounded-xl bg-white shadow-lg p-5 border-none hover:bg-secondary">
              <Badge dot={true} color="#2F667F">
                <BellOutlined className="text-primary group-hover:text-secondary" />
              </Badge>
            </Button>
          </a>
        </Dropdown>

        <Dropdown menu={{ items: messages }}>
          <a onClick={(e) => e.preventDefault()}>
            <Button className="group flex h-3 w-5 items-center justify-center rounded-xl bg-white shadow-lg p-5 border-none hover:bg-secondary">
              <Badge dot={true} color="#2F667F">
                <WechatWorkOutlined className="text-primary group-hover:text-secondary" />
              </Badge>
            </Button>
          </a>
        </Dropdown>

        <Dropdown menu={{ items: settings }}>
          <a onClick={(e) => e.preventDefault()}>
            <Button className="group flex h-3 w-5 items-center justify-center rounded-xl bg-white shadow-lg p-5 border-none hover:bg-secondary">
              <SettingOutlined className="text-primary group-hover:text-secondary" />
            </Button>
          </a>
        </Dropdown>

        <Dropdown menu={{ items: profiles }}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar src="http://res.cloudinary.com/dd7ozuzap/image/upload/v1711639809/iuxhbtkyfjn8dsah4hsa.jpg">
              P
            </Avatar>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default DashboardHeader;
