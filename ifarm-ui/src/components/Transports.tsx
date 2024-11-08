import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";
import {transports} from '../data/transports.ts'

export const Transports = () => {

  return (
    <div>
      <h1 className="font-semibold text-center text-3xl my-12">List of Available Transports</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="max-w-[250px]">Transport Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Transport Id</div>
            </TableHead>
            <TableHead>
              <div className="w-[85px]">Transport Type</div>
            </TableHead>
            <TableHead>
              <div className="w-[90px]">Driver Name</div>
            </TableHead>
            <TableHead>
              <div className="w-[80px]">Transport Location</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transports.map((item) => (
            <TableRow key={item.transport_id}>
              <TableCell>
                <div className="max-w-[250px] truncate">{item.transport_name}</div>
              </TableCell>
              <TableCell>{item.transport_id}</TableCell>
              <TableCell>{item.transport_type}</TableCell>
              <TableCell>{item.driver_name}</TableCell>
              <TableCell>{item.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
