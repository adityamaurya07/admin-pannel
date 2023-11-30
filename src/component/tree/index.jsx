import LayoutEl from "../shared/layout";
import { Tree } from "antd";
import { useState } from "react";
import { GoFileDirectoryFill } from "react-icons/go";

const treeData = [
  {
    title: (
      <span className="text-zinc-500 flex items-center">
        <GoFileDirectoryFill
          className="text-[22px] text-[#2788F8]"
          style={{ marginRight: "5px" }}
        />
        DESIGNER TEMPLATES
      </span>
    ),
    key: "0-1",

    children: [
      {
        title: "AA",
        key: "AAA",
      },
      {
        title: "AAA",
        key: "A",
      },
    ],
  },
  {
    title: (
      <span className="text-zinc-500 flex items-center">
        <GoFileDirectoryFill
          className="text-[22px] text-[#2788F8]"
          style={{ marginRight: "5px" }}
        />
        QUADFOS
      </span>
    ),
    key: "0-2",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: (
      <span className="text-zinc-500 flex items-center">
        <GoFileDirectoryFill
          className="text-[22px] text-[#2788F8]"
          style={{ marginRight: "5px" }}
        />
        FutureIk
      </span>
    ),
    key: "0-0",
    children: [
      {
        title: (
          <span className="text-zinc-500 flex items-center">
            <GoFileDirectoryFill
              className="text-[22px] text-[#2788F8]"
              style={{ marginRight: "5px" }}
            />
            MIDDLE EAST
          </span>
        ),
        key: "0-0-1",
        children: [
          {
            title: (
              <span className="text-zinc-500 flex items-center">
                <GoFileDirectoryFill
                  className="text-[22px] text-[#2788F8]"
                  style={{ marginRight: "5px" }}
                />
                UAE
              </span>
            ),
            key: "0-0-0-0",
            children: [
              {
                title: (
                  <span className="text-zinc-500 flex items-center">
                    <GoFileDirectoryFill
                      className="text-[22px] text-[#2788F8]"
                      style={{ marginRight: "5px" }}
                    />
                    DUBAI
                  </span>
                ),
                key: "0-0-0-2-2",
                children: [
                  {
                    title: (
                      <span className="text-zinc-500 flex items-center">
                        <GoFileDirectoryFill
                          className="text-[22px] text-[#2788F8]"
                          style={{ marginRight: "5px" }}
                        />
                        Dubai Mall Entrance 1600×800
                      </span>
                    ),
                    key: "1-1-1-4-4",
                  },
                  {
                    title: (
                      <span className="text-zinc-500 flex items-center">
                        <GoFileDirectoryFill
                          className="text-[22px] text-[#2788F8]"
                          style={{ marginRight: "5px" }}
                        />
                        Dubai Exit Screen 1200×468
                      </span>
                    ),
                    key: "1-1-1-5-5",
                  },
                ],
              },
            ],
          },
          {
            title: (
              <span className="text-zinc-500 flex items-center">
                <GoFileDirectoryFill
                  className="text-[22px] text-[#2788F8]"
                  style={{ marginRight: "5px" }}
                />
                SAUDI ARAIA
              </span>
            ),
            key: "0-0-2",
            children: [
              {
                title: "0-0-1-0",
                key: "0-0-0-1-1",
              },
              {
                title: "0-0-1-2",
                key: "0-0-1-1",
              },
              {
                title: "0-0-1-3",
                key: "0-0-1-2",
              },
            ],
          },
          {
            title: (
              <span className="text-zinc-500 flex items-center">
                <GoFileDirectoryFill
                  className="text-[22px] text-[#2788F8]"
                  style={{ marginRight: "5px" }}
                />
                Kuwait
              </span>
            ),
            key: "0-0-3",
            children: [
              {
                title: "0-0-4-0",
                key: "0-0-0-2-4",
              },
              {
                title: "0-0-1-2",
                key: "0-0-2-4",
              },
              {
                title: "0-0-1-3",
                key: "0-0-2-4",
              },
            ],
          },
        ],
      },
    ],
  },
];
const TreeEl = () => {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <LayoutEl>
      <div className="p-4">
        <h1 className="text-zinc-500">Name</h1>
        <Tree
          className="p-4"
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={treeData}
        />
      </div>
    </LayoutEl>
  );
};

export default TreeEl;
