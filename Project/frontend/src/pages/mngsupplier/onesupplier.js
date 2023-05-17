import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Onesupplier() {
	const [supplier, setsupplier] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function handleSubmit() {
			try {
				const res = await axios.get(`http://localhost:8070/stock/getsupplier/${id}`);
				setsupplier(res.data);
			} catch (err) {
				alert(err);
			}
		}
		handleSubmit();
	}, [id]);

	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<div
				className="container"
				style={{
					margin: "auto",
					backgroundColor: "#99ccff",
					padding: "40px 40px 40px 20px",
					borderRadius: "5px",
					width: "700px",
					marginTop: "100px",
					textAlign: "center",
				}}
			>
				<h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "40px", color: "#333" }}>Supplier Details</h1>
				<form style={{ maxWidth: "400px", margin: "0 auto" }}>
					<div style={{ marginBottom: "20px" }}>
						<label style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>Supplier Name:</label>
						<input type="text" placeholder="Enter material name" value={supplier.Supplier_Name} style={inputStyle} />
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>Mobile No:</label>
						<input type="number" placeholder="Enter category" value={supplier.Mobile_No} style={inputStyle} />
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>Email:</label>
						<input type="email" placeholder="Enter price" value={supplier.Email} style={inputStyle} />
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>Address:</label>
						<input type="text" placeholder="Enter quantity" value={supplier.Address} style={inputStyle} />
					</div>

					<div style={{ marginBottom: "20px" }}>
						<label style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}>Description:</label>
						<textarea value={supplier.Description} style={textareaStyle}></textarea>
					</div>
				</form>
			</div>
		</div>
	);
}

// CSS styles
const inputStyle = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid #ccc",
	width: "100%",
	fontSize: "16px",
};

const textareaStyle = {
	padding: "10px",
	borderRadius: "5px",
	border: "1px solid #ccc",
	resize: "vertical",
	width: "100%",
	minHeight: "100px",
	fontSize: "16px",
};
