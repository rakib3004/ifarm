import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import {shops} from '../data/shops.js';
export const Buyers = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl my-12">List of Available Buyers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="max-w-[250px]">Shop Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Shop Id</div>
            </TableHead>
            <TableHead>
              <div className="w-[85px]">Total Products</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Total Business</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Shop Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Address</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shops.map((item) => (
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
