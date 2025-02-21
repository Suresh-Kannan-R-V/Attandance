"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Alert, Box, Typography } from "@mui/material";

export function QRCodeScanner() {
  const [data, setData] = useState("No result");
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    scanner.render(
      (decodedText) => {
        setData(decodedText);
        scanner.clear(); // Stop scanning after a successful scan
      },
      (errorMessage) => {
        console.log(errorMessage); // Handle scan errors
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Box id="qr-reader" width="100%" maxWidth={400} ref={scannerRef} />
      
      <Alert severity="info">
        <Typography fontWeight="bold">Scanned Result</Typography>
        <Typography>{data}</Typography>
      </Alert>
    </Box>
  );
}
