import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

export const Sellers = () => {
  const tableData = [
    {
      id: "6515202626",
      productName: "Egg",
      productId: "10023E",
      perUnitPrice: "8",
      totalCount: "900",
      shopName: "Egg House",
      location: "Rajshahi",
    },

    {
      id: "6515202627",
      productName: "Milk",
      productId: "10021M",
      perUnitPrice: "85",
      totalCount: "200",
      shopName: "Aftabnaga Milk Co.",
      location: "Dhaka",
    },
    {
      id: "6515202628",
      productName: "Beaf",
      productId: "10007B",
      perUnitPrice: "700",
      totalCount: "67",
      shopName: "Northern Meat",
      location: "Gazipur",
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl my-12">List of Available Sellers</h1>
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
          {tableData.map((item) => (
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
