import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import {products} from "../data/legacy/products.ts";
import Logo from "./common/Logo.tsx";
export const Products = () => {
  return (
    <div>
      <Logo></Logo>
      <h1 className="font-semibold text-center text-3xl my-12">List of Available Products</h1>
      <Table>
        <TableHeader>
        <TableRow>
            <TableHead>
              <div className="max-w-[250px]">Productt Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Product Id</div>
            </TableHead>
            <TableHead>
              <div className="w-[85px]">Price</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Transaction Type</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Shop Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Location</div>
            </TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="max-w-[250px] truncate">{item.productName}</div>
              </TableCell>
              <TableCell>{item.productId}</TableCell>
              <TableCell>{item.perUnitPrice}</TableCell>
              <TableCell>{item.totalCount}</TableCell>
              <TableCell>{item.shopName}</TableCell>
              <TableCell>{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
