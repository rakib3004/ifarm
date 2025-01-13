import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import { shops } from "../data/legacy/shops";
import Logo from "./common/Logo";
export const Sellers = () => {
  return (
    <div>
      <Logo></Logo>
      <h1 className="font-semibold text-center text-3xl my-12">List of Available Sellers</h1>
      <Table>
        <TableHeader>
        <TableRow>
            <TableHead>
              <div className="max-w-[250px]">Shop Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Owner Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[85px]">Phone Number</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Transaction Type</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Transaction No</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Email</div>
            </TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
          {shops.filter((item) => item.Type === "Seller").map((item) => (
            <TableRow key={item.PhoneNo}>
              <TableCell>
                <div className="max-w-[250px] truncate">{item.ShopName}</div>
              </TableCell>
              <TableCell>{item.OwnerName}</TableCell>
              <TableCell>{item.PhoneNo}</TableCell>
              <TableCell>{item.TransactionType}</TableCell>
              <TableCell>{item.TransactionNo}</TableCell>
              <TableCell>{item.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
