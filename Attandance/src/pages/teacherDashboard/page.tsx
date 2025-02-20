"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { QRCodeGenerator } from "@/components/qr-code-generator";
import { QRCodeScanner } from "@/components/qr-code-scanner";

export const TeacherDashboard = () => {
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Teacher Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="Class Overview" />
            <CardContent>
              <Typography>
                Current class: <strong>Math 101</strong>
              </Typography>
              <Typography>
                Students present: <strong>25/30</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="Upcoming Classes" />
            <CardContent>
              <List>
                <ListItem>Physics 202 - 11:30 AM</ListItem>
                <ListItem>Chemistry 301 - 2:00 PM</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="QR Code Actions" />
            <CardContent>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setShowQRGenerator(!showQRGenerator)}
                sx={{ mb: 2 }}
              >
                {showQRGenerator ? "Hide QR Generator" : "Generate QR Code"}
              </Button>
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={() => setShowQRScanner(!showQRScanner)}
              >
                {showQRScanner ? "Hide QR Scanner" : "Scan QR Code"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {showQRGenerator && (
        <Card sx={{ mt: 3 }}>
          <CardHeader title="Generate QR Code" />
          <CardContent>
            <QRCodeGenerator />
          </CardContent>
        </Card>
      )}

      {showQRScanner && (
        <Card sx={{ mt: 3 }}>
          <CardHeader title="Scan QR Code" />
          <CardContent>
            <QRCodeScanner />
          </CardContent>
        </Card>
      )}
    </div>
  );
};
