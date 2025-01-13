"use client";
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "keep-react";

import {
  ArrowsDownUp,
  Calendar,
  CloudArrowUp,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutlineVertical,
  Funnel,
  NavigationArrow,
  Plus,
  Spinner,
} from "phosphor-react";
import { tableData } from "./TrackDeliveryData";
import Logo from "../common/Logo";

export const TrackDelivery = () => {
  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
        <Logo></Logo>
        <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">
              My Orders Status
            </h2>
            <Badge color="secondary">200 Orders</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Modal>
              <ModalAction asChild>
                <Button variant="outline" className="gap-1.5">
                  <Plus className="size-4 fill-metal-900 dark:fill-white" />
                  Add Order
                </Button>
              </ModalAction>
              <ModalContent>
                <ModalHeader className="mb-6 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
                    <CloudArrowUp size={28} />
                  </div>
                  <div className="space-y-1">
                    <ModalTitle>Update Modal Status</ModalTitle>
                    <ModalDescription>
                      Your document has unsaved changes. Discard or save them as
                      a new page to continue.
                    </ModalDescription>
                  </div>
                </ModalHeader>
                <ModalFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Button variant="outline" className="gap-1.5">
              <Funnel className="size-4 fill-metal-900 dark:fill-white" />
              Filter Order
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <ArrowsDownUp className="size-4 fill-metal-900 dark:fill-white" />
              Type
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <Calendar className="size-4 fill-metal-900 dark:fill-white" />
              Date
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center gap-1.5">
              <Spinner className="size-4 fill-metal-900 dark:fill-white" />
              Status
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center gap-1.5">
              <DotsNine className="size-4 fill-metal-900 dark:fill-white" />
              Quant.
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[100px] items-center gap-1.5">
              <CurrencyDollar className="size-4 fill-metal-900 dark:fill-white" />
              Total Price
            </p>
          </TableHead>
          <TableHead>
            <p className="flex w-[120px] items-center gap-1.5">
              <NavigationArrow className="size-4 fill-metal-900 dark:fill-white" />
              Location
            </p>
          </TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>
              <div>
                <p>{item.date.day}</p>
                <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">
                  {item.date.time}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                className="text-body-4"
                color={
                  item.status === "Delivered"
                    ? "success"
                    : item.status === "In Transit"
                    ? "error"
                    : "warning"
                }
              >
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="text-center">{item.quant}</TableCell>
            <TableCell className="text-center">
              {item.price.toLocaleString()}
            </TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>
              <Dropdown>
                <DropdownAction asChild>
                  <button>
                    <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                  </button>
                </DropdownAction>
                <DropdownContent className="w-[200px] border border-metal-100 p-3 dark:border-metal-800">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Move</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
