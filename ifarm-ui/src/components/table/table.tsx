
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'

export const TableComponent = () => {
  const tableData = [
    {
        id: '6515202626',
        fileName: 'Data.json',
        fileFormat: 'json',
        ratio: '4:3',
        resolution: '1920x1080',
        fileSize: '200MB',
        status: 'Uploaded'
    }, 

    {
        id: '6515202627',
        fileName: 'App.js',
        fileFormat: 'jsx',
        ratio: '4:3',
        resolution: '1920x1080',
        fileSize: '150MB',
        status: 'Uploaded'
    },
    {
        id: '6515202628',
        fileName: 'index.html',
        fileFormat: 'html',
        ratio: '4:3',
        resolution: '1920x1080',
        fileSize: '100MB',
        status: 'Uploaded'
    }
  ]
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="max-w-[250px]">File Name</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">File Format</div>
          </TableHead>
          <TableHead>
            <div className="w-[85px]">Aspect Ratio</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Resolution</div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">File Size</div>
          </TableHead>
          <TableHead>
            <div className="w-[80px]">Status</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="max-w-[250px] truncate">{item.fileName}</div>
            </TableCell>
            <TableCell>{item.fileFormat}</TableCell>
            <TableCell>{item.ratio}</TableCell>
            <TableCell>{item.resolution}</TableCell>
            <TableCell>{item.fileSize}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
