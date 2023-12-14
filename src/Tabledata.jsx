import React, { useState } from "react";
import {
	Container,
	TablePagination,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";

const rows = [
	["Frozen yoghurt", 159, 6.0, 24, 4.0],
	["Ice cream sandwich", 237, 9.0, 37, 4.3],
	["Eclair", 262, 16.0, 24, 6.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
	["Donut", 452, 25.0, 51, 4.9],
	["KitKat", 518, 26.0, 65, 7.0],
	["Cupcake", 305, 3.7, 67, 4.3],
	["Gingerbread", 356, 16.0, 49, 3.9],
	["Jelly bean", 375, 0.0, 94, 0.0],
	["Lollipop", 392, 0.2, 98, 0],
	["Honeycomb", 408, 3.2, 87, 6.5],
];

export default function Tabledata() {
	const [currentPage, setCurrentPage] = useState(0);
	const rowsPerPage = 10;
	const totalRows = rows.length;

	const startIndex = currentPage * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const visibleRows = rows.slice(startIndex, endIndex);

	const handleChangePage = (event, newPage) => {
		setCurrentPage(newPage);
	};
	return (
		<Container >
			<Table stickyHeader>
				<TableHead background="primary">
					<TableRow>
						{["Desert", "Calories", "Fat", "Carbs", "Protein"].map(
							(heading) => (
								<TableCell>{heading}</TableCell>
							)
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{visibleRows.map((row) => (
						<TableRow>
							{row.map((cell) => (
								<TableCell>{cell}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				component="div"
				count={totalRows}
				rowsPerPage={rowsPerPage}
				page={currentPage}
				onPageChange={handleChangePage}
			/>
		</Container>
	);
}
