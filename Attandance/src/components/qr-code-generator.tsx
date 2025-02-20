"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button, TextField, Box } from "@mui/material";

export function QRCodeGenerator() {
  const [qrData, setQRData] = useState("");
  const [generatedQR, setGeneratedQR] = useState("");

  const handleGenerate = () => {
    setGeneratedQR(qrData);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <TextField
        label="QR Code Data"
        variant="outlined"
        fullWidth
        value={qrData}
        onChange={(e) => setQRData(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate QR Code
      </Button>
      {generatedQR && (
        <Box mt={2}>
          <QRCodeSVG value={generatedQR} size={200} />
        </Box>
      )}
    </Box>
  );
}
