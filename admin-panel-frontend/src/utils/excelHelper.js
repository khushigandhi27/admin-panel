import * as XLSX from "xlsx";

// Convert Excel File to JSON
export const parseExcelFile = (file, callback) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const binaryStr = e.target.result;
    const workbook = XLSX.read(binaryStr, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(sheet);
    callback(parsedData);
  };

  reader.readAsBinaryString(file);
};
