import { PlusOutlined } from "@ant-design/icons";
import LayoutEl from "../shared/layout";
import { Button, Table, Tag, Divider } from "antd";
import GoogleMapReact from "google-map-react";

import Chart from "react-apexcharts";
import { FaLaptop, FaImage } from "react-icons/fa6";
import { TbDeviceIpadHorizontalCode } from "react-icons/tb";
import { LuCopyPlus } from "react-icons/lu";

const Dashboard = () => {
  // GOOGLE MAP
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  //radiaBar apexchart
  var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },

    plotOptions: {
      radialBar: {
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            offsetY: 1,
            color: "#0B3366",
            fontSize: "18px",
            show: true,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    colors: ["#0B3366"],
  };

  //PROGRESS BAR
  const prograssBar = [
    {
      name: "Projects",
      profit: "02/10",
      barColor: "bg-[#0B3366]",
      barWidth: "w-5/12",
    },
    {
      name: "Users",
      profit: "03/03",
      barColor: "bg-[#0B3366]",
      barWidth: "w-full",
    },
    {
      name: "Channels",
      profit: "10/10",
      barColor: "bg-[#0B3366]",
      barWidth: "w-full",
    },
    {
      name: "Divices",
      profit: "05/10",
      barColor: "bg-[#0B3366]",
      barWidth: "w-6/12",
    },
  ];

  //FOR TABLES
  const columns = [
    {
      title: <span className="text-[11px]">Device Name</span>,
      dataIndex: "name",
      // width: 150,
    },
    {
      title: <span className="text-[11px]">Status</span>,
      dataIndex: "age",
      // width: 150,
    },
    {
      title: <span className="text-[11px]">Last Response</span>,
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 01</span>,
      age: (
        <Tag className="text-[9px]" color="#009421">
          Online
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 02</span>,
      age: (
        <Tag color="#009421" className="text-[9px]">
          Online
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 02</span>,
      age: (
        <Tag color="#E40404" className="text-[9px]">
          Offline
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 02</span>,
      age: (
        <Tag color="#E40404" className="text-[9px]">
          Offline
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 02</span>,
      age: (
        <Tag color="#009421" className="text-[9px]">
          Online
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
    {
      key: "1",
      name: <span className="text-[11px]">Test Device 02</span>,
      age: (
        <Tag color="#009421" className="text-[9px]">
          Online
        </Tag>
      ),
      address: <span className="text-[11px]">Wed Apr 26 2023; 03:00:10</span>,
    },
  ];
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];

  return (
    <LayoutEl>
      <>
        <div className="flex justify-between pt-6 px-4">
          <h3 className="text-[20px]">Project</h3>
          <Button
            className="bg-[#0C66D6] text-white hover:!text-white"
            icon={<PlusOutlined />}
          >
            Add Project
          </Button>
        </div>
        <div className="p-4 space-y-6">
          <div className="grid md:grid-cols-5 bg-white border md:py-0 py-3 pl-6 md:pl-0">
            <h1 className="p-6">Adidas Mobile</h1>
            <div className="flex flex-col justify-center space-y-2">
              <h1 className="text-[#C6C6C6]">Campaigns</h1>
              <span>8</span>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h1 className="text-[#C6C6C6]">Channels</h1>
              <span>9/10</span>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h1 className="text-[#C6C6C6]">Last Edited by</h1>
              <span>Varun</span>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h1 className="text-[#C6C6C6]">Last Edited on</h1>
              <span>5 hours ago</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 md:w-full">
                <div className="bg-white border pb-3">
                  <h1 className="pt-4 pl-3 font-semibold">
                    General Information
                  </h1>
                  <div className="space-y-4 pt-2 w-full">
                    {prograssBar.map((prograss, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center gap-4 px-4 md:my-3">
                          <div className="w-4/12">
                            <span className="text-[12px] font-medium text-zinc-400">
                              {prograss.name}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 ">
                            <div
                              className={`h-3 rounded-full ${prograss.barColor} ${prograss.barWidth}`}
                            ></div>
                          </div>
                          <div>
                            <span className="text-[12px] font-medium text-zinc-400 ">
                              {prograss.profit}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border">
                  <h1 className="pt-4 pl-3 font-semibold">Live Statistics</h1>
                  <div className="flex px-4 justify-between">
                    <div className="flex flex-col justify-center">
                      <Chart
                        width={100}
                        options={options}
                        series={[15]}
                        type="radialBar"
                        height={140}
                      />
                      <Button
                        size="small"
                        type="text"
                        className="!text-[13px] border border-[#0C66D6] mx-3 flex items-center justify-center text-[#0C66D6]"
                      >
                        Info
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Chart
                        width={100}
                        options={options}
                        series={[27]}
                        type="radialBar"
                        height={140}
                      />
                      <Button
                        size="small"
                        type="text"
                        className="!text-[13px] border border-[#0C66D6] mx-3 flex items-center justify-center text-[#0C66D6]"
                      >
                        Warnings
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Chart
                        width={100}
                        options={options}
                        series={[1]}
                        type="radialBar"
                        height={140}
                      />
                      <Button
                        size="small"
                        type="text"
                        className="!text-[13px] border border-[#0C66D6] mx-3 flex items-center justify-center text-[#0C66D6]"
                      >
                        Errors
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white border w-full">
                  <h1 className="pt-4 pl-3 font-semibold">Device Status</h1>
                  <div className="h-44 overflow-auto">
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="p-2 font-normal text-[#545454] text-[11px]">
                              Device Name
                            </th>
                            <th className="p-2 font-normal text-[#545454] text-[11px]">
                              Status
                            </th>
                            <th className="p-2 font-normal text-[#545454] text-[11px]">
                              Las Response
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          {data.map((tdata, index) => (
                            <tr
                              key={index}
                              className="bg-white hover:bg-[#F6F6F6]"
                            >
                              <td className="p-1 text-[#545454]">
                                {tdata.name}
                              </td>
                              <td className="p-1">{tdata.age}</td>
                              <td className="p-1 text-[#545454]">
                                {tdata.address}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="bg-white border w-full">
                  <h1 className="pt-4 pl-3 font-semibold">Activity Logs</h1>
                  <div className="h-44 overflow-auto px-3">
                    <div className="flex justify-between my-2">
                      <div className="flex gap-3">
                        <FaLaptop className="mt-1 ml-2 text-[30px] text-[#015B5B]" />
                        <div>
                          <h1 className="text-[13px] text-[#545454]">Device</h1>
                          <p className="text-[11px] text-[#545454]">
                            Lorem ipsum, dolor sit amet elit. Facilis,
                            doloremque?
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] text-[#545454]">
                          15 March 2023 06:30:25 PM
                        </span>
                      </div>
                    </div>
                    <Divider className="m-0 p-0" />
                    <div className="flex justify-between my-2">
                      <div className="flex gap-3">
                        <TbDeviceIpadHorizontalCode className="mt-1 ml-2 text-[30px] text-[#73496F]" />
                        <div>
                          <h1 className="text-[13px] text-[#545454]">
                            Campaign
                          </h1>
                          <p className="text-[11px] text-[#545454]">
                            Lorem ipsum, dolor sit amet elit. Facilis,
                            doloremque?
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] text-[#545454]">
                          15 March 2023 06:30:25 PM
                        </span>
                      </div>
                    </div>
                    <Divider className="m-0 p-0" />
                    <div className="flex justify-between my-2">
                      <div className="flex gap-3">
                        <LuCopyPlus className="mt-1 ml-2 text-[30px] text-[#108181]" />
                        <div>
                          <h1 className="text-[13px] text-[#545454]">Zones</h1>
                          <p className="text-[11px] text-[#545454]">
                            Lorem ipsum, dolor sit amet elit. Facilis,
                            doloremque?
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] text-[#545454]">
                          15 March 2023 06:30:25 PM
                        </span>
                      </div>
                    </div>
                    <Divider className="m-0 p-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white border">
                <h1 className="pt-4 pl-3">Location - Decices</h1>
                <div className="md:w-full h-60">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyDYh3T4PQJ-iJNd1r8ZPAgYmfM9iex4-CM",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  />
                </div>
              </div>
              <div className="bg-white border w-full">
                <h1 className="pt-2 pl-3">Domail Quota</h1>
                <div className="flex justify-between gap-2">
                  <div className="flex items-center">
                    <Chart
                      width={100}
                      options={options}
                      series={[60]}
                      type="radialBar"
                      height={130}
                    />
                    <div>
                      <h1 className="text-[#909090] text-[11px]">Data Usage</h1>
                      <span className="text-[13px] font-semibold">
                        60.33gb/100gb
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pr-4">
                    <div className="flex gap-3">
                      <div className="flex flex-col">
                        <span className="text-[#909090] text-[10px]">
                          Today
                        </span>
                        <span className="text-[11px] font-semibold">
                          30.00%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-green-500 text-[9px]">
                          Increase
                        </span>
                        <span className="text-zinc-500 text-[11px]">
                          +15.00
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col">
                        <span className="text-zinc-500 text-[10px]">Today</span>
                        <span className="text-[11px] font-semibold">
                          30.00%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#FF6A6A] text-[9px]">
                          Decrease
                        </span>
                        <span className="text-zinc-500 text-[11px]">
                          -15.00
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-2">
                      <div className="flex flex-col">
                        <span className="text-zinc-500 text-[10px]">Today</span>
                        <span className="text-[11px] font-semibold">
                          30.00%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#FF6A6A] text-[9px]">
                          Decrease
                        </span>
                        <span className="text-zinc-500 text-[11px]">
                          +20.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </LayoutEl>
  );
};

export default Dashboard;
